import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router";

import BookItemHttpFunction from "./bookItemHttpFunction";

function BookStoreHttpFunction(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("List of Books");
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    //make a async http request for fetch the data
    fetch("http://localhost:4000/book")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAllBooks(data);
      })
      .catch(err => console.log(err));
  }, []);

  //   .catch((err)=>console.log(err))
  // },[]);

  const renderAllBooks = () => {
    return allBooks.map(eachBook => (
      <BookItemHttpFunction
        key={eachBook.id}
        data={eachBook}
        onDelete={() => handleDelete(eachBook)}
        // onView={()=>handleView(eachBook)}></BookItemFunction>
        // onDelete={(bookData)=>handleDelete(bookData)}
        // onView={(bookData)=>handleView(bookData)}></BookItemFunction>
        // onDelete={handleDelete}
        // onView={handleView}
        onView={handleView}
      ></BookItemHttpFunction>
    ));
  };

  const handleDelete = book => {
    let allBook = allBooks;
    allBook = allBook.filter(eBook => eBook.id !== book.id);
    setAllBooks(allBook);
  };
  const handleAddNewBook = () => {
    navigate("/bookAddHttpFunction");
  };
  const handleView = book => {
    navigate(`bookviewHttpFunction/${book.id}`);
  };

  return (
    <div className="container m-5">
      <h3>{title}</h3>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleAddNewBook}
      >
        Add New Book
      </button>
      <Outlet></Outlet>
      <table className="table table-striped">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Cost</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderAllBooks()}</tbody>
      </table>
    </div>
  );
}

export default BookStoreHttpFunction;
