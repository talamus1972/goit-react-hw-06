import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { nanoid } from "nanoid";

const initialState = {
  contacts: {
    items: [
      { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
      { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
      { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
      { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
    ]
  },
  filters: {
    name: ""
  }
}

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

const rootReducer = (state = initialState, action) => {
    let updatedItems;
    let filterItems;

    switch (action.type) {
        case "contacts/addContact":
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: [...state.contacts.items, action.payload]
                }
            };
        case "contacts/deleteContact":
            updatedItems = state.contacts.items.filter(item => item.id !== action.payload);
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: updatedItems
                }
            };
        case "filters/changeFilter":
           filterItems = state.contacts.items.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()));
            return {
                ...state,
                filters: {
                    ...state.filters,
                    name: action.payload 
                },
                contacts: {
                    ...state.contacts,
                    items: filterItems
                }
            };
        default:
            return state;
    }
};
export const store = createStore(rootReducer, devToolsEnhancer());