import type { HandleClientError } from "@sveltejs/kit";


export const handleError: HandleClientError = ({error, event}) => {
    console.log("from handle error hook")
    console.log(error, event) // send to sentry or an error logging service

    return {
        message: 'An unexpected error occurred',
        code: "UNEXPECTED"
    }
}