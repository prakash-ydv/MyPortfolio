import emailjs from "@emailjs/browser"
import { toast } from "react-toastify";

const sendEmail = (e , form) => {
    e.preventDefault();
    
    

    emailjs.sendForm('service_2qqz96m', 'template_kvpay7n', form.current, {
      publicKey: '2HrOMKY9D0pnzPdyU',
    })
    .then(
      () => {
        toast.success("Message Sent", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
      },
      (error) => {
        console.error(error.text);
        toast.error("❌ Failed to send the email. Try again!", {
          position: "top-right",
          autoClose: 3000,
        })
      }
    );
};

export default sendEmail;
