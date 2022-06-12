import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './Components/landing';
import Home from './Components/Home';
import Analytics from './Components/Analytics';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import ProtectedRoutes from './Routes/ProtectedRoutes';


const App = () => {
    const [user, setUser] = React.useState();

    const handleLogin = () => {
        setUser({ id: 1, name: 'ram', permissions: ['analyze'], roles: ['admin'] });
    }
    const handleLogout = () => {
        setUser()
        console.log("user", user)
    }
    return (
        <React.Fragment>
            <h1>React Router</h1>
            <Navigation />
            {(user === undefined) ? (<button onClick={() => handleLogin()}>Login</button>) : (<button onClick={() => handleLogout()}>LogOut</button>)}
            <Routes>
                <Route index element={<Landing />} />
                <Route path='/landing' element={<Landing />} />
                {/* <Route path='/home' element={
                    <ProtectedRoutes user={user}>
                        <Home />
                    </ProtectedRoutes>
                } /> */}
                <Route element={<ProtectedRoutes user={user} />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/Analytics' element={<Analytics />} />
            </Routes>
        </React.Fragment>
    )
};

const Navigation = () => (
    <>
        <nav style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
            paddingLeft: '10px'
        }}>
            <Link to="/landing" style={{ margin: '10px' }}>Landing</Link>
            <Link to="/home" style={{ margin: '10px' }}>Home</Link>
            <Link to="/dashboard" style={{ margin: '10px' }}>Dashboard</Link>
            <Link to="/analytics" style={{ margin: '10px' }}>Analytics</Link>
            <Link to="/admin" style={{ margin: '10px' }}>Admin</Link>
        </nav>
    </>
)

export default App