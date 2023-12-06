
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './frontend/loginpage/login';
import Home from './frontend/dashboard/Home';
import Main from './frontend/dashboard/Main';
import Task from './frontend/dashboard/Task';
import NewMeetMins from './frontend/dashboard/MeetingMinutes/NewMeetMins';
import MeetHistory from './frontend/dashboard/MeetingMinutes/MeetHistory';
import React from "react";
// import SplashScreen from './frontend/utils/elements/withSplashScreen';

function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (you can replace this with your actual loading logic)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
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

    </Routes>
          {/* )} */}
    </>
  );
}

export default App;
