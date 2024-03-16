import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <div className={css.text}>
          <span>
            <IoPersonSharp />
          </span>
          <p>{name}</p>
        </div>
        <div className={css.text}>
          <span>
            <FaPhone />
          </span>
          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
