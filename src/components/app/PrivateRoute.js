import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    // Если токен есть, рендерим переданные компоненты
    // Иначе перенаправляем на страницу логина
    return token ? children : <Navigate to="/log-in" />;
};

export default PrivateRoute;
