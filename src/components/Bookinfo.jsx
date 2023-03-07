import { useLocation } from "react-router-dom";
import {Button} from "@mui/material"
import { Link} from "react-router-dom";
const Bookinfo = (props) => {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <h2>Book information tab</h2>
      <div>Book Name : {state.book}</div>
      <div>Author : {state.author}</div>
      <div>Book Published Year: {state.year}</div>
      <Button
        component={Link}
        to="../"
        onClick={()=>props.handleDelete(state.id)}
        >Delete
        </Button>
    </>
  );
};

export default Bookinfo;
