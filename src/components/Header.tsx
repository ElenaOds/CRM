import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Image from '../assets/images/avatar.png';
import MobileMenu from './MobileMenu';

const Header: React.FC  = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const getHeaderText = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/users':
        return 'Users';
      default:
        return 'Dashboard';
    }
  };
  return (
    <header className="styled-header d-flex justify-content-between align-items-center">
      <h2 className="font-weight-bold fs-2">{getHeaderText()}</h2>
      <div className="user-wrapper position-relative d-flex justify-content-center align-items-center">
      <img src={Image} alt="avatar" className="avatar" />
      <div className="d-none d-lg-block">
        <p className="font-weight-bold fs-6">Adam Smith</p>
        <p className="font-weight-light fs-6">adamsmith@gmail.com</p>
      </div>
      
      <button type="button" 
          className={`modal-btn btn position-relative ${isModalOpen ? 'isOpen' : ''}`} onClick={toggleModal} >
          <span className="first-line"></span>
          <span className="second-line"></span>
          <span className="third-line"></span>
      </button> 
      </div>
      <MobileMenu onClose={toggleModal} isModalOpen={isModalOpen}/>
    </header>
  )
}

export default Header
