import { useSelector, shallowEqual  } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactsList.module.css";


export default function ContactList() {
  const selectContacts = useSelector((state) => {
    const filter = state.filters.name.toLowerCase();
    return state.contacts.items.filter(contact => contact.name.toLowerCase().includes(filter));
  }, shallowEqual);
  
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
