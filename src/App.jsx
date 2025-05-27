import "./App.css";
import Calender from "./components/DashboardMainContent/CalendarView/Calender";
import DashboardOverview from "./components/DashboardMainContent/DashboardOverview/DashboardOverview";
import SimpleAppointmentCard from "./components/DashboardMainContent/UpcomingSchedule/SimpleAppointmentCard ";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/SIdebar";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="dashboard">
            <DashboardOverview/>
          </div>
          <div className="right">
            <Calender/>
            <SimpleAppointmentCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
