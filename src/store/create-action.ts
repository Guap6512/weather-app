export function createAction<P>(type: string) {
    return (payload?: P) => ({type, payload});
}
