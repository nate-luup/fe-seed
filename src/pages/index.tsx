// import '../assets/css/styles.css'
// import style from './app.css'
// import React from 'react'
// import ReactDOM from 'react-dom'
// const App = () => {
//   return <div className={style.nateTestCame}>nate test</div>
// }
// ReactDOM.render(<App></App>, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

function App() {
  return (
    <Button variant="contained" color="primary">
      你好，世界
    </Button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
