import { BotanicalCorners, FloralDivider } from "./FloralDecorations";
import { Phone } from "lucide-react";

export default function RSVP() {
  const seniorHosts = ["Zubair Akhtar", "Zaheer Akhtar", "Sohail Akhtar"];
  const compliments = [
    { name: "Abdul Munim", phone: "0337 0699996", link: "tel:03370699996" },
    { name: "Mahad Zubair", phone: "0335 9845409", link: "tel:03359845409" },
    { name: "Husban Zubair", phone: "0330 6384132", link: "tel:03306384132" },
    { name: "Shaheer Sohail", phone: "0314 3605988", link: "tel:03143605988" },
  ];

  return (
    <section className="rsvp section-frame" id="rsvp">
      <div className="rsvp-card max-w-2xl mx-auto">
        <BotanicalCorners />
        <p className="eyebrow">YOUR PRESENCE IS OUR HONOUR</p>
        <h2>RSVP</h2>
        <p className="subtext">
          Looking forward to welcoming you with warmth and joy.
        </p>
        <FloralDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-center">
          <div className="rsvp-group">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 border-b border-[#d4af37]/30 pb-2">
              RSVP &amp; HOSTS
            </h4>
            <ul className="space-y-2 text-lg text-black font-medium">
              {seniorHosts.map((name) => (
                <li key={name} className="font-serif tracking-wide">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="rsvp-group">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 border-b border-[#d4af37]/30 pb-2">
              WITH BEST COMPLIMENTS
            </h4>
            <ul className="space-y-3 text-lg text-black font-medium">
              {compliments.map((person) => (
                <li key={person.name} className="font-serif tracking-wide flex flex-col items-center justify-center">
                  <span>{person.name}</span>
                  {person.phone && (
                    <a
                      href={person.link}
                      className="inline-flex items-center gap-1.5 text-xs text-[#5c4728] hover:text-[#2d1e0f] transition-all duration-200 mt-1 font-sans font-medium border border-[#d4af37]/40 bg-[#fbf7f0] hover:bg-[#f3e9d7] hover:border-[#d4af37] px-3 py-1 rounded-full shadow-xs group"
                      title={`Call ${person.name}`}
                    >
                      <Phone size={12} className="text-[#b8944b] group-hover:scale-110 transition-transform duration-200" />
                      <span className="tracking-wider">{person.phone}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


