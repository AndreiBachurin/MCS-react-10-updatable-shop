import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="shop">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="btn btn-blue m-3"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}