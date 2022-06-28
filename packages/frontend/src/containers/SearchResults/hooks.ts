import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const useHotels = () => {
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:4200/hotels${location.search}`)
            .then(res => res.json())
            .then(console.log);
    }, [location.search])
}
