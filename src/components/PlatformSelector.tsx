import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatform"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import useGameQuery from "../store"


const PlatformSelector = () => {
    const { data: platforms } = usePlatforms();
    const selectPlatform = useGameQuery(s => s.setPlatformId);
    const selectedPlatformId = useGameQuery(s => s.gameQuery.selectedPlatformId);
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