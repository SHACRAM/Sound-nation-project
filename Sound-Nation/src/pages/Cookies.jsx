// import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { DisplayCookies } from "../components/DisplayCookies";

export const Cookies = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <DisplayCookies />
      </section>
      {/* <nav>
        <Nav />
      </nav> */}
    </div>
  );
};
