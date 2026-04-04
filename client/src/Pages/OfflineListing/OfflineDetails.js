import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowDown, ChevronLeft, MessageCircle, Share2 } from 'lucide-react';
import { offlineListings } from './offlineListingData';

function OfflineDetails() {
    const navigate = useNavigate();
    const { listingId } = useParams();
    const normalizedListingId = decodeURIComponent(listingId || '');
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [showDesktopPopup, setShowDesktopPopup] = useState(false);

    const listing = useMemo(() => {
        return offlineListings.find((item) => String(item.id) === String(normalizedListingId));
    }, [normalizedListingId]);

    const images = listing?.gallery?.length ? listing.gallery : listing ? [listing.image] : [];

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveImageIndex(0);
    }, [normalizedListingId]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 769px)');

        const handleScreenChange = (event) => {
            setShowDesktopPopup(event.matches);
        };

        setShowDesktopPopup(mediaQuery.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleScreenChange);
        } else {
            mediaQuery.addListener(handleScreenChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleScreenChange);
            } else {
                mediaQuery.removeListener(handleScreenChange);
            }
        };
    }, []);

    const handleShare = async () => {
        if (!listing) {
            return;
        }

        const shareData = {
            title: 'Hot Deals',
            text: listing.title,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                // Ignore canceled share action.
            }
            return;
        }

        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(window.location.href);
            } catch (error) {
                // Ignore clipboard errors.
            }
        }
    };

    const whatsappTextParts = [`I am interested in this deal: ${listing.title}`];
    if (listing.referenceNo) {
        whatsappTextParts.push(`Reference No: ${listing.referenceNo}`);
    }
    const whatsappMessage = encodeURIComponent(whatsappTextParts.join('\n'));
    const whatsappHref = listing.mobileNumber
        ? `https://wa.me/${listing.mobileNumber}?text=${whatsappMessage}`
        : `https://wa.me/?text=${whatsappMessage}`;

    if (!listing) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f4f5f7] px-4">
                <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 text-center shadow-[0_10px_24px_rgba(20,38,53,0.15)]">
                    <h2 className="text-xl font-semibold text-[#243445]">Listing Not Found</h2>
                    <button
                        type="button"
                        onClick={() => navigate('/offline-listing')}
                        className="mt-4 rounded-[10px] bg-[#1d85d6] px-4 py-2 text-sm font-semibold text-white"
                    >
                        Back to Listings
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f4f5f7] text-[#1f2937]">
            {showDesktopPopup && (
                <div className="fixed inset-0 z-[99] flex items-center justify-center bg-[rgba(15,23,35,0.6)] px-6" role="dialog" aria-modal="true" aria-label="Mobile recommendation">
                    <div className="w-full max-w-[420px] rounded-2xl bg-white px-6 py-7 text-center shadow-[0_14px_30px_rgba(20,38,53,0.2)]">
                        <h2 className="mb-2 text-[26px] font-semibold text-[#243445]">Better on Mobile</h2>
                        <p className="text-base leading-[1.4] text-[#536172]">Please open this page on your mobile for a better experience.</p>
                        <button
                            type="button"
                            onClick={() => setShowDesktopPopup(false)}
                            className="mt-5 rounded-[10px] bg-[#1d85d6] px-4 py-3 text-[15px] font-semibold text-white"
                        >
                            Continue on Desktop
                        </button>
                    </div>
                </div>
            )}

            <div className="mx-auto w-full max-w-[560px] pb-7">
                <header className="flex h-[68px] items-center justify-between border-b border-[#d6dbe1] bg-[#f9f9fa] px-3">
                    <button type="button" onClick={() => navigate('/offline-listing')} className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#5f6d7c]" aria-label="Back">
                        <ChevronLeft size={22} />
                    </button>
                    <h1 className="m-0 text-[17px] font-medium uppercase tracking-[0.6px] text-[#1d85d6] sm:text-[20px]">Hot Deals</h1>
                    <button type="button" className="flex h-6 w-7 flex-col justify-between bg-transparent p-0" aria-label="Filters">
                        <span className="h-1 w-full rounded bg-[#80858d]" />
                        <span className="h-1 w-[70%] self-end rounded bg-[#80858d]" />
                        <span className="h-1 w-[40%] self-end rounded bg-[#80858d]" />
                    </button>
                </header>

                <main className="px-2 pt-5">
                    <section className="rounded-[14px] bg-transparent">
                        <div className="overflow-hidden rounded-[14px] p-0">
                            <div className="relative overflow-hidden rounded-[12px]">
                                <img src={images[activeImageIndex]} alt={listing.title} className="block aspect-[16/9] w-full object-cover" />
                                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[rgba(0,0,0,0.35)] px-2 py-1">
                                    {images.map((item, index) => (
                                        <button
                                            key={`${item}-${index}`}
                                            type="button"
                                            onClick={() => setActiveImageIndex(index)}
                                            className={`h-2 w-2 rounded-full ${index === activeImageIndex ? 'bg-white' : 'bg-[rgba(255,255,255,0.5)]'}`}
                                            aria-label={`Show image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="px-1 pb-2 pt-3">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="rounded-r-[8px] bg-[#ff321d] px-3 py-1 text-[10px] font-bold uppercase text-white">Limited Time Offer</span>
                                    <span className="inline-flex items-center gap-1 rounded-[999px] bg-[#45cd32] px-3 py-1 text-white">
                                        <small className="text-[10px] font-semibold">Price Reduced</small>
                                        <strong className="inline-flex items-center text-[24px] font-semibold leading-none">
                                            {listing.discountPercent || 0}%
                                            <ArrowDown size={18} strokeWidth={3} />
                                        </strong>
                                    </span>
                                </div>

                                <div className="mt-2 flex items-center justify-between gap-2">
                                    <p className="m-0 text-sm font-medium text-[#7f8791] line-through sm:text-base">{listing.oldPrice}</p>
                                    <p className="m-0 font-bold text-[#243445]" style={{ fontSize: '24px' }}>
                                        {listing.newPrice}
                                    </p>
                                </div>

                                <p className="mt-3 text-sm font-semibold leading-[1.35] text-[#596676]">{listing.title}</p>
                                {listing.referenceNo && (
                                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.4px] text-[#8b95a1]">
                                        Ref: {listing.referenceNo}
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="px-1 pb-7 pt-6">
                        <h2 className="m-0 text-[28px] font-semibold text-[#25384b]">Description</h2>
                        <p className="mt-3 text-[20px] font-medium leading-[1.35] text-[#2d3f53]">{listing.descriptionTitle}</p>
                        <div className="mt-4 space-y-4">
                            {listing.descriptionParagraphs.map((paragraph) => (
                                <p key={paragraph} className="m-0 text-[16px] leading-[1.55] text-[#2f4359]">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>

                    <section className="grid grid-cols-2 gap-3 px-1">
                        <button
                            type="button"
                            onClick={handleShare}
                            className="flex h-[46px] items-center justify-center gap-2 rounded-full bg-white text-[14px] font-semibold uppercase tracking-[0.3px] text-[#2b3f53] shadow-[0_8px_18px_rgba(20,38,53,0.12)]"
                        >
                            <Share2 size={16} className="text-[#1d85d6]" />
                            Share
                        </button>
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-[46px] items-center justify-center gap-2 rounded-full bg-white text-[14px] font-semibold uppercase tracking-[0.3px] text-[#2b3f53] shadow-[0_8px_18px_rgba(20,38,53,0.12)]"
                        >
                            <MessageCircle size={16} className="text-[#21b44c]" />
                            WhatsApp
                        </a>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default OfflineDetails;
