import React from 'react'
import Header from './header'

export default function Container(props) {
  return (
    <div style={{width:"400px", height:"300px", margin:"0 auto", background:"gray"}}>
      
      <p>{props.title}</p>
      <p>{props.number}</p> 


      {/*App'de ki deger props ile container'e gonderdim, ordan da heder'e gonderdim / comps arası props kulanıldı*/}
      <Header baslık={props.title}></Header>{/*container'de props parametresi icerisinde app'de olan title'yi baslık'a at, header'e gonder */}

    </div>
  )
}
