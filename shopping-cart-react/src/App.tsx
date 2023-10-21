import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { MyNavbar } from "./components/MyNavbar";
import "./style/style.css";
import { useAtom } from "jotai";
import { darkModeAtom } from "./atom/atom";
import { ShoppingCart } from "./components/ShoppingCart";

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
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ShoppingCart />
      </Container>
    </>
  );
}

export default App;
