import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <h1 onClick={() => navigate('/')}>AVF Fistula System</h1>
        <button onClick={()=> navigate('/prediction')}>Prediction System</button>
        <button onClick={() => { navigate('/admin') }}>Dashboard</button>
      </div>
      <div className={styles.body}>
        <h2>Intelligent Recommendation System for Arteriovenous Fistula Site Selection</h2>
        <p>RCPG No. 3</p>
      </div>
    </div>
  );
}

export default HomePage;