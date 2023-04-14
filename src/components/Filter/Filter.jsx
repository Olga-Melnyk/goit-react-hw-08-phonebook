import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { FilterBox, FilterText, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.value;
    dispatch(setFilter(name));
  };

  return (
    <FilterBox>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        autoComplete="off"
        onChange={handleChange}
        name="name"
      />
    </FilterBox>
  );
};
