import BackgroundHome from "../../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <main
      className="h-full w-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BackgroundHome})`,
      }}></main>
  );
};

export default Home;
