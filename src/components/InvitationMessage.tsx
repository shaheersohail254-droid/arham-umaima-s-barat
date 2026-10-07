import { FloralDivider } from "./FloralDecorations";

export default function InvitationMessage() {
  return (
    <section className="text-section section-frame">
      <div className="hands-art-wrap">
        <div className="hands-art-frame">
          <img
            src="/images/hands_illustration.png"
            alt="Bride and Groom Hands Line Art Illustration"
            className="hands-art-img"
          />
        </div>
      </div>
      <p className="eyebrow">BISMILLAH HIR RAHMAN NIR RAHIM</p>
      <h2>Barat Wedding Ceremony</h2>
      <p className="body-copy">
        Mr and Mrs Zubair Akhtar cordially invite you to the auspicious wedding ceremony (Barat) of their beloved son <strong>Muhammad Arham Zubair</strong> with <strong>Umaima Akhtar</strong> (D/O Pervaiz Akhtar &amp; Tanveer Akhtar).
      </p>
      <FloralDivider />
    </section>
  );
}

