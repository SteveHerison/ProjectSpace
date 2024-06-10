import BackgroundCrew from "../../assets/crew/background-crew-desktop.jpg";

const Crew = () => {
  return (
    <main className="h-full w-full">
      <div
        className="h-full pt-40 w-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${BackgroundCrew})`,
        }}>
        <section className=" h-full w-full flex text-white justify-center items-end"></section>
      </div>
    </main>
  );
};

export default Crew;
