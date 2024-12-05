import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItem] = useState([]);

  function handleAdditem(item) {
    setItem((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItem((items) => items.filter((item) => id !== item.id));
  }
  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAdditem={handleAdditem} />
      <ItemList
        item={items}
        handleDelete={handleDelete}
        toggleItem={handleToggle}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴FAR AWAY 💼</h1>;
}

function Form({ handleAdditem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newarr = { description, quantity, id: Date.now(), packed: false };
    //const newpacked = { ...initialItems, newarr };
    handleAdditem(newarr);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need😍 for your trip?</h3>
      <select
        value={quantity}
        onChange={(val) => setQuantity(Number(val.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(val) => setDescription(val.target.value)}
      ></input>
      <button>add</button>
    </form>
  );
}

function ItemList({ item, handleDelete, toggleItem }) {
  return (
    <div className="list">
      <ul>
        {item.map((items) => (
          <Item
            items={items}
            handleDelete={handleDelete}
            key={items.id}
            toggleItem={toggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ items, handleDelete, toggleItem }) {
  return (
    <li>
      <input
        type="checkBox"
        value={items.packed}
        onChange={() => toggleItem(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => handleDelete(items.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
