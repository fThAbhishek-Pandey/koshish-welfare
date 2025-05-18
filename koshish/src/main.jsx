import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import  AppContextProvider  from './context/App.jsx'
import StudentContextProvider from './context/StudentContext.jsx'
import TeacherContextProvider  from './context/TeacherContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  < BrowserRouter>
   <HelmetProvider>
    <AppContextProvider>
      <StudentContextProvider>
        <TeacherContextProvider>
           <App/>
        </TeacherContextProvider>
      </StudentContextProvider>
    </AppContextProvider>  
    </HelmetProvider> 
  </ BrowserRouter>
)
