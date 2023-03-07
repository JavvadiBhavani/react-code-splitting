import { Route, Routes } from "react-router";
import React, { useState } from "react";
import { Suspense } from "react";
//import Addbook from "./Addbook";
import Home from "./components/Home";
import Bookinfo from "./components/Bookinfo";
import "./styles.css";
//import Managebooks from "./components/Managebooks";
import Header from "./components/Header";
const Addbook = React.lazy(() => import("./Addbook"));
const Managebooks = React.lazy(() => import("./components/Managebooks"));
export default function App() {
  const [count, setCount] = useState(4);
  const [list, setList] = useState([
    {
      id: 1,
      book: "PYTHON",
      author: "BHAVANI",
      year: "1926"
    },
    {
      id: 2,
      book: "PHP",
      author: "YASWANTH",
      year: "1898"
    },
    {
      id: 3,
      book: "C++",
      author: "RAM",
      year: "2001"
    },
    {
      id: 4,
      book: "C",
      author: "SAM",
      year: "1943"
    },
    
  ]);
  const handleAdd = (b, a, y) => {
    if (b === "" && a === "" && y === "") return;
    setCount(count + 1);
    setList([...list, { id: count, book: b, author: a, year: y }]);
  };
  const handleDelete = (id) => {
    const newarr = list.filter((item) => item.id !== id);
    setList(newarr);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home list={list} />}></Route>
        <Route
          path="managebooks/:id"
          element={<Bookinfo list={list} handleDelete={handleDelete} />}
        ></Route>
        <Route path="managebooks" element={ <Suspense fallback="Loading">
         <Managebooks list={list} /> </Suspense>}></Route>
        <Route
          path="Addbook"
          element={<Suspense fallback="Loading"><Addbook handleAdd={handleAdd} /></Suspense>}
        ></Route>
      </Routes>
    </div>
  );
}
