import { CalendarDays, Clock, MapPin } from "lucide-react";
import { FloralDivider } from "./FloralDecorations";

const events = [
  {
    title: "BARAT CEREMONY",
    subtitle: "The Grand Wedding Ceremony & Feast",
    date: "Friday, 13th November 2026",
    time: "12:00 Noon",
    venue: "Milano Garden Town, Lahore",
    rsvp: "Mr & Mrs Zubair Akhtar",
    tone: "barat",
    image: "/images/barat_event.webp",
    tag: "Wedding Ceremony & Feast",
  },
];

export default function Events() {
  return (
    <section className="events section-frame" id="events">
      <div className="section-heading">
        <p className="eyebrow">THE WEDDING CEREMONY</p>
        <h2>Barat Event Details</h2>
        <FloralDivider />
      </div>
      <div className="event-grid single-event-center">
        {events.map((e) => (
          <article className={`event-card ${e.tone} max-w-xl mx-auto`} key={e.title}>
            <div className="event-image">
              <img
                src={e.image}
                alt={`${e.title} Celebration visual`}
                className="event-card-img"
              />
            </div>
            <div className="event-content text-center">
              <h3>{e.title}</h3>
              <div className="event-detail justify-center">
                <CalendarDays size={18} />
                <span>{e.date}</span>
              </div>
              <div className="event-detail justify-center">
                <Clock size={18} />
                <span>{e.time}</span>
              </div>
              <div className="event-detail justify-center">
                <MapPin size={18} />
                <span>{e.venue}</span>
              </div>
              <div className="event-rsvp mt-4">
                Cordially Invited By: <strong>{e.rsvp}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

