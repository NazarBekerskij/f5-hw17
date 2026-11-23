import ContactItem from "../ContactItem/ContactItem"

function ContactList({contacts, onDelete}){
    return(
        <ul>
            {contacts.map(({id, name, number}) => (
            <ContactItem key={id} name={name} number={number} onDelete={() => onDelete(id)}/>
            ))}
        </ul>
    )
}


export default ContactList