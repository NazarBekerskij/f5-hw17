import { nanoid } from "nanoid";
import { useState } from "react";

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (evt) => {
    setName(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddContact({
      id: nanoid(),
      name: name,
      number: number,
    });

    setName("");
    setNumber("");
  };

  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
