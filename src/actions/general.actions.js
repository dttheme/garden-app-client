
//401 Unauthorized redirect
export const UNAUTHORIZED_REDIRECT = 'UNAUTHORIZED_REDIRECT';

//403 Forbidden redirect
export const FORBIDDEN_REDIRECT = 'FORBIDDEN_REDIRECT';

//404 Not found redirect
export const NOT_FOUND_REDIRECT = 'NOT_FOUND_REDIRECT';

//404 Not found reset
export const NOT_FOUND_RESET ='NOT_FOUND_RESET';

//5XX Server error
export const SERVER_ERROR_REDIRECT = 'SERVER_ERROR_REDIRECT';

//Show alert message
export const SHOW_ALERT_MESSAGE = 'SHOW_ALERT_MESSAGE';

//Reset alert message
export const RESET_ALERT_MESSAGE = 'RESET_ALERT_MESSAGE';

export function resetAlertMessage() {
    return {
        type: RESET_ALERT_MESSAGE
    };
}
