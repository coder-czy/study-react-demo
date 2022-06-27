import './index.css'
import React, { createRef } from 'react'
const avatar = 'https://p9-passport.byteacctimg.com/img/user-avatar/4e9e751e2b32fb8afbbf559a296ccbf2~300x300.image'

// 时间格式化
function formatDate (time) {
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
}

class Comment extends React.Component {
  commentInput = createRef()
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot'
      },
      {
        id: 2,
        name: '时间',
        type: 'time'
      }
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1
      }
    ],
    commentText: ''
  }
  toggleTab = (e, type) => {
    type === 'hot' ? this.setState({ active: 'hot' }) : this.setState({ active: 'time' })
  }
  comment = () => {
    // let comment = this.commentInput.current.value //非受控组件
    let comment = this.state.commentText
    if (!comment) return
    let list = [...this.state.list, {
      id: Date.now(),
      author: '刘德华',
      comment,
      time: new Date(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1
    },]
    this.setState({ list })
  }
  change = (e) => {
    this.setState({
      commentText: e.target.value
    })
  }
  del (e, id) {
    let list = this.state.list.filter(item => item.id !== id)
    this.setState({ list })
  }
  toggleLike = (e, id, attitude) => {
    let list = this.state.list.map(item => {
      if (item.id === id) {
        attitude === 'like' ? item.attitude === 1 ? item.attitude = 0 : item.attitude = 1 : item.attitude === -1 ? item.attitude = 0 : item.attitude = -1
        return item
      } else {
        return item
      }
    })
    this.setState({
      list
    })

  }
  render () {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>{this.state.list.length} 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {
                this.state.tabs.map(item => (
                  <li onClick={(e) => this.toggleTab(e, item.type)} key={item.id} className={item.type === this.state.active ? 'on' : ''}>按{item.name}排序</li>
                ))
              }
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              <textarea
                cols="80"
                rows="5"
                placeholder="发条友善的评论"
                className="ipt-txt"
                ref={this.commentInput}
                value={this.state.commentText}
                onChange={this.change}
              />
              <button className="comment-submit" onClick={this.comment}>发表评论</button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {
              this.state.list.map(item => (
                <div className="list-item" key={item.id}>
                  <div className="user-face">
                    <img className="user-head" src={avatar} alt="" />
                  </div>
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{formatDate(item.time)}</span>
                      <span className={item.attitude === 1 ? 'like liked' : 'like'} onClick={(e) => this.toggleLike(e, item.id, 'like')}>
                        <i className="icon" />
                      </span>
                      <span className={item.attitude === -1 ? 'hate hated' : 'hate'} onClick={(e) => this.toggleLike(e, item.id, 'hate')}>
                        <i className="icon" />
                      </span>
                      <span className="reply btn-hover" onClick={(e) => this.del(e, item.id)}>删除</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>)
  }
}


export default Comment
