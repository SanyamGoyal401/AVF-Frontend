import React, { useState } from 'react';
import styles from './AdminForm.module.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig';
import url from '../constants';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: 0,
    age: 0,
    gender: "",
    comorbidity: "",
    smoking: "",
    alcohol: "",
    basicDisease: "",
    avf: "",
    surgeonExperience: "",
    venousCourse: "",
    venousCaliber: "",
    venousStenosis: "",
    typeofAnastomosis: "",
    arterialWall: "",
    avfGroup: "",
    veinDiameter: 0,
    arteryDiameter: 0,
    arteryToVeinDistance: 0,
    postOpComplications: "",
    postOpThrill: "",
    postOpBruit: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url.BaseUrl}/patient`, formData);
      navigate('/admin');
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.adminFormContainer}>
      <Navbar />
      <h2 className={styles.textCenter}>Add Patient Record</h2>
      <form className={styles.adminForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Mobile</label>
          <input
            className={styles.input}
            type="number"
            name="mobile"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Age</label>
          <input
            className={styles.input}
            type="number"
            name="age"
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Gender</label>
          <select
            className={styles.input}
            name="gender"
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
            name="comorbidity"
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
            name="smoking"
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
            name="alcohol"
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
            name="basicDisease"
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
            name="avf"
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
            name="surgeonExperience"
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
            name="venousCourse"
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
            name="venousCaliber"
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
            name="venousStenosis"
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
            name="typeOfAnastomosis"
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
            name="arterialWall"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Healthy">Healthy</option>
            <option value="Calcified">Calcified</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>AVF Group</label>
          <select
            className={styles.input}
            name="avfGroup"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Functional">Functional</option>
            <option value="Failure">Failure</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Vein Diameter</label>
          <input
            className={styles.input}
            type="number"
            name="veinDiameter"
            step={0.01}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Artery Diameter</label>
          <input
            className={styles.input}
            type="number"
            name="arteryDiameter"
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
            name="arteryToVeinDistance"
            step={0.01}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Post-Op Complications</label>
          <select
            className={styles.input}
            name="postOpComplications"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Thrombosis">Thrombosis</option>
            <option value="Stenosis">Stenosis</option>
            <option value="Infection">Infection</option>
            <option value="Pseudoaneurysm">Pseudoaneurysm</option>
            <option value="Lymphocele">Lymphocele</option>
            <option value="None">None</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Post-Op Thrill</label>
          <select
            className={styles.input}
            name="postOpThrill"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Good">Good</option>
            <option value="Weak">Weak</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Post-Op Bruit</label>
          <select
            className={styles.input}
            name="postOpBruit"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Good">Good</option>
            <option value="Weak">Weak</option>
          </select>
        </div>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
