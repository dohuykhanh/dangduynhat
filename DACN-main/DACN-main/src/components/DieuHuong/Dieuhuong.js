import styles from "./dieuhuong.module.css"
import {useNavigate} from 'react-router-dom';

import React from "react";



function Dieuhuong() {
  const navigate = useNavigate();
  return (
    <div>
    <div className= {styles.left}>
        
      <div className={styles.leftButton}>
        <button className= {styles.nut}>BAN HANG</button>
        <button className= {styles.nut} onClick={() => {navigate(`/TungChiNhanh`)}} >NHAN VIEN</button>
        <button className= {styles.nut} onClick={() => {navigate(`/VatTu`)}} >SAN PHAM</button>
      </div>
    </div>
    </div>
  )
}

export default Dieuhuong;
