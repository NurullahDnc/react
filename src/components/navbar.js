
import React from 'react';

const Navbar=()=> {
  return (

    <div className='navbar'>

        <a href='#'>ANASAYA</a>
        <a href='#'>HAKKIMIZDA</a>
        <a href='#'>İLETİSİM</a>
        <a href='#'>BİZE ULAŞIN</a>
      
    </div>

  )
}

/*parametre verdik gelen degerleri karsılaması icin */
export  function AltNavbar(props) {  //ana comps "export default" ediyoruz, diger compsları sadece "export" ediyoruz yoksa hata verir
  return (
    <div className='AltNavbar'>
       
    </div>
  )
}



export default Navbar;