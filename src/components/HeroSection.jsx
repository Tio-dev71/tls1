import Container from "./Container";
import Reveal from "./Reveal";

export default function HeroSection({ onOpenGuide }) {
  return (
    <section id="gioi-thieu" className="relative pb-16 pt-20 lg:pt-28 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 glow-arch"></div>
      <div className="glow-dot-matrix"></div>
      
      <Container className="relative z-10 flex flex-col items-center">
        <Reveal className="-mt-12 md:-mt-16 mb-8 inline-flex rounded-full border border-neon-400/20 bg-neon-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neon-400" delay={80}>
          Chào mừng bạn đến với Traderlaso1
        </Reveal>

        <Reveal as="h1" className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl" delay={140}>
          <span className="text-white">Hoàn lại đến </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-lime-200">50% phí giao dịch</span>
          <br />mỗi ngày
        </Reveal>

        <Reveal as="p" className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-400 font-light" delay={220}>
          Khi đăng ký hoàn phí trong hệ thống: Trade Crypto & Forex, Bot tự động ghi nhận & hoàn phí sau mỗi ngày. Có cộng đồng tín hiệu & nhóm tín hiệu hỗ trợ.
        </Reveal>

        <Reveal className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mx-auto" delay={300}>
          <div className="flex w-full overflow-hidden rounded-full border border-zinc-700 bg-zinc-900/50 p-1 backdrop-blur-xl">
             <a
                href="#san"
                className="w-full sm:w-auto flex-1 rounded-full bg-neon-400 px-8 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(225,255,1,0.3)] transition hover:bg-neon-500 hover:scale-105"
              >
                Nhận hoàn phí ngay
              </a>
              <a
                href="https://discord.gg/psZnKmM82d"
                className="w-full sm:w-auto flex-1 flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:text-neon-400"
              >
                Vào Group Miễn Phí
              </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
