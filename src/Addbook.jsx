import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Addbook = (props) => {
  return (
    <>
      <h1>Add a book to Library</h1>
      <form id="myform">
        <input type="text" name="book" placeholder="Enter book name" />
        <input type="text" name="author" placeholder="Enter author name" />
        <input type="text" name="year" placeholder="Year of publication" />
        <Button
          type="submit"
          onClick={() =>
            props.handleAdd(
              document.getElementById("myform").book.value,
              document.getElementById("myform").author.value,
              document.getElementById("myform").year.value
            )
          }
          component={Link}
          to="../"
        >
          Add
        </Button>
      </form>
    </>
  );
};

export default Addbook;