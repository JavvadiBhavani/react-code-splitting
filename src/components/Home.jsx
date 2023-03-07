import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <nav >
        <Link to="Addbook" class="navbar-brand">
          Add book
        </Link><br/><br/>
        <Link to="managebooks" class="navbar-brand">
          Manage books
        </Link>
      </nav>
      <div >
        <h4 >Available Books in library</h4>
      </div>
      <div >
        <ul >
          {props.list.map((item) => (
            <>
              <li> {item.book} </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
