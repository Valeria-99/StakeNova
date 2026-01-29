import { AwardsDrawer } from "./components/layout/AwardsDrawer/AwardsDrawer";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <AwardsDrawer />
    </>
  );
}
