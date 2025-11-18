
import './App.css'
import Navigation from './compnent/Navigation/Navigation'
import ContactHeader from './compnent/ContactHeader/ContactHeader'
import Contactform from './compnent/Contactform/Contactform'

function App() {
  

  return (
    <>
      <Navigation />
      <main className='main_container'>
        <ContactHeader />
        <Contactform />
      </main>
    </>
  )
}

export default App
