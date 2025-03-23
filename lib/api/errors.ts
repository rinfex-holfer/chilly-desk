export const apiErrorPrefix = 'NextApp_';

export const ApiErrorNameMap = {
    NOT_FOUND: `${apiErrorPrefix}NotFoundError`,
} as const;

export type ApiErrorName = (typeof ApiErrorNameMap)[keyof typeof ApiErrorNameMap];

export class AppApiError extends Error {
    readonly code: number;
    readonly name: ApiErrorName | string;
    readonly message: string;

    constructor(code: number, name: ApiErrorName | string, message: string) {
        super(message);
        this.code = code;
        this.name = name;
    }
}

export class NotFoundError extends AppApiError {
    readonly code = 404;
    readonly name = ApiErrorNameMap.NOT_FOUND;

    constructor(message: string) {
        super(404, ApiErrorNameMap.NOT_FOUND, message);
    }
}

export const nextErrorToApiError = (error: unknown): AppApiError | undefined => {
    const name = (error as any)?.name;

    if (name?.startsWith?.(apiErrorPrefix)) {
        return new NotFoundError((error as any).message);
    }
    return undefined;
}
