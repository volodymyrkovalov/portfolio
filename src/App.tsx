import Navbar from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Skills from "./containers/Skills/Skills";
import "./App.scss";
import Work from "./containers/Work/Work";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
