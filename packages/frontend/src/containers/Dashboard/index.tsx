import './index.scss';
import SearchForm from "../SearchForm";

const Dashboard = () => {
    return <main className="dashboard__main">
        <div className="dashboard__head">
            <h4 className="dashboard__title">We love to travel as much as you do</h4>
            <p>We <b>CREATE</b> unbeatable deals you will get anywhere else -
                so you can <br/> save your money for an unforgettable travel experience</p>
        </div>
        <SearchForm />
    </main>;
}

export default Dashboard;
