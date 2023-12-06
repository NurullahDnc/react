import React, { useState, useEffect,useRef } from 'react';
import './App.css';
import Navbar, { AltNavbar } from './components/navbar'; //* 2. comps olursa  {} icerisine tanımlıyoruz
import Govde from './components/body';
import Container from './components/props/container';
import Icerik from './components/useContextHooks/icerik';
import Axios from './components/axios'


/*useContext Api,  func. dısında tanımlıyoruz*/
export const TemaVerisi = React.createContext(); /*Reacttın altında crateContext olusturyoruz / export etik baska sayfada cagırmak icin */
/*usecontext orenk / buttona basınca kapalı ve acık mod */
const tema = { /*object olusturduk ,  kulanmak icin degerler degisecegi icin state de tutmam gerek */
  dark: {
    color: "white",
    backgroundColor: "black"
  },
  light: {
    color: "black",
    backgroundColor: "white"
  }
}

function App() {
  /*setstate olusturuldu */
  const [deger, setDeger] = useState(1); //* hooks,state = useState icerisindeki veri "deger"de tutuluyor, guncelleme "setDeger" ile yapılıyor
  /*props ornegi icin olusturuldu*/
  const [baslık, setBaslık] = useState("Nurullah Dinç");
  const numara = 2002;

  /*state degerini degistirmek icin olusturuldu */
  const Azalt = () => { setDeger(deger - 1) } //* arrow func. olusturdum ve azalt button'una onclick verdim

  /*useContext, Ornegi icin kapalı acık mod state tutuyoruz */
  const [temaDeger, setTema] = useState(tema.dark);  /*varsayılan tema dark gelecek */
  function TemaDegistir() { /*func. btn tıklandıktan sonra kaoalı ise acık acık ise kapalı cevir */

    if (tema.dark === temaDeger) { /*tema dark, deger' esit ise */
      setTema(tema.light); /*setTema ile temayı Light yap */
      // console.log(temaDeger)
    } else {
      setTema(tema.dark);
      // console.log(temaDeger)

    }
  }
  /*useEffect kulanımı */
  const [count, setCount] = useState(0);/* 0 dan baslatık */
  const [timer, setTimer] = useState(5); /*5 ten geri sayım olacak */

  useEffect(() => {/*her degisklikte calısıyor */
    // console.log(count);  /*her degistiginde console ye yazdırdık */

    if (timer !== 0) { /*0 esit olunca dur */
      const interval = setInterval(() => { /*zamanlayıcı */
        setTimer(timer - 1)
      }, 1000) /*1 saniyede sonra calıssın yani tetiklensin*/

      return (() => clearInterval(interval)) /*geri sayım karısık ve hata vermemesi icin interval'ı clearInterval func. temizleyim return ediyoruz  */
    }

  }, [timer])/*parametre giriyoruz, count degistginde calısın, belirtiyoruz yani */

  /*useref kulanımı dom referanslarına ulasmak icin kulanılır */
  const[renk, setRenk]= useState("");
  const renkDegisimi =  useRef(null); /* ref verielen elemente ulasmamızı saglıyorx */

  const renkDegistir=()=>{
    /* renkDegisimi refini alan, current= ulasmak icin?, valuesini getir,  body rengini degistir*/
    document.body.style.background=renkDegisimi.current.value;
    setRenk(renkDegisimi.current.value)
    // console.log(renkDegisimi.current.value)
  }


//? -----------------------------------------------------------------------------------------------------/
  return (
    <div className="App">

      <Navbar /> {/*copmaprents burada tanımlıyoruz gostermek icin */}
      <AltNavbar />
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
      <button onClick={() => { setBaslık("baslık degisti") }} style={{ padding: "10px" }} >DEGİSTİR</button>
      <hr />

      {/*useContext icin */}
      <button onClick={TemaDegistir}>
        {tema.dark === temaDeger ? "Acık" : "Kapalı"}   {/*tema dark=temaDegere esit ise Acık  degilise Kapalı yaz */}
      </button>

      <TemaVerisi.Provider value={temaDeger}> {/*provider saglayıcı sarmalıyoruz, degeri al value'ye at,Icerigi sarmala, Icerik comps. gonder */}
        <Icerik />
      </TemaVerisi.Provider>

      {/*useEffect kulanımı */}
      <button onClick={() => { setCount(count + 1) }}>console useEffect Arttır</button>
      {/*useeffect orengi zamanlayıcı */}
      <p>useeffect orengi zamanlayıcı </p>
      <div style={{
        width: "250px", height: "250px", background: "purple", borderRadius: "50%", color: "#fff", fontSize: "60px", margin: "10px auto",
        lineHeight: "220px"
      }}>
        {timer}
      </div>
      
      {"useRef kulanımı"}
      <p>inglizce renk giriniz</p>
      <input type="text" ref={renkDegisimi} onChange={renkDegistir} />
      <p>{renk}</p>

      {/*Axios kulanımı */}
      <Axios />

    </div>
  );

}

export default App;



/*3 tane didmount sınıflarını 1 tane sinifta kulanıcaz useefect sınıfda */
/*
  setInterval ne demek?
setTimeout fonksiyonu belirli bir zaman sonra çalıştırmaya yarar. setInterval fonksiyonun belirli aralıklar ile sürekli çalışmasını sağlar

*/