import offlineListingPayload from './Offlinelisting.json';

const rawListings = Array.isArray(offlineListingPayload?.listings)
    ? offlineListingPayload.listings
    : [];

export const offlineListings = rawListings.map((listing, index) => ({
    id: listing?.id ? String(listing.id) : String(index + 1),
    referenceNo: listing?.referenceNo ? String(listing.referenceNo) : '',
    image: listing?.image || '',
    gallery: Array.isArray(listing?.gallery) ? listing.gallery.filter(Boolean) : [],
    oldPrice: listing?.oldPrice || '',
    newPrice: listing?.newPrice || '',
    discountPercent: Number.isFinite(Number(listing?.discountPercent))
        ? Number(listing.discountPercent)
        : 0,
    mobileNumber: listing?.mobileNumber ? String(listing.mobileNumber) : '',
    title: listing?.title || 'Untitled Listing',
    location: listing?.location || '',
    propertyType: listing?.propertyType || 'Residential',
    listingType: listing?.listingType || 'Buy',
    descriptionTitle: listing?.descriptionTitle || listing?.title || 'Description',
    descriptionParagraphs: Array.isArray(listing?.descriptionParagraphs)
        ? listing.descriptionParagraphs
        : []
}));

const rawLocationOptions = Array.isArray(offlineListingPayload?.locationOptions)
    ? offlineListingPayload.locationOptions
    : [];

export const locationOptions =
    rawLocationOptions.length > 0
        ? rawLocationOptions
        : Array.from(new Set(offlineListings.map((listing) => listing.location).filter(Boolean)));
