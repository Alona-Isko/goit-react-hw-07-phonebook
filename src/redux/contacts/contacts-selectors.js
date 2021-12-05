export const getLoading = state => state.contacts.loading;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const allContacts = getContacts(state);
    const filter = getFilter(state);
    const normFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter),
  );
};