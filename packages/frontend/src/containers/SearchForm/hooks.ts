import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {DateRange} from "@mui/x-date-pickers-pro/DateRangePicker";

export const useSearch = (initialValue?: any) => {
    const [searchString, setSearchString] = useState('');
    const [searchValue, setSearchValue] = useState(initialValue);
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

export const useDate = (initialValue = [null, null] as DateRange<Date>) => {
    const [dateValue, setDateValue] = useState<DateRange<Date>>(initialValue);

    const handleDateChange = useCallback((newValue: DateRange<Date>) => {
        setDateValue(newValue);
    }, []);

    return {
        dateValue,
        handleDateChange
    }
}

export const useGuestsNumber = (initialValue = 0) => {
    const [guestsNumber, setGuestsNumber] = useState<number>(initialValue);

    const handleGuestsNumberChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setGuestsNumber(parseInt(event.target.value));
    }, []);

    return {
        guestsNumber,
        handleGuestsNumberChange
    }
}

export const useFormSubmit = ({ dateValue, guestsNumber, searchValue, onSubmit }: any) => {
    const isValid = Boolean(dateValue[0] && dateValue[1] && guestsNumber && searchValue);

    const handleSubmit = () => {
        onSubmit({
            dateValue: [dateValue[0].getTime(), dateValue[1].getTime()],
            guestsNumber,
            selectedCity: searchValue.cityId,
        });
    }

    return {
        isValid,
        handleSubmit
    }
}
