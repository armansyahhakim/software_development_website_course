import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/class" Component={ClassPage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/privacypolicy" Component={PrivacyPolicyPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
