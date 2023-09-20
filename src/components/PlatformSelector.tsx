import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatforms"
import { Platform } from "../hooks/usePlatforms"

interface Props {
    selectedPlatform: Platform | null
    selectPlatform: (platform:Platform)=> void 
}

const PlatformSelector = ({ selectPlatform,selectedPlatform }:Props) => {
    const { data:platforms } = usePlatform();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {platforms.map((platform) =>
                    <MenuItem key={platform.id} onClick={()=> selectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector