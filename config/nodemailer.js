import nodemailer from "nodemailer";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
