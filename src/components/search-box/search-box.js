import "./search-box.css";

const SearchBox = (props) =>{
    const { placeholder, onChangeHandler } = props;
    return (
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
}

export default SearchBox;
