import "./App.css";
import Search from "./Compenents/Search";
import Form from "./Compenents/Form";
import Notes from "./Compenents/Notes";
function App() {
  return (
    <div className="container">
      <h1>Notes App</h1>
      <Search />
      <Form />
      <Notes />
    </div>
  );
}

export default App;
