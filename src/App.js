import './App.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <Router>
       <Alert/>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
