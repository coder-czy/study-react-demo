import React from 'react'
import badgeCss from './index.module.css'

function Badge ({ count }) {
  return (
    <div className={badgeCss.badge}>
      {count}
    </div>
  )
}

export default Badge