import './App.css'

import { Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify'

// import components here
// import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';


import IntroSection from './components/IntroSection';

// import components here
import ChaptersList from './components/Fatawajat/ChaptersList';
import CategoriesList from './components/Fatawajat/CategoriesList';
import TopicsList from './components/Fatawajat/TopicsList';
import QuestionsList from './components/Fatawajat/QuestionsList';
import Question from './components/Fatawajat/Question';

import { AppSidebar } from './components/app-sidebar';
import ReactQuery from './components/Test/ReactQuery';

function App() {

  return (

    <>

      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<IntroSection />} />



          {/* Main route for fatawajat */}
          <Route path='/reactQuery' element={<ReactQuery />} />

          {/* Main route for fatawajat */}
          <Route path='/fatawajat' element={<ChaptersList />} />
          {/* Nested route for categories */}
          <Route path='/fatawajat/:chapter' element={<CategoriesList />} />
          {/* Nested route for topics */}
          <Route path='/fatawajat/:chapter/:category' element={<TopicsList />} />
          {/* Nested route for questions */}
          <Route path='/fatawajat/:chapter/:category/:topic' element={<QuestionsList />} />
          {/* Route for a specific question */}
          <Route path='/fatawajat/:chapter/:category/:topic/:question' element={<Question />} />

          <Route path='/about' element={<p>this is about page</p>}></Route>
          <Route path='/contact' element={<p>this is contact page</p>}></Route>
          <Route path='/services' element={<p>this is services page</p>}></Route>
        </Route>




      </Routes>
      <ToastContainer />
    </>

  )
}

export default App


