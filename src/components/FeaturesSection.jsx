import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { features } from "../data/siteData";

export default function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <Container>
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <SectionBadge>Điểm mạnh của TLS1</SectionBadge>
          <h2 className="text-3xl font-black md:text-5xl max-w-2xl mt-4 leading-tight">
            Chúng tôi giải quyết các vấn đề liên quan đến quy trình giao dịch.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Main Large Card mapped to feature 0 */}
          <Reveal delay={100} className="lg:col-span-1 flex flex-col justify-between rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-8 hover-panel hover-glow-border">
            <div className="mb-8 w-full h-40 bg-black/50 rounded-2xl border border-zinc-800/50 flex items-center justify-center relative overflow-hidden">
              <div className="text-4xl">💸</div>
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neon-400/10 to-transparent"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{features[0].title}</h3>
              <p className="text-zinc-400 leading-relaxed">{features[0].desc}</p>
            </div>
          </Reveal>

          {/* Side Cards Wrapper */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2 flex-1">
              <Reveal delay={200} className="flex flex-col justify-center rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-8 hover-panel hover-glow-border">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black border border-zinc-800 text-2xl">⚙️</div>
                <h3 className="text-xl font-bold text-white mb-2">{features[1].title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{features[1].desc}</p>
              </Reveal>

              <Reveal delay={300} className="flex flex-col justify-center rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-8 hover-panel hover-glow-border">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black border border-zinc-800 text-2xl">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">{features[2].title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{features[2].desc}</p>
              </Reveal>
            </div>

            {/* Sub Badges Card mapped to feature 3 */}
            <Reveal delay={400} className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-8 hover-panel hover-glow-border">
              <div className="flex-1">
                <div className="mb-4 flex gap-2">
                   <span className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-black px-3 py-1 text-xs text-zinc-300"><span className="w-2 h-2 rounded-full bg-neon-400"></span>Bot Trade</span>
                   <span className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-black px-3 py-1 text-xs text-zinc-300"><span className="w-2 h-2 rounded-full bg-blue-400"></span>Cộng đồng</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{features[3].title}</h3>
                <p className="text-zinc-400 text-sm">{features[3].desc}</p>
              </div>
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs">👤</div>
                <div className="w-12 h-12 rounded-full border-2 border-zinc-900 bg-zinc-700 flex items-center justify-center text-xs">👤</div>
                <div className="w-12 h-12 rounded-full border-2 border-zinc-900 bg-neon-400 flex items-center justify-center text-xs text-black font-bold">+12k</div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-5 flex flex-col items-center text-center">
          <SectionBadge>Bạn trade trực tiếp trên sàn – chúng tôi không giữ tiền</SectionBadge>
        </Reveal>
      </Container>
    </section>
  );
}
