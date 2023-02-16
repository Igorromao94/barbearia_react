import React from 'react';
import Moon from '../../img/moon.png';
import './style.css';

export default function Header(){
  return(
    <header className='header'>
     
      <div className='limitador inicio'>
        <img className='img_logo' src="barbearia-logo.png" alt="Logo da barbearia" />
        
        <div className='Botao_tema'>
          <img className='img_moon' src={Moon} alt="tema do site claro" />
          <label>Dark</label>
        </div>
      </div>
    </header>
  );
}