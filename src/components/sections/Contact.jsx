import React, { useState } from "react";
import rectangle from "../../images/Rectangle 15.png";
import { ToastContainer, toast } from "react-toastify";
import circle from "../../images/circle.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phoneNumber: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSumbit(e) {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.mail === "" ||
      formData.phoneNumber === "" ||
      formData.message === ""
    ) {
      toast("Заполните все поля! 🌋", {
        position: "bottom-center",
        type: "error",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setFormData(() => {
        return {
          name: "",
          mail: "",
          phoneNumber: "",
          message: "",
        };
      });
      toast("Сообщение успешно отправилось! 💗", {
        position: "bottom-center",
        type: "success",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <section className="contact">
      <div className="contact-circle">
        <img src={circle} alt="" />
      </div>
      <div className="container">
        <h1 className="section-title contact-title">
          Отправляйте нам интересные идеи
        </h1>
        <div className="contact-inner">
          <form className="contact-form">
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              value={formData.name}
              placeholder="ФИО"
            />
            <input
              type="text"
              name="mail"
              onChange={(e) => handleChange(e)}
              value={formData.mail}
              placeholder="ПОЧТА"
            />
            <input
              type="text"
              name="phoneNumber"
              onChange={(e) => handleChange(e)}
              value={formData.phoneNumber}
              placeholder="НОМЕР"
            />
            <textarea
              name="message"
              onChange={(e) => handleChange(e)}
              value={formData.message}
              placeholder="СООбЩЕНИЕ"
            ></textarea>
            <button onClick={(e) => handleSumbit(e)} className="submit-button">
              отправить
            </button>
          </form>
          <div className="rectangle"></div>
          <img src={rectangle} alt="contact-img" />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
