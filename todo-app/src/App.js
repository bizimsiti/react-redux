import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import CountUp from "react-countup";

function App() {
  return (
    <>
      <CountUp end={100} />

      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
