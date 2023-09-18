import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import SwitchDarkMode from "./SwitchDarkMode";
const Navbar = () => {
    return (
        <HStack justifyContent={"space-between"} padding={"12px"}>
            <Image src={logo} boxSize="60px" />
            <SwitchDarkMode/>
        </HStack>
    )
}

export default Navbar