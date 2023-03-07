import { Link, Outlet } from "react-router-dom";

const Managebooks = (props) => {
  return (
    <>
      <ul >
        {props.list.map((item) => (
          <>
            <li>
              {item.book}|
              <Link to={`${item.id}`} state={item}>
                Manage
              </Link>
            </li>
          </>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
export default Managebooks;
