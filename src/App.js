import Header from './Components/HeaderComponent/index.js'
import ProductContainer from './Containers/ProductContainer/index.js'
import ProfileContainer from './Containers/ProfileContainer/index.js'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
