import { useState } from "react";

function Todoitems({ handleAdd }) {
  let [itemName, setItemName] = useState("");

  let [itemDate, setItemDate] = useState("");

  let handleName = (event) => {
    //console.log(event.target.value);
    setItemName(event.target.value);
  };

  let handleDate = (event) => {
    setItemDate(event.target.value);
  };

  let addBtn = () => {
    handleAdd(itemName, itemDate);
    setItemDate("");
    setItemName("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 my-3">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={itemName}
              onChange={handleName}
            />
          </div>
          <div className="col-5 my-3">
            <input type="date" onChange={handleDate} value={itemDate} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success my-3"
              onClick={addBtn}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitems;
