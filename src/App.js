import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ItemList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴FAR AWAY 💼</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    const newarr = { description, quantity, id: Date.now(), packed: false };
    const newpacked = { ...initialItems, newarr };
    console.log(newpacked);
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

function ItemList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Item items={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ items }) {
  return (
    <li>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      💼 you have x items in your list and, you are already packed x (x%)
    </footer>
  );
}
