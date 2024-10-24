import './App.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import SearchProfile from './pages/SearchProfile';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import ProfilePage from './pages/ProfilePage';
import ProfilePage2 from './pages/ProfilePage2';





function App() {
  return (
    <div className="App">
   
      <Router>
   
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/profilepage2" element={<ProfilePage2 />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/searchprofile" element={<SearchProfile />}/>
          <Route path="/messages" element={<Messages />}/>
          <Route path="/notifications" element={<Notifications />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
