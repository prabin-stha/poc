import "./App.css";
import { DiamondCard } from "./diamond-commerce/card-hover-poc";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "12px",
      }}
    >
      {Array.from({ length: 5 }, () => (
        <DiamondCard />
      ))}
    </div>
  );
}

export default App;
