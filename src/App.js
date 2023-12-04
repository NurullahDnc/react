import React,{useState} from 'react';
import './App.css';
import Navbar,{AltNavbar} from './components/navbar'; //* 2. comps olursa  {} icerisine tanımlıyoruz
import Govde from './components/body'


function App() {

  const [deger, setDeger]=useState(1); //* hooks,state = useState icerisindeki veri "deger"de tutuluyor, guncelleme "setDeger" ile yapılıyor
  const Azalt=()=>{setDeger(deger-1)} //* func. olusturdum ve azalt button'una cagırdım
  
  return (  
    <div className="App">
        
        <Navbar /> {/*copmaprents burada tanımlıyoruz gostermek icin */}
        <AltNavbar />
        <Govde />

        <p> <button onClick={()=>{setDeger(deger+1)}}> Arttır</button> </p> {/*tıklandıgında "setDeger" ile degeri guncelle */}
          {deger}  {/* olusturulan state cagirildi*/}
        <p> <button onClick={Azalt}>Azalt</button> </p>  {/*func. olusturup buraya'da cagırabiliriz */}

      
    </div>
  );
}

export default App;
