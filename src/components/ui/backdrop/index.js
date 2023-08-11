import React from 'react'
import backdropCss from './index.module.css'
import { createPortal } from 'react-dom'

const dom = document.getElementById('backdrop-root')
function Backdrop (props) {
  return (
    createPortal(
      <div className={backdropCss.stage}{...props}>
        {props.children}
      </div>, dom)
  )
}

export default Backdrop