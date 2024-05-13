import { useState } from "react"
import contactData from './contacts.json'
import ContactList from "./ContactList/ContactList";

export default function App () {
    const [contacts, setContacs] = useState(contactData);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactList contacts={contacts} />
        </div>
   
    )

}