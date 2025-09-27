
import React, { useState, useEffect, useRef } from "react"; // ✅ Add useRef
import axios from "axios";
import styles from "./css/DashboardCards.module.css";
import { API_BASE_URL } from "../Common/https";
import logo1 from "../../assets/logo/logo1.jpeg";



const DashboardCards = () => {
  const fileInputRef = useRef(null); // ✅ Add this near useState
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("admin_token");
  // Totals from API
  const [totals, setTotals] = useState({
    dfinvoice: 0,
    poinvoice: 0,
    remittance: 0,
    returns: 0,
    coogs: 0,
  });

  // File change handler
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };



  const fetchTotals = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      };

      const [
        dfInvoiceRes,
        poInvoiceRes,
        remittanceRes,
        returnRes,
        coogsRes,
      ] = await Promise.all([
        axios.get(`${API_BASE_URL}df-invoice`, { headers }),
        axios.get(`${API_BASE_URL}po-invoice`, { headers }),
        axios.get(`${API_BASE_URL}remittances`, { headers }),
        axios.get(`${API_BASE_URL}returns`, { headers }),
        axios.get(`${API_BASE_URL}coogs`, { headers }),
      ]);

      setTotals({
        dfinvoice: dfInvoiceRes.data.total_amount_paid || 0,
        poinvoice: poInvoiceRes.data.total_amount_paid || 0,
        remittance: remittanceRes.data.total_amount_paid || 0,
        returns: returnRes.data.total_amount_paid || 0,
        coogs: coogsRes.data.total_amount_paid || 0,
      });
    } catch (error) {
      console.error("Error fetching totals", error);
    }
  };


  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("excel_file", file);

    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE_URL}import-excel`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message || "Upload successful");

      // ✅ Clear file input
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }

      // ✅ Refresh totals
      fetchTotals();
    } catch (error) {
      console.error("Upload failed", error);
      if (error.response?.status === 401) {
        alert("Unauthorized. Please log in again.");
        localStorage.removeItem("admin_token");
        window.location.href = "login";
      } else {
        alert("Upload failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchTotals();

    // 🔄 Optional: Auto-refresh every 60 seconds
    const interval = setInterval(fetchTotals, 60000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { label: "Total Product", amount: "0", color: styles.red },
    { label: "Total Category", amount: "0", color: styles.darkRed },
    { label: "Total SubCategory", amount: "0", color: styles.green },
    { label: "Total Blog", amount: "0", color: styles.green },


  ];

  return (
    <>
      <div className={styles.topbar}>
        <h1 className={styles.title}><img src={logo1} alt="astrology.in" className={styles.logonav} /></h1>

      </div>

      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div key={index} className={`${styles.card} ${card.color}`}>
            <div className={styles.amount}>{card.amount}</div>
            <div className={styles.label}>{card.label}</div>
            {["Your Receivables", "Your Remittance", "Your Payables"].includes(
              card.label
            ) && (
                <button className={styles.downloadBtn}>Download Invoice</button>
              )}
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCards;


// import React from 'react'

// const DashboardCards = () => {
//   return (
//     <div>DashboardCards</div>
//   )
// }

// export default DashboardCards
