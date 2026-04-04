import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowDown, ChevronDown, X } from 'lucide-react';
import { locationOptions, offlineListings } from './offlineListingData';

const sortOptions = [
    { value: 'priceLowToHigh', label: 'Price Low to High' },
    { value: 'priceHighToLow', label: 'Price High to Low' },
    { value: 'discountHighToLow', label: 'Discount High to Low' },
    { value: 'discountLowToHigh', label: 'Discount Low to High' }
];
const validSortValues = sortOptions.map((option) => option.value);

const getPriceValue = (price) => {
    const numeric = Number(String(price || '').replace(/[^0-9.]/g, ''));
    return Number.isFinite(numeric) ? numeric : 0;
};

function OfflineHome() {
    const routeLocation = useLocation();
    const navigate = useNavigate();
    const urlParams = useMemo(
        () => new URLSearchParams(routeLocation.search),
        [routeLocation.search]
    );

    const allLocationOptions = useMemo(() => {
        const fromListings = offlineListings
            .map((listing) => String(listing.location || '').trim())
            .filter(Boolean);
        return Array.from(new Set([...locationOptions, ...fromListings]));
    }, []);

    const propertyTypeOptions = useMemo(() => {
        const fromListings = offlineListings
            .map((listing) => String(listing.propertyType || '').trim())
            .filter(Boolean);
        return ['All', ...Array.from(new Set(fromListings)).filter((item) => item !== 'All')];
    }, []);

    const listingTypeOptions = useMemo(() => {
        const fromListings = offlineListings
            .map((listing) => String(listing.listingType || '').trim())
            .filter(Boolean);
        return ['All', ...Array.from(new Set(fromListings)).filter((item) => item !== 'All')];
    }, []);

    const getSafeLocation = useCallback((value) => {
        const normalized = String(value || '').trim();
        if (!normalized || normalized === 'All Locations') {
            return 'All Locations';
        }
        return allLocationOptions.includes(normalized) ? normalized : 'All Locations';
    }, [allLocationOptions]);

    const getSafePropertyType = useCallback((value) => {
        const normalized = String(value || '').trim();
        return propertyTypeOptions.includes(normalized) ? normalized : 'All';
    }, [propertyTypeOptions]);
    const getSafeListingType = useCallback((value) => {
        const normalized = String(value || '').trim();
        return listingTypeOptions.includes(normalized) ? normalized : 'All';
    }, [listingTypeOptions]);
    const getSafeSortBy = (value) => (validSortValues.includes(value) ? value : '');

    const [showDesktopPopup, setShowDesktopPopup] = useState(false);
    const [location, setLocation] = useState(() =>
        getSafeLocation(urlParams.get('location') || 'All Locations')
    );
    const [propertyType, setPropertyType] = useState(() =>
        getSafePropertyType(urlParams.get('propertyType') || 'All')
    );
    const [listingType, setListingType] = useState(() =>
        getSafeListingType(urlParams.get('listingType') || 'All')
    );
    const [showSortSidebar, setShowSortSidebar] = useState(false);
    const [sortBy, setSortBy] = useState(() => getSafeSortBy(urlParams.get('sort') || ''));

    const syncUrlParams = useCallback(
        (nextLocation, nextPropertyType, nextListingType, nextSortBy) => {
            const nextParams = new URLSearchParams();

            if (nextLocation !== 'All Locations') {
                nextParams.set('location', nextLocation);
            }
            if (nextPropertyType !== 'All') {
                nextParams.set('propertyType', nextPropertyType);
            }
            if (nextListingType !== 'All') {
                nextParams.set('listingType', nextListingType);
            }
            if (nextSortBy) {
                nextParams.set('sort', nextSortBy);
            }

            const nextSearch = nextParams.toString();
            const currentSearch = routeLocation.search.startsWith('?')
                ? routeLocation.search.slice(1)
                : routeLocation.search;

            if (nextSearch !== currentSearch) {
                navigate(
                    {
                        pathname: '/offline-listing',
                        search: nextSearch ? `?${nextSearch}` : ''
                    },
                    { replace: true }
                );
            }
        },
        [navigate, routeLocation.search]
    );

    const handleLocationChange = useCallback(
        (event) => {
            const value = event.target.value;
            setLocation(value);
            syncUrlParams(value, propertyType, listingType, sortBy);
        },
        [propertyType, listingType, sortBy, syncUrlParams]
    );

    const handlePropertyTypeChange = useCallback(
        (event) => {
            const value = event.target.value;
            setPropertyType(value);
            syncUrlParams(location, value, listingType, sortBy);
        },
        [location, listingType, sortBy, syncUrlParams]
    );

    const handleListingTypeChange = useCallback(
        (event) => {
            const value = event.target.value;
            setListingType(value);
            syncUrlParams(location, propertyType, value, sortBy);
        },
        [location, propertyType, sortBy, syncUrlParams]
    );

    const handleSortChange = useCallback(
        (value) => {
            setSortBy(value);
            setShowSortSidebar(false);
            syncUrlParams(location, propertyType, listingType, value);
        },
        [location, propertyType, listingType, syncUrlParams]
    );

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

    useEffect(() => {
        document.body.style.overflow = showSortSidebar ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [showSortSidebar]);

    useEffect(() => {
        const urlLocation = getSafeLocation(urlParams.get('location') || 'All Locations');
        const urlPropertyType = getSafePropertyType(urlParams.get('propertyType') || 'All');
        const urlListingType = getSafeListingType(urlParams.get('listingType') || 'All');
        const urlSortBy = getSafeSortBy(urlParams.get('sort') || '');

        setLocation((previous) => (previous === urlLocation ? previous : urlLocation));
        setPropertyType((previous) =>
            previous === urlPropertyType ? previous : urlPropertyType
        );
        setListingType((previous) =>
            previous === urlListingType ? previous : urlListingType
        );
        setSortBy((previous) => (previous === urlSortBy ? previous : urlSortBy));
    }, [urlParams, getSafeLocation, getSafePropertyType, getSafeListingType]);

    const filteredListings = useMemo(() => {
        const filtered = offlineListings.filter((listing) => {
            const matchLocation = location === 'All Locations' || listing.location === location;
            const matchPropertyType = propertyType === 'All' || listing.propertyType === propertyType;
            const matchListingType = listingType === 'All' || listing.listingType === listingType;

            return matchLocation && matchPropertyType && matchListingType;
        });

        const sorted = [...filtered];

        if (sortBy === 'priceLowToHigh') {
            sorted.sort((a, b) => getPriceValue(a.newPrice) - getPriceValue(b.newPrice));
        } else if (sortBy === 'priceHighToLow') {
            sorted.sort((a, b) => getPriceValue(b.newPrice) - getPriceValue(a.newPrice));
        } else if (sortBy === 'discountHighToLow') {
            sorted.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
        } else if (sortBy === 'discountLowToHigh') {
            sorted.sort((a, b) => (a.discountPercent || 0) - (b.discountPercent || 0));
        }

        return sorted;
    }, [location, propertyType, listingType, sortBy]);

    return (
        <div className="min-h-screen bg-[#f4f5f7] text-[#2f3f4f]">
            {showSortSidebar && (
                <button
                    type="button"
                    aria-label="Close filters"
                    className="fixed inset-0 z-30 bg-[rgba(15,23,35,0.45)]"
                    onClick={() => setShowSortSidebar(false)}
                />
            )}

            <aside
                id="offline-sort-sidebar"
                className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-[#d5dae0] bg-white transition-transform duration-300 ${showSortSidebar ? 'translate-x-0' : '-translate-x-full'}`}
                aria-label="Sort sidebar"
            >
                <div className="flex h-full flex-col px-3 py-4">
                    <div className="mb-3 flex items-center justify-between border-b border-[#e2e8f0] pb-3">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.5px] text-[#1d85d6]">Sort Filters</h2>
                        <button
                            type="button"
                            onClick={() => setShowSortSidebar(false)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#708090] hover:bg-[#f1f5f9]"
                            aria-label="Close sidebar"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <ul className="space-y-2">
                        {sortOptions.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    onClick={() => handleSortChange(option.value)}
                                    className={`w-full rounded-[10px] px-3 py-2 text-left text-[14px] ${sortBy === option.value ? 'bg-[#eef7fd] font-semibold text-[#1d85d6]' : 'text-[#425264] hover:bg-[#f6f8fb]'}`}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

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

            <div className="mx-auto w-full max-w-[560px] pb-6">
                <header className="flex h-[68px] items-center justify-between border-b border-[#d6dbe1] bg-[#f9f9fa] px-3">
                    <h1 className="m-0 text-[17px] font-medium uppercase tracking-[0.6px] text-[#1d85d6] sm:text-[20px]">
                        Below Market Property Deals
                    </h1>
                    <button
                        type="button"
                        onClick={() => setShowSortSidebar(true)}
                        className="flex h-6 w-7 flex-col justify-between bg-transparent p-0"
                        aria-label="Open filters"
                        aria-controls="offline-sort-sidebar"
                    >
                        <span className="h-1 w-full rounded bg-[#80858d]" />
                        <span className="h-1 w-[70%] self-end rounded bg-[#80858d]" />
                        <span className="h-1 w-[40%] self-end rounded bg-[#80858d]" />
                    </button>
                </header>

                <section className="px-2 pb-3 pt-[22px]" aria-label="Property filters">
                    <div className="relative mb-3">
                        <select
                            value={location}
                            onChange={handleLocationChange}
                            className="min-h-10 w-full appearance-none rounded-[10px] border border-[#d6dbe1] bg-[#f9f9fa] px-[14px] pr-9 text-[15px] font-medium text-[#9ca3ad] sm:min-h-[44px] sm:text-[17px]"
                        >
                            <option value="All Locations">All Locations</option>
                            {allLocationOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <ChevronDown size={18} className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#c0c5cc]" />
                    </div>
                    <div className="flex gap-3">
                        <div className="relative mb-3 flex-1">
                            <select
                                value={propertyType}
                                onChange={handlePropertyTypeChange}
                                className="min-h-10 w-full appearance-none rounded-[10px] border border-[#d6dbe1] bg-[#f9f9fa] px-[14px] pr-9 text-[15px] font-medium text-[#9ca3ad] sm:min-h-[44px] sm:text-[17px]"
                            >
                                {propertyTypeOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option === 'All' ? 'All Properties' : option}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={18} className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#c0c5cc]" />
                        </div>
                        <div className="relative mb-3 flex-1">
                            <select
                                value={listingType}
                                onChange={handleListingTypeChange}
                                className="min-h-10 w-full appearance-none rounded-[10px] border border-[#d6dbe1] bg-[#f9f9fa] px-[14px] pr-9 text-[15px] font-medium text-[#9ca3ad] sm:min-h-[44px] sm:text-[17px]"
                            >
                                {listingTypeOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option === 'All' ? 'All Projects' : option}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={18} className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#c0c5cc]" />
                        </div>
                    </div>
                </section>

                <section className="grid gap-[18px] px-2" aria-label="Listings">
                    {filteredListings.length === 0 && (
                        <div className="rounded-[14px] border border-[#d5dae0] bg-white px-4 py-6 text-center text-sm font-medium text-[#6f7e8e]">
                            No listings available for the selected filters.
                        </div>
                    )}

                    {filteredListings.map((listing) => (
                        <article key={listing.id} className="overflow-hidden rounded-[14px] border border-[#d5dae0] bg-white shadow-[0_8px_18px_rgba(20,38,53,0.08)]">
                            <div className="relative mx-[6px] mb-[4px] mt-[6px] overflow-hidden rounded-[12px]">
                                <img src={listing.image} alt={listing.title} className="block aspect-[16/9] w-full object-cover" />
                                {/* <span className="absolute left-[-8px] top-[10px] rounded-r-[8px] bg-[#ff321d] px-3 py-2 text-xs font-bold uppercase text-white">
                                    Limited Time Offer
                                </span> */}
                                <span className="absolute right-[-8px] top-[10px] rounded-l-[8px] bg-[#45cd32] px-[14px] py-2 leading-[1.1] text-white">
                                    <small className="block text-[11px]">Price Reduced</small>
                                    <strong className="flex items-center gap-1 text-[24px] font-medium tracking-[-0.8px] sm:text-[40px]">
                                        <span>{listing.discountPercent || 0}%</span>
                                        <ArrowDown size={24} strokeWidth={3} />
                                    </strong>
                                </span>
                            </div>

                            <div className="px-[10px] pb-4 pt-2">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="m-0 text-sm font-medium text-[#7f8791] line-through sm:text-base">{listing.oldPrice}</p>
                                    <p className="m-0 font-bold text-[#243445]" style={{ fontSize: '24px' }}>
                                        {listing.newPrice}
                                    </p>
                                </div>
                                <div className="mt-[10px] flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                                    <p className="m-0 text-sm font-semibold leading-[1.35] text-[#596676] sm:max-w-[56%]">{listing.title}</p>
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/offline-listing/details/${encodeURIComponent(listing.id)}`)}
                                        className="h-[46px] w-full rounded-[11px] bg-[#79a7bb] px-[18px] text-[15px] font-bold uppercase text-white sm:w-auto sm:min-w-[180px]"
                                    >
                                        View Detail
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default OfflineHome;
