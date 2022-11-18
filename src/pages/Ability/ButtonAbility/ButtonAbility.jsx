import { useState } from 'react';
import { ModalAbility } from '../ModalAbility';
import './ButtonAbility.css';

export const ButtonAbility = ({activeModal}) => {
  
  return (
    <>
      <button
        onClick={activeModal}
        className= "button__hability"
      >
        Ver
      </button> 
    </>
  )
}
