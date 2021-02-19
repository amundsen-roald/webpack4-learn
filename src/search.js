import React from 'react'
import ReactDOM from 'react-dom'
import './search.css'
import './global.less'
import img from './images/img.jpg'

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        <span>search pages.</span>
        <span className="global-font"></span>
        <img src={img} alt='logo' />
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))