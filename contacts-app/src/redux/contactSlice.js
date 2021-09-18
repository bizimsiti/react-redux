import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();
export const contactSelector = contactAdaptor.getSelectors(
  (state) => state.contacts
);
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactAdaptor.addOne,
    deleteContact: contactAdaptor.removeOne,
    removeAllContacts: contactAdaptor.removeAll,
    updateContact: contactAdaptor.updateOne
  }
});
export default contactSlice.reducer;

export const { addContact, deleteContact, removeAllContacts, updateContact } =
  contactSlice.actions;
