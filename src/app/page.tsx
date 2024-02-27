
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>

      <h2 className=' w-screen flex items-center justify-center  h-10'><span className='flex items-center justify-center'>Visit Dialogues/Proverbs/Quotes page</span></h2>

        <div className='mainscreen '>
      
     
          <Link href={"/dialogues"} className='link'>
          
            <button className='btn-link w-4 h-4 px-4 py-2 border border-spacing-1 border-black'>

            <span>Dialogues</span>
            </button>

          </Link>
          <Link href={"/proverbs"} className='link'>
          <button className='btn-link w-4 h-4 px-4 py-2 border border-spacing-1 border-black'>
            <span>Proverbs</span>
          </button>

          </Link>

        <Link href={"/quotes"} className='link'>
        <button className='btn-link w-4 h-4 px-4 py-2 border border-spacing-1 border-black'>
            <span>Quotes</span>
        </button>
        </Link>
      </div>
    
    </>
    
  )
}

export default page