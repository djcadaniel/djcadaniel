import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__networks">
        <li>{<BsInstagram />}</li>
        <li>{<BsTwitter />}</li>
        <li>{<BsFacebook />}</li>
        <li>{<BsYoutube />}</li>
        <li>{<BsLinkedin />}</li>
      </ul>
      <p>CopyRight@2022 - @danielcastro</p>
      <p>All Rights Reserved</p>
    </footer>
  )
}