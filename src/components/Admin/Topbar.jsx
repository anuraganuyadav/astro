// //import React from "react";
// import styles from "../Components/css/Topbar.module.css";

// const Topbar = () => {
//   return (
//     <div className={styles.topbar}>
//       <h1 className={styles.title}>Dashboard BananaYello</h1>
//       <div className={styles.rightSection}>
//         <input type="file" className={styles.fileInput} />
//         <button className={styles.uploadBtn}>Upload</button>
//         <span>👤 Admin</span>
//       </div>
//     </div>
//   );
// };

// export default Topbar;


// import React from "react";
// import styles from "../Components/css/Topbar.module.css";

// const Topbar = () => {
//   return (
//     <div className={styles.topbar}>
//       <div className={styles.rightSection}>
        
//         <span>👤 Admin</span>
//       </div>
//     </div>
//   );
// };

// export default Topbar;



import React from "react";
import styles from "./css/Topbar.module.css";


const Topbar = ({ toggleSidebar }) => {
  return (
    <div className={styles.topbar}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>
        ☰
      </button>
      <div className={styles.rightSection}>
        <span>👤 Admin</span>
      </div>
    </div>
  );
};

export default Topbar;

