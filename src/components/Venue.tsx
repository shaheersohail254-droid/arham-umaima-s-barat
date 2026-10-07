import { ExternalLink, MapPin } from "lucide-react";
import { BotanicalCorners, FloralDivider } from "./FloralDecorations";

export default function Venue() {
  const baratVenueMap =
    "https://www.google.com/maps/search/?api=1&query=Milano+Garden+Town+Lahore";

  return (
    <section className="venue section-frame">
      <p className="eyebrow">COME CELEBRATE WITH US</p>
      <h2>Find Your Way</h2>
      <FloralDivider />
      <div className="venue-grid flex justify-center">
        <div className="venue-card max-w-lg mx-auto w-full">
          <BotanicalCorners />
          <MapPin size={32} className="mx-auto mb-2 text-[#d4af37]" />
          <p className="eyebrow">BARAT VENUE</p>
          <h3>Milano Garden Town</h3>
          <span className="block text-sm text-gray-300 mb-4">Garden Town, Lahore</span>
          <a
            href={baratVenueMap}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all font-semibold text-xs tracking-wider"
          >
            GET DIRECTIONS <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

