import { useContext } from "react";
import { Context } from "../../services/globalContext";

const HistoryCard = ({ description = "", transaction = "", isExpense = false, id }) => {
    const { delete_transaction, select_transaction } = useContext(Context);

    const deleteHandler = () => {
        delete_transaction({ id });
    };
    const selectHandler = () => {
        select_transaction({
            currentSelected: {
                id: id,
                description,
                transaction
            }
        });
    };
    return (
        <div className="group flex">
            <button
                onClick={deleteHandler}
                className={`text-md left-[-8%] top-0 hidden cursor-pointer ${
                    isExpense ? "bg-red-500" : "bg-green-500"
                } mr-2 p-2 px-3 font-mono font-semibold text-white transition-all group-hover:inline-block ${
                    isExpense ? "active:bg-red-400" : "active:bg-green-400"
                }`}
            >
                X
            </button>
            <div
                onClick={selectHandler}
                className={`relative flex flex-1 cursor-pointer flex-row justify-between border-r-4 ${
                    isExpense ? "border-red-500 hover:bg-red-500" : "border-green-500 hover:bg-green-500"
                } bg-white p-2 shadow-lg transition-all hover:text-white`}
            >
                <h3 className="font-mono font-semibold">{description}</h3>
                <h3 className="font-mono font-semibold">
                    {isExpense ? "" : "+"}${transaction}
                </h3>
            </div>
        </div>
    );
};

const History = () => {
    const { transactions } = useContext(Context);
    return (
        <div className="grid w-full grid-cols-1 gap-y-4">
            {transactions.map((el, key) => (
                <HistoryCard {...el} id={key} key={key.toString()} />
            ))}
        </div>
    );
};

export default History;
