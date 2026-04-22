import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "Zalo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="none" />
        <path d="M16.5 10.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-4.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-4.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" opacity=".3" />
        <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" dy=".3em" fontFamily="Arial">Zalo</text>
      </svg>
    ),
    color: "bg-[#0084FF]",
    href: "https://zalo.me/0377333096",
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "bg-[#1877F2]",
    href: "https://www.facebook.com/traderlaso1official",
  },
  {
    name: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7.021l-2.022 9.539c-.15.676-.551.844-1.117.525l-3.078-2.27-1.485 1.428c-.164.164-.302.302-.619.302l.221-3.136 5.711-5.158c.248-.221-.053-.344-.383-.125l-7.059 4.444-3.041-.951c-.661-.207-.674-.661.138-.978l11.884-4.582c.551-.207 1.033.125.844.761z" />
      </svg>
    ),
    color: "bg-[#0088CC]",
    href: "https://t.me/baotran_tls1",
  },
  {
    name: "Discord",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" width="22" height="22">
        <path d="M13.545 2.907a13.222 13.222 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.02-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.069 8.653 8.653 0 0 1-1.157-.552.05.05 0 0 1-.005-.084c.08-.058.158-.12.234-.183a.05.05 0 0 1 .054-.007 11.246 11.246 0 0 0 8.532 0 .05.05 0 0 1 .054.007c.076.063.154.125.234.183a.05.05 0 0 1-.005.084 8.647 8.647 0 0 1-1.157.552.05.05 0 0 0-.027.069c.236.466.51.91.818 1.329a.05.05 0 0 0 .056-.019 13.284 13.284 0 0 0 3.995-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.337c-.789 0-1.438-.724-1.438-1.612 0-.889.658-1.613 1.438-1.613.789 0 1.438.724 1.438 1.613 0 .889-.649 1.612-1.438 1.612Zm5.316 0c-.789 0-1.438-.724-1.438-1.612 0-.889.658-1.613 1.438-1.613.789 0 1.438.724 1.438 1.613 0 .889-.649 1.612-1.438 1.612Z" />
      </svg>
    ),
    color: "bg-[#5865F2]",
    href: "https://discord.gg/6ekNmA83",
  },
];

export default function FloatingButtons({ onOpenGuide }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
      {/* Social Links Stack */}
      <div className={`flex flex-col gap-3 transition-all duration-500 ease-in-out ${isExpanded ? "mb-0 opacity-100 translate-y-0" : "mb-[-100%] opacity-0 translate-y-10 pointer-events-none"}`}>
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${link.color}`}
            style={{ transitionDelay: `${(socialLinks.length - 1 - index) * 50}ms` }}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Main Support Toggle Button */}
      <div className="group relative">
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-4 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1">
            <div className="relative rounded-xl bg-neon-400 px-4 py-2.5 text-[13px] font-bold text-black whitespace-nowrap shadow-xl">
              Hỗ Trợ Nhanh
              <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-neon-400"></div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-neon-400 text-black shadow-[0_0_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] active:scale-95 ${isExpanded ? "rotate-90 scale-105" : ""}`}
          aria-label="Mở hỗ trợ"
        >
          {isExpanded ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-neon-400 shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 ${showScrollTop ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-50 pointer-events-none"
          }`}
        aria-label="Quay lại đầu trang"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}
