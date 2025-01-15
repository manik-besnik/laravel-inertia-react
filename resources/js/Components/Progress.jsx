import React, { useEffect, useState } from 'react'

export default function Progress({min, max, value, light, noData, dataHor}) {

    const [fill, setFill] = useState(0)

    useEffect(() => {
      const percentage = Math.floor((value / max) * 100);
      setTimeout(() => {
          setFill(percentage)
    }, 1000);
    }, [])
    
    
  return (
    <div className={`${dataHor ? 'flex-row-reverse gap-5 items-center' : 'flex-col gap-1 md:gap-1.5'} flex`}>
        <span className={`${noData && 'hidden'} text-[10px] leading-[12px] md:text-xs md:leading-[14px] text-t-secondary`}>{value}/{max}</span>

        <div className={`${light ? 'bg-white' : 'bg-main-and-focus'} rounded-full h-2 min-w-[50px] w-full md:min-w-[200px]`}>
            <div style={{width: `${fill}%`}} className={`h-2 rounded-full bg-success`}></div>
        </div>
    </div>
  )
}
