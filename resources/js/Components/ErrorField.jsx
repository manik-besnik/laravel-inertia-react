import React from 'react'

export default function ErrorField({content, ...props}) {
  return content ? (
    <label {...props} className={`${props.className} mb-[14px] inline-block text-warning text-[12px] font-medium leading-[14px]`}>
        {content}
    </label>
  ) : null
}
