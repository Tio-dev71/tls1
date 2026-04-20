import Container from "./Container";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-black pt-20">
      <Container>
        {/* Glow CTA Card */}
        <Reveal className="relative overflow-hidden mb-20 rounded-[2rem] border border-neon-400/20 bg-zinc-900 p-12 text-center shadow-[0_0_80px_rgba(225,255,1,0.1)]">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-neon-400/20 to-transparent blur-3xl rounded-full"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl font-black md:text-5xl max-w-lg mb-4 text-white">Nâng tầm giao dịch của bạn</h2>
            <p className="text-zinc-400 mb-8 max-w-sm">Hãy sẵn sàng bắt đầu hành trình hoàn phí với Traderlaso1 ngay hôm nay.</p>
            <div className="flex w-full overflow-hidden rounded-full border border-zinc-700 bg-black/50 p-1 backdrop-blur-xl max-w-md">
              <input type="text" placeholder="john@email.com" className="flex-1 bg-transparent px-4 border-none outline-none text-white text-sm" />
              <button
                type="button"
                className="w-auto flex-1 rounded-full bg-neon-400 px-6 py-3 font-bold text-black transition hover:bg-neon-500"
              >
                Bắt đầu
              </button>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-900 py-8 text-sm font-medium text-zinc-500">
          <div className="flex items-center gap-3 mb-4 md:mb-0 opacity-80 grayscale">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-black">
              <span className="text-xs">⚡</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="/" className="hover:text-white transition">Privacy & Cookies Policy</a>
            <a href="/" className="hover:text-white transition">Terms & Conditions</a>
          </div>
          <div className="mt-4 md:mt-0">Traderlaso1</div>
        </div>
      </Container>
    </footer>
  );
}
