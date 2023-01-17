import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import Automotive from "./components/automotive/Automotive";
import Calendar from "./components/calendar/Calendar";
import Dashboard from "./components/main/Dashboard";
import DataTables from "./components/dataTables/DataTables";
import DragDrop from "./components/dragDrop/DragDrop";
import HomePage from "./components/HomePage";
import House from "./components/house/House";
import Info from "./components/profile/Info";
import Login from "./components/login/Login";
import Messages from "./components/profile/Messages";
import NewUser from "./components/newuser/NewUser";
import Payment from "./components/payment/Payment";
import Profile from "./components/profile/Profile";
import ScrollToTop from "./components/shared/ScrollToTop";
import Setting from "./components/profile/Setting";
import SignUp from "./components/signup/SignUp";
import Tables from "./components/tables/Tables";
import Terms from "./components/terms/Terms";

export const navbarContext = React.createContext();
export const sidebarColorsContext = React.createContext();
export const sidebarTypeContext = React.createContext();
export const fixedContext = React.createContext();

function App() {
  const [icons, setIcons] = useState({
    bellIcon: false,
    settings: false,
    menu: false,
  });

  const [colors, setColors] = useState({
    pink: true,
    sorme: false,
    blue: false,
    green: false,
    orange: false,
    red: false,
  });

  const [sidebarType, setSidebarType] = useState(true);
  const [fixed, setFixed] = useState(false);

  return (
    <div>
      <navbarContext.Provider value={{ icons, setIcons }}>
        <fixedContext.Provider value={{ fixed, setFixed }}>
          <sidebarColorsContext.Provider value={{ colors, setColors }}>
            <sidebarTypeContext.Provider
              value={{ sidebarType, setSidebarType }}
            >
              <ScrollToTop />
              <Routes>
                <Route path="/homepage/*" element={<HomePage />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="tables" element={<Tables />} />
                  <Route path="payment" element={<Payment />} />
                  <Route path="automotive" element={<Automotive />} />
                  <Route path="house" element={<House />} />
                  <Route path="profile/*" element={<Profile />}>
                  <Route index element={<Navigate to='info'/>} />
                    <Route path="info" element={<Info />} />
                    <Route path="message" element={<Messages />} />
                    <Route path="setting" element={<Setting />} />
                  </Route>
                  <Route path="terms" element={<Terms />} />
                  <Route path="newuser/*" element={<NewUser />} />
                  <Route path="dragdrop" element={<DragDrop />} />
                  <Route path="datatables" element={<DataTables />} />
                  <Route path="calendar" element={<Calendar />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="login" element={<Login />} />
                </Route>
                <Route
                  path="/"
                  element={<Navigate to="/homepage/dashboard" />}
                />
              </Routes>
            </sidebarTypeContext.Provider>
          </sidebarColorsContext.Provider>
        </fixedContext.Provider>
      </navbarContext.Provider>
    </div>
  );
}

export default App;
