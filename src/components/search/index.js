import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'
import searchCss from './index.module.css'

function Search () {
  const [keyWord, setKeyWord] = useState('')
  const dispatch = useDispatch()
  // 使用useEffect进行防抖
  useEffect(() => {

    const timer = setTimeout(() => {
      dispatch({ type: 'MEALS_FILTER', keyWord })
    }, 500)

    //这个函数可以称其为清理函数，会在下次Effect执行前调用
    //可以在这个函数中，做一些工作来清楚上次Effect执行所带来的影响
    return () => {
      clearTimeout(timer)
    }

  }, [keyWord, dispatch])

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