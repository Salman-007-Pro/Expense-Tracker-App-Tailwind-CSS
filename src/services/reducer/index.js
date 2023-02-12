import { ADD_TRANSACTION, DELETE_TRANSACTION, SELECT_TRANSACTION, UPDATE_TRANSACTION } from "./action";

const initialState = {
    transactions: [],
    income: 0,
    expense: 0,
    currentSelected: null
};

const calculateBalance = (state, amount, isExpense = false, negative = 1) => {
    isExpense ? (state.expense += amount * -1 * negative) : (state.income += amount * negative);
    return state;
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TRANSACTION:
            return {
                ...calculateBalance(state, Number(payload.transaction), payload.isExpense),
                transactions: [...state.transactions, payload]
            };
        case DELETE_TRANSACTION:
            const [deleteItem] = state.transactions.splice(payload.id, 1);
            return {
                ...calculateBalance(state, Number(deleteItem?.transaction || 0), deleteItem?.isExpense || false, -1)
            };
        case UPDATE_TRANSACTION:
            calculateBalance(
                state,
                Number(state.transactions[payload.id]?.transaction),
                state.transactions[payload.id]?.isExpense,
                -1
            );
            state.transactions[payload.id] = {
                ...payload
            };
            return {
                ...calculateBalance(
                    state,
                    Number(state.transactions[payload.id].transaction),
                    state.transactions[payload.id]?.isExpense
                )
            };

        case SELECT_TRANSACTION:
            return { ...state, ...payload };

        default:
            return state;
    }
};
