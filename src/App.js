import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Info from "./components/Info";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <Info />
      <About />
    </div>
  );
}
