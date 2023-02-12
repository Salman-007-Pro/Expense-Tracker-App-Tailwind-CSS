const Header = ({ title = "Express Tracker by Muhammad Salman Asif" }) => {
    return (
        <header className="mb-6">
            <h1 className="font-mono text-3xl font-semibold">{title}</h1>
        </header>
    );
};

export default Header;
