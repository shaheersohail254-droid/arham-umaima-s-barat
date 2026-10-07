import { Heart } from "lucide-react";
import { FloralDivider } from "./FloralDecorations";

export default function Closing() {
  return (
    <section className="closing section-frame relative">
      <div className="closing-florals-wrap" aria-hidden="true">
        <div className="closing-floral-left">
          <img src="/images/red_floral_corner.png" alt="" />
        </div>
        <div className="closing-floral-right">
          <img src="/images/red_floral_corner.png" alt="" />
        </div>
      </div>
      <p className="eyebrow">WITH WARM REGARDS</p>
      <h2>Looking forward to your gracious presence</h2>
      <FloralDivider />
      <div className="heart text-[#b81212]">
        <Heart size={24} fill="#b81212" />
      </div>
      <p className="closing-date">Friday, 13th November 2026</p>
    </section>
  );
}


