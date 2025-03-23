import { AppApiError, NotFoundError } from "./errors";

const apiBase = 'http://0.0.0.0:8000';

const checkResponseForApiError = (response: Response): AppApiError | undefined => {
    if (response.status === 404) {
        return new NotFoundError(response.statusText);
    }
    return undefined;
}

export const apiGet = async <T>(url: string, options?: RequestInit): Promise<T> => {
    try {
        const response = await fetch(`${apiBase}/${url}`, options);

        if (!response.ok) {
            const error = checkResponseForApiError(response);
            console.log("error", error)
            throw error || new Error(response.statusText);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}


