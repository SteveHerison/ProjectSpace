import BackgroundHome from "../../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <main className="h-full w-full">
      <div
        className="h-full pt-40 w-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${BackgroundHome})`,
        }}>
        <section className=" h-full w-full py-32 px-48 flex text-white justify-center items-end">
          <div className="flex items-center justify-between gap-12 px-10">
            <div className="w-1/2">
              <div className="flex flex-col gap-4">
                <p className="text-2xl">So, you want to travel to</p>
                <h1 className="text-9xl">Space</h1>
                <p className="text-lg">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
            </div>
            <div>
              <div
                className="h-[30rem] w-[30rem] bg-black  flex items-center justify-center rounded-full relative"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(3px)",
                }}>
                <button className="w-72 h-72  rounded-full bg-white text-black absolute text-4xl text-opacity-40 ">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
