import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navItems } from '../config/navigation';

export const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          {!isCollapsed && <div className="logo">My Portfolio</div>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="toggle-button"
            aria-label="Toggle Sidebar"
          >
            <Menu className="menu-icon" />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                key={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                <Icon className="nav-icon" />
                {!isCollapsed && <span className="nav-label">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};