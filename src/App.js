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

function App() {
  return (
    <section>
      <ContextProvider>
        <BrowserRouter>
          <AppBer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Post />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="post/:id" element={<PrivateRoute><PostCard /></PrivateRoute>}  />
            <Route path="deshboard" element={<PrivateRoute><Deshboard></Deshboard></PrivateRoute>}>
            <Route element={<Info />} path="/deshboard" />
              <Route element={<AddPost />} path="/deshboard/addPost" />
              <Route element={<AddExperience />} path="/deshboard/add" />
              <Route element={<AdminRoute><MakeAdmin /></AdminRoute>} path="/deshboard/makeAdmin" />
              <Route element={<AdminRoute><Approve /></AdminRoute>} path="/deshboard/approve" />
            
            </Route>

          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>

    </section>
  );
}

export default App;
