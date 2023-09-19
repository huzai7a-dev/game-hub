import { Box } from "@chakra-ui/react"

const GameCardContainer = ({children}: {children:React.ReactNode}) => {
    return (
        <Box borderRadius={'8px'}>
            {children}
        </Box>
    )
}

export default GameCardContainer;