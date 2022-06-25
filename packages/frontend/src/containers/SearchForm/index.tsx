import {Autocomplete, Button, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDateFns} from "@mui/x-date-pickers-pro/AdapterDateFns";
import {DateRange, DateRangePicker} from "@mui/x-date-pickers-pro/DateRangePicker";
import {ChangeEvent, useCallback, useState} from "react";
import './index.scss';

const SearchForm = () => {
    const [dateValue, setDateValue] = useState<DateRange<Date>>([null, null]);
    const [guestsNumber, setGuestsNumber] = useState<number>(0);

    const handleDateChange = useCallback((newValue: DateRange<Date>) => {
        setDateValue(newValue);
    }, []);

    const handleGuestsNumberChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setGuestsNumber(parseInt(event.target.value));
    }, [])

    return <div className="form">
        <div className="search">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[]}
                sx={{ width: 300 }}
                renderInput={(params) =>
                    <TextField {...params} label="What is your destination" />}
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
        <Button variant="contained" size="large" sx={{height: '55px', width: '200px'}} color="secondary">Search</Button>
    </div>
}

export default SearchForm;
