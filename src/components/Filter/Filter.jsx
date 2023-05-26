import { Input } from './Filter.styled'

function Filter({ filter, setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

export default Filter