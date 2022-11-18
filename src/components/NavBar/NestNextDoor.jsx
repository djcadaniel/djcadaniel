import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import './NestNextDoor.css';

export const NestNextDoor = () => {
  return (
    <ul className='header__lado'>
      <li className='mb-5'>{<BsInstagram />}</li>
      <li className='mb-5'>{<BsTwitter />}</li>
      <li className='mb-5'>{<BsFacebook />}</li>
      <li className='mb-5'>{<BsYoutube />}</li>
      <li className='mb-5'>{<BsLinkedin />}</li>
    </ul>
  )
}