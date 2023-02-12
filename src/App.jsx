import Balance from "./components/Balance/Balance";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import History from "./components/History/History";
import Inputs from "./components/Inputs/Inputs";
import Title from "./components/Title/Title";
import AppLayout from "./Layout/AppLayout";

function App() {
    return (
        <AppLayout>
            <Header />
            <Balance />
            <Card />
            <Title title="Transaction History">
                <History />
            </Title>
            <Title title="Add New Transaction">
                <Inputs />
            </Title>
        </AppLayout>
    );
}

export default App;
