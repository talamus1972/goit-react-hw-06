import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import contacts from "../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

export default function App() {
  const [contact, setContact] = useState(() => {
    const savedClick = window.localStorage.getItem("contacts")
return savedClick !== null && savedClick !== "[]" ? JSON.parse(savedClick) : contacts
    
  });
  const [filter, setFilter] = useState("");
    
  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

   useEffect(() => {
     window.localStorage.setItem("contacts", JSON.stringify(contact))
   }, [contact])
  

  
  const deleteContact = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleTasks = contact.filter((cont) => {
    return cont.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleTasks} onDelete={deleteContact} />
    </div>
  );
}
