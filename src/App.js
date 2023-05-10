import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Home from './home/Home';
import BookingPage from './bookingpage/BookingPage';
import NotImplemented from './NotImplemented';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotImplemented />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
