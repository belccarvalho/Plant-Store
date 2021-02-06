import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Isabel Costa</h1>
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
    </div>
  );
}
