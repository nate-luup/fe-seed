import '../assets/css/styles.css'
import style from './app.css'
import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  return <div className={style.nateTestCame}>nate test</div>
}
ReactDOM.render(<App></App>, document.getElementById('root'))
