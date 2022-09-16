import styles from "./dieuhuong.module.css"


import React from "react";



function Dieuhuong() {
  return (
    <div>
    <div className= {styles.left}>
        
      <div className={styles.leftButton}>
        <button className= {styles.nut}>BAN HANG</button>
        <button className= {styles.nut}>NHAN VIEN</button>
        <button className= {styles.nut}>SAN PHAM</button>
      </div>
    </div>
    </div>
  )
}

export default Dieuhuong;
