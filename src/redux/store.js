import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { nanoid } from "nanoid";

export const addContact = (values) => {
  return {
    type: "contacts/addContact",
    payload: { ...values, id: nanoid() }
  }
}

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId
  }
}

export const changeFilter = (values) => {
  return {
    type: "filters/changeFilter",
    payload: values
  }
}
// -----------------------------------------------------------------------------

const initialContactsState = [
      { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
      { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
      { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
      { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
    ]
  
const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return [...state, action.payload];
    case "contacts/deleteContact":
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
}

const filterReducer = (state = {name: ""}, action) => {
    switch (action.type) {
          case "filters/changeFilter":
            return {
                ...state,
                name: action.payload                 
            };
default: return state;
    }
}

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filterReducer
})

export const store = createStore(rootReducer, devToolsEnhancer());

