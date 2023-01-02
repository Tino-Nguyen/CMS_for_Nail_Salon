
import Login from "./Screens/Login/Login.jsx";
import Homepage from "./Screens/Homepage/Homepage.jsx";
import Navigation from "./Routing/Navigation.jsx";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import PrivateRoute from "./Routing/PrivateRoute.jsx";



function App() {



  return(

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PrivateRoute/>}/>
        {/* <Route path="/Home Page" element={<PrivateRoute/>}/> */}
      </Routes>
    </BrowserRouter>
  



  
  

  );
}

export default App;
