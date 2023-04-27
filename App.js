import React from 'react';
import ASidebar from './components/Admin/ASidebar';
import ADashboard from './components/Admin/ADashboard';
import ANavbar from './components/Admin/ANavbar';
import USidebar from './components/User/USidebar';
import UDashboard from './components/User/UDashboard';
import UNavbar from './components/User/UNavbar';
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <>
      <ANavbar/>
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <ASidebar/>
          <ADashboard/>
          <Footer/>
        </div>
      </div> 
    </>
  )
}

export default App;