import 'bootstrap5/src/css/bootstrap.min.css'
import './App.module.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header title={'Tabela da Copa do mundo 2022'} subTitle={'Fase de grupos'}/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
