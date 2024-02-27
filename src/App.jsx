import { useState } from "react";

import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

export const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleClearList = () => {
    confirm("Are you sure you want to delete all items?") && setItems([]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onClearList={handleClearList}
        onHandleDelete={handleDeleteItem}
        onHandleToggle={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
};
