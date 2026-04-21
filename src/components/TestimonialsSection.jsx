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
          <h2 className="text-3xl font-black md:text-5xl mt-4">Trader nói gì sau khi tham gia hệ thống</h2>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name || index}
              delay={index * 90}
              className="break-inside-avoid rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-2 hover-panel relative overflow-hidden group"
            >
              <div className="flex flex-col gap-6 relative z-10">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name || "Testimonial"}
                      className="h-full w-full object-cover rounded-[2rem]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xl font-bold text-white">
                      {item.name?.charAt(0) || "?"}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
