import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { testimonials } from "../data/siteData";

export default function TestimonialsSection() {
  return (
    <section id="danh-gia" className="py-20 relative bg-zinc-950/50">
      <Container>
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <SectionBadge>Khách hàng nói gì về chúng tôi</SectionBadge>
          <h2 className="text-3xl font-black md:text-5xl mt-4">Trải nghiệm thực tế</h2>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90} className="break-inside-avoid rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-8 hover-panel">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{item.name}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{item.role}</div>
                </div>
              </div>
              <p className="leading-relaxed text-zinc-400">“{item.quote}”</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
