import './App.css';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import AuthenticatedApp from './components/AuthenticatedApp';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Prediction from './pages/Prediction';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/prediction' element={<Prediction/>} />
        <Route path="/admin/*" element={<AuthenticatedApp />} />
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
