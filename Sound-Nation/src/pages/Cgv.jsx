import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { DisplayCgv } from "../components/DisplayCgv";

export const Cgv = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <DisplayCgv />
      </section>
      <nav>
        <Nav />
      </nav>
    </div>
  );
};
