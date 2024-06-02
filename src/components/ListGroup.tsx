import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Namunga", "Namuco", "Masaya", "Bagong Pook", "Quilib"];
  // let selectedIndex = -1;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const headingText = <h1>List</h1>;

  const noItems = <p>No items found</p>;

  const handleClick = (event: MouseEvent) => console.log(event);
  const handleClickName = (index: number) => setSelectedIndex(index);

  const mapItems = () => {
    return items.map((item, index) => (
      <li
        className={
          selectedIndex === index ? "list-group-item active" : "list-group-item"
        }
        key={item}
        onClick={() => handleClickName(index)}
      >
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
