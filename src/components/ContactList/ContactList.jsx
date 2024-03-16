import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactsList.module.css";

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items)
  // const selectNameFilter = useSelector((state) => state.filters.name)
  
  return (
    <>
      <ul className={css.list} >
        {selectContacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
