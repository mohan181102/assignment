"use client"

import React from 'react'
import { useState } from 'react'
import "./page3.css"

function Page() {
    const [dialogues, setdialogues] = useState([{id:"",author:"",text:""}])
    const [author, setauthor] = useState([])
    const [fillter, setfillter] = useState("All")

  // fetch data
  async function fetchdata(){
     await fetch("https://wordsapi-nkj3.onrender.com/quotes").then((res)=>res.json()).then((res)=>{dialogues.length==1? setdialogues(res.quotes):"",setauthor(res.authors)})
      
  }

  if(dialogues.length==1){
    fetchdata()
  }
   

  return(
  
  <>
  <h2 className=' w-full h-10 text-md flex items-center justify-center '>Quotes from different series:-
  <div className='select'>Filtter:- 

  <select  onChange={(e)=>setfillter(e.target.value)}>
        
        <option>All</option>
        <option>{author.length!=0?author[0]:""}</option>
        <option>{author.length!=0?author[1]:""}</option>
        <option>{author.length!=0?author[2]:""}</option>
        <option>{author.length!=0?author[3]:""}</option>
        <option>{author.length!=0?author[4]:""}</option>
        <option>{author.length!=0?author[5]:""}</option>
        <option>{author.length!=0?author[6]:""}</option>
        <option>{author.length!=0?author[7]:""}</option>
    </select>

  </div>
    
  </h2>
     <ul className='dialogues-ul'>
      {
        dialogues.length!=1? dialogues.map((item, index)=>{
          return (
            <>
              {item.author==fillter?
              
              <li key={index} className='every-li'>
              <td >
                <tr>
                  <th>Serial No.</th>
                  <td>{item.id+1}</td>
                </tr>
                <tr>
                  <th>Series Name</th>
                  <td>{item.author}</td>
                </tr>
                
                <tr>
                  <th>Dialogues</th>
                  <td>{item.text}</td>
                </tr>
              </td>
            </li>:fillter=="All"?<li key={index} className='every-li'>
                <td >
                  <tr>
                    <th>Serial No.</th>
                    <td>{item.id+1}</td>
                  </tr>
                  <tr>
                    <th>Series Name</th>
                    <td>{item.author}</td>
                  </tr>
                  
                  <tr>
                    <th>Dialogues</th>
                    <td>{item.text}</td>
                  </tr>
                </td>
              </li>:""
            }

            </>
          )
        }):""
      }
     </ul>

     </>
  )
}

export default Page


// api https://wordsapi-nkj3.onrender.com/quotes