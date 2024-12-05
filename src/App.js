import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function App() {
  const [items, setItem] = useState([]);
  function handleAdditem(item){
    setItem((items)=>[...items,item])
    
      }
      function handleDelete(id){
        setItem(items=>items.filter(item=>id!==item.id))
      }
  return (
    <div className="app">
      <Logo />
      <Form handleAdditem={handleAdditem}/>
      <ItemList item={items} handleDelete={handleDelete}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴FAR AWAY 💼</h1>;
}
function Form({handleAdditem}) {  
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  



  function handleSubmit(e) {
    e.preventDefault();
    if(!description)
      return;
    const newarr = { description, quantity, id: Date.now(), packed: false };
    //const newpacked = { ...initialItems, newarr };
    handleAdditem(newarr);
    setDescription('');
    setQuantity(1);

  }
  return ( <form className="add-form" onSubmit={handleSubmit}>
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

function ItemList({item, handleDelete}) {
  return (
    <div className="list">
      <ul>
        {item.map((items) => (
          <Item items={items} handleDelete={handleDelete} key={items.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ items,handleDelete }) {
  const[packed,setPacked]=useState(false);
  return (
    <li>
      <input type="checkBox" value={packed} onChange={(val)=>setPacked(val.target.checked)}/>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={()=>handleDelete(items.id)}>❌</button>
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
