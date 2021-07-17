import React from 'react';
import { ToastProvider } from './ToastContext';

const AppProvider = ({ children }) => (
    <ToastProvider>{children}</ToastProvider>
);

export default AppProvider;
