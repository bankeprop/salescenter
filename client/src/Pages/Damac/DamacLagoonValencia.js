import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Logo from "../../Assests/Damac/Damac.png"
import ValenciaLogo from "../../Assests/Damac/Valencia.png"
import { setFavicon, resetFavicon } from "../../utils/favicon";
import DamacLagoon1 from "../../Assests/Damac/DamacLagoon1.jpg"
import DamacLagoon2 from "../../Assests/Damac/DamacLagoon2.jpg"
import DamacLagoon3 from "../../Assests/Damac/DamacLagoon3.jpg"
import DamacLagoon4 from "../../Assests/Damac/DamacLagoon4.jpg"
import DamacLagoon5 from "../../Assests/Damac/DamacLagoon5.jpg"
import DamacLagoon6 from "../../Assests/Damac/DamacLagoon6.jpg"
import DamacLagoon7 from "../../Assests/Damac/DamacLagoon7.jpeg"
import { motion } from "framer-motion";
import { Anchor, Bike, Droplets, Dumbbell, Sparkles, Trees, Umbrella, Waves } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PRIMARY_COLOR = "#494949";
// Soft vertical gradient that hints at waves without layered patterns
const waveBackground = {
    background:
        "linear-gradient(180deg, #c9f6ff 0%, #d7f8f3 28%, #e4f5ef 54%, #f1f1e8 78%, #f7eddf 100%)",
    color: PRIMARY_COLOR
};

