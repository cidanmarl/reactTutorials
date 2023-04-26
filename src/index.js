import React from "react";
import { createRoot } from "react-dom/client";

// css
import "./index.css";

import { books } from "./books";
import SpecificBook from "./components/Book";

//setup vars

function Bookslist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  );
}
//contains the individual books

createRoot(document.getElementById("root")).render(<Bookslist />);
