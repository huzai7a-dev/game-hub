import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatform"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"

interface Props {
    selectedPlatformId?: number
    selectPlatform: (platform:number)=> void 
}

const PlatformSelector = ({ selectPlatform,selectedPlatformId }:Props) => {
    const { data: platforms } = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {platforms?.results?.map((platform) =>
                    <MenuItem key={platform.id} onClick={()=> selectPlatform(platform.id)}>
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector