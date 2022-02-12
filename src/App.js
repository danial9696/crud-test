import "../src/sass/reset.scss";
import AppRouter from "./router/AppRouter";
import { useEffect, useState } from "react";
import ListContext from "./context/store";
const LIMITED_NUM = 50;

function App() {
  const [list, setList] = useState([]);

  const fetchAll = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await data.json();
    const shownComments = comments.filter((item, idx) => idx < LIMITED_NUM);
    setList(shownComments);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <ListContext.Provider value={list}>
      <AppRouter />
    </ListContext.Provider>
  );
}

export default App;
