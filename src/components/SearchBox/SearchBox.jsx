import css from "./SearchBox.module.css";
import {changeFilter} from "../../redux/filtersSlice"
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const selectNameFilter = useSelector((state) => state.filters.name)

 
  const dispatch = useDispatch()
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  
  return (
    <>
      <p className={css.text}> Find contacts by name</p>
      <input
        type="text"
        value = {selectNameFilter}
        className={css.input}
        onChange={handleFilterChange}        
      />
    </>
  );
}
