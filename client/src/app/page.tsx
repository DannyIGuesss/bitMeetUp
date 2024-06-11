import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 gap-4 h-screen-92 bg-transparent">
        <section className="col-span-1 text-center">
          <h2> Today in crypto</h2>
        </section>
        <section className="col-start-2 row-span-2 text-center">
          <h2>Upcoming events</h2>
        </section>
        <aside className=" block text-center">
          <h2>Awesome Articles</h2>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
