export const loadUserData = (userId) => {
    return {
        cart: JSON.parse(localStorage.getItem(`cart_${userId}`)) || { items: [] },
        favorites: JSON.parse(localStorage.getItem(`favorites_${userId}`)) || { items: [] },
    };
};