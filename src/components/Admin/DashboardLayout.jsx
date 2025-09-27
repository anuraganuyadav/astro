// import React from "react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <Sidebar />

//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Topbar />

//         <main style={{ padding: "20px", backgroundColor: "#f9f9f9", flex: 1 }}>
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;




// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
// import styles from "./css/DashboardLayout.module.css";
// const DashboardLayout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       {isSidebarOpen && <Sidebar />}
//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Topbar toggleSidebar={toggleSidebar} />
//         <main style={{ padding: "20px", backgroundColor: "#f9f9f9", flex: 1 }}>
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;



import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import styles from "./css/DashboardLayout.module.css";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.layout}>
      {isSidebarOpen && <Sidebar />}
      <div className={styles.rightSection}>
        <Topbar toggleSidebar={toggleSidebar} />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
