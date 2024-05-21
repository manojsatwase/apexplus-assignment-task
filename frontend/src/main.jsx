import React from 'react'
import ReactDOM from 'react-dom/client'
import {appRouter} from './App';
import { RouterProvider } from 'react-router-dom';
import "./styles/app.scss";
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
     <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>,
)
