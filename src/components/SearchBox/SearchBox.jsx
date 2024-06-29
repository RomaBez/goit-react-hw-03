const SearchBox = ({ value, onSearch }) => {
  const handleCleaner = () => {
    onSearch("");
  };
  return (
    <div>
      <label>Find contacts by name</label>
      <div>
        <input
          type="text"
          value={value}
          onChange={(evt) => {
            onSearch(evt.target.value);
          }}
        />
        <button type="button" onClick={handleCleaner}></button>
      </div>
    </div>
  );
};

export default SearchBox;
