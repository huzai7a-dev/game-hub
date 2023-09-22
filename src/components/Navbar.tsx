import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import SwitchDarkMode from "./SwitchDarkMode";
import SearchInput from "./SearchInput";

interface Props {
    onSearch : (searchText:string)=> void 
}

const Navbar = ({ onSearch }:Props) => {
    return (
        <HStack paddingY={'8px'}>
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={onSearch}/>
            <SwitchDarkMode/>
        </HStack>
    )
}

export default Navbar