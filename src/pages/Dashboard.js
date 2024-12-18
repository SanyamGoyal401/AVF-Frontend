import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Button, Modal, TextField, Box,
} from '@mui/material';
import Navbar from '../components/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Dashboard.module.css';
import axios from '../utils/axiosConfig';
import url from '../constants';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(`${url.BaseUrl}/patient`);
      await setPatients(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleUpdate = (patient) => {
    setSelectedPatient(patient);
    setOpenUpdateModal(true);
  };

  const handleDelete = (patient) => {
    setSelectedPatient(patient);
    setOpenDeleteModal(true);
  };

  const handleView = (patient) => {
    setSelectedPatient(patient);
    setOpenViewModal(true);
  };



  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`${url.BaseUrl}/patient/${selectedPatient._id}`, selectedPatient);
      fetchPatients();
      setOpenUpdateModal(false);
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`${url.BaseUrl}/patient/${selectedPatient._id}`);
      fetchPatients();
      setOpenDeleteModal(false);
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={styles.table}>
            <TableHead className={styles.tableHeading}>
              <TableRow>
                <TableCell className={styles.tableCell}>Name</TableCell>
                <TableCell className={styles.tableCell}>Mobile</TableCell>
                <TableCell className={styles.tableCell}>Update</TableCell>
                <TableCell className={styles.tableCell}>Delete</TableCell>
                <TableCell className={styles.tableCell}>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient._id}>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.mobile}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="success" onClick={() => handleUpdate(patient)}>
                      <UploadIcon />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="error" onClick={() => handleDelete(patient)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleView(patient)}>
                      <VisibilityIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
          <Box className={styles.modalContent}>
            <h2>Update Patient</h2>
            {selectedPatient && (
              <div>
                <TextField
                  label="Name"
                  name="name"
                  value={selectedPatient.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Mobile"
                  name="mobile"
                  value={selectedPatient.mobile}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Age"
                  name="age"
                  value={selectedPatient.age}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
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
                <div className={styles.modalButtons}>
                  <Button variant="contained" color="success" onClick={handleUpdateSubmit}>
                    Update
                  </Button>
                  <Button variant="contained" color="error" onClick={() => setOpenUpdateModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </Box>
        </Modal>

        <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
          <Box className={styles.modalContent}>
            <div>
              <h2>Delete Confirmation</h2>
              <p>Are you sure you want to delete this patient?</p>
              <div className={styles.modalButtons}>
                <Button variant="contained" color="success" onClick={handleDeleteConfirm}>
                  Delete
                </Button>
                <Button variant="contained" color="error" onClick={() => setOpenDeleteModal(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Box>
        </Modal>

        <Modal open={openViewModal} onClose={() => setOpenViewModal(false)}>
          <Box className={styles.modalContent}>
            <h2>Patient Details</h2>
            {selectedPatient && (
              <div>
                <div className={styles.formGroup}>
                   Name: {selectedPatient.name}
                </div>
                <div className={styles.formGroup}>
                   Mobile: {selectedPatient.mobile}
                </div>
                <div className={styles.formGroup}>
                   Age: {selectedPatient.age}
                </div>
                <div className={styles.formGroup}>
                   Gender: {selectedPatient.gender}
                </div>
                <div className={styles.formGroup}>
                   Comorbidity: {selectedPatient.comorbidity}
                </div>
                <div className={styles.formGroup}>
                   Smoking: {selectedPatient.smoking}
                </div>
                <div className={styles.formGroup}>
                   Alcohol: {selectedPatient.alcohol}
                </div>
                <div className={styles.formGroup}>
                   Basic Disease: {selectedPatient.basicDisease}
                </div>
                <div className={styles.formGroup}>
                   AVF: {selectedPatient.avf}
                </div>
                <div className={styles.formGroup}>
                   Surgeon Experience: {selectedPatient.surgeonExperience}
                </div>
                <div className={styles.formGroup}>
                   Venous Course: {selectedPatient.venousCourse}
                </div>
                <div className={styles.formGroup}>
                   Venous Caliber: {selectedPatient.venousCaliber}
                </div>
                <div className={styles.formGroup}>
                   Type of Anastomosis: {selectedPatient.typeOfAnastomosis}
                </div>
                <div className={styles.formGroup}>
                   Arterial Wall: {selectedPatient.arterialWall}
                </div>
                <div className={styles.formGroup}>
                   AVF Group: {selectedPatient.avfGroup}
                </div>
                <div className={styles.formGroup}>
                   Vein Diameter: {selectedPatient.veinDiameter}
                </div>
                <div className={styles.formGroup}>
                   Artery Diameter: {selectedPatient.arteryDiameter}
                </div>
                <div className={styles.formGroup}>
                   Artery to Vein Distance: {selectedPatient.arteryToVeinDistance}
                </div>
                <div className={styles.formGroup}>
                   Post-Op Complications: {selectedPatient.postOpComplications}
                </div>
                <div className={styles.formGroup}>
                   Post-Op Thrill: {selectedPatient.postOpThrill}
                </div>
                <div className={styles.formGroup}>
                   Post-Op Bruit: {selectedPatient.postOpBruit}
                </div>
              </div>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
