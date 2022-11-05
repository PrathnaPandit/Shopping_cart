import { useState } from "react";

export default function ShoppingCart(props) {
  const [list, setList] = useState(props.InitialProducts);

  function increment(id) {
    let newList = [...list];
    newList[id].count++;
    setList(newList);
  }

  function decrement(id) {
    let newList = [...list];
    if (newList[id].count > 0) newList[id].count--;
    setList(newList);
  }

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <hr />
      <ul>
        {list.map((item) => (
          <li>
            {item.name}
            <span>({item.count})</span>{" "}
            <button onClick={() => increment(item.id)}>+</button>{" "}
            <button onClick={() => decrement(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
