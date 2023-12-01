// react tools
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// component
import SignUp from './components/SignUp/SignUp';
import Header from './components/1-header/Header';
import SignIn from './components/SignIn/SignIn';
import Home   from './components/2-home/Home';
import AddJob from './components/3-jop/addJop/AddJob';
import ListJop from './components/3-jop/listJop/ListJop';
import Admin from './components/3-jop/sidebar/Admin';
import Apply from './components/4-apply/add_apply/Apply';
import ListApply from './components/4-apply/list_apply/ListApply';
import App_detailes from './components/4-apply/app_detailes/App_detailes';
import JobDetailes from './components/3-jop/jobDetailes/JobDetailes';
import RequireAuth from '../src/RequireAuth';
import StillLogin from './components/SignIn/StillLogin';














// style css
import './index.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />

        <Route element = {<StillLogin />}>
            <Route path='/job_list' element={<ListJop />} />
            <Route path='/apply' element={<Apply />} />
            <Route path='/' element={<Home />} />
            <Route path='/detailJob/:id/' element={<JobDetailes/>} />

          {/* protected route */}
            <Route element={<RequireAuth />}>
              <Route path='/detailApp/:id/' element={<App_detailes/>} /> 
              <Route path='/add_job' element={<AddJob />} />
              <Route path='/add_job' element={<ListApply />} /> 
              <Route path='/admin' element={<Admin />} />
            </Route>
          </Route>
        
        
      </Routes>
    </>
  )
}

export default App
