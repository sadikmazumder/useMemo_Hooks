import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>useMemo</h1>
      <h5>Returns a memorized value </h5>
      <Counter />
    </div>
  );
}
