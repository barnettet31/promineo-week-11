import { Route, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar/navbar.component';
import { LandingPage } from './routes/landing/landing.route';
import { AppPage } from './routes/app/app.route';
import { CodePage } from './routes/code/code.route';

function App() {
  

  return (
   <Routes>
    <Route element={<NavBar/>}>
      <Route index element={<LandingPage/>} path="/"/>
      <Route index element={<AppPage/>} path="/app"/>
      <Route index element={<CodePage/>} path="/code"/>
    </Route>
   </Routes>
  )
}

export default App
