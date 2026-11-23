import { useState, useEffect } from "react";
import "./App.css";

import Title from "./components/Title/Title";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const addContact = (newContact) => {

    const isDupLicat = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isDupLicat) {
      alert("ви ввели однакове імя");
      return;
    }

    setContacts((prev) => [...prev, newContact]);
  };

  const handleDelete = (contactId) => {
    setContacts((prev) => 
      prev.filter((contact) => contact.id !== contactId)
    )
  }

  const [filter, setFilter] = useState("");

  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Title />
      <ContactForm onAddContact={addContact} />
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
