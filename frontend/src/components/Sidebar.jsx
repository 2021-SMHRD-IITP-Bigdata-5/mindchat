import React, {useEffect, useRef, useState } from "react";
import styles from "../Style/sidebar.module.css";
import { Link } from "react-router-dom";
const Sidebar = ({ width=280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();
  
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width); 
      await setOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })


  return (
    <div className={styles.container}>
      <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
          <button onClick={() => toggleMenu()}
          className={styles.button} >
            {isOpen ? 
            <span>&#10006;</span> : <img src="images/menu1.png" alr="contact open button" className={styles.openBtn}/>
            }
          </button>
        <div className={styles.content}>{children}</div> 
        <div className={styles.quick}>
        <Link to="/main">Perfume</Link><br/><br/>
        <Link to="/about">About</Link><br/><br/>
        <Link to="/Cart">Mypage</Link><br/><br/>
        <Link to="/event">Event</Link><br/><br/>
        <Link to="/Faq">FAQ</Link>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;