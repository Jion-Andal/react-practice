import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Namunga", "Namuco", "Masaya", "Bagong Pook", "Quilib"];

  const headingText = <h1>List</h1>;

  const noItems = <p>No items found</p>;

  const handleClick = (event: MouseEvent) => console.log(event);

  const mapItems = () => {
    return items.map((item, index) => (
      <li className="list-group-item" key={item} onClick={handleClick}>
        {item}
      </li>
    ));
  };

  return (
    // Fragments
    <>
      {headingText}

      {/* If statement is true, make the code after && */}
      {/* If false, return none */}
      {items.length === 0 && noItems}
      <ul className="list-group">{mapItems()}</ul>
    </>
  );
}

export default ListGroup;
