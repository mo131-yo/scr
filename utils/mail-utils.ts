import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv();

const { AUTH_EMAIL ,AUTH_PASS} = process.env;

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: AUTH_EMAIL,
        pass: AUTH_PASS,
    }
})

// export const verifyUserEmailCode = async (toEmail: string, verificationCode: string) => {
//     const mailOptions = {
//         from: AUTH_EMAIL,
//         to: toEmail,
//         subject: "Verify your email",
//         text: `Your verification code is: ${verificationCode}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log("Verification email yvuullaa", toEmail);
//     } catch (error) {
//         console.error("Error sending verification email", error);
//     }
// }

export const verifyUserEmail = async (receiver: string, verifiLink: string) => {
    await transport.sendMail({
        from: `Food Delivery ${AUTH_EMAIL}`,
        to: receiver,
        subject: "Verify user",
        html: `<p>Click <a href="${verifiLink}">here</a> to verify your email.</p>`
    })
}