import React from "react";
import "./App.css";
import Text from "./components/text";
import Display from "./components/display";
import ListFlowers from "./components/listFlowers";
import Counter from "./components/counter";
import TableForm from "./components/displayTable";
import BookStore from "./components/books/books-class-components/bookStore";
import BookStoreFunction from "./components/books/books-function-components/bookStoreFunction";
import { Routes, Route } from "react-router";
import Header from "./components/header";
import BookAddFunction from "./components/books/books-function-components/bookAddItemFunction";
import BookViewFunction from "./components/books/books-function-components/bookViewFunction";
import BookStoreHttpFunction from "./components/books/books-function-http-components/bookStoreHttpFunction";
import BookViewHttpFunction from "./components/books/books-function-http-components/bookViewHttpFunction";
import BookAddHttpFunction from "./components/books/books-function-http-components/bookAddItemHttpFunction";

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <Text></Text>
      //   <Display></Display>
      //   {/* <ListFlowers></ListFlowers>
      //   <Counter></Counter>
      //   <TableForm></TableForm> */}
      //   {/* <BookStore></BookStore> */}
      //   <BookStoreFunction></BookStoreFunction>
      // </div>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Display></Display>}></Route>
          <Route path="counter" element={<Counter></Counter>}></Route>
          <Route path="tableForm" element={<TableForm />}></Route>
          <Route path="text" element={<Text></Text>}></Route>
          <Route path="listflowers" element={<ListFlowers />}></Route>
          <Route
            path="bookStoreClass"
            element={<BookStore></BookStore>}
          ></Route>
          <Route path="bookStoreFunctional" element={<BookStoreFunction />}>
            <Route
              path="bookviewFunction/:bookId"
              element={<BookViewFunction />}
            ></Route>
          </Route>
          <Route
            path="bookAddItemFunction"
            element={<BookAddFunction />}
          ></Route>
          <Route
            path="bookStoreHttpFunction"
            element={<BookStoreHttpFunction />}
          >
            <Route
              path="bookviewHttpFunction/:bookId"
              element={<BookViewHttpFunction />}
            ></Route>
          </Route>
          <Route
            path="bookAddHttpFunction"
            element={<BookAddHttpFunction />}
          ></Route>
          {/* <Route
            path="BookItemHttpFunction"
            element={<BookItemHttpFunction />}
          ></Route> */}
        </Routes>
      </div>
    );
  }
}

export default App;
