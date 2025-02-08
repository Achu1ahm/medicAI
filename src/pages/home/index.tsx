import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/mediclogo.png';
import HoverTracker from '../../components/ui/hoverTracker';
import './style.css';
import { useAuth } from '../../context/AuthContext';

const HomePage = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleAuth = () => {
        logout();
        navigate("/login", { replace: true });

      };

    return (
        <div className="homepage">
            <nav className="navigation">
                <div className="nav-group">
                    <div className="nav-item">FEATURES</div>
                    <div className="nav-item">PRICING</div>
                </div>

                <div className="logo-container">
                    <div className="logo">
                        <img src={logo} alt="Logo" width={"220px"} />
                    </div>
                </div>

                <div className="nav-group">
                    <div className="nav-item" onClick={()=>navigate("/chat")} >CHATBOT</div>
                    <div className="nav-item" onClick={()=>handleAuth()}>{`${'login'}`}</div>
                </div>
            </nav>

            <div className="main-content">
                <div className="content-left">
                    <div className="chat-label">CHAT WITH AI</div>
                    <h1 className="main-title">
                        MedicAI
                        <br />
                        CHATBOT
                    </h1>
                    <p className="description">
                        We designed MedicAI to revolutionize healthcare with smart, fast, and reliable AI assistance.
                    </p>
                    <button onClick={()=>navigate("/chat")} className="glow-button">Try Now</button>
                </div>
                <HoverTracker />
            </div>
        </div>
    );
};

export default HomePage;