import { Image, ImageProps } from '@chakra-ui/react';
import meh from '../assets/meh.webp';
import thumbsup from '../assets/thumbs-up.webp';
import bullseye from '../assets/bulls-eye.webp';

interface Props {
    rating: number
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;
    
    const imageMap: {[key: number]: ImageProps} = {
        3: { src: meh, alt: 'meh',boxSize:'25px' },
        4: { src: thumbsup, alt: 'thumbsup', boxSize:'25px' },
        5: { src: bullseye, alt: 'bullseye', boxSize:'35px'}
    }
    return (
        <Image {...imageMap[rating]} marginTop={1} />
    )
}

export default Emoji;