import { useState } from "react";
import BackgroundDestination from "../../assets/destination/background-destination-desktop.jpg";
import MoonPng from "../../assets/destination/image-moon.png";
import MoonWebp from "../../assets/destination/image-moon.webp";
import MarsPng from "../../assets/destination/image-mars.png";
import MarsWebp from "../../assets/destination/image-mars.webp";
import EuropaPng from "../../assets/destination/image-europa.png";
import EuropaWebp from "../../assets/destination/image-europa.webp";
import TitanPng from "../../assets/destination/image-titan.png";
import TitanWebp from "../../assets/destination/image-titan.webp";

const destinations = [
  {
    name: "Moon",
    images: {
      png: MoonPng,
      webp: MoonWebp,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: MarsPng,
      webp: MarsWebp,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: EuropaPng,
      webp: EuropaWebp,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: TitanPng,
      webp: TitanWebp,
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const handleButtonFilter = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <main className="h-full w-full">
      <div
        className="h-full pt-40 w-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${BackgroundDestination})`,
        }}>
        <section className="h-full w-full flex py-12 px-48 text-white">
          <div className="flex flex-col gap-10 w-full h-full">
            <h1 className="text-4xl flex gap-3">
              {" "}
              <p>01</p> Pick your destination
            </h1>
            <div className="flex h-full w-full justify-center items-center">
              <div className="w-1/2 flex justify-center">
                <picture>
                  <source
                    srcSet={selectedDestination.images.webp}
                    type="image/webp"
                  />
                  <img
                    src={selectedDestination.images.png}
                    alt={selectedDestination.name}
                    className="max-h-[800px] object-cover"
                  />
                </picture>
              </div>
              <div className="w-1/2 flex flex-col px-40 items-center justify-center">
                <div className="items-start justify-center flex flex-col">
                  <div className="flex gap-4 pb-10">
                    {destinations.map((destination, index) => (
                      <button
                        key={index}
                        onClick={() => handleButtonFilter(destination)}
                        className={`py-2 px-4 ${
                          selectedDestination.name === destination.name
                            ? "border-b-2 border-white"
                            : ""
                        }`}>
                        {destination.name.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <h2 className="text-8xl font-bold">
                    {selectedDestination.name}
                  </h2>
                  <p className="my-4 text-lg text-justify">
                    {selectedDestination.description}
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <h3 className="text-sm">Avg. Distance</h3>
                      <p className="text-2xl font-semibold">
                        {selectedDestination.distance}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm">Est. Travel Time</h3>
                      <p className="text-2xl font-semibold">
                        {selectedDestination.travel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Destination;
