import { useContext } from "react";
import { Context } from "../../services/globalContext";

const Balance = () => {
    const { income, expense } = useContext(Context);
    return (
        <div className="mb-3 flex flex-col items-center justify-center">
            <h3 className="font-mono text-2xl font-bold">Current Balance</h3>
            <h3 className="font-mono text-4xl font-extrabold">${income - expense}</h3>
        </div>
    );
};

export default Balance;
