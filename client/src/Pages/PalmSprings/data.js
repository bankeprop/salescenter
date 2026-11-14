const IMG = "/PalmSprings";

export const images = {
  hero: `${IMG}/bay-estates-official-pool.webp`,
  villa: `${IMG}/palm-jebel-ali-villa-bluejay-69-scaled-1.webp`,
  landmark: `${IMG}/palm-jebel-ali-a-nearby-landmark-shown-f-0b92e832.webp`,
  nakheel: `${IMG}/nakheel-logo.svg`,
};

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Residences", href: "#residences" },
  { label: "Location", href: "#location" },
  { label: "Developer", href: "#developer" },
  { label: "FAQs", href: "#faqs" },
];

export const stats = [
  { value: "AED 3.8M*", label: "Expected starting price" },
  { value: "17 min", label: "To Palm Jebel Ali" },
  { value: "3–5", label: "Bedroom townhouses & villas" },
];

export const residences = [
  {
    title: "Townhouses",
    beds: "3 & 4 bedrooms",
    text: "Two-storey family townhouses designed for your next chapter. Register to receive floor plans and pricing first.",
    image: images.villa,
  },
  {
    title: "Villas",
    beds: "4 & 5 bedrooms",
    text: "Spacious villas with generous outdoor living. Register to receive property details as soon as they are released.",
    image: images.hero,
  },
];

export const connections = [
  { place: "Al Maktoum International Airport", time: "15 min" },
  { place: "Palm Jebel Ali", time: "17 min" },
  { place: "Bluewaters Island", time: "20 min" },
  { place: "Palm Jumeirah", time: "25 min" },
  { place: "Burj Al Arab", time: "30 min" },
];

export const developerStats = [
  { value: "Palm Jumeirah", label: "Iconic master community" },
  { value: "Palm Jebel Ali", label: "Dubai's evolving coastline" },
  { value: "Dubai Holding", label: "Member of the group" },
];

export const faqs = [
  {
    q: "What is Palm Springs by Nakheel?",
    a: "Palm Springs is an upcoming community of townhouses and villas by Nakheel, located near Palm Jebel Ali with direct access to Sheikh Zayed Road.",
  },
  {
    q: "What is the expected starting price?",
    a: "Expected prices start from AED 3.8M*. All pricing is preliminary and subject to change until official release.",
  },
  {
    q: "How do I get floor plans?",
    a: "Register your interest and our property specialists will send floor plans for your preferred home type as soon as they are available.",
  },
  {
    q: "What happens after I register?",
    a: "A property specialist will contact you by phone or email with pricing, the payment plan and early access to releases.",
  },
];

export const homeTypes = ["Townhouse", "Villa"];

export const webhookEndpoint =
  "https://script.google.com/macros/s/AKfycbz5yIUe6VVdmTIq48VhHi778Zr5xLTPsVE-zc6E1ulLtTz6CD4i0V4FeAYJv2J0ZYYp1A/exec";

export const campaign = "PalmSprings-AS-GOOG-471483";
