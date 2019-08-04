import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/topmenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import ContentProps from './Component/Content/ContentProps';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      {/* <Content/> */}
      <ContentProps tieude = "For those about to rock..."
      noidung = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
      image = "img/01.jpg" order1 = "order-lg-1" order2 = "order-lg-2"/>
      
      <ContentProps tieude = "We salute you!"
      noidung = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
      image = "img/02.jpg" order1 = "order-lg-2" order2 = "order-lg-1"/>
      
      <ContentProps tieude = "Let there be rock!"
      noidung = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
      image = "img/03.jpg" order1 = "order-lg-1" order2 = "order-lg-2"/>

      <Footer/>
    </div>
  );
}

export default App;
