function ContactItem({ name, number, onDelete }) {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={onDelete}>Delete</button>
    </li>
  );
}


export default ContactItem