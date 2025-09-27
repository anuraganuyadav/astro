// File: src/components/CoogsList.jsx
import React, { useState, useMemo } from "react";
import styles from "../css/List.module.css";

const sampleData = Array.from({ length: 10 }).map((_, i) => ({
  invoiceId: 20000003750 + i,
  invoiceDate: "04-08-2023",
  agreementId: 65287750 + i,
  agreementTitle: "IN Apparel_FLEXIBLE_ASIN_BASED C1TGF",
  fundingType: "Straight Payment",
  originalBalance: (Math.random() * 3000 + 100).toFixed(2),
}));

export default function List({ data = sampleData }) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const onSearch = (e) => {
    const q = e.target.value;
    setQuery(q);
    if (!q) return setFilteredData(data);
    const lower = q.toLowerCase();
    setFilteredData(
      data.filter((r) =>
        [r.invoiceId, r.agreementId, r.agreementTitle, r.fundingType]
          .join(" ")
          .toLowerCase()
          .includes(lower)
      )
    );
  };

  const onReset = () => {
    setQuery("");
    setFilteredData(data);
  };

  const totalBalance = useMemo(() => {
    return filteredData.reduce((s, r) => s + Number(r.originalBalance), 0).toFixed(2);
  }, [filteredData]);

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Coogs Data</h2>
        <div className={styles.controls}>
          <button className={`${styles.btn} ${styles.primary}`}>Filter by Date Range</button>
          <button className={`${styles.btn} ${styles.reset}`} onClick={onReset}>Reset</button>
          <button className={`${styles.btn} ${styles.ghost}`}>Download Excel</button>
          <input
            className={styles.search}
            placeholder="Search..."
            value={query}
            onChange={onSearch}
          />
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Invoice ID</th>
              <th>Invoice Date</th>
              <th>Agreement ID</th>
              <th>Agreement title</th>
              <th>Funding Type</th>
              <th className={styles.alignRight}>Original balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={row.invoiceId}>
                <td>{idx + 1}</td>
                <td>{row.invoiceId}</td>
                <td>{row.invoiceDate}</td>
                <td>{row.agreementId}</td>
                <td className={styles.titleCell}>{row.agreementTitle}</td>
                <td>{row.fundingType}</td>
                <td className={styles.alignRight}>₹{row.originalBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footerRow}>
        <div>Showing {filteredData.length} records</div>
        <div className={styles.total}>Total: ₹{totalBalance}</div>
      </div>
    </div>
  );
}




