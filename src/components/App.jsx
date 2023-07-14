import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Register from 'pages/RegisterPage';
import Login from 'pages/LoginPage';
import { Contacts } from 'pages/ContactsPage';
import Home from 'pages/HomePage';
import 'tailwindcss/tailwind.css';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute, RestrictedRoute } from './Routes/Routes';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />}/>} />
        <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<Contacts />}/>} />
      </Route>
    </Routes>
  );
};
