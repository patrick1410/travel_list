import { useState } from "react";

export const Form = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setQuantity(1);
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="h3">What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        name="amount"
        id="amount"
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
