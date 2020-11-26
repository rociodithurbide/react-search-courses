function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }

  return (
    <input
      type="text"
      className={props.className}
      placeholder="Tipea el nombre de un curso"
      onChange={handleChange}
    />
  );
}

export default Search;
