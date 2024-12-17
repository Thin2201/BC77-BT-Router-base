import axios from "axios";

const API_URL = "https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi";

export const getEmployees = async () =>
  await axios.get(`${API_URL}/layDanhSach`);
export const addEmployee = async (employee) =>
  await axios.post(`${API_URL}/them`, employee);
export const deleteEmployee = async (id) =>
  await axios.delete(`${API_URL}/xoa/${id}`);
export const updateEmployee = async (id, employee) =>
  await axios.put(`${API_URL}/sua/${id}`, employee);
