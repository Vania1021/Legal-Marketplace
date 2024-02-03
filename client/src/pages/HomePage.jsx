import { LandingPageComponent } from "../features/Home/Landing";
import { Navbar } from "../features/navbar/Navbar";
import { FooterComponent } from "../features/footer/footer";
function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPageComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
