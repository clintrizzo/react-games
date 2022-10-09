import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TicTacToe3x3 from "./pages/TicTacToe3x3";
import TicTacToe4x4 from "./pages/TicTacToe4x4";
import ConnectFour from "./pages/ConnectFour";
import MemoryGame from "./pages/MemoryGame";
import Snake from "./pages/Snake";
import CandyCrush from "./pages/CandyCrush";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tictactoe3x3" element={<TicTacToe3x3 />} />
          <Route path="tictactoe4x4" element={<TicTacToe4x4 />} />
          <Route path="connectfour" element={<ConnectFour />} />
          <Route path="memorygame" element={<MemoryGame />} />
          <Route path="snake" element={<Snake />} />
          <Route path="candycrush" element={<CandyCrush />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));