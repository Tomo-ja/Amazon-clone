import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import './App.scss';
import { auth } from './Firebase'
import { useStateValue } from './context/StateProvider';



function App() {

  const [ {}, dispatch ] = useStateValue()

  useEffect(()=> {
    auth.onAuthStateChanged( authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
     <div className="app">
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<><Header /><Checkout /></>} />
        <Route path='/payment' element={<><Header /><Payment /></>} />
      </Routes>
     </div>
    </Router>
  );
}

export default App;

