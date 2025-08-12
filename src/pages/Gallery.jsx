import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Carousel from "../components/sub-components/Carousel";

function Gallery() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero>
          <Carousel />
          <Navigation />
        </Hero>
      </main>
    </>
  );
}

export default Gallery;
