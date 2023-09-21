export const getTokenFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('persist:auth')).token.slice(1,-1);
};
