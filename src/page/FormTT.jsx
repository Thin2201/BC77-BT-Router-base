import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormTT = () => {
  const { id: maNhanVien } = useParams();
  const isEdit = !!maNhanVien;
  const navigate = useNavigate();

  const getAllNV = async (maNhanVien) => {
    try {
      const res = await axios.get(
        `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien/${maNhanVien}`
      );
      frmAddNV.setValues(res.data);
      // setArrNV(res.data);
    } catch (error) {
      console.error("ERROR");
    }
  };
  useEffect(() => {
    if (maNhanVien) {
      getAllNV(maNhanVien);
    }
  }, [maNhanVien]);

  const frmAddNV = useFormik({
    initialValues: {
      maNhanVien: "",
      tenNhanVien: "",
      chucVu: "",
      heSoChucVu: "",
      luongCanBan: "",
      soGioLamTrongThang: "",
    },
    onSubmit: (values) => {
      let url =
        "https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/ThemNhanVien";
      let method = "POST";
      if (isEdit) {
        url = `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien/${values.maNhanVien}`;
        method = "PUT";
      }
      axios({
        url: url,
        method: method,
        data: values,
      })
        .then((response) => {
          if (isEdit) {
            alert("Sửaửa sản phẩm thành công");
          } else {
            alert("Thêm sản phẩm thành công");
          }
          navigate("../card");
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
  });

  return (
    <div className="container">
      <h1 className="text-3xl py-4 font-bold">Form đăng ký nhân viên</h1>
      <form
        className="w-full mx-auto rounded-md bg-slate-100"
        onSubmit={frmAddNV.handleSubmit}
      >
        <div className=" text-left px-4 w-full mb-5 group">
          <label className="text-lg">ID nhân viên:</label>

          <input
            type="text"
            name="maNhanVien"
            id="maNhanVien"
            value={frmAddNV.values.maNhanVien}
            placeholder="Mã nhân viên"
            onChange={frmAddNV.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 "
            required
            disabled={isEdit}
          />
        </div>

        <div className=" text-left px-4 w-full mb-5 group">
          <label className="text-lg">Tên nhân viên:</label>
          <input
            type="text"
            name="tenNhanVien"
            id="tenNhanVien"
            value={frmAddNV.values.tenNhanVien}
            onChange={frmAddNV.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 "
            placeholder="Tên nhân viên"
            required
          />
        </div>

        <div className=" text-left px-4 w-full mb-5 group">
          <label className="text-lg">Chức vụ nhân viên:</label>
          <input
            type="text"
            name="chucVu"
            id="chucVu"
            value={frmAddNV.values.chucVu}
            onChange={frmAddNV.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 "
            placeholder="Chức vụ"
            required
          />
        </div>

        <div className=" text-left px-4 w-full mb-5 group">
          <label className="text-lg">Hệ số chức vụ:</label>
          <input
            type="text"
            name="heSoChucVu"
            id="heSoChucVu"
            value={frmAddNV.values.heSoChucVu}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 "
            placeholder="Hệ số chức vụ"
            required
            onChange={frmAddNV.handleChange}
          />
        </div>

        <div className=" text-left px-4 w-full mb-5 group">
          <label className="text-lg">Lương căn bản:</label>
          <input
            type="text"
            name="luongCanBan"
            id="luongCanBan"
            value={frmAddNV.values.luongCanBan}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 "
            placeholder="Lương căn bản"
            required
            onChange={frmAddNV.handleChange}
          />
        </div>

        <div className=" text-left px-4 w-full mb-5 group">
          <label className="text-lg">Số giờ làm:</label>
          <input
            type="text"
            name="soGioLamTrongThang"
            id="soGioLamTrongThang"
            value={frmAddNV.values.soGioLamTrongThang}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 "
            placeholder="Số giờ làm"
            required
            onChange={frmAddNV.handleChange}
          />
        </div>
        <button
          type="submit"
          className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isEdit ? "Cập nhật" : "Thêm nhân viên"}
        </button>
      </form>
    </div>
  );
};

export default FormTT;
