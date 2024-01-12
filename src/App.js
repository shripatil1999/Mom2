
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './frontend/loginpage/login';
import Home from './frontend/dashboard/Home';
import Main from './frontend/dashboard/Main';
import Task from './frontend/dashboard/Task';
import NewMeetMins from './frontend/dashboard/MeetingMinutes/NewMeetMins';
import MeetHistory from './frontend/dashboard/MeetingMinutes/MeetHistory';
import React from "react";
import TaskDetails from './frontend/dashboard/TaskDetails';
import Overview from './frontend/dashboard/Analytics-Reports/Overview';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Analytics from './frontend/dashboard/Analytics-Reports/Analytics';
import PerformanceReport from './frontend/dashboard/Analytics-Reports/PerformanceReport';
import HelpSupport from './frontend/dashboard/HelpSupport';
import Projects from './frontend/dashboard/Projects';
import Profile from './frontend/dashboard/Profile';
// import SplashScreen from './frontend/utils/elements/withSplashScreen';

function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (you can replace this with your actual loading logic)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  AOS.init();
  return (
    <>
    {/* {loading ? (
        <SplashScreen />
      ) : ( */}
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />} />
      <Route path='main' element={<Main />} />
      <Route path='task' element={<Task/>}/>
      <Route path='newmeetmins' element={<NewMeetMins/>}/>
      <Route path='meethistory' element={<MeetHistory/>}/>
      <Route path='taskdetails' element={<TaskDetails/>} />
      <Route path='overview' element={<Overview/>} />
      <Route path='analytics' element={<Analytics/>}/>
      <Route path='performance' element={<PerformanceReport/>}></Route>
      <Route path='helpSupport' element={<HelpSupport/>}></Route>
      <Route path='projects' element={<Projects/>}></Route>
      <Route path='profile' element={<Profile/>}></Route>


    </Routes>
          {/* )} */}
    </>
  );
}

export default App;
