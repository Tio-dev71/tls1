import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { testimonials } from "../data/siteData";

export default function TestimonialsSection() {
  return (
    <section id="danh-gia" className="py-16">
      <Container>
        <Reveal className="mb-8 max-w-3xl">
          <SectionBadge>Đánh giá người dùng</SectionBadge>
          <h2 className="text-3xl font-black md:text-5xl">Tin dùng bởi trader</h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90} className="hover-lift rounded-[1.75rem] border border-zinc-800 bg-zinc-950/80 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-lime-400/20 bg-lime-400/10 text-xl text-lime-300">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-sm text-zinc-400">{item.role}</div>
                </div>
              </div>
              <div className="mb-3 text-lime-300">★★★★★</div>
              <p className="leading-8 text-zinc-300">“{item.quote}”</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
