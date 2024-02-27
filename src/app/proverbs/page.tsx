"use client"
import React, { useState } from 'react'
import "./page2.css"

function Page() {
  const [dialogues, setdialogues] = useState([{id:"",origin:"",text:""}])

  // fetch data
  async function fetchdata(){
     await fetch("https://wordsapi-nkj3.onrender.com/proverbs").then((res)=>res.json()).then((res)=>dialogues.length==1? setdialogues(res):"")
      
  }

  if(dialogues.length==1){
    fetchdata()
  }
   
  return (
    <>
     <h2 className=' w-full h-10 text-md flex items-center justify-center '>Proverbs from different series:- </h2>
     <ul className='dialogues-ul'>
      {
        dialogues.length!=1? dialogues.map((item, index)=>{
          return (
            <>
              <li key={index} className='every-li'>
                <td >
                  <tr>
                    <th>Serial No.</th>
                    <td>{item.id+1}</td>
                  </tr>
                  <tr>
                    <th>Series Name</th>
                    <td>{item.origin}</td>
                  </tr>
                  
                  <tr>
                    <th>Dialogues</th>
                    <td>{item.text}</td>
                  </tr>
                </td>
              </li>

            </>
          )
        }):""
      }
     </ul>

     </>
  )
}

export default Page


// https://wordsapi-nkj3.onrender.com/dialogues