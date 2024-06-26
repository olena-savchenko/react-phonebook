import { useId } from "react";
    export default function  SearchBar ({inputValue, onChange}) {
        const searchId = useId();

        const handleChange = (evt) => {

            // event.target не повинен використовуватись/передаватись 
            // за межі свого компонента, не треба в App в handleChange його 
            // це бест практик, але не систаксична помилка, працювати буде
            onChange(evt.target.value);
    
            // console.log(evt.target.value);
            
    
        }

        return (
            <div>
                <label htmlFor={searchId}>Input contact by name</label>
                <input type="text" id={searchId} onChange={handleChange}/>
            
            </div>
        )
    }