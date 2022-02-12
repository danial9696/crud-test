import Card from "./ui/Card";
import ListContext from "../context/store";
import { useContext } from "react";

const List = () => {
  const lists = useContext(ListContext);
  console.log(useContext(ListContext));

  const listOFCards = lists.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="c-list">
      <div className="list">{listOFCards}</div>
    </div>
  );
};

export default List;
