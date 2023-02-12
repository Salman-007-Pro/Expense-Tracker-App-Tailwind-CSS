export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const SELECT_TRANSACTION = "SELECT_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

const add_transaction = (dispatch) => {
    return (payload) => {
        dispatch({ type: ADD_TRANSACTION, payload: payload });
    };
};

const update_transaction = (dispatch) => {
    return (payload) => {
        dispatch({ type: UPDATE_TRANSACTION, payload: payload });
    };
};

const select_transaction = (dispatch) => {
    return (payload) => {
        dispatch({ type: SELECT_TRANSACTION, payload: payload });
    };
};

const delete_transaction = (dispatch) => {
    return (payload) => {
        dispatch({ type: DELETE_TRANSACTION, payload: payload });
    };
};

export const Actions = {
    add_transaction,
    update_transaction,
    delete_transaction,
    select_transaction
};
