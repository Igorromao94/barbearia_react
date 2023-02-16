import React, {useState} from 'react';
import './App.css';
import Moon from './img/moon.png';
import Cabelo from './img/cabelo.png';
import Sombrancelha from './img/sombrancelha-min.png';
import Bigode from './img/bigode-min.png';
import Barba from './img/Barba-PNG.png';


function App() {

  const [mododetela, setMododetala] = useState("modo-claro");

  function mudarmododetela(){
    if(mododetela === "modo-claro")
    {
      setMododetala("modo-escuro");
    }
    if(mododetela === "modo-escuro")
    {
      setMododetala("modo-claro");
    }
  }

  return (
    <div className="App {modo-claro}">
      <header className='header {modo-claro}'>
     
        <div className='limitador inicio'>
          <img className='img_logo' src="barbearia-logo.png" alt="Logo da barbearia" />
        
          <div onClick={mudarmododetela} className='Botao_tema'>
            <img className='img_moon' src={Moon} alt="tema do site claro" />
            <label>Dark</label>
          </div>
        </div>
      </header>
      
      <main className={mododetela}>
        <div className='banner'>

        </div>

        <div className='limitador'>
          <div className='conteiner_apresentacao'>
            <div className='trocadefonte'>
              <h1>Bem-vindo a Barba Shop</h1>
              <p>
                Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
              </p>
            
              <p>
                Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
              </p>
            </div>
            

            <p className='assinatura'>
              S. Kelly
            </p>
          </div>
        </div>      

        <div className='limitador'>
          
          <div className='apresentacao-cards'>
            <h2>Valores</h2>
            <div className='containe_cards'>
              <div className='card Cabelo'>
                <img src={Cabelo} alt="" />
                <div className='texto_area_cards'>
                  <p>Cabelo na Regua</p>
                  <h2>R$:30,00</h2>
                </div>
                
              </div>

              <div className='card Sombrancelha'>
                <img src={Sombrancelha} alt="" />
                <div className='texto_area_cards'>
                  <p>Sombrancelha tinindo</p>
                  <h2>R$:10,00</h2>
                </div>
                
              </div>
              
              <div className='card Bigode'>
                <img src={Bigode} alt="" />
                <div className='texto_area_cards'>
                  <p>Bigode Grosso</p>
                  <h2>R$:10,00</h2>
                </div>
                
              </div>

              <div className='card Barba'>
                <img src={Barba} alt="" />
                <div className='texto_area_cards'>
                  <p>Barba de Odin</p>
                  <h2>R$:20,00</h2>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
