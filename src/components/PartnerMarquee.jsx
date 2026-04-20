import Container from "./Container";
import Reveal from "./Reveal";
import { partnerLogos } from "../data/exchangePages";
import { Link } from "react-router-dom";

function LogoPill({ item }) {
  return (
    <Link
      to={item.href}
      className="flex min-w-[120px] items-center justify-center px-4 py-2 text-xl font-bold tracking-wide text-zinc-400 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 hover:text-white"
    >
      {item.name}
    </Link>
  );
}

export default function PartnerMarquee() {
  const duplicated = [...partnerLogos, ...partnerLogos];

  return (
    <section className="relative py-10 border-y border-zinc-900 bg-black/50">
      <Container>
        <Reveal className="mb-8 text-center" delay={100}>
          <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
            Đối tác của các sàn giao dịch hàng đầu
          </div>
        </Reveal>

        <Reveal className="partner-marquee-mask py-4" duration={900} delay={200}>
          <div className="partner-marquee-track">
            {duplicated.map((item, index) => (
              <div key={`${item.slug}-${index}`} className="partner-marquee-item px-6">
                <LogoPill item={item} />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
