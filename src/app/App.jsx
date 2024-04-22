import './styles/App.scss'
import {AppRouter} from "./providers/router/index.js";
import {MainLayout} from "../shared/layouts/MainLayout/index.js";
import {Navbar} from "../shared/ui/Navbar/index.js";

function App() {

  return (
    <>
      <MainLayout header={<Navbar />} content={<AppRouter />} />
    </>
  )
}

export default App
