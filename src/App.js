import React, { useState } from 'react';
import './App.css';
import Navbar, { AltNavbar } from './components/navbar'; //* 2. comps olursa  {} icerisine tanımlıyoruz
import Govde from './components/body';
import Container from './components/props/container';
import Icerik from './components/useContextHooks/icerik';


/*useContext Api,  func. dısında tanımlıyoruz*/
export const TemaVerisi = React.createContext(); /*Reacttın altında crateContext olusturyoruz / export etik baska sayfada cagırmak icin */


function App() {
  /*setstate olusturuldu */
  const [deger, setDeger] = useState(1); //* hooks,state = useState icerisindeki veri "deger"de tutuluyor, guncelleme "setDeger" ile yapılıyor
  /*props ornegi icin olusturuldu*/
  const [baslık, setBaslık] = useState("Nurullah Dinç");
  const numara = 2002;

  /*state degerini degistirmek icin olusturuldu */
  const Azalt = () => { setDeger(deger - 1) } //* arrow func. olusturdum ve azalt button'una onclick verdim

 

  return (
    <div className="App">

      <Navbar /> {/*copmaprents burada tanımlıyoruz gostermek icin */}
      <AltNavbar/>
      <Govde />
      {/*setstate deki degeri artırmak icin olusturuldu */}
      <p> <button onClick={() => { setDeger(deger + 1) }}> Arttır</button> </p> {/*tıklandıgında "setDeger" ile degeri guncelle */}
        {deger}  {/* olusturulan state cagirildi*/}
      <p> <button onClick={Azalt}>Azalt</button> </p>  {/*onclick oldugunda Azalt func. cagır*/}


      {/*props ornegi icin */}
      <Container 
        title={baslık} /*baslık degerini al titlenin icerisine at, props olarak Container func.'ın parametresine gonderiyor */
        number={numara}

      />
      {/*propsda degeri burdan degistirip oyle gonderiyoruz*/}
      <button onClick={()=>{setBaslık("baslık degisti")}}  style={{padding:"10px"}} >DEGİSTİR</button>

      {/*useContext icin */}
      
      <TemaVerisi.Provider value={deger}> {/*provider saglayıcı anlamında, degeri al value'ye at,Icerigi sarmala, Icerik comps. gonder */}
        <Icerik />
      </TemaVerisi.Provider>


    </div>
  );


}

export default App;
