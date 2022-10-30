import { Toaster } from "react-hot-toast";
import "./App.css";
import PingUser from "./components/PingUser";
import ProvideConfiguration from "./components/ProvideConfiguration";
import Socket from "./components/Socket";

function App() {
  return (
    <>
      <ProvideConfiguration>
        <Socket>
          <PingUser />
        </Socket>

        <Toaster />
      </ProvideConfiguration>
    </>
  );
}

export default App;
