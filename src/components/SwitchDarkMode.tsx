import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const SwitchDarkMode = () => {
    const {colorMode,toggleColorMode} = useColorMode();
    return (
        <HStack>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default SwitchDarkMode;