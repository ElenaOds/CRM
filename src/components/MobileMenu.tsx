import { useEffect  } from "react";
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LogoIcon from '../assets/icons/logo.svg';

interface ModalProps {
    onClose: () => void;
    isModalOpen: boolean;
  }


  const MobileMenu: React.FC<ModalProps> = ({onClose, isModalOpen}) => {

    useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isModalOpen]);
    
  return (
    <div className={`overlay position-fixed flex-column p-5 ${isModalOpen ? 'isOpen' : ''}`}>
        <div className="d-flex align-items-center justify-content-center mb-5 gap-3">
            <img src={LogoIcon} alt="Custom Logo" style={{ width: '32px', height: '32px' }} />
            <h1 className="text-white">User management system</h1>
        </div>
        <nav>
            <ul className="d-flex flex-column gap-4">
        <li className="nav-item">
            <NavLink
              to='/dashboard'
              className={({ isActive }) => isActive ? 'nav-link text-white d-flex align-items-center gap-2 rounded-3 p-2 active' : 'nav-link text-white d-flex align-items-center gap-2 rounded-3 p-2'}
              onClick={onClose}>
              <i className="bi bi-speedometer2" style={{fontSize: '26px'}}></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to='users'
              className={({ isActive }) => isActive ? 'nav-link text-white d-flex align-items-center gap-2 rounded-3 p-2 active' : 'nav-link text-white d-flex align-items-center gap-2 rounded-3 p-2'}
              onClick={onClose}>
              <i className="bi bi-people-fill" style={{fontSize: '26px'}}></i>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="d-flex align-items-center gap-2 cursor-pointer mt-5">
      <i className="bi bi-box-arrow-right text-white" style={{fontSize: '18px'}}></i>
      <p className="mb-0 text-white">Exit</p>
    </div>
    </div>

  )
}

export default MobileMenu
