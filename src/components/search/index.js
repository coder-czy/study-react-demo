import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import searchCss from './index.module.css'

function Search ({ filterFn }) {
  const [keyWord, setKeyWord] = useState('')

  // 使用useEffect进行防抖
  useEffect(() => {

    const timer = setTimeout(() => {
      filterFn(keyWord)
    }, 500)

    return () => {
      clearTimeout(timer)
    }

  }, [keyWord])

  const searchHandle = (e) => {
    setKeyWord(e.target?.value?.trim())
  }
  return (
    <div className={searchCss.search}>
      <Input onChange={searchHandle} value={keyWord} className={searchCss.searchInput} prefix={<SearchOutlined className={searchCss.icon} />} placeholder='请输入关键字'></Input>
    </div>
  )
}

export default Search