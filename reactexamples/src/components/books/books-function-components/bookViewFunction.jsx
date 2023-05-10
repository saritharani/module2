import React from "react";
import { useParams, Link } from "react-router-dom";
function BookViewFunction() {
  const params = useParams();
  return (
    <div>
      {/* <h2> {params.bookId}</h2> */}
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h2>book view</h2>
          </div>
          <div className="card-body">{params.bookId}</div>
          <div className="card-footer bg-success">
            <Link
              className="btn btn-light text-warning"
              to="/bookStoreFunctional"
            >
              close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookViewFunction;
