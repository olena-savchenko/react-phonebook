import { useState, useEffect } from "react"
import initialContacts from '../contacts.json'
import ContactList from "../ContactList/ContactList";
import SearchBar from "../SearchBar/SearchBar";
// import { Formik, Form, Field } from 'formik'; 
import ContactForm from "../ContactForm/ContactForm";



export default function App () {

  {/* 
  Важливо пам'ятати, що дані у localStorage зберігаються у вигляді рядків. 
  Якщо вам потрібно зберегти об'єкт або масив, ви повинні перетворити його на рядок за допомогою JSON.stringify, 
  і при зчитуванні використовувати JSON.parse.
 */}

  // масив контактів у стані App
    const [contacts, setContacts] = useState(() => {
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : initialContacts;

    });

    useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])
  

  // значення input записується в стан 
    const [inputValue, setInputValue] = useState("");

    const handleChangeInputValue = (newValue) => {
      setInputValue(newValue);
    }

    const addContact = (newContact) => {
      setContacts((prevContacts) => [...prevContacts, newContact]);
      console.log(newContact);

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

