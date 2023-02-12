const Title = ({ title = "Transaction History", children }) => {
    return (
        <div className="mb-6 min-w-[60%]">
            <div className=" mb-4 flex justify-center border-b-[1px] border-gray-300">
                <h1 className="font-mono text-xl font-extrabold">{title}</h1>
            </div>
            {children}
        </div>
    );
};

export default Title;
