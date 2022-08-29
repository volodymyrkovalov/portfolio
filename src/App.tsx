import Navbar from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Skills from "./containers/Skills/Skills";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
