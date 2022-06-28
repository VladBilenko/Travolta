import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const useDashboardForm = () => {
    const navigate = useNavigate();

    const handleOnSubmit = useCallback((queryParams: any) => {
        const urlStringParams = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');

        navigate(`/searched-results?${urlStringParams}`);
    }, []);

    return {
        handleOnSubmit,
    }
}
