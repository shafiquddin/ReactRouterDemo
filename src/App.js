import { RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from './pages/Root';
import Error from './pages/Error';


// import {Route,createRoutesFromElements } from 'react-router-dom';
// const routerDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/Products" element={<ProductPage/>}></Route>
//   </Route>
// )
// const router = createBrowserRouter(routerDefination)

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',element:<HomePage/>
      },
      {
        path:'/products',element:<ProductPage/>
      },
    
    ]
  },
])


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
