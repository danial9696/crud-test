import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextField";
const URL = "https://jsonplaceholder.typicode.com/comments";

const ItemsForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const { id } = useParams();
  const { location, push } = useHistory();
  const isEditPage = location.pathname.includes("/edit/");

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const editOrCreate = async (method = "POST", url = URL, id = null) => {
    try {
      const data = await fetch(url, {
        method,
        body: JSON.stringify({
          ...state,
          id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const res = await data.json();
      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditPage) {
      const url = `${URL}/${id}`;
      console.log(url);
      editOrCreate("PUT", url, id);
    } else {
      editOrCreate();
    }

    push("/");
  };

  return (
    <div className="c-add-item">
      <form>
        <div className="form-control">
          <TextField
            required
            id="outlined-required"
            label="name"
            value={state.name}
            name="name"
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div className="form-control">
          <TextField
            required
            type="email"
            label="email"
            value={state.email}
            name="email"
            fullWidth
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            value={state.comment}
            name="comment"
            onChange={handleChange}
            rows="10"
            label="comment"
            fullWidth
          />
        </div>

        <Button onClick={handleSubmit} variant="contained" color="primary">
          {isEditPage ? "Edit" : "Add"}
        </Button>
      </form>
    </div>
  );
};

export default ItemsForm;
