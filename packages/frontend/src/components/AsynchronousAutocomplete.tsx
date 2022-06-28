import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { ChangeEvent } from "react";

interface AsynchronousAutocompleteProps {
    searchString: string;
    searchValue: any;
    searchOptions: any[];
    loading: boolean;
    handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSearchValueChange: (event: any, newValue: string | null) => void;
}

const AsynchronousAutocomplete = ({searchString, searchValue, searchOptions, loading, handleSearchChange, handleSearchValueChange}: AsynchronousAutocompleteProps) => {
    return (
        <Autocomplete
            style={{width: 300}}
            disablePortal={true}
            getOptionLabel={(option: any) => `${option.name}, ${option.country}`}
            options={searchOptions}
            loading={loading}
            value={searchValue}
            onChange={handleSearchValueChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="What is your destination"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                    value={searchString}
                    onChange={handleSearchChange}
                />
            )}
        />
    );
}

export default AsynchronousAutocomplete;
