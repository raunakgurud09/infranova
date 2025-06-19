import { Counter } from "./components/counter";
import { Interactive } from "./components/Interactive";

function App() {
  return (
    <main className="h-screen w-screen">
      <div className="p-20">
        <Counter />
        <Interactive />
      </div>
    </main>
  );
}

export default App;
