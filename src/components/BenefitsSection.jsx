import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { benefits } from "../data/siteData";

export default function BenefitsSection() {
  return (
    <section id="loi-ich" className="py-20 bg-zinc-950">
      <Container>
        <Reveal className="mb-12 text-center flex flex-col items-center">
          <SectionBadge>Gói quyền lợi</SectionBadge>
          <h2 className="text-3xl font-black md:text-5xl max-w-2xl mt-4 leading-tight">
            Hệ thống + cộng đồng giúp bạn trade hiệu quả hơn
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Reveal delay={100} className="flex flex-col rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-8 hover-panel hover-glow-border">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neon-400/20 text-neon-400 text-2xl">✨</div>
            <h3 className="text-xl font-bold text-white mb-2">Minh bạch rõ ràng</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[0]}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[1]}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[2]}</p>
          </Reveal>
          <Reveal delay={200} className="flex flex-col rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-8 hover-panel hover-glow-border">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neon-400/20 text-neon-400 text-2xl">🤝</div>
            <h3 className="text-xl font-bold text-white mb-2">Cộng đồng trader active</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[3]}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[4]}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[5]}</p>
          </Reveal>
          <Reveal delay={300} className="flex flex-col rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-8 hover-panel hover-glow-border">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neon-400/20 text-neon-400 text-2xl">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Hỗ trợ & kiến thức thực chiến</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[5]}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[6]}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefits[7]}</p>
          </Reveal>
        </div>

        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.2fr] rounded-[2rem] border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover-glow-border" duration={850}>
          <div className="p-10 flex flex-col justify-center">
            <SectionBadge>Gói quyền lợi VIP</SectionBadge>
            <h2 className="text-3xl font-black md:text-4xl mt-4 leading-tight mb-4 text-white">Hệ thống tín hiệu & bot hỗ trợ giao dịch mỗi ngày</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Được Admin hỗ trợ kiến thức 1:1. Tặng bộ tài liệu trading thực chiến trị giá 2000U. Các Plan độc quyền của VIP. Có cơ hội nhận được các giải thưởng Vol từ Admin.
            </p>
            <div className="mt-auto">
              <a href="https://okx.com/join/HOANPHI50" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-neon-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-white">Đăng ký VIP ngay</a>
            </div>
          </div>
          <div className="bg-black border-l border-zinc-800 min-h-[400px] flex items-center justify-center relative overflow-hidden group/video cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-400/10 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="h-48 w-48 md:h-72 md:w-72 rounded-full bg-zinc-900/50 backdrop-blur-md flex items-center justify-center border border-zinc-800 transition duration-500 group-hover/video:scale-110 overflow-hidden shadow-[0_0_100px_rgba(225,255,1,0.1)]">
                <img src="/bot.png" alt="botlogo" className="w-full h-full object-contain p-6" />
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-5 text-center flex flex-col items-center">
          <SectionBadge>Không cam kết lợi nhuận – trading luôn có rủi ro</SectionBadge>
        </Reveal>
      </Container>
    </section>
  );
}
