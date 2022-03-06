function Filter({ filter, changeFilter }) {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
}

export default Filter;
