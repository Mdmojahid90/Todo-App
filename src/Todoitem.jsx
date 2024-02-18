function Todoitem({ items, handleDelete }) {
  return (
    <>
      <div className="container">
        {items.map((item) => (
          <div className="row" key={item.name}>
            <div className="col-5 my-3">{item.name}</div>
            <div className="col-5 my-3">{item.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger my-3"
                onClick={() => handleDelete(item.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todoitem;
