
import React,{useContext} from 'react'  /*useContext import ediyoruz  */
import { TemaVerisi } from '../../App'; /*tema verisini import ediyoruz */

export default function Icerik() {
  return (
    <div style={{background:"#cd853f"}}>

        <p>{useContext(TemaVerisi)}</p> {/*TemaVerisi icindeki Tum veriyi getir */}
        <h1> React ogreniyorum</h1>
        <h2> useContext ile comparentler arası veri tasima</h2>
        <p>Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed.</p>
        <p>Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed.</p>
        <p>Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed.</p>
        <p>Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed.</p>
        <p>Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed.</p>
        <p>Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed. Lorem impus dolor sit amed.</p>

    </div>
  )
}
