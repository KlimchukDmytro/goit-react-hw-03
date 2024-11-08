import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  // Завантаження контактів з локального сховища
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  // Збереження контактів до локального сховища
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ phonename, phonenumber }) => {
    const newContact = {
      id: `id-${Date.now()}`,
      name: phonename,
      number: phonenumber,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
