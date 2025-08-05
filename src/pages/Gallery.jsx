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
        <Carousel />
        <Navigation />
      </main>
    </>
  );
}

export default Gallery;
