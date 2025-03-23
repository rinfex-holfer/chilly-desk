import "client-only";

import { apiErrorPrefix, AppApiError, NotFoundError } from "./errors";

export const extractApiError = (error: unknown): AppApiError | undefined => {
    const name = (error as any)?.name;
    if (name?.startsWith?.(apiErrorPrefix)) {
        return new NotFoundError((error as any).message);
    }
    return undefined;
}
