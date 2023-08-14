import React from 'react'
import { Button } from 'antd'
import confirmCss from './index.module.css'
import Backdrop from '../backdrop'


function Confirm ({ confirm, cancel, text = '' }) {
  return (
    <Backdrop onClick={(e) => { e.stopPropagation() }}>
      <div className={confirmCss.stage}>
        <div className={confirmCss.text}>{text}</div>
        <div className={confirmCss.btn}>
          <Button onClick={cancel}>取消</Button>
          <Button type="primary" onClick={confirm}>确定</Button>
        </div>
      </div>
    </Backdrop>
  )
}

export default React.memo(Confirm) 