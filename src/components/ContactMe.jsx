import React, { useRef } from "react";
import Heading from "./universal-components/Heading";
import ContactBox from "./contactme-components/ContactBox";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import sendEmail from "./contactme-components/sendmail";

function ContactMe() {
  const form = useRef();
  return (
    <section id="contact" className="flex flex-col mt-28 w-full ">
      <Heading subheading="Get In Touch" heading="Contact Me" />

      <div className="flex flex-col flex-wrap lg:flex-row w-full items-center lg:items-start justify-center gap-10 p-5 lg:p-10 lg:px-10">
        <div className="flex flex-col gap-5 px-10  md:w-[25vw]">
          {/* LinkedIn */}
          <ContactBox
            platform="LinkedIn"
            username="Prakash Kumar"
            logo={<FaLinkedin size={32} />}
            url="https://www.linkedin.com/in/prakash-kumar-jh09/"
            say="View Profile"
          />

          {/* Github */}
          <ContactBox
            platform="GitHub"
            username="prakash-ydv"
            logo={<FaGithub size={32} />}
            url="https://github.com/prakash-ydv"
            say="View Profile"
          />

          {/* Email */}
          <ContactBox
            platform="Email"
            username="mailtoprakashydv@gmail.com"
            logo={<MdOutlineMail size={32} />}
            url="mailto:mailtoprakashydv@gmail.com"
            say="Send E-Mail"
          />

          {/* WhatsApp */}
          <ContactBox
            platform="WhatsApp"
            username="+91 82109 18083"
            logo={<MdOutlineMail size={32} />}
            url="https://wa.me/+918210918083"
            say="Send message"
          />
        </div>

        <form
          className="flex flex-col gap-5 h-full sm:w-[50vw] items-start justify-center text-yellow-600"
          ref={form}
          onSubmit={(e)=>(sendEmail(e, form))}
        >
          <input
            placeholder="Your Full Name"
            className="rounded-lg px-2 border-blue-500 border-2 h-10 lg:h-16 w-full placeholder:text-xs placeholder:text-zinc-400"
            type="text"
            name="user_name"
            required
          />

          <input
            placeholder="Your Email"
            className="rounded-lg px-2 border-blue-500 border-2 h-10 lg:h-16 w-full placeholder:text-xs placeholder:text-zinc-400 "
            type="email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your Message"
            className="h-42 lg:h-72 rounded-lg p-2 border-blue-500 border-2 w-full placeholder:text-xs resize-none placeholder:text-zinc-400"
            name="message"
            required
          />
          <input
            className="bg-blue-600 hover:bg-blue-800 p-2 lg:p-4 cursor-pointer rounded-lg text-sm text-black"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
