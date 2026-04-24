import { useEffect, useState } from "react";
import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";

const botFeatures = [
  "⚡ Phân tích & plan mỗi ngày",
  "🤖 Bot trả lời & hỗ trợ realtime",
  "📈 Tín hiệu giao dịch (BTC, ETH, XAU …)",
  "👥 Cộng đồng trader hỗ trợ nhau",
];

const images = [
  "/picDis/anh7.png",
  "/picDis/anh1.png",
  "/picDis/anh2.png",
  "/picDis/anh3.png",
  "/picDis/anh4.png",
  "/picDis/anh5.png",
  "/picDis/anh6.png",
];

export default function DiscordSection() {
  const [pic, setPic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPic((prev) => (prev + 1) % images.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="discord" className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start text-left">
            <Reveal>
              <SectionBadge>Discord Community + Smart Bot</SectionBadge>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                Hệ thống giao dịch
                <span className="text-lime-300"> tất cả trong 1 cho trader</span>
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-3 w-full sm:grid-cols-2">
              {botFeatures.map((item, index) => (
                <Reveal
                  key={item}
                  delay={index * 80}
                  className="hover-lift rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-sm text-zinc-300"
                >
                  <span className="mr-2 text-lime-300">✦</span>
                  {item}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10" delay={220}>
              <a
                href="https://discord.gg/psZnKmM82d"
                target="_blank"
                rel="noreferrer"
                className="button-glow rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:scale-105 inline-block"
              >
                Vào Discord ngay
              </a>
            </Reveal>
          </div>

          <Reveal className="relative mt-12 lg:mt-0" delay={180} duration={900} variant="right">
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-lime-400/10 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-36 w-36 rounded-full bg-lime-300/10 blur-3xl" />

            <div className="card-sheen relative rounded-[2rem] border border-lime-400/20 bg-zinc-950/90 p-5 shadow-[0_0_40px_rgba(163,230,53,0.08)]">
              <div className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <div className="text-sm text-zinc-400">Preview trải nghiệm</div>
                  <div className="text-xl font-bold text-white">Discord Bot Demo</div>
                </div>
                <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs text-lime-300">
                  Online
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
                <img
                  key={images[pic]}
                  src={images[pic]}
                  alt="Discord preview"
                  className="showcase-image min-h-80 w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
