import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';
import { Routes , Route, Navigate } from 'react-router-dom';

const ProtectedRoute =({children})=>{
  const isLoggedIn = localStorage.getItem('users :token') !== null || true;
  console.log('isLoggedIn :>>', isLoggedIn);

  if(!isLoggedIn) {
    return <Navigate to={'/users/sign_in'} />
  }else if(isLoggedIn && ['/sign_in', '/sign_up'].includes(window.location.href)){
    return <Navigate to={'/'} />
  }

  return children
}
function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      } />
      <Route path='/users/sign_in' element={<Form isSignInPage={true}/>} />
      <Route path='/users/sign_up' element={<Form isSignInPage={false}/>} />
    </Routes>
  );
}

export default App;
