import React from 'react'

export default function TextField({content, ...props}) {
  return (
    <p {...props} className={`${props.className} block text-t-secondary text-[10px] sm:text-[12px] font-medium leading-[12px] sm:leading-[14px]`}>
        {content}
    </p>
  )
}
