import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  //adding events
  //attribute ,eventhandler
  function handleClick() {
    alert("clicked");
  }
  return (
    <article className="book" onMouseOver={() => console.log(author)}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* <p>{pob}</p> */}
      {/* {children} */}
      <button type="button" onClick={handleClick}>
        exeEvent
      </button>
    </article>
  );
};

export default Book;
