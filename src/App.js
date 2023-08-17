import './App.css';
import Logo from "./images/Logo.png";
import BG from "./images/BG.webp";
import Logo_3 from "./images/Logo_3.png";
import QS1 from "./images/QS_1.jpg";
import QS2 from "./images/QS_2.JPG";
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    //muda a cor do header (demorou pra caramba pra fazer isso UUuuuuuufan)
    const header = document.getElementById('header');
  const listAll = header.classList;
  window.addEventListener('scroll', () =>{
    if (window.scrollY >= 800) {
      if (!listAll.contains('changeStyle')) {
        listAll.add('changeStyle')
      }
    } else {
      if (listAll.contains('changeStyle')) {
        listAll.remove('changeStyle')
      }
    }
  })
}, []);


  return (
    <div className="App">
      
      <header id='header'>
          <div className='Header-1'>
            <div className='Logo'>
                <a href='#'><img src=''/></a>
            </div>
            <div className='searchbar'>
                <img src={Logo}></img>
            </div>
            <div className='social-media'>
                <a href=''><img src=''/></a>
                <a href=''><img src=''/></a>
                <a href=''><img src=''/></a>
            </div>
          </div>
          <div className='Header-2'>
              <div className='Ancora'>
                  <ul>
                    <li><a href='#QS'>HISTÓRIA</a></li>
                    <li><a href='#Pilotos'>PILOTOS</a></li>
                    <li><a href='#CR'>CRONOGRAMA</a></li>
                    <li><a href='#Parc'>PARCEIROS</a></li>
                  </ul>
              </div>
          </div>  
      </header>
      <div className='bg-img'>
        <img src={BG} alt='backGround'/>
      </div>

      <div id='QS' className='Qs'>
        <div className='Qs-container'>
          <p>Tudo sobre Aston Martin</p>
        <h2>INÍCIO DE UMA LENDA</h2>
          <div className='QS-hist'>
              <div className='QS-hist-container'>
              <br/>
                <p>Aston Martin é uma lendária fabricante de carros esportivos e de luxo,
                  <br/> com uma história que remonta a mais de um século. Fundada em 1913
                  <br/> por Lionel Martin e Robert Bamford, a empresa recebeu o nome de Martin e logo depois
                  <br/>  se tornou Aston Martin, em homenagem a uma bem-sucedida participação de Lionel Martin
                  <br/> na corrida de Aston Hill. Ao longo dos anos, a Aston Martin se estabeleceu
                  <br/> como uma marca sinônimo de elegância, sofisticação e desempenho. 
                  <br/> Desde os primeiros modelos produzidos, a empresa demonstrou uma dedicação incansável
                  <br/> à qualidade e à excelência em engenharia automotiva.</p>
              </div>
                <img src={QS1}/>
          </div>
          <div className='QS-f1'>
            <img src={QS2}/>
            <div className='QS-f1-inicio'>
                <h2>ASTON MARTIN NA FÓRMULA 1</h2>
                  <p>A Aston Martin tem uma história anterior na Fórmula 1,
                    <br/> que remonta à década de 1950. Em 1959, a equipe original
                    <br/> da Aston Martin conquistou a vitória nas lendárias 24 Horas
                    <br/> de Le Mans e também participou de algumas temporadas na 
                    <br/> Fórmula 1. Durante esse período, a Aston Martin competiu
                    <br/> com seus próprios carros e motores, deixando sua marca
                    <br/> na categoria.</p>
            </div>
          </div>
          <div className='QS-retorno'>
            <h2>O Retorno Triunfal da Aston Martin à Fórmula 1</h2>
            <div className='QS-retorno-f1'>
              <p>Em 2021, a lendária equipe britânica Aston Martin fez um retorno emocionante à Fórmula 1 após uma ausência de mais de 60 anos. Esse marco histórico não apenas trouxe de volta uma das marcas mais icônicas do automobilismo, mas também agitou a competição e deixou os fãs empolgados com a promessa de ver o lendário logotipo da Aston Martin nas pistas novamente.
                <br/> Além da performance nas pistas, a presença da Aston Martin trouxe um novo toque de elegância e charme ao paddock da Fórmula 1. A marca icônica, famosa por seus carros esportivos de luxo, atraiu novos fãs para o esporte, consolidando ainda mais a posição da Fórmula 1 como uma das maiores competições esportivas do mundo.
                <br/> O retorno da Aston Martin à Fórmula 1 representa uma história de perseverança, determinação e sucesso. Ao longo dos anos, a equipe enfrentou altos e baixos, mas nunca deixou de sonhar grande. Com a combinação de talento, inovação e uma parceria estratégica com a Mercedes, a Aston Martin certamente tem o potencial de escrever um novo capítulo emocionante em sua história na Fórmula 1. E assim, os fãs do automobilismo aguardam ansiosamente para ver o que o futuro reserva para essa lendária equipe britânica.
              </p>
            </div>
          </div>
        </div>
      </div>

        <h2>PARCEIROS</h2>
        <hr></hr>

      <div id='Pilotos' className='Pilotos'>
        <div className='Pilotos-container'>

        </div>
      </div>

      <div id='CR' className='Cr'>
        <div className='Cr-container'>

        </div>
      </div>


      {/*partners*/}

      <bottom>
          <div className='Bottom'>
              <div className='contato'>
                <h3>REDES SOCIAIS DO CRIADOR</h3>
                <ul>
                  <li><a href='https://www.linkedin.com/in/matheus-medrado-massena-0a3b49248/'><img src='https://simpleicons.org/icons/linkedin.svg'/></a></li>
                  <li><a href='https://github.com/MedradoM'><img src='https://simpleicons.org/icons/github.svg'/></a></li>
                  <li><a href='https://www.instagram.com/matheus.medrado.18/'><img src='https://simpleicons.org/icons/instagram.svg'/></a></li>
                </ul>
                <a href='mailto:mat.developer@outlook.com'>EMAIL: mat.developer@outlook.com</a>
              </div>
              <div className='info-text'>
                  <h3>INFORMAÇÕES DO PROJETO</h3>
                  <p>Este projeto não tem fins lucrativos, trata-se de um pequeno trabalho realizado de fã para fã, onde apaixonados por 
                   <br/>velocidade podem conhecer esta lendária equipe britânica na mais prestigiada competição automobilistica do mundo!</p>
                  <p>Espero que se divirta e se surpreenda com essa equipe!!!</p>
              </div>

          </div>
      </bottom>
    </div>
  );
}


export default App;
