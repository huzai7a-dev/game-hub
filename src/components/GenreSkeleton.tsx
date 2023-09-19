import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react"

const GenreSkeleton = () => {
    return (
        <HStack paddingY={'8px'}>
            <SkeletonCircle size={'10'} />
            <SkeletonText noOfLines={1} height={'16px'} width={'100px'} />
        </HStack>
    )
}

export default GenreSkeleton