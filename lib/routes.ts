export const routes = {
    base: '/',
    desks: {
        list: '/desks',
        desk: (id: string) => `/desks/${id}`,
    },
} as const;

