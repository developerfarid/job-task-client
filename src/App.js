import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import AppBer from './Components/Share/AppBer';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ContextProvider from "./Components/context/ContextProvider";
import Deshboard from "./Components/Deshboard/Deshboard";
import PrivateRoute from "./Components/Private/PrivateRoute";
import AddPost from "./Components/Deshboard/AddPost";
import AdminRoute from "./Components/Private/AdminRoute";
import MakeAdmin from "./Components/Deshboard/MakeAdmin";
import Approve from "./Components/Deshboard/Approve";

import Info from "./Components/Deshboard/Info";
import AddExperience from "./Components/Deshboard/AddExperience";
import PostCard from "./Components/Post/PostCard";
import Footer from "./Components/Footer/Footer";
import Post from "./Components/Post/Post";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])
  return (
    <section>
      {
        loading ? (
          <ContextProvider>
            <BrowserRouter>
              <AppBer />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="blog" element={<Post />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="post/:id" element={<PrivateRoute><PostCard /></PrivateRoute>} />
                <Route path="deshboard" element={<PrivateRoute><Deshboard></Deshboard></PrivateRoute>}>
                  <Route element={<Info />} path="/deshboard" />
                  <Route element={<AddPost />} path="/deshboard/approve/addPost/:id" />
                  <Route element={<AddExperience />} path="/deshboard/add" />
                  <Route element={<AdminRoute><MakeAdmin /></AdminRoute>} path="/deshboard/makeAdmin" />
                  <Route element={<AdminRoute><Approve /></AdminRoute>} path="/deshboard/approve" />

                </Route>

              </Routes>
              <Footer />
            </BrowserRouter>
          </ContextProvider>
        ) : (

          <div id="preloader">
            <div className="outer">

              <div className="infinityChrome">
                <div></div>
                <div></div>
                <div></div>
              </div>


              <div className="infinity">
                <div>
                  <span></span>
                </div>
                <div>
                  <span></span>
                </div>
                <div>
                  <span></span>
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo-outer">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                    <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        )
      }

    </section>
  );
}

export default App;
