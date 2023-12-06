import react,{useState, useEffect} from 'react'
import axios from 'axios'

export default function Axios() {

  const [data, setData]= useState("");
  const [id, setId]= useState(1);

    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        // console.log(res.data[0].title)
        setData(res.data[id].title)
      })
      .catch((err)=>{console.log(err)})
    },[data,id])

  return (
    <div>
      <h2>---- axios kulanarak veri cekme inputa girilen id gore----</h2>
      <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
      
      <p>{data}</p>
      
    
    </div>
  )
}
