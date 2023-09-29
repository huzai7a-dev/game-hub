import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatforms"
import { Platform } from "../hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    selectedPlatform: Platform | null
    selectPlatform: (platform:Platform)=> void 
}

const PlatformSelector = ({ selectPlatform,selectedPlatform }:Props) => {
    const { data:platforms } = usePlatform();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {platforms?.results?.map((platform) =>
                    <MenuItem key={platform.id} onClick={()=> selectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector