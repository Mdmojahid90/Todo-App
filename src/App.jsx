import Todoitems from "./Todoitems";
import Todoitem from "./Todoitem";
import Errortodo from "./Errortodo";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([]);

  let handleAdd = (name, date) => {
    console.log(`fetched data: ${name} ${date}`);
    let newItems = [...items, { name: name, date: date }];
    console.log(newItems);
    setItems(newItems);
  };

  const handleDelete = (item) => {
    console.log(item);
    let newResult = items.filter((value) => value.name != item);
    setItems(newResult);
  };
  return (
    <>
      <center>
        <h1>Todo App</h1>
        {items.length == 0 && <Errortodo />}
        <Todoitems handleAdd={handleAdd} />
        <Todoitem items={items} handleDelete={handleDelete} />
      </center>
    </>
  );
}

export default App;
