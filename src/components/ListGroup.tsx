function ListGroup() {
  let items = ["Namunga", "Namuco", "Masaya", "Bagong Pook", "Quilib"];
  // items = [];

  const headingText = <h1>List</h1>;

  const noItems = <p>No items found</p>;

  const mapItems = () => {
    return items.map((item) => <li key={item}>{item}</li>);
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
