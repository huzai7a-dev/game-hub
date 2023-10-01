import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import SwitchDarkMode from "./SwitchDarkMode";
import SearchInput from "./SearchInput";



const Navbar = () => {
    return (
        <HStack paddingY={'8px'}>
            <Image src={logo} boxSize="60px" />
            <SearchInput />
            <SwitchDarkMode/>
        </HStack>
    )
}

export default Navbar