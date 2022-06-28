import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {DateRange} from "@mui/x-date-pickers-pro/DateRangePicker";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
    const [searchString, setSearchString] = useState('');
    const [searchValue, setSearchValue] = useState(null);
    const [searchOptions, setSearchOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(`http://localhost:4200/cities?searchString=${searchString}`)
            .then(res => res.json())
            .then(setSearchOptions)
            .finally(() => {
                setLoading(false);
            });
    }, [searchString]);

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
    }, []);

    const handleSearchValueChange = useCallback((event: any, newValue: any) => {
        setSearchValue(newValue);
    }, []);

    return {
        searchString,
        searchValue,
        searchOptions,
        loading,
        handleSearchChange,
        handleSearchValueChange
    }
}

export const useDate = () => {
    const [dateValue, setDateValue] = useState<DateRange<Date>>([null, null]);

    const handleDateChange = useCallback((newValue: DateRange<Date>) => {
        setDateValue(newValue);
    }, []);

    return {
        dateValue,
        handleDateChange
    }
}

export const useGuestsNumber = () => {
    const [guestsNumber, setGuestsNumber] = useState<number>(0);

    const handleGuestsNumberChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setGuestsNumber(parseInt(event.target.value));
    }, []);

    return {
        guestsNumber,
        handleGuestsNumberChange
    }
}

export const useFormSubmit = ({dateValue, guestsNumber, searchValue}: any) => {
    const navigate = useNavigate();
    const isValid = Boolean(dateValue[0] && dateValue[1] && guestsNumber && searchValue);

    const handleSubmit = () => {
        const queryParams: any = {
            dateValue: [dateValue[0].getTime(), dateValue[1].getTime()],
            guestsNumber,
            selectedCity: searchValue.cityId,
        }
        const urlStringParams = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');

        navigate(`/searched-results?${urlStringParams}`);
    }

    return {
        isValid,
        handleSubmit
    }
}
