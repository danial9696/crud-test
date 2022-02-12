import "../src/sass/reset.scss";
import "../src/sass/style.scss";
import AppRouter from "./router/AppRouter";
import { useEffect, useState } from "react";
import ListContext from "./context/store";
const LIMITED_NUM = 50;

function App() {
  const [list, setList] = useState([]);
  const [isFethcing, setIsFethcing] = useState(false);

  const fetchAll = async () => {
    try {
      setIsFethcing(true);
      const data = await fetch("https://jsonplaceholder.typicode.com/comments");
      const comments = await data.json();
      const shownComments = comments.filter((item, idx) => idx < LIMITED_NUM);
      setList(shownComments);
      setIsFethcing(false);
    } catch (err) {
      return <div>No item found</div>;
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  let provider = { list, isFethcing };

  return (
    <ListContext.Provider value={provider}>
      <AppRouter />
    </ListContext.Provider>
  );
}

export default App;
