import { useState } from "react";

export const Pagination2 = () => {
  const pages = [1, 2, 3, 4, 5];
  const [activePage, setActivePage] = useState(1);

  const Next = () => {
    setActivePage((prevPage) => prevPage + 1);
  };

  const Back = () => {
    setActivePage((prevPage) => prevPage - 1);
  };

  const DirectPage = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <button onClick={Back} disabled={activePage === 1 ? true : false}>
        {"<"}
      </button>
      {pages.map((page, index) => (
        <span
          style={{
            background: activePage === page ? "red" : "grey",
            padding: "5px",
            borderRadius: "50%",
            margin: "2px",
          }}
          key={index}
          onClick={() => DirectPage(page)}
        >
          {page}
        </span>
      ))}
      <button
        onClick={Next}
        disabled={activePage === pages.length ? true : false}
      >
        {">"}
      </button>
    </div>
  );
};

//********************************************************************************************************* */

export const Pagination = () => {
  const Total_Pages = 10;
  const pages = Array.from({ length: Total_Pages }, (_, index) => index + 1);
  const pages1 = [...Array(Total_Pages)].map((_, index) => index + 1);
  console.log(pages1);
  const [activePage, setActivePage] = useState(1);

  const Next = () => {
    setActivePage((prevPage) => prevPage + 1);
  };

  const Back = () => {
    setActivePage((prevPage) => prevPage - 1);
  };

  const DirectPage = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <button onClick={Back} disabled={activePage === 1 ? true : false}>
        {"<"}
      </button>
      {pages.map((page, index) => (
        <span
          style={{
            background: activePage === page ? "red" : "grey",
            padding: "5px",
            borderRadius: "50%",
            margin: "2px",
          }}
          key={index}
          onClick={() => DirectPage(page)}
        >
          {index + 1}
        </span>
      ))}
      <button
        onClick={Next}
        disabled={activePage === pages.length ? true : false}
      >
        {">"}
      </button>
    </div>
  );
};
