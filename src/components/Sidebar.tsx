import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LogoIcon from '../assets/icons/logo.svg';

const Sidebar = () => {
  return (
    <aside className="flex-column justify-content-between sibebar text-white p-4" style={{ width: '240px', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
    <div>
      <div className="d-flex flex-column align-items-center mb-4">
      <img src={LogoIcon} alt="Custom Logo" style={{ width: '32px', height: '32px' }} />
        <h1 className="h4 text-center mt-2">User management system</h1>
      </div>
      <nav>
        <ul className="nav flex-column gap-3">
          <li className="nav-item">
            <NavLink
              to='/dashboard'
              className={({ isActive }) => isActive ? 'nav-link text-white d-flex align-items-center gap-2 rounded-3 active' : 'nav-link text-white d-flex align-items-center gap-2 rounded-3'}>
              <i className="bi bi-speedometer2" style={{fontSize: '26px'}}></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to='users'
              className={({ isActive }) => isActive ? 'nav-link text-white d-flex align-items-center gap-2 rounded-3 active' : 'nav-link text-white d-flex align-items-center gap-2 rounded-3'}>
              <i className="bi bi-people-fill" style={{fontSize: '26px'}}></i>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="d-flex align-items-center gap-2 cursor-pointer">
      <i className="bi bi-box-arrow-right" style={{fontSize: '18px'}}></i>
      <p className="mb-0">Exit</p>
    </div>
  </aside>
    
  )
}

export default Sidebar
