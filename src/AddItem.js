import React from "react";

export default function AddItem(props) {
  return (
    <form className="ml-3 mt-3" onSubmit={props.onFormSubmit}>
      <div>
        {/* <label htmlFor="item-name">Название:</label> */}
        <label className="block">
    <span className="block text-sm font-medium text-slate-700">Название товара:</span>
        <input 
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          //id="item-name"
          placeholder="Введите название"
          className="border-blue-600 border px-3 py-2 rounded-md text-sm placeholder:italic"
        />
        </label>
      </div>
      <div className="mt-3">
        <label className="block">
        <span className="block text-sm font-medium text-slate-700">Описание товара:</span>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          //id="item-description"
          placeholder="Введите описание"
          className="border-blue-600 border px-3 py-2 rounded-md text-sm placeholder:italic"
        />
        </label>
      </div>
      <div className="mt-2">
        <div className="text-red-500">{props.valid}</div>
        {/* <input type="submit" className="btn btn-basic" value="Добавить" /> */}
        <button className="btn btn-blue mt-3">Добавить</button>
      </div>
    </form>
  );
}