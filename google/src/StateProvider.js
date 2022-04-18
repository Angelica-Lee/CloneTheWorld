import React, {createContext, useContext, useReducer} from "react";

//prepare the datalayer
export const StateContext = createContext();
//reducer is listening to the change of the app 
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull the inforamation from the data layer
export const useStateValue = () => useContext(StateContext);