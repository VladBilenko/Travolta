import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const useHotels = () => {
    const location = useLocation();
    const [hotels, setHotels] = useState<any[]>([]);

    useEffect(() => {
        fetch(`http://localhost:4200/hotels${location.search}`)
            .then(res => res.json())
            .then(setHotels);
    }, [location.search]);

    return {
        hotels
    }
}
