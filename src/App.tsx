import Routers from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProvider} from './context/context'

function App() {

  return (
    <AppProvider>
      <Routers/>
    </AppProvider>
  )
}

export default App
