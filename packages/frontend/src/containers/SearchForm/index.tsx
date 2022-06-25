import {Autocomplete, Button, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDateFns} from "@mui/x-date-pickers-pro/AdapterDateFns";
import {DateRange, DateRangePicker} from "@mui/x-date-pickers-pro/DateRangePicker";
import {useState} from "react";
import './index.scss';

const SearchForm = () => {
    const [value, setValue] = useState<DateRange<Date>>([null, null]);

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
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <>
                        <TextField sx={{marginRight: '20px'}} {...startProps} />
                        <TextField sx={{marginRight: '20px'}} {...endProps} />
                    </>
                )}
            />
        </LocalizationProvider>
        <TextField sx={{marginRight: '20px'}} type="number" label="Number of guests" />
        <Button variant="contained" size="large" sx={{height: '55px', width: '200px'}}>Search</Button>
    </div>
}

export default SearchForm;
