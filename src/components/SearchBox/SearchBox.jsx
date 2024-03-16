import css from "./SearchBox.module.css";
import {changeFilter} from "../../redux/store"
import { useDispatch } from "react-redux";

export default function SearchBox() {
 
  const dispatch = useDispatch()
  
  return (
    <>
      <p className={css.text}> Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        onChange={(e) => dispatch(changeFilter(e.target.value))}        
      />
    </>
  );
}
