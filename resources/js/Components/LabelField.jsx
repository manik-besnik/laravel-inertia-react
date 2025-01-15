import React from 'react'

export default function LabelField({content, ...props}) {
  return content ? (
    <label {...props} className='mb-[10px] sm:mb-[14px] inline-block text-t-secondary text-[10px] sm:text-[12px] font-medium leading-[12px] sm:leading-[14px] '>
        {content}
    </label>
  ) : null
}
