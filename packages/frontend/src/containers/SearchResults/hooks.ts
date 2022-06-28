import {useCallback, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

export const useHotels = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [hotels, setHotels] = useState<any[]>([]);
    const [params, setParams] = useState<any>(null);

    useEffect(() => {
        fetch(`http://localhost:4200/hotels?${searchParams.toString()}`)
            .then(res => res.json())
            .then(setHotels);
    }, [searchParams]);

    useEffect(() => {
        const searchParamsObj: any = Array.from(searchParams.entries()).reduce((result, [key, value]) => ({...result, [key]: value}), {});

        fetch(`http://localhost:4200/cities/${searchParamsObj.selectedCity}`)
            .then(res => res.json())
            .then((city) => {
                setParams({
                    dateValue: searchParamsObj.dateValue.split(',').map((time: string) => new Date(Number(time))),
                    guestsNumber: Number(searchParamsObj.guestsNumber),
                    selectedCity: city
                });
            });
    }, []);

    const handleOnSubmit = useCallback((queryParams: any) => {
        const urlStringParams = new URLSearchParams(Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&'));

        setSearchParams(urlStringParams);
    }, []);

    return {
        hotels,
        params,
        handleOnSubmit
    }
}
