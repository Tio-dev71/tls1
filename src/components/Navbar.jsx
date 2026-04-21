import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import { exchangePages } from "../data/exchangePages";

const baseLinkClass = ({ isActive }) =>
  `nav-link transition px-4 py-1.5 rounded-full text-sm font-medium ${isActive ? "text-white bg-zinc-800" : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"}`;

export default function Navbar({ onOpenGuide }) {
  return (
    <header className="sticky top-0 z-40 py-5">
      <Container className="flex items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black transition duration-300 group-hover:scale-105">
            <img src="/logo.jpg" alt="logoTLS1" className="rounded-md"/>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 p-1 backdrop-blur-xl md:flex">
          <NavLink to="/" end className={baseLinkClass}>
            Trang chủ
          </NavLink>

          <div className="group relative">
            <button className={`${baseLinkClass({ isActive: false })} flex items-center gap-1.5`}>
              Hoàn Phí Crypto
              <span className="text-[10px] opacity-70 transition duration-300 group-hover:rotate-180">▼</span>
            </button>

            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl">
                {exchangePages.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/${item.slug}`}
                    className="mb-1 flex items-center justify-between rounded-xl px-3 py-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-neon-400">{item.totalRebate}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href="/#loi-ich" className={baseLinkClass({ isActive: false })}>
            Lợi ích
          </a>
          <a href="/#faq" className={baseLinkClass({ isActive: false })}>
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onOpenGuide?.({ source: "navbar-button" })}
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Nhận hướng dẫn
          </button>
        </div>
      </Container>
    </header>
  );
}
