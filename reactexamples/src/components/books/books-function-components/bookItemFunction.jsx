import React from "react";

function BookItemFunction(props) {
  return (
    <React.Fragment>
      <tr key={props.data.id}>
        <td>{props.data.id}</td>
        <td>
          <img
            src={props.data.bookImageUrl}
            alt="image of book"
            height="100px"
            width="150px"
          ></img>
        </td>
        <td>{props.data.bookTitle}</td>
        <td>{props.data.bookAuthor}</td>
        <td>{props.data.bookGenre}</td>
        <td>{props.data.bookCost}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning btn-xs"
            onClick={() => props.onView(props.data)}
          >
            View
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-xs"
            onClick={() => props.onDelete(props.data)}
          >
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default BookItemFunction;
