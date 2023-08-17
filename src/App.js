import React from 'react'
import './App.css'
import Data from './comp/Data'
import Cards from './comp/Cards'



function App() {
  return (
    <>
     
        <div className="container-fluid head">
              <div className='cont'>  NETFLIX---Top Movies To Watch </div>
        </div>
        <div className='container-fluid flex'>
        <Cards
          imgsrc={Data[0].imgsrc}
          title={Data[0].title}
          desc={Data[0].desc}
          link={Data[0].link}
        />
        <Cards
          imgsrc={Data[1].imgsrc}
          title={Data[1].title}
          desc={Data[1].desc}
          link={Data[1].link}
        />
        <Cards
          imgsrc={Data[2].imgsrc}
          title={Data[2].title}
          desc={Data[2].desc}
          link={Data[2].link}
        />

        <Cards
          imgsrc={Data[3].imgsrc}
          title={Data[3].title}
          desc={Data[3].desc}
          link={Data[3].link}
        />
        <Cards
          imgsrc={Data[4].imgsrc}
          title={Data[4].title}
          desc={Data[4].desc}
          link={Data[4].link}
        />
        <Cards
          imgsrc={Data[5].imgsrc}
          title={Data[5].title}
          desc={Data[5].desc}
          link={Data[5].link}
        />
        <Cards
          imgsrc={Data[6].imgsrc}
          title={Data[6].title}
          desc={Data[6].desc}
          link={Data[6].link}
        />
        <Cards
          imgsrc={Data[7].imgsrc}
          title={Data[7].title}
          desc={Data[7].desc}
          link={Data[7].link}
        />
        
        

        </div>


    </>
  )
}

export default App