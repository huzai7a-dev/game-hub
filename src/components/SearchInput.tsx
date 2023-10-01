import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../store";


const SearchInput = () => {
    const  setSearchText = useGameQuery(s => s.setSearchText);
    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(ref.current) setSearchText(ref.current.value)
    }
    return (
        <form style={{width:"100%"}} onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant={'filled'}
                />
            </InputGroup>
        </form>
    )
}

export default SearchInput;