export default function DamacIsland() {

    const navigate = useNavigate();
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const FOOTER_REVEAL_SCROLL = 40;

    useEffect(() => {
        document.title = "Damac Lagoon Valencia";
        setFavicon(Logo);

        return () => resetFavicon();
    }, []);

    const [country, setCountry] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const countryOptions = [
        { code: "AF", dial: "+93", name: "Afghanistan" },
        { code: "AL", dial: "+355", name: "Albania" },
        { code: "DZ", dial: "+213", name: "Algeria" },
        { code: "AS", dial: "+1684", name: "American Samoa" },
        { code: "AD", dial: "+376", name: "Andorra" },
        { code: "AO", dial: "+244", name: "Angola" },
        { code: "AI", dial: "+1264", name: "Anguilla" },
        { code: "AG", dial: "+1268", name: "Antigua and Barbuda" },
        { code: "AR", dial: "+54", name: "Argentina" },
        { code: "AM", dial: "+374", name: "Armenia" },
        { code: "AW", dial: "+297", name: "Aruba" },
        { code: "AU", dial: "+61", name: "Australia" },
        { code: "AT", dial: "+43", name: "Austria" },
        { code: "AZ", dial: "+994", name: "Azerbaijan" },
        { code: "BS", dial: "+1242", name: "Bahamas" },
        { code: "BH", dial: "+973", name: "Bahrain" },
        { code: "BD", dial: "+880", name: "Bangladesh" },
        { code: "BB", dial: "+1246", name: "Barbados" },
        { code: "BY", dial: "+375", name: "Belarus" },
        { code: "BE", dial: "+32", name: "Belgium" },
        { code: "BZ", dial: "+501", name: "Belize" },
        { code: "BJ", dial: "+229", name: "Benin" },
        { code: "BM", dial: "+1441", name: "Bermuda" },
        { code: "BT", dial: "+975", name: "Bhutan" },
        { code: "BO", dial: "+591", name: "Bolivia" },
        { code: "BA", dial: "+387", name: "Bosnia and Herzegovina" },
        { code: "BW", dial: "+267", name: "Botswana" },
        { code: "BR", dial: "+55", name: "Brazil" },
        { code: "IO", dial: "+246", name: "British Indian Ocean Territory" },
        { code: "VG", dial: "+1284", name: "British Virgin Islands" },
        { code: "BN", dial: "+673", name: "Brunei Darussalam" },
        { code: "BG", dial: "+359", name: "Bulgaria" },
        { code: "BF", dial: "+226", name: "Burkina Faso" },
        { code: "BI", dial: "+257", name: "Burundi" },
        { code: "KH", dial: "+855", name: "Cambodia" },
        { code: "CM", dial: "+237", name: "Cameroon" },
        { code: "CA", dial: "+1", name: "Canada" },
        { code: "CV", dial: "+238", name: "Cape Verde" },
        { code: "KY", dial: "+1345", name: "Cayman Islands" },
        { code: "CF", dial: "+236", name: "Central African Republic" },
        { code: "TD", dial: "+235", name: "Chad" },
        { code: "CL", dial: "+56", name: "Chile" },
        { code: "CN", dial: "+86", name: "China" },
        { code: "CX", dial: "+61", name: "Christmas Island" },
        { code: "CC", dial: "+61", name: "Cocos (Keeling) Islands" },
        { code: "CO", dial: "+57", name: "Colombia" },
        { code: "KM", dial: "+269", name: "Comoros" },
        { code: "CG", dial: "+242", name: "Congo" },
        { code: "CD", dial: "+243", name: "Congo, Democratic Republic of the" },
        { code: "CK", dial: "+682", name: "Cook Islands" },
        { code: "CR", dial: "+506", name: "Costa Rica" },
        { code: "CI", dial: "+225", name: "Cote d'Ivoire" },
        { code: "HR", dial: "+385", name: "Croatia" },
        { code: "CU", dial: "+53", name: "Cuba" },
        { code: "CY", dial: "+357", name: "Cyprus" },
        { code: "CZ", dial: "+420", name: "Czech Republic" },
        { code: "DK", dial: "+45", name: "Denmark" },
        { code: "DJ", dial: "+253", name: "Djibouti" },
        { code: "DM", dial: "+1767", name: "Dominica" },
        { code: "DO", dial: "+1", name: "Dominican Republic" },
        { code: "EC", dial: "+593", name: "Ecuador" },
        { code: "EG", dial: "+20", name: "Egypt" },
        { code: "SV", dial: "+503", name: "El Salvador" },
        { code: "GQ", dial: "+240", name: "Equatorial Guinea" },
        { code: "ER", dial: "+291", name: "Eritrea" },
        { code: "EE", dial: "+372", name: "Estonia" },
        { code: "ET", dial: "+251", name: "Ethiopia" },
        { code: "FK", dial: "+500", name: "Falkland Islands" },
        { code: "FO", dial: "+298", name: "Faroe Islands" },
        { code: "FJ", dial: "+679", name: "Fiji" },
        { code: "FI", dial: "+358", name: "Finland" },
        { code: "FR", dial: "+33", name: "France" },
        { code: "GF", dial: "+594", name: "French Guiana" },
        { code: "PF", dial: "+689", name: "French Polynesia" },
        { code: "GA", dial: "+241", name: "Gabon" },
        { code: "GM", dial: "+220", name: "Gambia" },
        { code: "GE", dial: "+995", name: "Georgia" },
        { code: "DE", dial: "+49", name: "Germany" },
        { code: "GH", dial: "+233", name: "Ghana" },
        { code: "GI", dial: "+350", name: "Gibraltar" },
        { code: "GR", dial: "+30", name: "Greece" },
        { code: "GL", dial: "+299", name: "Greenland" },
        { code: "GD", dial: "+1473", name: "Grenada" },
        { code: "GP", dial: "+590", name: "Guadeloupe" },
        { code: "GU", dial: "+1671", name: "Guam" },
        { code: "GT", dial: "+502", name: "Guatemala" },
        { code: "GG", dial: "+44", name: "Guernsey" },
        { code: "GN", dial: "+224", name: "Guinea" },
        { code: "GW", dial: "+245", name: "Guinea-Bissau" },
        { code: "GY", dial: "+592", name: "Guyana" },
        { code: "HT", dial: "+509", name: "Haiti" },
        { code: "VA", dial: "+379", name: "Holy See (Vatican City)" },
        { code: "HN", dial: "+504", name: "Honduras" },
        { code: "HK", dial: "+852", name: "Hong Kong" },
        { code: "HU", dial: "+36", name: "Hungary" },
        { code: "IS", dial: "+354", name: "Iceland" },
        { code: "IN", dial: "+91", name: "India" },
        { code: "ID", dial: "+62", name: "Indonesia" },
        { code: "IR", dial: "+98", name: "Iran" },
        { code: "IQ", dial: "+964", name: "Iraq" },
        { code: "IE", dial: "+353", name: "Ireland" },
        { code: "IM", dial: "+44", name: "Isle of Man" },
        { code: "IL", dial: "+972", name: "Israel" },
        { code: "IT", dial: "+39", name: "Italy" },
        { code: "JM", dial: "+1876", name: "Jamaica" },
        { code: "JP", dial: "+81", name: "Japan" },
        { code: "JE", dial: "+44", name: "Jersey" },
        { code: "JO", dial: "+962", name: "Jordan" },
        { code: "KZ", dial: "+7", name: "Kazakhstan" },
        { code: "KE", dial: "+254", name: "Kenya" },
        { code: "KI", dial: "+686", name: "Kiribati" },
        { code: "KP", dial: "+850", name: "Korea, North" },
        { code: "KR", dial: "+82", name: "Korea, South" },
        { code: "KW", dial: "+965", name: "Kuwait" },
        { code: "KG", dial: "+996", name: "Kyrgyzstan" },
        { code: "LA", dial: "+856", name: "Laos" },
        { code: "LV", dial: "+371", name: "Latvia" },
        { code: "LB", dial: "+961", name: "Lebanon" },
        { code: "LS", dial: "+266", name: "Lesotho" },
        { code: "LR", dial: "+231", name: "Liberia" },
        { code: "LY", dial: "+218", name: "Libya" },
        { code: "LI", dial: "+423", name: "Liechtenstein" },
        { code: "LT", dial: "+370", name: "Lithuania" },
        { code: "LU", dial: "+352", name: "Luxembourg" },
        { code: "MO", dial: "+853", name: "Macao" },
        { code: "MK", dial: "+389", name: "Macedonia" },
        { code: "MG", dial: "+261", name: "Madagascar" },
        { code: "MW", dial: "+265", name: "Malawi" },
        { code: "MY", dial: "+60", name: "Malaysia" },
        { code: "MV", dial: "+960", name: "Maldives" },
        { code: "ML", dial: "+223", name: "Mali" },
        { code: "MT", dial: "+356", name: "Malta" },
        { code: "MH", dial: "+692", name: "Marshall Islands" },
        { code: "MQ", dial: "+596", name: "Martinique" },
        { code: "MR", dial: "+222", name: "Mauritania" },
        { code: "MU", dial: "+230", name: "Mauritius" },
        { code: "YT", dial: "+262", name: "Mayotte" },
        { code: "MX", dial: "+52", name: "Mexico" },
        { code: "FM", dial: "+691", name: "Micronesia" },
        { code: "MD", dial: "+373", name: "Moldova" },
        { code: "MC", dial: "+377", name: "Monaco" },
        { code: "MN", dial: "+976", name: "Mongolia" },
        { code: "ME", dial: "+382", name: "Montenegro" },
        { code: "MS", dial: "+1664", name: "Montserrat" },
        { code: "MA", dial: "+212", name: "Morocco" },
        { code: "MZ", dial: "+258", name: "Mozambique" },
        { code: "MM", dial: "+95", name: "Myanmar" },
        { code: "NA", dial: "+264", name: "Namibia" },
        { code: "NR", dial: "+674", name: "Nauru" },
        { code: "NP", dial: "+977", name: "Nepal" },
        { code: "NL", dial: "+31", name: "Netherlands" },
        { code: "NC", dial: "+687", name: "New Caledonia" },
        { code: "NZ", dial: "+64", name: "New Zealand" },
        { code: "NI", dial: "+505", name: "Nicaragua" },
        { code: "NE", dial: "+227", name: "Niger" },
        { code: "NG", dial: "+234", name: "Nigeria" },
        { code: "NU", dial: "+683", name: "Niue" },
        { code: "NF", dial: "+672", name: "Norfolk Island" },
        { code: "MP", dial: "+1670", name: "Northern Mariana Islands" },
        { code: "NO", dial: "+47", name: "Norway" },
        { code: "OM", dial: "+968", name: "Oman" },
        { code: "PK", dial: "+92", name: "Pakistan" },
        { code: "PW", dial: "+680", name: "Palau" },
        { code: "PS", dial: "+970", name: "Palestine" },
        { code: "PA", dial: "+507", name: "Panama" },
        { code: "PG", dial: "+675", name: "Papua New Guinea" },
        { code: "PY", dial: "+595", name: "Paraguay" },
        { code: "PE", dial: "+51", name: "Peru" },
        { code: "PH", dial: "+63", name: "Philippines" },
        { code: "PL", dial: "+48", name: "Poland" },
        { code: "PT", dial: "+351", name: "Portugal" },
        { code: "PR", dial: "+1", name: "Puerto Rico" },
        { code: "QA", dial: "+974", name: "Qatar" },
        { code: "RE", dial: "+262", name: "Reunion" },
        { code: "RO", dial: "+40", name: "Romania" },
        { code: "RU", dial: "+7", name: "Russia" },
        { code: "RW", dial: "+250", name: "Rwanda" },
        { code: "BL", dial: "+590", name: "Saint Barthelemy" },
        { code: "SH", dial: "+290", name: "Saint Helena" },
        { code: "KN", dial: "+1869", name: "Saint Kitts and Nevis" },
        { code: "LC", dial: "+1758", name: "Saint Lucia" },
        { code: "MF", dial: "+590", name: "Saint Martin" },
        { code: "PM", dial: "+508", name: "Saint Pierre and Miquelon" },
        { code: "VC", dial: "+1784", name: "Saint Vincent and the Grenadines" },
        { code: "WS", dial: "+685", name: "Samoa" },
        { code: "SM", dial: "+378", name: "San Marino" },
        { code: "ST", dial: "+239", name: "Sao Tome and Principe" },
        { code: "SA", dial: "+966", name: "Saudi Arabia" },
        { code: "SN", dial: "+221", name: "Senegal" },
        { code: "RS", dial: "+381", name: "Serbia" },
        { code: "SC", dial: "+248", name: "Seychelles" },
        { code: "SL", dial: "+232", name: "Sierra Leone" },
        { code: "SG", dial: "+65", name: "Singapore" },
        { code: "SX", dial: "+1721", name: "Sint Maarten" },
        { code: "SK", dial: "+421", name: "Slovakia" },
        { code: "SI", dial: "+386", name: "Slovenia" },
        { code: "SB", dial: "+677", name: "Solomon Islands" },
        { code: "SO", dial: "+252", name: "Somalia" },
        { code: "ZA", dial: "+27", name: "South Africa" },
        { code: "SS", dial: "+211", name: "South Sudan" },
        { code: "ES", dial: "+34", name: "Spain" },
        { code: "LK", dial: "+94", name: "Sri Lanka" },
        { code: "SD", dial: "+249", name: "Sudan" },
        { code: "SR", dial: "+597", name: "Suriname" },
        { code: "SJ", dial: "+47", name: "Svalbard and Jan Mayen" },
        { code: "SZ", dial: "+268", name: "Swaziland" },
        { code: "SE", dial: "+46", name: "Sweden" },
        { code: "CH", dial: "+41", name: "Switzerland" },
        { code: "SY", dial: "+963", name: "Syria" },
        { code: "TW", dial: "+886", name: "Taiwan" },
        { code: "TJ", dial: "+992", name: "Tajikistan" },
        { code: "TZ", dial: "+255", name: "Tanzania" },
        { code: "TH", dial: "+66", name: "Thailand" },
        { code: "TL", dial: "+670", name: "Timor-Leste" },
        { code: "TG", dial: "+228", name: "Togo" },
        { code: "TK", dial: "+690", name: "Tokelau" },
        { code: "TO", dial: "+676", name: "Tonga" },
        { code: "TT", dial: "+1868", name: "Trinidad and Tobago" },
        { code: "TN", dial: "+216", name: "Tunisia" },
        { code: "TR", dial: "+90", name: "Turkey" },
        { code: "TM", dial: "+993", name: "Turkmenistan" },
        { code: "TC", dial: "+1649", name: "Turks and Caicos Islands" },
        { code: "TV", dial: "+688", name: "Tuvalu" },
        { code: "UG", dial: "+256", name: "Uganda" },
        { code: "UA", dial: "+380", name: "Ukraine" },
        { code: "AE", dial: "+971", name: "United Arab Emirates" },
        { code: "GB", dial: "+44", name: "United Kingdom" },
        { code: "US", dial: "+1", name: "United States" },
        { code: "UY", dial: "+598", name: "Uruguay" },
        { code: "UZ", dial: "+998", name: "Uzbekistan" },
        { code: "VU", dial: "+678", name: "Vanuatu" },
        { code: "VE", dial: "+58", name: "Venezuela" },
        { code: "VN", dial: "+84", name: "Vietnam" },
        { code: "WF", dial: "+681", name: "Wallis and Futuna" },
        { code: "YE", dial: "+967", name: "Yemen" },
        { code: "ZM", dial: "+260", name: "Zambia" },
        { code: "ZW", dial: "+263", name: "Zimbabwe" }
    ];

    const options = countryOptions.map((c) => ({
        value: c.dial,
        code: c.code,
        label: `${c.name} (${c.dial})`
    }));

    useEffect(() => {
        let isMounted = true;
        const imagesToPreload = [
            Logo,
            ValenciaLogo,
            DamacLagoon1,
            DamacLagoon2,
            DamacLagoon3,
            DamacLagoon4,
            DamacLagoon5,
            DamacLagoon6,
            DamacLagoon7
        ];

        const preloadImage = (src) =>
            new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
            });

        Promise.all(imagesToPreload.map(preloadImage)).then(() => {
            if (isMounted) setIsLoading(false);
        });

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsFooterVisible(window.scrollY > FOOTER_REVEAL_SCROLL);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        const form = e.target;
        const code = country?.value || "";
        const number = form.querySelector("#phoneInput")?.value?.trim() || "";

        if (!code || !number) {
            toast.error("Please select country and enter phone number");
            return;
        }

        const fullPhone = `${code}${number}`;
        const phoneField = form.querySelector("#full_phone");
        if (phoneField) phoneField.value = fullPhone;

        const formData = new FormData(form);
        formData.set("phone", fullPhone);
        formData.set("page_name", window.location.href);

        try {
            setIsSubmitting(true);
            await fetch(form.action, {
                method: "POST",
                body: formData,
                mode: "no-cors"
            });
            toast.success("Form submitted successfully!");
            form.reset();
            setCountry(null);
            navigate("/Damac/DamacLagoonValenciaThanks");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const amenities = [
        { name: "Swimmable Crystal Lagoons", icon: <Waves className="w-4 h-4" /> },
        { name: "White-Sand Beach Areas", icon: <Umbrella className="w-4 h-4" /> },
        { name: "Waterfront Promenades", icon: <Anchor className="w-4 h-4" /> },
        { name: "Resort-Style Pools", icon: <Droplets className="w-4 h-4" /> },
        { name: "Landscaped Green Spaces", icon: <Trees className="w-4 h-4" /> },
        { name: "Jogging & Cycling Tracks", icon: <Bike className="w-4 h-4" /> },
        { name: "Outdoor Fitness & Wellness Zones", icon: <Dumbbell className="w-4 h-4" /> },
        { name: "Kids' Play Areas", icon: <Sparkles className="w-4 h-4" /> }
    ];

    const SkeletonBlock = ({ className }) => (
        <div className={`animate-pulse rounded-xl bg-gray-200/80 ${className || ""}`} />
    );

    const SkeletonPage = () => (
        <div className="text-gray-400 bg-gray-50">
            <div className="relative w-full">
                <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                    <SkeletonBlock className="w-full h-full rounded-none" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
                        <SkeletonBlock className="h-6 w-64 rounded-full" />
                        <SkeletonBlock className="h-16 w-72 rounded-2xl" />
                        <SkeletonBlock className="h-6 w-48 rounded-full" />
                    </div>
                </div>
            </div>

            <div className="relative w-full px-6 lg:px-[12%] py-[4%] text-white" style={{ backgroundColor: PRIMARY_COLOR }}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center">
                    <SkeletonBlock className="h-24 w-full sm:w-1/3 bg-white/20" />
                    <SkeletonBlock className="h-24 w-full sm:w-1/3 bg-white/20" />
                    <SkeletonBlock className="h-24 w-full sm:w-1/3 bg-white/20" />
                </div>
            </div>

            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-center"
                style={waveBackground}
            >
                <div className="max-w-6xl mx-auto space-y-4">
                    <SkeletonBlock className="h-10 w-3/4 mx-auto rounded-2xl" />
                    <SkeletonBlock className="h-10 w-2/3 mx-auto rounded-2xl" />
                    <div className="space-y-3">
                        <SkeletonBlock className="h-4 w-full" />
                        <SkeletonBlock className="h-4 w-11/12" />
                        <SkeletonBlock className="h-4 w-10/12" />
                    </div>
                </div>
            </div>

            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <SkeletonBlock className="w-full h-full rounded-none" />
                    </div>
                </div>
            </div>

            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-center"
                style={waveBackground}
            >
                <div className="max-w-6xl mx-auto space-y-4">
                    <SkeletonBlock className="h-10 w-3/4 mx-auto rounded-2xl" />
                    <SkeletonBlock className="h-10 w-2/3 mx-auto rounded-2xl" />
                    <div className="space-y-3">
                        <SkeletonBlock className="h-4 w-full" />
                        <SkeletonBlock className="h-4 w-11/12" />
                        <SkeletonBlock className="h-4 w-10/12" />
                    </div>
                </div>
            </div>

            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <SkeletonBlock className="w-full h-full rounded-none" />
                    </div>
                </div>
            </div>

            <div
                className="w-full"
                style={waveBackground}
            >
                <div className="relative w-full px-6 lg:px-[12%] py-[4%]">
                    <div className="text-center max-w-6xl mx-auto mb-16 space-y-4">
                        <SkeletonBlock className="h-10 w-3/4 mx-auto rounded-2xl" />
                        <SkeletonBlock className="h-4 w-2/3 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white/80 backdrop-blur-md rounded-3xl px-[10%] py-[4%] border border-white shadow-xl flex flex-col justify-center">
                            <SkeletonBlock className="h-8 w-2/3 mb-6 rounded-lg" />
                            <div className="space-y-3">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <SkeletonBlock key={index} className="h-4 w-full rounded-lg" />
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <SkeletonBlock className="col-span-2 h-[350px] rounded-3xl" />
                            <SkeletonBlock className="h-[260px] rounded-3xl" />
                            <SkeletonBlock className="h-[260px] rounded-3xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <SkeletonBlock className="w-full h-full rounded-none" />
                    </div>
                </div>
            </div>

            <div
                className="
                    relative w-full px-6 lg:px-[12%] text-center
                    pt-[4%] pb-[55%]
                    md:pb-[10%]
                "
                style={waveBackground}
            >
                <SkeletonBlock className="mx-auto mb-6 w-[180px] md:w-[220px] h-12 rounded-lg" />

                <div className="space-y-3 mb-12">
                    <SkeletonBlock className="h-8 w-3/4 mx-auto" />
                    <SkeletonBlock className="h-6 w-2/3 mx-auto" />
                    <SkeletonBlock className="h-6 w-1/2 mx-auto" />
                    <SkeletonBlock className="h-8 w-1/2 mx-auto" />
                </div>

                <div className="max-w-xl mx-auto bg-white shadow-xl rounded-3xl p-8 border border-gray-200 space-y-4">
                    <SkeletonBlock className="h-8 w-40 mx-auto rounded-lg" />
                    <SkeletonBlock className="h-12 w-full" />
                    <SkeletonBlock className="h-12 w-full" />
                    <SkeletonBlock className="h-12 w-full" />
                    <SkeletonBlock className="h-12 w-full" />
                    <SkeletonBlock className="h-12 w-full" />
                </div>
            </div>
        </div>
    );

    if (isLoading) {
        return <SkeletonPage />;
    }



    return (
        <div>
            {/* Banner */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacLagoon1}
                            alt="Damac Island"
                            className="w-full h-full object-cover brightness-75 absolute inset-0"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                        ></div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-center px-4 lg:px-[8%]"
                >
                    <div className="space-y-4 sm:space-y-6 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.7 }}
                            className="w-full flex justify-center"
                        >
                            <img
                                src={ValenciaLogo}
                                alt="Lagoon Valencia"
                                className="w-[220px] sm:w-[260px] md:w-[380px] object-contain"
                            />
                        </motion.div>
                        <motion.p
                            style={{ fontFamily: "Cinzel, serif" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3, duration: 0.5 }}
                            className="text-lg md:text-3xl uppercase tracking-[.4em] text-gray-200"
                        >
                            DAMAC PROPERTIES
                        </motion.p>
                        <motion.p
                            style={{ fontFamily: "Cinzel, serif" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                            className="text-base md:text-2xl mt-2 text-gray-100"
                        >
                            Studios, 1 &amp; 2 Bed Apartments Surrounded By Swimmable Crystal Lagoons
                        </motion.p>

                    </div>
                </motion.div>
            </div>

            {/* Details */}
            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-white"
                style={{ backgroundColor: PRIMARY_COLOR }}
            >
                <motion.div
                    whileInView={{ scale: 1, y: 0 }}
                    initial={{ scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                        <p className="text-lg sm:text-xl font-semibold opacity-90">Down Payment</p>
                        <h3 className="text-5xl sm:text-6xl font-extrabold mt-1">5%</h3>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                        <p className="text-lg sm:text-xl font-semibold opacity-90">Handover</p>
                        <h3 className="text-5xl sm:text-6xl font-extrabold mt-1">2029</h3>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                        <p className="text-lg sm:text-xl font-semibold opacity-90">Starting at</p>
                        <h3 className="text-5xl sm:text-6xl font-extrabold mt-1">AED 725K</h3>
                    </motion.div>
                </motion.div>
            </div>

            {/* Para 01*/}
            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-center"
                style={waveBackground}
            >
                <motion.div
                    className="max-w-6xl mx-auto space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-5xl md:text-6xl font-black leading-tight"
                        style={{ color: "#494949" }}
                    >
                        Experience Lagoon Living<br />
                        Like Never Before
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="leading-relaxed text-lg md:text-2xl"
                        style={{ color: "#494949" }}
                    >
                        Welcome to the epitome of resort-style living in Dubai! At DAMAC Lagoons, we proudly present our stunning collection of waterfront apartments, starting from just AED 725,000. Immerse yourself in the elegance of crystal lagoons, communities and enjoy an unparalleled level of comfort, lifestyle, and leisure.                    </motion.p>
                </motion.div>
            </div>

            {/* Image */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacLagoon2}
                            alt="Damac Island"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Para 02*/}
            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-center"
                style={waveBackground}
            >
                <motion.div
                    className="max-w-6xl mx-auto space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-5xl md:text-6xl font-black leading-tight"
                        style={{ color: "#494949" }}
                    >
                        Live The Ultimate Lagoon Lifestyle In  <br />
                        Dubai With Exquisite Waterfront Apartments
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }

                        }}
                        className="leading-relaxed text-lg md:text-2xl"
                        style={{ color: "#494949" }}
                    >
                        Welcome to the epitome of resort-style living in Dubai! At DAMAC Lagoons – Valencia, we proudly present our stunning collection of lagoon-facing apartments, starting from just AED 725,000. Immerse yourself in crystal-clear lagoons and experience an unparalleled level of comfort, lifestyle, and leisure.                    </motion.p>
                </motion.div>
            </div>

            {/* Image */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacLagoon3}
                            alt="Damac Island"
                            className="w-full h-full object-cover "
                        />
                    </div>
                </div>
            </div>

            {/* List */}
            <div
                className="w-full"
                style={waveBackground}
            >
                <div className="relative w-full px-6 lg:px-[12%] py-[4%]">

                    {/* Title Section */}
                    <motion.div
                        className="text-center max-w-6xl mx-auto mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                            className="text-5xl md:text-6xl font-black leading-tight mb-6"
                            style={{ color: "#494949" }}
                        >
                            Luxurious Amenities for an Elevated
                            <br />
                            Lagoon Lifestyle
                        </motion.h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                            className="leading-relaxed text-lg md:text-2xl"
                            style={{ color: "#494949" }}
                        >
                            DAMAC Lagoons – Valencia brings you world-class amenities designed around crystal lagoons, redefining resort-style living and everyday leisure.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, staggerChildren: 0.15 }}
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="bg-white/80 backdrop-blur-md rounded-3xl px-[10%] py-[4%] border border-white shadow-xl flex flex-col justify-center"
                        >
                            <h3 className="text-4xl font-bold text-[#494949] mb-6 border-b border-gray-200 pb-3">
                                Key Amenities
                            </h3>
                            <ul className="space-y-4">
                                {amenities.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-gray-700 text-base font-medium hover:text-[#61d9e7] transition-colors cursor-default"
                                    >
                                        <span className="p-1 rounded-full bg-gray-100 text-[#61d9e7]">
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl h-[350px]"
                            >
                                <img
                                    src={DamacLagoon4}
                                    alt="Main View"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="relative group overflow-hidden rounded-3xl shadow-2xl h-[260px]"
                            >
                                <img
                                    src={DamacLagoon5}
                                    alt="Pool View"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="relative group overflow-hidden rounded-3xl shadow-2xl h-[260px]"
                            >
                                <img
                                    src={DamacLagoon6}
                                    alt="Interior"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacLagoon7}
                            alt="Damac Island"
                            className="w-full h-full object-cover "
                        />
                    </div>
                </div>
            </div>

            {/* Form */}
            <div
                className="
                    relative w-full px-6 lg:px-[12%] text-center
                    pt-[4%] pb-[55%]      
                    md:pb-[10%]           
                "
                style={waveBackground}
            >
                <img
                    src={Logo}
                    alt="Damac Logo"
                    className="mx-auto mb-6 w-[180px] md:w-[220px]"
                />

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Modern Studios, 1 & 2-Bedroom Apartments
                </h2>

                <p className="text-lg md:text-xl font-medium mb-2">
                    Iconic Lagoon Community Offering Resort-Style Living
                </p>
                <br />
                <p className="text-lg md:text-xl font-semibold mb-8">
                    <span className="font-extrabold">5%</span> Down Payment | <span className="font-extrabold">55%</span> During Construction | <span className="font-extrabold">40%</span> Upon Handover
                </p>

                <h3 className="text-3xl md:text-4xl font-black mb-12">
                    Starting From AED 725,000
                </h3>

                <div
                    className="max-w-xl mx-auto bg-white shadow-xl rounded-3xl p-8 border border-gray-200">
                    <h4 className="text-2xl font-black mb-5 border-b border-gray-300 pb-2">
                        ENQUIRE NOW!
                    </h4>

                    <form
                        id="registerForm"
                        onSubmit={handleSubmit}
                        action="https://script.google.com/macros/s/AKfycbywwic8x5s6aI85f1vDmr3ee5vhG0c261cwMzNg9vSdX8UUsBDKtyhP_ov9L1kdNImEbg/exec?gid=0"
                        method="POST"
                        className="space-y-5"
                    >

                        {/* Name */}
                        <div className="text-left">
                            {/* <label className="font-semibold">Name:</label> */}
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-1 w-full p-3 rounded-xl border border-gray-300"
                                placeholder="Enter Name"
                            />
                        </div>

                        {/* Email */}
                        <div className="text-left">
                            {/* <label className="font-semibold">Email:</label> */}
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-1 w-full p-3 rounded-xl border border-gray-300"
                                placeholder="Enter Email"
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="flex gap-2">
                            <div className="w-1/3">
                                <Select
                                    options={options}
                                    value={country}
                                    onChange={setCountry}
                                    placeholder="Code"

                                    formatOptionLabel={(option) => (
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                alt="flag"
                                                width="20"
                                                height="15"
                                                style={{ objectFit: 'contain' }}
                                            />
                                            <span className="text-sm">{option.label}</span>
                                        </div>
                                    )}
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            height: '50px',
                                            borderRadius: '0.75rem',
                                            borderColor: '#d1d5db',
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                            zIndex: 100
                                        }),
                                    }}
                                />
                            </div>

                            <input
                                id="phoneInput"
                                type="tel"
                                required
                                pattern="[0-9]{8,14}"
                                minLength={8}
                                maxLength={14}
                                inputMode="numeric"
                                className="w-2/3 p-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none"
                                placeholder="Enter phone number"
                            />
                        </div>

                        <input type="hidden" name="phone" id="full_phone" />

                        <input type="hidden" name="page_name" value={window.location.href} />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#00214D] text-white py-3 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} theme="colored" />

            {isFooterVisible && (
                <div
                    className="w-full bg-cover bg-center px-4 sm:px-[5%] lg:px-[12%] py-7 sm:py-7 flex flex-col lg:flex-row items-center justify-between gap-4 fixed bottom-0 left-0 z-50 transform transition-all duration-300 translate-y-0 opacity-100"
                    style={{ backgroundColor: "#87CEFA" }}
                >
                    <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
                        <img
                            src={Logo}
                            alt="DAMAC"
                            className="w-[85px] sm:w-[105px]"
                        />

                        <div className="leading-tight">
                            <p className="text-xs sm:text-sm font-medium text-gray-800">Type of Property</p>
                            <h3 className="text-sm sm:text-base font-semibold text-black">
                                Studios, 1 & 2-Bedroom Apartments
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:gap-10 w-full lg:w-auto text-center lg:text-left">
                        <div>
                            <p className="text-xs sm:text-sm font-medium text-gray-800">Starting at</p>
                            <h3 className="text-sm sm:text-base font-semibold">AED 725K</h3>
                        </div>

                        <div>
                            <p className="text-xs sm:text-sm font-medium text-gray-800">Payment Plan</p>
                            <h3 className="text-sm sm:text-base font-semibold">60/40</h3>
                        </div>

                        <div>
                            <p className="text-xs sm:text-sm font-medium text-gray-800">Handover</p>
                            <h3 className="text-sm sm:text-base font-semibold">2029</h3>
                        </div>
                    </div>

                    <button
                        onClick={() => document.getElementById("registerForm")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-4 py-2 bg-black text-white rounded-sm font-semibold hover:opacity-90 transition-all w-full sm:w-auto text-sm sm:text-base"
                    >
                        Register Your Interest
                    </button>
                </div>
            )}
        </div >
    )
}
