import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";

const reasons = [
  ["Độ tín nhiệm cao", "Là cộng đồng đối tác độc quyền của OKX"],
  ["Thoải mái chia sẻ và hỏi đáp", "Luôn sẵn sàng chia sẻ kiến thức với các member mới"],
  ["Không yêu cầu vốn tối thiểu", "Là cộng đồng có nhóm VIP mà không yêu cầu vốn tối thiểu, luôn sẵn sàng hỗ trợ VIP cho các member muốn trải nghiệm"],
];

export default function ReasonSection() {
  return (
    <section className="py-16">
      <Container>
        <Reveal className="mb-8 max-w-3xl">
          <SectionBadge>Lý do nên tham gia Traderlaso1</SectionBadge>
          <h2 className="text-3xl font-black md:text-5xl">Là cộng đồng đầu tiên sử dụng tín hiệu Bot winrate lên tới 99%.</h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map(([title, desc], index) => (
            <Reveal key={title} delay={index * 90} className="hover-lift rounded-[1.75rem] border border-zinc-800 bg-zinc-950/80 p-6">
              <h3 className="text-xl font-bold text-lime-300">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
