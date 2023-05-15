import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

interface SearchInputProps {}

const SearchInput = ({}: SearchInputProps) => {
  // const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const navigate = useNavigate();
  console.log(searchText);

  return (
    // <form
    //   onSubmit={(event) => {
    //     event.preventDefault();
    //     if (ref.current) {
    //       setSearchText(ref.current.value);
    //       navigate('/');
    //     }
    //   }}
    // >
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        value={searchText}
        borderRadius={20}
        placeholder='Search games...'
        variant='filled'
        onChange={(event) => {
          event.preventDefault();
          if (event.target.value) {
            setSearchText(event.target.value);
            navigate('/');
          }
        }}
      />
      {searchText && (
        <InputRightElement>
          <CgClose
            cursor='pointer'
            onClick={() => {
              setSearchText('');
            }}
          />
        </InputRightElement>
      )}
    </InputGroup>
    // </form>
  );
};

export default SearchInput;
