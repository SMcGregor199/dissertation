
import {Header} from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'
import {Editor} from './components/Editor.jsx'

function App(){
  return(
    <>
      <Header/>
        <main >
            <Editor/>
        </main>
      <Footer/>
    </>
  )
}

export {
  App
}