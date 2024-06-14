import { Carousel } from "@material-tailwind/react";

export function HomeCarousel() {
  return (
    <Carousel autoplay autoplayDelay={5000} loop transition={{ duration: 2 }} className="rounded-xl h-96 mt-4">
      <img
        src="logotipo-MSM-03.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="manuel1carousel.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="manuel2carousel.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="manuel3carousel.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      
    </Carousel>
  );
}

export default HomeCarousel