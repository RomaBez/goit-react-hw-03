import { useState, useEffect } from "react";
import "./App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const [contacts, SetContacts] = useState(() => {
    const storageContacts = window.localStorage.getItem("addedContacts");
    return storageContacts
      ? JSON.parse(storageContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  useEffect(() => {
    window.localStorage.setItem("addedContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList contacts={contacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
