import { useState } from "react"
import initialContacts from '../contacts.json'
import ContactList from "../ContactList/ContactList";
import SearchBar from "../SearchBar/SearchBar";
import { Formik, Form, Field } from 'formik'; 
import ContactForm from "../ContactForm/ContactForm";



export default function App () {

  // масив контактів у стані App
    const [contacts, setContacts] = useState(initialContacts);

  // значення input записується в стан 
    const [inputValue, setInputValue] = useState("");

    const handleChangeInputValue = (newValue) => {
      setInputValue(newValue);
    }

    const addContact = (newContact) => {
      return setContacts((prevContacts) => [...prevContacts, newContact])

    }

    
    // Логіка фільтрації повинна бути нечутливою до регістру.
    {/*
    Щоб зробити input контрольованим елементом, потрібно виконати два кроки:

Атрибуту value потрібно передати значення стану inputValue.
При події onChange отримати значення поля і записати його в стан inputValue.
  */}

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact}/>
            <SearchBar inputValue={inputValue} onChange={handleChangeInputValue}/>
            <ContactList contacts={contacts} />

        </div>
   
    )

}

