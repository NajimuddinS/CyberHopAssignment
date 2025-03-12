import React from 'react';
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', isActive: false },
    { name: 'Pokemons', isActive: true },
    { name: 'Wallets', isActive: false },
    { name: 'Summary', isActive: false },
    { name: 'Accounts', isActive: false },
    { name: 'Settings', isActive: false },
  ];

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="https://i.pinimg.com/736x/7f/36/4b/7f364bd9bede19320c1c71f448bd8f58.jpg" style={{ borderRadius: "10px" }} alt="Profile" />
        <h1>Ash Ketchum</h1>
        <p>ash.ketchum@pokemail.com</p>
      </div>
      <div className="menu-items">
        {menuItems.map((item) => (
          <h2 key={item.name} className={item.isActive ? 'active' : ''}>
            {item.name}
          </h2>
        ))}
        <a href="">
        <h2 className='active'>Logout</h2>
        </a>
      </div>
      
    </div>
  );
};

export default Sidebar;
