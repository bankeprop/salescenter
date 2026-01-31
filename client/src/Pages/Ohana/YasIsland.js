import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Manchester from '../../Assests/Ohana/Manchester.png'
import Hero from '../../Assests/Ohana/YasIsland.jpeg'
import OhanaMap from '../../Assests/Ohana/OhanaMap.jpeg'
import OhanaLogo from '../../Assests/Ohana/OhanaLogo.webp'
import { setFavicon, resetFavicon } from '../../utils/favicon'
import YasIsland1 from '../../Assests/Ohana/YasIsland1.jpg'
import YasIsland2 from '../../Assests/Ohana/YasIsland2.jpg'
import YasIsland3 from '../../Assests/Ohana/YasIsland3.jpg'
import YasIsland4 from '../../Assests/Ohana/YasIsland4.jpg'
import YasIsland5 from '../../Assests/Ohana/YasIsland5.jpg'

const heroBg = Hero;
const mapImg = OhanaMap;
const whyImg = YasIsland1;
const canalImg = YasIsland2;
const abuDhabiImg = YasIsland3;
const manCityLogo = Manchester

const sliderImages = [
    [YasIsland4, YasIsland5],

]

const primaryBtn =
    'font-["Tai_Heritage_Pro"] tracking-wide uppercase bg-[#0B153B] text-[#EDCB8E] hover:bg-[#1565C0] hover:text-[#EDCB8E] transition-colors duration-200 px-4 py-3 text-base w-full'

const countryOptions = [
    { code: 'AE', dial: '+971', name: 'United Arab Emirates' },
    { code: 'US', dial: '+1', name: 'United States' },
    { code: 'GB', dial: '+44', name: 'United Kingdom' },
    { code: 'SA', dial: '+966', name: 'Saudi Arabia' },
    { code: 'IN', dial: '+91', name: 'India' },
    { code: 'PK', dial: '+92', name: 'Pakistan' },
    { code: 'QA', dial: '+974', name: 'Qatar' },
    { code: 'KW', dial: '+965', name: 'Kuwait' },
    { code: 'OM', dial: '+968', name: 'Oman' },
    { code: 'BH', dial: '+973', name: 'Bahrain' },
    { code: 'EG', dial: '+20', name: 'Egypt' },
    { code: 'NG', dial: '+234', name: 'Nigeria' },
    { code: 'ZA', dial: '+27', name: 'South Africa' },
    { code: 'PH', dial: '+63', name: 'Philippines' },
    { code: 'BD', dial: '+880', name: 'Bangladesh' },
    { code: 'LK', dial: '+94', name: 'Sri Lanka' },
    { code: 'CA', dial: '+1', name: 'Canada' },
    { code: 'AU', dial: '+61', name: 'Australia' },
    { code: 'SG', dial: '+65', name: 'Singapore' },
    { code: 'MY', dial: '+60', name: 'Malaysia' },
    { code: 'ID', dial: '+62', name: 'Indonesia' },
    { code: 'DE', dial: '+49', name: 'Germany' },
    { code: 'FR', dial: '+33', name: 'France' },
    { code: 'ES', dial: '+34', name: 'Spain' },
    { code: 'IT', dial: '+39', name: 'Italy' },
    { code: 'TR', dial: '+90', name: 'Turkey' },
    { code: 'RU', dial: '+7', name: 'Russia' },
    { code: 'CN', dial: '+86', name: 'China' },
    { code: 'JP', dial: '+81', name: 'Japan' },
    { code: 'KR', dial: '+82', name: 'South Korea' }
]

const options = countryOptions.map((c) => ({
    value: c.dial,
    code: c.code,
    label: `${c.name} (${c.dial})`
}))

const formatOptionLabel = (option) => (
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
)

