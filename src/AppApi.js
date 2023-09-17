import React,{useState} from 'react'
import List from './List'
export default function AppApi() {
    const [liste,setListe]=useState(List)
  return (
    <div>
        <h1><i>List de taches</i></h1>
          <table border="2">
            <tr><th>userId</th><th>id</th><th>title</th><th>completed</th></tr>
            liste.map((e)=>{
            return(
                <tr>
                    <td>{e.userId}</td>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.completed}</td>
                    </tr>
            )})
          </table>
        </div>
  )
}
