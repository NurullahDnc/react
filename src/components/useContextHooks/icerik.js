
import React,{useContext} from 'react'  /* react altında useContext import ediyoruz  */
import { TemaVerisi } from '../../App'; /* App de olan temaverisini import ediyoruz */

export default function Icerik() {
  return (
    <div style={useContext(TemaVerisi)}>  {/*object olgugu icin temaverisi tek suslu parantez kulanıyoruz */} 

        {/*TemaVerisini kulanmak icin UseContent iceririsine yazıyoruz */}
        {/* <p>{useContext(TemaVerisi)}</p> TemaVerisi icindeki Tum veriyi getir */}
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
