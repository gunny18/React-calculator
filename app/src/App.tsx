import Buttons from "./components/Buttons";
import Output from "./components/Output";
import "./App.css";

const App = () => {
  return (
    <section className="calculator-grid">
      <Output />
      <Buttons />
    </section>
  );
};

export default App;
