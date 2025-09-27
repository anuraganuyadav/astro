// import React, { useState } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "./Common/Https";


// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         try {
//             const res = await axios.post(`${API_BASE_URL}login`, {
//                 email,
//                 password
//             });

//             if (res.data.status) {
//                 localStorage.setItem("token", res.data.token);
//                 setSuccess("Login successful!");
//             } else {
//                 setError(res.data.message);
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || "Something went wrong");
//         }
//     };

//     return (
//         <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
//             <h2>Login</h2>
//             {error && <div style={{ color: "red" }}>{error}</div>}
//             {success && <div style={{ color: "green" }}>{success}</div>}
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//                     />
//                 </div>
//                 <button type="submit" style={{ width: "100%", padding: "10px" }}>
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// }





import React, { useState } from "react";
import axios from "axios";
import styles from "./css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../Common/https";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // <-- navigation hook

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const res = await axios.post(`${API_BASE_URL}login`, { email, password });

            if (res.data.status) {
            localStorage.setItem("admin_token", res.data.token);

                navigate("/dashboard"); // <-- redirect to DashboardPage
            } else {
                setError(res.data.message || "Invalid credentials");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginCard}>
                <div className={styles.iconWrapper}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <h2>Welcome Admin</h2>
                <p>Please login to continue</p>

                <form onSubmit={handleLogin}>
                    {/* Email */}
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email address"
                        />
                    </div>

                    {/* Password */}
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>

                    {/* Error / Success */}
                    {error && <p className={styles.error}>{error}</p>}
                    {success && <p className={styles.success}>{success}</p>}

                    {/* Button */}
                    <button type="submit" className={styles.loginBtn} disabled={loading}>
                        {loading ? <span className={styles.loader}></span> : "Login In"}
                    </button>
                </form>
            </div>
        </div>
    );
}
