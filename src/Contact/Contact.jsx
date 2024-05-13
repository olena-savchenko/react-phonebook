export default function Contact ({contact: { name, number}}) {
    return (
        <li><p>Name: {name}</p>
        <p>Number: {number}</p></li>
        
    );
}