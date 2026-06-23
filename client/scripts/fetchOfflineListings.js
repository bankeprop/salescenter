/* eslint-disable no-console */
const fs = require('fs/promises');
const path = require('path');
const axios = require('axios');

const DEFAULT_WEBHOOK_URL =
    'https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMXZ7u-02jOaJJfbcZCuSQKOzwxboc63oNtxUnojbzN5_-rQ7hjcokrYfCEV33ZnPpSCPPYR2o71Bnvd886lJbp-3UtS84A0423nvTFsvkjrWCwJTU4PITa_KWGfW1musl07ATgsR0ZOxHmPEYLQCP3yYQLNHM6cDUn1C8jFf7mdGu_fYj-bBesHH6M5NEQgLVJQ37Ct7yhYD_PaxUWzm1FWnsqXuZ4k0YCJwLWt_zj4ox_u3IkDRmCpUF94xEquwDw_Z74BipjGDWRFSoGnuBNClYZEP1wzh8HD2HIJ&lib=MYONLsLBDvMZdJe0GBZcbnt57JL4I04AC';

const WEBHOOK_URL = process.env.OFFLINE_LISTING_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
const OUTPUT_PATH = path.resolve(__dirname, '../src/Pages/OfflineListing/Offlinelisting.json');

const sanitizeText = (value) => {
    const text = String(value || '');
    const normalized = text
        .replace(/â€™/g, "'")
        .replace(/â€œ|â€/g, '"')
        .replace(/â€”/g, '-')
        .replace(/â€“/g, '-')
        .replace(/Ã©/g, 'e')
        .replace(/\s+/g, ' ')
        .trim();

    return normalized.normalize('NFKD').replace(/[^\x20-\x7E]/g, '');
};

const parseImageUrls = (rawImageValue) => {
    if (typeof rawImageValue !== 'string') {
        return [];
    }

    return rawImageValue
        .split(/\r?\n/)
        .map((url) => url.trim())
        .filter(Boolean);
};

const formatPrice = (value, listingType) => {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue)) {
        return '';
    }

    const formatted = new Intl.NumberFormat('en-US').format(Math.round(numericValue));
    if (String(listingType || '').toLowerCase() === 'rent') {
        return `AED ${formatted}/Year`;
    }

    return `AED ${formatted}`;
};

const parseDescription = (rawDescription, title) => {
    const text = String(rawDescription || '').replace(/\r/g, '');
    const blocks = text
        .split(/\n\s*\n/)
        .map((block) => block.trim())
        .filter(Boolean)
        .map((block) => sanitizeText(block.replace(/\n+/g, ' ')));

    if (blocks.length === 0) {
        return {
            descriptionTitle: title || 'Description',
            descriptionParagraphs: []
        };
    }

    const firstBlock = blocks[0];
    const isFirstBlockTitle =
        firstBlock.toLowerCase() === String(title || '').trim().toLowerCase();
    const descriptionTitle = isFirstBlockTitle && blocks[1] ? blocks[1] : firstBlock;
    const descriptionParagraphs = blocks.filter(
        (block) => block !== descriptionTitle && block !== title
    );

    return {
        descriptionTitle,
        descriptionParagraphs
    };
};

const calculateDiscountPercent = (discountRate, oldPrice, newPrice) => {
    const discountAsRate = Number(discountRate);
    if (Number.isFinite(discountAsRate) && discountAsRate > 0) {
        return Math.round(discountAsRate * 100);
    }

    const oldValue = Number(oldPrice);
    const newValue = Number(newPrice);
    if (!Number.isFinite(oldValue) || !Number.isFinite(newValue) || oldValue <= 0) {
        return 0;
    }

    return Math.max(0, Math.round(((oldValue - newValue) / oldValue) * 100));
};

const normalizeMobileNumber = (value) => {
    const digitsOnly = String(value || '').replace(/\D/g, '');
    return digitsOnly;
};

const normalizeListing = (item, index) => {
    const listingType = String(item?.ListingType || '').trim() || 'Buy';
    const title = sanitizeText(item?.Title) || 'Untitled Listing';
    const images = parseImageUrls(item?.Image);
    const location = sanitizeText(item?.Location);
    const { descriptionTitle, descriptionParagraphs } = parseDescription(
        item?.Description,
        title
    );

    return {
        id: String(item?.ReferenceNo || index + 1),
        referenceNo: sanitizeText(item?.ReferenceNo),
        image: images[0] || '',
        gallery: images,
        oldPrice: formatPrice(item?.OldPrice, listingType),
        newPrice: formatPrice(item?.NewPrice, listingType),
        discountPercent: calculateDiscountPercent(
            item?.DiscountRate,
            item?.OldPrice,
            item?.NewPrice
        ),
        title,
        location,
        propertyType: sanitizeText(item?.PropertyType) || 'Residential',
        listingType: sanitizeText(listingType),
        mobileNumber: normalizeMobileNumber(item?.MobileNumber),
        descriptionTitle,
        descriptionParagraphs: descriptionParagraphs.map(sanitizeText)
    };
};

const run = async () => {
    const response = await axios.get(WEBHOOK_URL, {
        timeout: 30000,
        responseType: 'json'
    });

    const payload = response?.data;
    const items = Array.isArray(payload?.data) ? payload.data : [];

    const listings = items.map(normalizeListing);
    const locationOptions = Array.from(
        new Set(listings.map((listing) => listing.location).filter(Boolean))
    );

    const output = {
        status: String(payload?.status || 'success'),
        generatedAt: new Date().toISOString(),
        source: WEBHOOK_URL,
        count: listings.length,
        locationOptions,
        listings
    };

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

    console.log(`[offline-listing] synced ${listings.length} records to ${OUTPUT_PATH}`);
};

run().catch((error) => {
    console.error('[offline-listing] sync failed');
    console.error(error?.message || error);
    process.exit(1);
});
