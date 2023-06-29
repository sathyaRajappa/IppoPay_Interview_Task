import Login from "./components/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Register from "./components/Register";
import Home from "./components/Home";
// import { useContext } from "react";
// import { Context } from "./context/Context";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const {user} = useContext(Context);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Register/>} />
        <Route path="signin" element={<Login/>} />
        <Route path="home" element={<Home/>} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
