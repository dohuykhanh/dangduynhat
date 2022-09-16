import React, { useState } from 'react';
import styles from "./navbar.module.css";
import images from "../../images/Final_logo.png";
import {useNavigate} from 'react-router-dom';

const header = () => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const phanquyen = localStorage.getItem("Vaitro")
  console.log("phanquya", phanquyen);
  var b=JSON.stringify(phanquyen);
  var k ="QuanLy"
  var Xep=false;
  if(phanquyen==="Chu"){
    Xep=true;
  }
  
 

  return (
    <div style={{position: 'relative'}} >
      <header>
        <img
          className={styles.imageLogo}
          src={images}
          alt="images"
        />
        <nav 
        // ref={navRef}
        >
         { Xep && <p onClick={() => {navigate(`/ChiNhanh`)}}>Chi Nhánh</p>}
         { Xep &&<p onClick={() => {navigate(`/Kho`)}}> Kho </p>}
          { Xep &&<p onClick={() => {navigate(`/ThongKe`)}}> Thống kê</p>}
          { Xep &&<p onClick={() => {navigate(`/NhanVien`)}}> Tài khoản</p>}
        </nav>
      </header>

      
    </div>
  );
}

export default header;
