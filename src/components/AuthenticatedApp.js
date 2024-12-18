import {
    Route,
    Routes
} from 'react-router-dom';

import {AuthProvider} from '../context/authContext';
import Login from '../pages/Login';
import PrivateRoute from './privateRoute';
import Dashboard from '../pages/Dashboard';
import AdminForm from '../pages/AdminForm';

const AuthenticatedApp = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/form' element={<AdminForm />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default AuthenticatedApp;
