import React from "react";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <article className='contact col-sm-10 col-8 container'>
      <h1>Isabel Costa</h1>
      <section>
        <h2>Address</h2>
        <p>
          <FaPhoneAlt /> {"  "} +49 174 5652 867
        </p>{" "}
        <p>
          <MdEmail /> {"  "} belccarvalho@gmail.com
        </p>{" "}
        <p>
          <FaHome /> {"  "} Spohrstraße, 04103. Leipzig
        </p>
      </section>
      <section>
        <h2>Social</h2>
        <a href='https://github.com/belcosta' target='_blank' rel='noreferrer'>
          <FaGithub /> GitHub
        </a>{" "}
        <a
          href='https://www.linkedin.com/in/belcosta-webdeveloper/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin /> Linkedin
        </a>
      </section>
    </article>
  );
}
