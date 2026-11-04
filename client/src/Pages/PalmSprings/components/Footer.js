import { container } from "./ui";

function Footer() {
  return (
    <footer className="bg-[#0c161d] py-10 text-xs text-white/60">
      <div className={`${container} grid gap-3`}>
        <p>
          This is an independent enquiry page and not the official website of
          the developer. *Prices and details are preliminary and subject to
          change. Images are representational.
        </p>
        <p>© 2026 Palm Springs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
