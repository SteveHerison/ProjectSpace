import Header from "../../components/Header";
import RoutesMain from "../../routes";

function Layout() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <RoutesMain />
    </div>
  );
}

export default Layout;
