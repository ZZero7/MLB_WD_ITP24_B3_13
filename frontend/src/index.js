import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiceFeedbackForm from './Components/Feedback/User/ServiceFeedbackForm';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import TestScreen from './Components/Feedback/TestScreen';
import ServiceFeedbackTable from './Components/Feedback/User/ServiceFeedbackTable';
import EditServiceFeedbackForm from './Components/Feedback/User/EditServiceFeedbackForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='fbk/'>
        <Route path='addservice/' element={<ServiceFeedbackForm/>} />
        <Route path ="testscreen/:id" element = {<TestScreen/>}/>
        <Route path="servicetable/" element={<ServiceFeedbackTable/>}/>
        <Route path="editservice/:id" element={<EditServiceFeedbackForm/>}/>
      </Route>
    </Route>


  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
