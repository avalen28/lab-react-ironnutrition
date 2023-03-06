import { Divider, Input } from 'antd';

// Iteration 5
function Search({ handleSearch, searchValue }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchValue} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
