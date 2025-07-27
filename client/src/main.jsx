import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from '../context/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';  
import { ChatProvider } from '../context/ChatContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
        <AuthProvider>
          <ChatProvider>
            <App />
          </ChatProvider>
          
        </AuthProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);
