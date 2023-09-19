import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import SwitchDarkMode from "./SwitchDarkMode";
const Navbar = () => {
    return (
        <HStack paddingY={'8px'} justifyContent={"space-between"}>
            <Image src={logo} boxSize="60px" />
            <SwitchDarkMode/>
        </HStack>
    )
}

export default Navbar