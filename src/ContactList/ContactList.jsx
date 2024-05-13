import Contact from "../Contact/Contact";

export default function ContactList ({contacts}) {
   return (<ul>{
        contacts.map(contact => {
            return <Contact key={contact.id} contact={contact}/>
        })
        }</ul>);
}