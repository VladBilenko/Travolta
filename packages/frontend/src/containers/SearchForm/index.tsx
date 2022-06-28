import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import AsynchronousAutocomplete from "../../components/AsynchronousAutocomplete";
import {useDate, useFormSubmit, useGuestsNumber, useSearch} from "./hooks";

import './index.scss';

const SearchForm = () => {
    const { searchString, searchValue, searchOptions, loading, handleSearchChange, handleSearchValueChange } = useSearch();
    const { dateValue, handleDateChange } = useDate();
    const { guestsNumber, handleGuestsNumberChange } = useGuestsNumber();
    const { isValid, handleSubmit } = useFormSubmit({dateValue, guestsNumber, searchValue});

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
