import React, { useState } from 'react';
import styles from './Prediction.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import url from '../constants';
import { Box, Modal } from '@mui/material';

const Prediction = () => {
    const [formData, setFormData] = useState({
        'Age': 0,
        'Gender': "",
        'Comorbidity': "",
        'Smoking': "",
        'Alcohol': "",
        'Basic Disease': "",
        'AVF': "",
        'Surgeon Experience': "",
        'Venous Course': "",
        'Venous Caliber': "",
        'Venous Stenosis': "",
        'Type of Anastomosis': "",
        'Arterial Wall': "",
        'Vein Diameter': 0,
        'Artery Diameter': 0,
        'Artery To Vein Distance': 0,
    });
    const [result, setResult] = useState(
        {
            "AVF_Group": {
                "Failure": 0,
                "Functional": 0,
            },
            "Post_Op_Complications": {
                "Infection": 0.0,
                "Lymphocele": 0.01,
                "Pseudoaneurysm": 0.0,
                "Stenosis": 0.0,
                "Thrombosis": 0.0,
                "None": 0.00
            },
            "Post_Op_Thrill": {
                "Good": 0.0,
                "Weak": 0.0
            },
            "Post_Op_Bruit": {
                "Good": 0.0,
                "Weak": 0.0
            }
        }
    );
    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url.PredictUrl}/predict`, formData);
            setResult(response.data);
            console.log(response.data);
            setOpenModal(true);
        }
        catch (error) {
            const errorString = error.response ? JSON.stringify(error.response.data, null, 2)
                : JSON.stringify({ message: error.message });
            setError(errorString);
        }
    };

    return (
        <div>
            <div className={styles.navbar}>
                <h1 onClick={() => navigate('/')}>AVF Fistula System</h1>
                <button onClick={() => navigate('/prediction')}>Prediction System</button>
                <button onClick={() => { navigate('/admin') }}>Dashboard</button>
            </div>
            <h2 className={styles.textCenter}>Prediction System</h2>
            <div className={styles.adminFormContainer}>
                <form className={styles.adminForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Age</label>
                        <input
                            className={styles.input}
                            type="number"
                            name="Age"
                            min={1}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Gender</label>
                        <select
                            className={styles.input}
                            name="Gender"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Comorbidity</label>
                        <select
                            className={styles.input}
                            name="Comorbidity"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Smoking</label>
                        <select
                            className={styles.input}
                            name="Smoking"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Alcohol</label>
                        <select
                            className={styles.input}
                            name="Alcohol"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Basic Disease</label>
                        <select
                            className={styles.input}
                            name="Basic Disease"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Hypertension">Hypertension</option>
                            <option value="Diabetes">Diabetes</option>
                            <option value="CGN/Unknown">CGN/Unknown</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>AVF</label>
                        <select
                            className={styles.input}
                            name="AVF"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="RCF">RCF</option>
                            <option value="BCF">BCF</option>
                            <option value="BBF">BBF</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Surgeon Experience</label>
                        <select
                            className={styles.input}
                            name="Surgeon Experience"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value=">2 years">&gt;2 years</option>
                            <option value="<2 years">&lt;2 years</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Venous Course</label>
                        <select
                            className={styles.input}
                            name="Venous Course"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Straight">Straight</option>
                            <option value="Tortuous">Tortuous</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Venous Caliber</label>
                        <select
                            className={styles.input}
                            name="Venous Caliber"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Good">Good</option>
                            <option value="Narrow">Narrow</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Venous Stenosis</label>
                        <select
                            className={styles.input}
                            name="Venous Stenosis"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Type of Anastomosis</label>
                        <select
                            className={styles.input}
                            name="Type of Anastomosis"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="End to Side">End to Side</option>
                            <option value="Side to Side">Side to Side</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Arterial Wall</label>
                        <select
                            className={styles.input}
                            name="Arterial Wall"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Healthy">Healthy</option>
                            <option value="Calcified">Calcified</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Vein Diameter</label>
                        <input
                            className={styles.input}
                            type="number"
                            name="Vein Diameter"
                            step={0.01}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Artery Diameter</label>
                        <input
                            className={styles.input}
                            type="number"
                            name="Artery Diameter"
                            step={0.01}
                            min={0.5}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Artery to Vein Distance</label>
                        <input
                            className={styles.input}
                            type="number"
                            name="Artery to Vein Distance"
                            step={0.01}
                            onChange={handleChange}
                        />
                    </div>
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                    {error ? 
                        <div style={{color: 'red'}}>{error}</div> : <div></div>
                    }
                </form>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box className={styles.modalContent}>
                    <h2>Predictions</h2>
                    {error ?
                        <div>{error}</div>
                        :
                        <div>
                            <h2>Post Operation Complications</h2>
                            <div>
                                <ul>
                                    <li>Infection: {result['Post_Op_Complications']['Infection']}</li>
                                    <li>Lymphocele: {result['Post_Op_Complications']['Lymphocele']}</li>
                                    <li>Pseudoaneurysm: {result['Post_Op_Complications']['Pseudoaneurysm']}</li>
                                    <li>Stenosis: {result['Post_Op_Complications']['Stenosis']}</li>
                                    <li>Thrombosis: {result['Post_Op_Complications']['Thrombosis']}</li>
                                    <li>None: {result['Post_Op_Complications']['None']}</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Post Operation Thrill</h2>
                                <ul>
                                    <li>Good: {result['Post_Op_Thrill']["Good"]}</li>
                                    <li>Weak: {result['Post_Op_Thrill']['Weak']}</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Post Operation Bruit</h2>
                                <ul>
                                    <li>Good: {result['Post_Op_Bruit']["Good"]}</li>
                                    <li>Weak: {result['Post_Op_Bruit']['Weak']}</li>
                                </ul>
                            </div>
                            <div>
                                <h2>AVF Group</h2>
                                <ul>
                                    <li>Failure: {result['AVF_Group']['Failure']}</li>
                                    <li>Functional: {result['AVF_Group']['Functional']}</li>
                                </ul>
                            </div>
                        </div>
                    }
                </Box>
            </Modal>
        </div>
    );
};

export default Prediction;
