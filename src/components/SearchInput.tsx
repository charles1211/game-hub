import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {}

const SearchInput = ({}: SearchInputProps) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder='Search games...' variant='filled' />
    </InputGroup>
  );
};

export default SearchInput;
