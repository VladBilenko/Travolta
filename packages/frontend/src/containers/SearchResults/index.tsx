import SearchForm from "../SearchForm";
import { useHotels } from "./hooks";
import HotelCard from "../../components/HotelCard";
import './index.scss';

const SearchResults = () => {
    const {hotels} = useHotels();

    return <div>
        <SearchForm />
        <ul className="hotels-list">
            {
                hotels.map(({id, name, country, city, price, photoUrl}) => <li key={id} className="hotels-item">
                    <HotelCard name={name} country={country} city={city} imgUrl={photoUrl} dayPrice={price} totalPrice={price * 2} />
                </li>)
            }
        </ul>
    </div>
}

export default SearchResults;
