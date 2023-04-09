import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Snackbar, Slide, Grow } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Snackbar
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleOpenError = () => {
    setOpenError(true);
  };

  const handleOpenSuccess = () => {
    setOpenSuccess(true);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const onSubmit = async (data) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.error) {
      handleOpenError();
    } else {
      handleOpenSuccess();
    }
  };

  return (
    <div
      className="sm:block lg:flex flex-col h-screen max-w-[1240px] m-auto items-center p-4"
      id="contact"
    >
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-emerald-500 w-full max-w-5xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contáctame</h1>
              <p className="pt-2 text-emerald-100 text-sm">
                Estoy en busca de nuevas oportunidades de trabajo, si tienes
                alguna pregunta o quieres trabajar conmigo, no dudes en
                contactarme.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center w-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a5b4fc"
                  className="feather feather-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+52 5567 6212 46</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a5b4fc"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>jaretgarciagomez@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-github"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-emerald-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-emerald-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-96">
              <form
                className="flex flex-col space-y-4"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
              >
                <div>
                  <label htmlFor="" className="text-sm">
                    Nombre*
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    name={"name"}
                    {...register("name", { required: true })}
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                  {errors.name && (
                    <span className={"text-red-600 text-sm"}>
                      El nombre es requerido
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name={"email"}
                    {...register("email", { required: true })}
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                  {errors.email && (
                    <span className={"text-red-600 text-sm"}>
                      El email es requerido
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Mensaje*
                  </label>
                  <textarea
                    placeholder="Mensaje"
                    rows="4"
                    name={"message"}
                    {...register("message", { required: true })}
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                  ></textarea>
                  {errors.message && (
                    <span className={"text-red-600 text-sm"}>
                      El mensaje es requerido
                    </span>
                  )}
                </div>
                <button className="inline-block self-end bg-emerald-600 font-bold rounded-lg px-6 py-4 uppercase text-sm text-white">
                  Enviar
                </button>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/#contact"
                />
                <input type="hidden" name="_template" value="table" />
              </form>
              <Snackbar
                open={openSuccess}
                autoHideDuration={6000}
                onClose={handleCloseSuccess}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert
                  onClose={handleCloseSuccess}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Se ha enviado el mensaje correctamente
                </Alert>
              </Snackbar>
              <Snackbar
                open={openError}
                autoHideDuration={6000}
                onClose={handleCloseError}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert
                  onClose={handleCloseError}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  Error al enviar el mensaje
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
