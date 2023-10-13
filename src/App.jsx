
import { About } from "./components/About";
import { Header } from "./components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./index.css";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="max-w-[1640px]  bg-[#0F172A] p-2">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
