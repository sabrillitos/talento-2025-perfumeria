import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [role, setRole] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false); // ✅ nuevo
    const navigate = useNavigate();
    const { setIsAuth } = useContext(CartContext);

    useEffect(() => {
        const auth = localStorage.getItem('isAuth') === 'true';
        const userRole = localStorage.getItem('role') || '';

        if (auth && (userRole === 'admin' || userRole === 'cliente')) {
        setIsAuthenticated(true); // ✅ nuevo
        setIsAuth(true);
        setRole(userRole);
        navigate(userRole === 'admin' ? '/admin' : '/');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (!email) validationErrors.email = 'Email es requerido';
        if (!password) validationErrors.password = 'Password es requerido';

        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }

        try {
        const res = await fetch('data/users.json');
        const users = await res.json();
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (!foundUser) {
            setErrors({ email: 'Credenciales inválidas' });
        } else {
            setIsAuthenticated(true); // ✅ nuevo
            setIsAuth(true);
            localStorage.setItem('isAuth', true);
            localStorage.setItem('role', foundUser.role);
            setRole(foundUser.role);
            navigate(foundUser.role === 'admin' ? '/admin' : '/');
        }
        } catch (err) {
        console.error('Error fetching users:', err);
        setErrors({ email: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.' });
        }
    };

    return (
        <AuthContext.Provider value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        errors,
        role,
        isAuthenticated // ✅ nuevo
        }}>
        {children}
        </AuthContext.Provider>
    );
    };

export const useAuth = () => useContext(AuthContext);

