import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <p className={css.text}> Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        onChange={(e) => onFilter(e.target.value)}
        value={value}
      />
    </>
  );
}
