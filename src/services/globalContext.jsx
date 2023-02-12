import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { Actions } from "./reducer/action";

const Context = createContext();

const CreateStore = (initialState = {}) => {
    return ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const obj = {};
        for (let i in Actions) {
            obj[i] = Actions[i](dispatch);
        }

        return (
            <Context.Provider
                value={{
                    ...obj,
                    ...state
                }}
            >
                {children}
            </Context.Provider>
        );
    };
};

export { CreateStore, Context };
