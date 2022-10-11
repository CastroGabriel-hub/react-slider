import React, { Component } from "react";
import './App.css';
import Square from './components/Square/Square';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from './assets/arrowLeft.png';
import arrowRight from './assets/arrowRight.png';

function PrevArrow(props){
  const { className, style, onClick } = props;

  return (
      <img src={arrowLeft} alt="Ir para a esquerda" className={className} style={{ ...style, display: 'block', margin: '-10px auto', }} onClick={onClick}/>
  )
}

function NextArrow(props){
  const { className, style, onClick } = props;
  return (
    <img src={arrowRight} alt="Ir para a direita" className={className} style={{ ...style,display: 'block', margin: '-10px auto', }} onClick={onClick}/>
  );
}


function App() {
  const settings = {
    centerMode: true, 
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2
  };

  const squares = [];

  for (let i = 0; i < 8; i++) {
    squares.push(<Square>Teste 0{i + 1}</Square>)
  }

  return (
    <div className="App">
      <Slider {...settings}>
        {squares}
      </Slider>
    </div>
  );
}

export default App;
