import SearchForm from "../SearchForm";
import { useHotels } from "./hooks";
import HotelCard from "../../components/HotelCard";
import './index.scss';

const SearchResults = () => {
    const {params, hotels, handleOnSubmit} = useHotels();

    return <div>
        {params && <SearchForm  onSubmit={handleOnSubmit} initialDateValue={params?.dateValue} initialSearchValue={params?.selectedCity} initialGuestsNumber={params?.guestsNumber} />}
        <ul className="hotels-list">
            {
                hotels.map(({id, name, country, city, price, totalPrice, photoUrl}) => <li key={id} className="hotels-item">
                    <HotelCard name={name} country={country} city={city} imgUrl={photoUrl} dayPrice={price} totalPrice={totalPrice} />
                </li>)
            }
        </ul>
    </div>
}

export default SearchResults;
