import React from 'react'

// header comps. containerde cagırdım ic ice kulandım, props kulanarak'da ic ice veri cektim.
export default function Header(props) {
  return (
    <div style={{width:"100%", height:"50px", background:"red"}}>

        {props.baslık} {/*gelen degeri props parametresi ile yakaladık yazdırdık */}
        
    </div>
  )
}
