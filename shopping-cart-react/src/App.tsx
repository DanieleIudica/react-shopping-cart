import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { MyNavbar } from "./components/MyNavbar";
import "./style/style.css";
import { useAtom } from "jotai";
import { darkModeAtom } from "./atom/atom";

function App() {
  const [darkMode] = useAtom(darkModeAtom);
  return (
    <>
      <MyNavbar />
      <Container
        fluid
        className={darkMode ? "dark-mode full-screen" : "full-screen"}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
