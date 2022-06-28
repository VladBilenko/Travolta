import SearchForm from "../SearchForm";
import {useHotels} from "./hooks";

const SearchResults = () => {
    useHotels();

    return <div>
        <SearchForm />
        <div>results</div>
    </div>
}

export default SearchResults;
