import { Button } from "@material-ui/core";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Card from "./ui/Card";
import ListContext from "../context/store";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const List = () => {
  const { list, isFethcing } = useContext(ListContext);

  const history = useHistory();
  const location = useLocation();

  const openEditPage = (id) => {
    history.push(`${location.pathname}edit/${id}`);
  };

  const deleteHandler = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const listOFCards = list.map((item) => {
    return (
      <Card key={item.id} {...item}>
        <Button
          onClick={() => openEditPage(item.id)}
          variant="contained"
          color="secondary"
        >
          Edit
        </Button>

        <Button
          onClick={() => deleteHandler(item.id)}
          variant="contained"
          color="default"
        >
          Delete
        </Button>
      </Card>
    );
  });

  return (
    <div className="c-list">
      <div className="list">
        {isFethcing ? (
          <Backdrop open={isFethcing} zindex="100">
            <CircularProgress />
          </Backdrop>
        ) : (
          listOFCards
        )}
      </div>
    </div>
  );
};

export default List;
