import React, { useState } from "react";
import BookItemFunction from "./bookItemFunction";
import { useNavigate, Outlet } from "react-router";

function BookStoreFunction() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("List of Books");
  const [allBooks, setAllBooks] = useState([
    {
      id: 101,
      bookTitle: "Harry Potter and the Order Of Phoenix",
      bookAuthor: "J.K.Rowling",
      bookGenre: "Fiction",
      bookCost: "200",
      bookImageUrl:
        "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
    },
    {
      id: 102,
      bookTitle: "Harry Potter and the Sorcerers' Stone",
      bookAuthor: "J.K.Rowling",
      bookGenre: "Fiction",
      bookCost: "300",
      bookImageUrl:
        "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 103,
      bookTitle: "Harry Potter and the Sorcerers' Rock",
      bookAuthor: "abcd",
      bookGenre: "comedy",
      bookCost: "500",
      bookImageUrl:
        "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
  ]);
  const renderAllBooks = () => {
    return allBooks.map(eachBook => (
      <BookItemFunction
        key={eachBook.id}
        data={eachBook}
        onDelete={() => handleDelete(eachBook)}
        // onView={()=>handleView(eachBook)}></BookItemFunction>
        // onDelete={(bookData)=>handleDelete(bookData)}
        // onView={(bookData)=>handleView(bookData)}></BookItemFunction>
        // onDelete={handleDelete}
        // onView={handleView}
        onView={handleView}
      ></BookItemFunction>
    ));
  };

  const handleDelete = book => {
    let allBook = allBooks;
    allBook = allBook.filter(eBook => eBook.id !== book.id);
    setAllBooks(allBook);
  };
  const handleAddNewBook = () => {
    navigate("/bookAddItemFunction");
  };
  const handleView = book => {
    navigate(`bookviewFunction/${book.id}`);
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

export default BookStoreFunction;
