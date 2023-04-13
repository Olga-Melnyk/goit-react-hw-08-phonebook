export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;
