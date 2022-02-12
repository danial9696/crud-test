import { useState } from "react";
// import Button from "./ui/Button";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextField";

const AddItem = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          method: "POST",
          body: JSON.stringify({
            ...state,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const res = await data.json();
      console.log(res);
    } catch (error) {
      throw new Error("Error creating new comment", error);
    }
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
          submit
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
