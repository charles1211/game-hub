import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './colorModeSwitch';
import SearchInput from './SearchInput';

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
  return (
    <HStack padding={'10px'}>
      <Image src={logo} boxSize={'60px'} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
