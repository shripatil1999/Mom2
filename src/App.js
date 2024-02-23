import React, { useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Login from "./frontend/loginpage/login";
import Home from "./frontend/dashboard/Home";
import Main from "./frontend/dashboard/Main";
import Task from "./frontend/dashboard/Task";
import NewMeetMins from "./frontend/dashboard/MeetingMinutes/NewMeetMins";
import MeetHistory from "./frontend/dashboard/MeetingMinutes/MeetHistory";
import MeetHistory2 from "./frontend/dashboard/MeetingMinutes/MeetHistory2";
import TaskDetails from "./frontend/dashboard/TaskDetails";
import Overview from "./frontend/dashboard/Analytics-Reports/Overview";
import AOS from "aos";
import "aos/dist/aos.css";
import Analytics from "./frontend/dashboard/Analytics-Reports/Analytics";
import PerformanceReport from "./frontend/dashboard/Analytics-Reports/PerformanceReport";
import HelpSupport from "./frontend/dashboard/HelpSupport";
import Projects from "./frontend/dashboard/Projects";
import Profile from "./frontend/dashboard/Profile";
import NewProfile from "./frontend/dashboard/NewProfile";
import { auth } from "./firebase";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  AOS.init();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/login" replace />
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          element={
            <ProtectedRoutes />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="task" element={<Task />} />
          <Route path="newmeetmins" element={<NewMeetMins />} />
          <Route path="meethistory" element={<MeetHistory />} />
          <Route path="meethistory2" element={<MeetHistory2 />} />

          <Route path="taskdetails" element={<TaskDetails />} />
          <Route path="overview" element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="performance" element={<PerformanceReport />} />
          <Route path="helpSupport" element={<HelpSupport />} />
          <Route path="projects" element={<Projects />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newProfile" element={<NewProfile />} />
          
        </Route>
      </Routes>
    </>
  );
}

function ProtectedRoutes() {
  const user = auth.currentUser;
  
  return user ? <Outlet user={user} /> : <Navigate to="/login" replace />;
}

export default App;
