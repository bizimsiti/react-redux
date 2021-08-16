import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Content />
        <Cart />
      </div>
    </>
  );
}

export default App;
