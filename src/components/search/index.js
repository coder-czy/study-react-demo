import React from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import searchCss from './index.module.css'

function Search () {
  return (
    <div className={searchCss.search}>
      <Input className={searchCss.searchInput} prefix={<SearchOutlined className={searchCss.icon} />} placeholder='请输入关键字'></Input>
    </div>
  )
}

export default Search