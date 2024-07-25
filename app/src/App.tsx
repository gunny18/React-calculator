import Buttons from "./Buttons";
import "./App.css";

const App = () => {
  return (
    <section className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <Buttons />
    </section>
  );
};

export default App;
