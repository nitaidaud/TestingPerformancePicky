import { Outlet, Route, Routes } from "react-router-dom";
import GDPRInfo from "./GDPR/GDPRInfo";
import Main from "./Main";
import ContactUs from "./Contact-Us/ContactUs";
import Navbar from "./Header/Navbar";
import { useTranslation } from "react-i18next";

export default function AppRouts() {
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <Routes>
      <Route
        element={
          <div dir={dir}>
            <Navbar />
            <Outlet />
          </div>
        }
      >
        <Route index element={<Main />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/GDPR" element={<GDPRInfo />} />
      </Route>
    </Routes>
  );
}
