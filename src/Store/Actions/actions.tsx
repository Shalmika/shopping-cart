export const getInitialData = () => ({
    type: "GET_INITIAL_DATA"
})
export const updateSelectedSize = (size: string) => ({
    type: "UPDATE_SELECTED_SIZE",
    payload: size
})