import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container>
        <div className="rounded-[2rem] border border-yellow-400/20 bg-black/70 p-8 text-center shadow-[0_0_40px_rgba(250,204,21,0.08)]">
          <div className="text-sm uppercase tracking-[0.3em] text-yellow-300">404</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Không tìm thấy trang</h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Route bạn nhập không tồn tại hoặc chưa được cấu hình trong website.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-2xl bg-yellow-400 px-6 py-3.5 font-bold text-black transition hover:scale-[1.02]"
          >
            Quay về trang chủ
          </Link>
        </div>
      </Container>
    </section>
  );
}
