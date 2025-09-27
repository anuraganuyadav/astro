
import React, { useState } from "react";
import styles from "./css/Sidebar.module.css";

import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../Common/https";
import logo1 from "../../assets/logo/logo1.jpeg";


const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  }

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Get token from localStorage (or sessionStorage)
      const token = localStorage.getItem("admin_token");

      if (!token) {
        navigate("/login");
        return;
      }

      // Call logout API
      await axios.post(
        `${API_BASE_URL}logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove token from storage
      localStorage.removeItem("admin_token");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still clear token if API call fails (safety)
      localStorage.removeItem("admin_token");
      navigate("/login");
    }
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>  <img src={logo1} alt="astrology.in" className={styles.logonav} /></h2>
      <ul className={styles.menu}>

        {/* Dashboard */}
        <li className={location.pathname === "/" ? styles.active : ""}>
          <Link to="/dashboard">📊 Dashboard</Link>
        </li>

        {/* Category */}
        <li>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleMenu("category")}
          >
            📦 Category
          </div>
          {openMenu === "category" && (
            <ul className={styles.subMenu}>
              <li                                                                                                                                            
                className={
                  location.pathname === "/add-category" ? styles.active : ""
                }
              >
                <Link to="/add-category">➕ Add Category</Link>
              </li>
              <li
                className={
                  location.pathname === "/list-category" ? styles.active : ""
                }
              >
                <Link to="/list-category">📋 List Category</Link>
              </li>
            </ul>
          )}
        </li>

        {/* SubCategory */}
        <li>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleMenu("subcategory")}
          >
            🗂️ SubCategory
          </div>
          {openMenu === "subcategory" && (
            <ul className={styles.subMenu}>
              <li
                className={
                  location.pathname === "/add-subcategory" ? styles.active : ""
                }
              >
                <Link to="/add-subcategory">➕ Add SubCategory</Link>
              </li>
              <li
                className={
                  location.pathname === "/list-subcategory" ? styles.active : ""
                }
              >
                <Link to="/list-subcategory">📋 List SubCategory</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Product */}
        <li>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleMenu("product")}
          >
            🛒 Product
          </div>
          {openMenu === "product" && (
            <ul className={styles.subMenu}>
              <li
                className={
                  location.pathname === "/add-product" ? styles.active : ""
                }
              >
                <Link to="/add-product">➕ Add Product</Link>
              </li>
              <li
                className={
                  location.pathname === "/list-product" ? styles.active : ""
                }
              >
                <Link to="/list-product">📋 List Product</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Blog */}
        <li>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleMenu("blog")}
          >
            ✍️ Blog
          </div>
          {openMenu === "blog" && (
            <ul className={styles.subMenu}>
              <li
                className={
                  location.pathname === "/add-blog" ? styles.active : ""
                }
              >
                <Link to="/add-blog">➕ Add Blog</Link>
              </li>
              <li
                className={
                  location.pathname === "/list-blog" ? styles.active : ""
                }
              >
                <Link to="/list-blog">📋 List Blog</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li onClick={handleLogout} style={{ cursor: "pointer" }}>
          🔐 Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
