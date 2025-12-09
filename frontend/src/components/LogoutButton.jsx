import React from 'react';
import { useDispatch } from 'react-redux';  // sends actions to the Redux store
import { useNavigate } from 'react-router-dom';  
import { logout } from '../redux/slices/authSlice'; //slice handle a specific feature of the app
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());  
    navigate('/login');  
  };

  return (
    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-blue-600 hover:text-blue-800">
      <LogOut className="h-4 w-4 mr-2 inline" />
      Sign Out
    </button>
  );
};

export default LogoutButton;
