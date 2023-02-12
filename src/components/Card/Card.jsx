import { useContext } from "react";
import { Context } from "../../services/globalContext";

const Card = () => {
    const { income, expense } = useContext(Context);
    return (
        <div className="mb-8 flex min-w-[60%] flex-row items-center justify-between rounded-sm bg-white shadow-lg">
            <div className="flex flex-1 flex-col items-center justify-center p-10">
                <h1 className="font-mono text-xl font-bold text-green-500">INCOME</h1>
                <h1 className="font-mono text-2xl font-extrabold text-green-500">${income}</h1>
            </div>
            <span className="h-[70%] w-[1px] bg-gray-300"></span>
            <div className="flex flex-1 flex-col items-center justify-center p-10">
                <h1 className="font-mono text-xl font-bold text-red-500">EXPENSE</h1>
                <h1 className="font-mono text-2xl font-extrabold text-red-500">${expense}</h1>
            </div>
        </div>
    );
};

export default Card;
