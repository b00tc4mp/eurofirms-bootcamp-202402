import { Carousel } from "@material-tailwind/react";

export function HomeCarousel() {
  return (
    <Carousel autoplay autoplayDelay={5000} loop transition={{ duration: 3 }} className="rounded-xl h-96 mt-4">
      <img
        src="/src/assets/Manuel1Carousel.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/src/assets/Manuel2Carousel.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/src/assets/Manuel3Carousel.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default HomeCarousel