function YasIsland() {
    const [country, setCountry] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isSubmitting) return

        const form = e.target
        const code = country?.value || ''
        const number = form.querySelector('#phoneInput')?.value?.trim() || ''

        if (!code || !number) {
            alert('Please select country code and enter phone number')
            return
        }

        const fullPhone = `${code}${number}`
        const phoneField = form.querySelector('#full_phone')
        if (phoneField) phoneField.value = fullPhone

        const formData = new FormData(form)
        formData.set('phone', fullPhone)
        formData.set('page_name', window.location.href)

        try {
            setIsSubmitting(true)
            await fetch(form.action, { method: 'POST', body: formData, mode: 'no-cors' })
            form.reset()
            setCountry(null)
            alert('Submitted!')
        } catch (err) {
            alert('Submission failed. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        document.title = 'Manchester City Yas Island'
        setFavicon(OhanaLogo)
        return () => resetFavicon()
    }, [])

    return (
        <div id="landing-page" className="min-h-screen w-full bg-[url('//v.fastcdn.co/u/7ddc6d02/65815041-0-download.webp')] bg-cover bg-[length:cover]">

            {/* Hero */}
            <section className="relative bg-[#d0cbbb] overflow-hidden min-h-[440px] md:min-h-[620px]">
                <div className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 z-10 flex justify-center">
                    <img src={Manchester} alt="Manchester City" className="h-16 w-auto md:h-32 drop-shadow-2xl" />
                </div>
                <img
                    src={heroBg}
                    alt=""
                    className="absolute inset-0 w-full h-[440px] md:h-[820px] object-cover object-top sm:object-center md:object-left"
                />
                <div className="absolute inset-0" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                    <a
                        href="#register"
                        className='inline-block text-center bg-[#EDCB8E] text-[#0B153B] font-["Tai_Heritage_Pro"] text-lg px-6 py-3 rounded-md shadow-md'
                    >
                        Enquire now
                    </a>
                </div>
                <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row md:items-start gap-10">
                    <div className="flex-1" />
                </div>
            </section>

            {/* Project summary */}
            <section className="relative bg-[#d0cbbb]">
                <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-5 gap-10 items-start md:items-center">
                    <div className="md:col-span-5 text-center space-y-4">
                        <p className='font-["Tai_Heritage_Pro"] text-2xl md:text-3xl text-[#0B153B] tracking-wide'>
                            THE WORLD&apos;S FIRST MANCHESTER CITY-BRANDED RESIDENCES @ YAS ISLAND, ABU DHABI
                        </p>
                        <div className="mx-auto h-0.5 w-24 bg-[#0B153B]/50" />
                    </div>

                    <div className="md:col-span-3 bg-white/60 border border-[#A3BAC6] rounded-xl shadow-sm p-6 space-y-3">
                        <p className="text-base md:text-lg leading-7 text-[#0B153B]">
                            7 premium 1-3BR apartments and ultra-luxe 4BR penthouses • 4BR &amp; 5BR villas with private pools.
                        </p>
                        <p className="text-base md:text-lg leading-7 text-[#0B153B]">
                            Payment plan options including 50/50 and 75/25 to match buyers segments.
                        </p>
                        <a
                            className={
                                primaryBtn +
                                ' inline-block text-center mt-4 md:w-auto px-6 py-3 rounded-md shadow-md bg-[#0B153B] text-[#EDCB8E]'
                            }
                            href="#register"
                        >
                            Luxury Apartments, Townhouses, Villas & Maisonettes
                        </a>
                    </div>

                    <div className="md:col-span-2 bg-[#E7E3D6] border border-[#A3BAC6] p-4 rounded-xl shadow-sm">
                        <img src={mapImg} alt="Map" className="w-full h-[260px] md:h-[360px] object-cover rounded-lg" />
                    </div>
                </div>
            </section>

            {/* CTA bar */}
            <section className="bg-[#0B153B] py-4">
                <div className="max-w-4xl mx-auto px-4">
                    <a href="#register" className='block text-center bg-[#EDCB8E] text-[#0B153B] font-["Tai_Heritage_Pro"] text-lg py-3'>
                        Register your interest
                    </a>
                </div>
            </section>

            {/* Why Manchester */}
            <section className="bg-[#d0cbbb]">
                <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
                    <div className="bg-[#E7E3D6] border border-[#A3BAC6] p-4">
                        <img src={whyImg} alt="Why Manchester" className="w-full object-cover" />
                    </div>
                    <div className="space-y-3">
                        <h2 className='font-["Tai_Heritage_Pro"] text-3xl text-[#0B153B]'>Why Manchester City Yas Residences by Ohana</h2>
                        <p className="leading-7 text-lg md:text-xl">
                            A new lifestyle destination is rising on Yas Island. Surrounded by world-class leisure, sports, and cultural attractions, it’s where iconic living meets elevated luxury.
                        </p>
                    </div>
                </div>
            </section>

            {/* Canal visual */}
            <section className="bg-[#E7E3D6]">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <img src={canalImg} alt="Yas Canal" className="w-full object-cover" />
                </div>
            </section>

            {/* Slider substitute */}
            <section className="bg-[#E7E3D6] py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-1 gap-10">
                        {sliderImages.map(([left, right], idx) => (
                            <div key={idx} className="grid md:grid-cols-2 grid-cols-1 gap-6 bg-[#0b153b] p-6 rounded-lg">
                                <img src={left} alt="" className="w-full h-[420px] md:h-[520px] object-cover" />
                                <img src={right} alt="" className="w-full h-[420px] md:h-[520px] object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why invest */}
            <section className="bg-[#0B153B] text-[#EDCB8E] py-12">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <img src={abuDhabiImg} alt="Abu Dhabi" className="w-full object-cover" />
                    <div className="space-y-3">
                        <h2 className='font-["Tai_Heritage_Pro"] text-3xl'>Why invest in ABU DHABI</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white">
                            {[
                                'Limited prime supply',
                                '100% tax-free income',
                                'Strong capital growth',
                                'High rental yields',
                                'Trusted master developer',
                                'Global connectivity'
                            ].map((text) => (
                                <div key={text} className="bg-[#0B153B]/60 border border-[#EDCB8E33] p-3 text-center font-semibold">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Second form */}
            <section id="register" className="bg-[#E5E5D6] py-14">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-[#d4d4c7]">
                        <h3 className='font-["Tai_Heritage_Pro"] text-2xl text-center mb-6'>Enquire now</h3>
                        <form
                            id="registerFormBottom"
                            onSubmit={handleSubmit}
                            action="https://script.google.com/macros/s/AKfycbywwic8x5s6aI85f1vDmr3ee5vhG0c261cwMzNg9vSdX8UUsBDKtyhP_ov9L1kdNImEbg/exec?gid=0"
                            method="POST"
                            className="space-y-5"
                        >
                            <div className="text-left">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="mt-1 w-full p-3 rounded-xl border border-gray-300"
                                    placeholder="Enter Name"
                                />
                            </div>

                            <div className="text-left">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-1 w-full p-3 rounded-xl border border-gray-300"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div className="flex gap-2">
                                <div className="w-1/3">
                                    <Select
                                        options={options}
                                        value={country}
                                        onChange={setCountry}
                                        placeholder="Code"
                                        formatOptionLabel={formatOptionLabel}
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                height: '50px',
                                                borderRadius: '0.75rem',
                                                borderColor: '#d1d5db'
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                maxHeight: '200px',
                                                overflowY: 'auto',
                                                zIndex: 100
                                            })
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
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                    <div className="mt-8 space-y-3 flex flex-col items-center text-center">
                        <img src={manCityLogo} alt="Manchester City" className="w-24" />
                        <p className="text-sm text-[#0B153B]">© 2026 | Privacy Policy</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default YasIsland
