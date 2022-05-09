import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection name="Anne" age={20} bool={true} />
    </div>
  );
}

export default App;
