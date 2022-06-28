import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import {DateRange, DateRangePicker} from "@mui/x-date-pickers-pro/DateRangePicker";
import AsynchronousAutocomplete from "../../components/AsynchronousAutocomplete";
import {useDate, useFormSubmit, useGuestsNumber, useSearch} from "./hooks";

import './index.scss';

interface SearchFormProps {
    initialSearchValue?: any;
    initialDateValue?: DateRange<Date>;
    initialGuestsNumber?: number;
    onSubmit: (data: any) => void;
}

const SearchForm = ({initialDateValue, initialGuestsNumber, initialSearchValue, onSubmit}: SearchFormProps) => {
    const { searchString, searchValue, searchOptions, loading, handleSearchChange, handleSearchValueChange } = useSearch(initialSearchValue);
    const { dateValue, handleDateChange } = useDate(initialDateValue);
    const { guestsNumber, handleGuestsNumberChange } = useGuestsNumber(initialGuestsNumber);
    const { isValid, handleSubmit } = useFormSubmit({dateValue, guestsNumber, searchValue, onSubmit});

    return <div className="form">
        <div className="search">
            <AsynchronousAutocomplete
                searchString={searchString}
                searchValue={searchValue}
                searchOptions={searchOptions}
                loading={loading}
                handleSearchChange={handleSearchChange}
                handleSearchValueChange={handleSearchValueChange}
            />
        </div>
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={{ start: 'Check-in', end: 'Check-out' }}
        >
            <DateRangePicker
                className="picker"
                value={dateValue}
                onChange={handleDateChange}
                renderInput={(startProps, endProps) => (
                    <>
                        <TextField sx={{marginRight: '20px'}} {...startProps} />
                        <TextField sx={{marginRight: '20px'}} {...endProps} />
                    </>
                )}
            />
        </LocalizationProvider>
        <TextField value={guestsNumber} onChange={handleGuestsNumberChange} sx={{marginRight: '20px'}} type="number" label="Number of guests" />
        <Button disabled={!isValid} onClick={handleSubmit} variant="contained" size="large" sx={{height: '55px', width: '200px'}} color="secondary">Search</Button>
    </div>
}

export default SearchForm;
