// import { Dashboard } from "./pages/dashboard";
import { Dashboard } from "./pages/dashboard";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ShareDashboard } from "./pages/Share_dashboard";
import { Landing } from "./pages/Landing";
import { Xdashboard } from "./pages/Xdashboard";
import { Ydashboard } from "./pages/Ydashboard";
import { XShareDashboard } from "./pages/XShare_dashboard";
import { YShareDashboard } from "./pages/YShare_dashboard";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/share" element={<ShareDashboard/>}></Route>
    <Route path="/xshare" element={<XShareDashboard/>}></Route>
    <Route path="/yshare" element={<YShareDashboard/>}></Route>
    <Route path="/x" element={<Xdashboard/>}></Route>
    <Route path="/youtube" element={<Ydashboard/>}></Route>
    <Route path="/" element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App;



