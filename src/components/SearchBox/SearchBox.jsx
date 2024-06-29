import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const handleCleaner = () => {
    onSearch("");
  };
  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <div className={css.input}>
        <input
          className={css.field}
          type="text"
          value={value}
          onChange={(evt) => {
            onSearch(evt.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
