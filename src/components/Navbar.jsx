import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import { exchangePages } from "../data/exchangePages";

const baseLinkClass = ({ isActive }) =>
  `nav-link transition ${isActive ? "text-lime-300" : "text-zinc-300 hover:text-lime-300"}`;

export default function Navbar({ onOpenGuide }) {
  return (
    <header className="sticky top-0 z-40 border-b border-lime-500/10 bg-black/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/30 bg-lime-400/10 shadow-[0_0_30px_rgba(250,204,21,0.15)] transition duration-300 group-hover:scale-105 group-hover:rotate-3">
            <span className="text-xl">⚡</span>
          </div>
          <div>
            <div className="text-lg font-black tracking-wide text-lime-300 transition duration-300 group-hover:tracking-[0.14em]">TRADERLASO1</div>
            <div className="text-xs text-zinc-400">BACKCOMTLS1</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <NavLink to="/" end className={baseLinkClass}>
            Trang chủ
          </NavLink>

          <div className="group relative after:absolute after:left-0 after:top-full after:h-5 after:w-full after:content-['']">
            <button className="nav-link flex items-center gap-2 text-zinc-300 transition hover:text-lime-300">
              Hoàn Phí Crypto
              <span className="text-xs transition duration-300 group-hover:translate-y-0.5">▼</span>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-[1.75rem] border border-lime-400/20 bg-black/95 p-3 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
                {exchangePages.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/${item.slug}`}
                    className="mb-2 flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-zinc-200 transition hover:border-lime-400/20 hover:bg-zinc-950 hover:text-lime-300"
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-xs text-zinc-500">{item.totalRebate}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href="/#loi-ich" className="nav-link text-zinc-300 transition hover:text-lime-300">
            Lợi ích
          </a>
          <a href="/#faq" className="nav-link text-zinc-300 transition hover:text-lime-300">
            FAQ
          </a>
        </nav>

        <button
          type="button"
          onClick={() => onOpenGuide?.({ source: "navbar-button" })}
          className="button-glow rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_20px_rgba(250,204,21,0.25)] transition hover:scale-105"
        >
          Nhận hướng dẫn
        </button>
      </Container>
    </header>
  );
}
