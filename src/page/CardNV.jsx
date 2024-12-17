import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CardNV = () => {
  const [arrNV, setArrNV] = useState([]);

  const getAllNV = async () => {
    try {
      const res = await axios.get(
        "https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien"
      );

      setArrNV(res.data);
      console.log("setArrNV: ", setArrNV);
    } catch (error) {
      console.error("ERROR");
    }
  };
  const deleteNV = async (maNhanVien) => {
    try {
      await axios.delete(
        `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`
      );
      getAllNV();
    } catch (error) {
      console.error("Error delete", error);
    }
  };
  useEffect(() => {
    getAllNV();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-medium py-4">Danh sách nhân viên</h1>
      <div className=" items-end justify-end text-right py-2">
        <NavLink
          to={"/form"}
          color="warning"
          className={"bg-green-400 rounded-md p-1"}
        >
          Thêm nhân viên
        </NavLink>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Tên NV
              </th>
              <th scope="col" className="px-6 py-3">
                Chức vụ
              </th>
              <th scope="col" className="px-6 py-3">
                Hệ số chức vụ
              </th>
              <th scope="col" className="px-6 py-3">
                Lương căn bản
              </th>
              <th scope="col" className="px-6 py-3">
                Số giờ làm
              </th>
              <th scope="col" className="px-6 py-3">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {arrNV.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.maNhanVien}
                  </td>
                  <td className="px-6 py-4">{item.tenNhanVien}</td>
                  <td className="px-6 py-4">{item.chucVu}</td>
                  <td className="px-6 py-4">{item.heSoChucVu}</td>
                  <td className="px-6 py-4">{item.luongCanBan}</td>
                  <td className="px-6 py-4">{item.soGioLamTrongThang}</td>
                  <td className="px-6 py-4 text-white text-md">
                    <button
                      className="bg-red-500 w-1/3 p-1 rounded-lg mx-2"
                      onClick={() => {
                        deleteNV(item.maNhanVien);
                      }}
                    >
                      Xóa
                    </button>
                    <NavLink
                      to={`./form/${item.maNhanVien}`}
                      className="bg-blue-500 w-1/3 p-1 rounded-lg mx-2"
                    >
                      Sửa
                    </NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardNV;
