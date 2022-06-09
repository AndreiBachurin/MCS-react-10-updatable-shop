import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div  className="ml-3">
      <div>
        <h2 className="text-2xl">{info.name}</h2>
        <p className="text-l">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="btn btn-blue m-2 rounded-full"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3>{total ? total : ""}</h3>
        <button className="btn btn-blue m-2 rounded-full" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}