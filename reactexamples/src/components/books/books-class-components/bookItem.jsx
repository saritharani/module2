import React, { Component } from "react";

class BookItem extends Component {
  render() {
    console.log("props:", this.props);
    return (
      <React.Fragment>
        <tr key={this.props.data.id}>
          <td>{this.props.data.id}</td>
          <td>
            <img
              src={this.props.data.bookImageUrl}
              alt="image of book"
              height="100px"
              width="150px"
            ></img>
          </td>
          <td>{this.props.data.bookTitle}</td>
          <td>{this.props.data.bookAuthor}</td>
          <td>{this.props.data.bookGenre}</td>
          <td>{this.props.data.bookCost}</td>
          {/* <td>
            <button
              type="button"
              className="btn btn-danger btn-xs"
              onClick={handleDelete}
            >
              Delete
            </button>
          </td> */}
          <td>
            <button
              type="button"
              className="btn btn-danger btn-xs"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
  //   handleDelete = () => {};
}

export default BookItem;
