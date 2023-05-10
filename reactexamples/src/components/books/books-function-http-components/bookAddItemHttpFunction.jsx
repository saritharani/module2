import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookAddHttpFunction() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Add new Book");
  const [newBook, setNewBook] = useState({
    id: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: "",
    bookImageUrl: ""
  });

  const handleSubmitBook = event => {
    event.preventDefault();
    console.log("newbook", JSON.stringify(newBook));
  };

  return (
    <div className="container m-3">
      <form onSubmit={handleSubmitBook}>
        <div className="card">
          <div className="card-header bg-success text-white">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <div>
              <lable htmlFor="idBookTitle" className="form-lable">
                Book Title:
              </lable>
              <input
                type="text"
                id="idBookTitle"
                className="form-control"
                onChange={event =>
                  setNewBook({ ...newBook, bookTitle: event.target.value })
                }
              />
            </div>
            <div>
              <lable htmlFor="idBookAuthor" className="form-lable">
                Book Author:
              </lable>
              <input
                type="text"
                id="idBookAuthor"
                className="form-control"
                onChange={event =>
                  setNewBook({ ...newBook, bookAuthor: event.target.value })
                }
              />
            </div>
            <div>
              <lable htmlFor="idBookGenre" className="form-lable">
                Book Genre:
              </lable>
              <select
                id="idBookGenre"
                className="form-control"
                onChange={event =>
                  setNewBook({ ...newBook, bookGenre: event.target.value })
                }
              >
                <option value="Comedy">Comedy</option>
                <option value="Fiction">Fiction</option>
                <option value="Biography">Biography</option>
              </select>
            </div>
            <div>
              <lable htmlFor="idBookCost" className="form-lable">
                Book Cost:
              </lable>
              <input
                type="text"
                id="idBookCost"
                className="form-control"
                onChange={event =>
                  setNewBook({ ...newBook, bookCost: event.target.value })
                }
              />
            </div>
            <div>
              <lable htmlFor="idBookImageUrl" className="form-lable">
                Book Image URL:
              </lable>
              <input
                type="text"
                id="idBookImageUrl"
                className="form-control"
                onChange={event =>
                  setNewBook({ ...newBook, bookImageUrl: event.target.value })
                }
              />
            </div>
            <div className="card-footer bg-success">
              <button type="submit" className="btn btn-light text-dark">
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookAddHttpFunction;
