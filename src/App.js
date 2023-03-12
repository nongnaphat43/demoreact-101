// import logo from './logo.svg';
// import './App.css';
// import promoImg from "./assets/mickey.jpg";
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header/>
      <Container className="my-5" style= {{minHeight: "90vh"}}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      </Container>
    </>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={promoImg} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://www.facebook.com/angun.nongnaphat.5/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         FACEBOOK
  //       </a>
  //     </header>
  //   </div>
);
}

export default App;
