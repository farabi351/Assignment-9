import dog from "../assets/dog.jpg"
import cat from "../assets/cat.jpg"
import cat2 from "../assets/cat2.jpg"
import mini from "../assets/mini.jpg"

const Slider = () => {
  return (
    <div className="carousel w-full h-[400px]">

      <div id="slide1" className="carousel-item relative w-full">
        <img src={dog} className="w-[520px] object-cover md:w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={cat2} className="w-[520px] object-cover md:w-full" />
        <div className="absolute flex justify-between left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={dog} className="w-[520px] object-cover md:w-full" />
        <div className="absolute flex justify-between left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Slider;