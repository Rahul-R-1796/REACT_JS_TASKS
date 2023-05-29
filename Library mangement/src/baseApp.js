import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function BaseApp({ children }) {
  const history = useHistory();
  const [activeOption, setActiveOption] = useState('dashboard');

  const handleOptionClick = (option) => {
    setActiveOption(option);
    // Additional logic or state updates if needed
    if (option === 'dashboard') {
      history.push('/');
    } else if (option === 'books') {
      history.push('/book');
    } else if (option === 'addBooks') {
      history.push('/book/add');
    }
  };

  return (
    <div className="baseContainer">
      <div className="sideBar">
        <div className="sideBarContent">
          <div className="sideBarTitle">
            <p>LIBRARY</p>
          </div>
          <hr />
          <div className="sideBarOptions">
            <div
              className={`sideBarOption ${activeOption === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleOptionClick('dashboard')}
            >
              <p className="option">Dashboard</p>
            </div>
            <hr />
            <div
              className={`sideBarOption ${activeOption === 'books' ? 'active' : ''}`}
              onClick={() => handleOptionClick('books')}
            >
              <p className="option">Books</p>
            </div>
            <hr />
            <div
              className={`sideBarOption ${activeOption === 'addBooks' ? 'active' : ''}`}
              onClick={() => handleOptionClick('addBooks')}
            >
              <p className="option">Add Books</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <i className="bx bx-user-circle bx-lg icon"></i>
        </div>
        <div className="content">
          <div className="content-div">{children}</div>
        </div>
        <div className="footer">
          <strong>“A reader lives a thousand lives before he dies . . .” - George R.R. Martin</strong>
        </div>
      </div>
    </div>
  );
}
