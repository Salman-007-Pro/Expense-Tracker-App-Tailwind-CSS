import { useContext, useEffect, useState } from "react";
import { Context } from "../../services/globalContext";

const Inputs = () => {
    const { add_transaction, currentSelected, select_transaction, update_transaction } = useContext(Context);
    const [inputControl, setInputControl] = useState({
        description: "",
        transaction: ""
    });

    const inputControlHandler = ({ target }) => {
        setInputControl((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        if (currentSelected) {
            setInputControl({
                description: currentSelected.description,
                transaction: currentSelected.transaction
            });
        }
    }, [currentSelected]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        (currentSelected ? update_transaction : add_transaction)({
            ...currentSelected,
            ...inputControl,
            get isExpense() {
                return Number(this.transaction) < 0;
            }
        });
        currentSelected && cancelHandler();
        setInputControl({ description: "", transaction: "" });
    };

    const cancelHandler = () => {
        select_transaction({ currentSelected: null });
    };

    return (
        <div className="flex flex-col justify-center">
            <form onSubmit={onSubmitHandler} className="flex flex-col" action="#">
                <div className="mb-4">
                    <label htmlFor="description" className="text-md mb-1 font-mono font-semibold">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={inputControl.description}
                        onChange={inputControlHandler}
                        maxLength={50}
                        placeholder="Description"
                        className="block w-full rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 required:border-red-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                    />
                </div>
                <div className="mb-8">
                    <label htmlFor="transaction" className="text-md mb-1 font-mono font-semibold">
                        Transaction Amount
                    </label>
                    <input
                        type="number"
                        id="transaction"
                        name="transaction"
                        value={inputControl.transaction}
                        onChange={inputControlHandler}
                        maxLength="6"
                        placeholder="Dollar Value of Transaction"
                        className={`block w-full rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 required:border-red-500 focus:outline-none focus:ring-1  ${
                            Number(inputControl.transaction) >= 0
                                ? "focus:border-green-500 focus:ring-green-500"
                                : "focus:border-red-500 focus:ring-red-500"
                        } sm:text-sm`}
                    />
                </div>
                {currentSelected ? (
                    <div className="flex flex-row justify-between">
                        <button
                            type="submit"
                            disabled={!Boolean(inputControl.transaction && inputControl.description)}
                            className="text-md mr-5 mb-1 flex-1 rounded-sm bg-cyan-500 p-2 font-mono font-semibold text-white transition-all active:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-cyan-200"
                        >
                            Edit Transaction
                        </button>
                        <button
                            onClick={cancelHandler}
                            className="text-md mb-1 rounded-sm bg-red-500 p-2 font-mono font-semibold text-white transition-all active:bg-red-400 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        type="submit"
                        disabled={!Boolean(inputControl.transaction && inputControl.description)}
                        className="text-md mb-1 rounded-sm bg-cyan-500 p-2 font-mono font-semibold text-white transition-all active:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-cyan-200"
                    >
                        Add Transaction
                    </button>
                )}
            </form>
        </div>
    );
};

export default Inputs;
