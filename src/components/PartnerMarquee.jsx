import Container from "./Container";
import Reveal from "./Reveal";
import { partnerLogos } from "../data/exchangePages";
import { Link } from "react-router-dom";

function LogoPill({ item }) {
  return (
    <Link
      to={item.href}
      className="hover-lift flex min-w-[180px] items-center justify-center rounded-2xl border border-lime-400/15 bg-black/60 px-6 py-5 text-center text-2xl font-black tracking-wide text-white transition hover:border-lime-400/40 hover:text-lime-300"
    >
      {item.name}
    </Link>
  );
}

export default function PartnerMarquee() {
  const duplicated = [...partnerLogos, ...partnerLogos];

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.28),transparent_65%)] blur-3xl" />
      <Container>
        <Reveal className="mb-8 text-center">
          <div className="mb-3 inline-flex rounded-full border border-lime-400/20 bg-yellow-400/10 px-4 py-1.5 text-xl text-lime-300">
            Đối tác của các sàn giao dịch hàng đầu
          </div>
        </Reveal>

        <Reveal className="partner-marquee-mask rounded-[2rem] border border-lime-400/15 bg-black/40 py-6" duration={900}>
          <div className="partner-marquee-track">
            {duplicated.map((item, index) => (
              <div key={`${item.slug}-${index}`} className="partner-marquee-item px-3">
                <LogoPill item={item} />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
