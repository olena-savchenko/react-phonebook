import css from './Contact.module.css'
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";

export default function Contact ({contact: { name, number, id}, onDelete}) {
    return (
        <li className={css.listItem}>
            <div>
            <p className={css.text}><ImUser /> {name}</p>
            <p className={css.text}><ImPhone /> {number}</p>
            </div>

            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>    
        </li>
        
    );
}