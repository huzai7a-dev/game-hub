import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatforms"

const PlatformSelector = () => {
    const { data:platforms } = usePlatform();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>Platform</MenuButton>
            <MenuList>
                {platforms.map((platform) =>
                    <MenuItem key={platform.id}>
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector