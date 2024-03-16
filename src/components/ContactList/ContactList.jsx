import Contact from "../Contact/Contact";
import css from "./ContactsList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.list} >
        {contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
