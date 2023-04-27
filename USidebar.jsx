import React from 'react'
import mycss from './mycss.css';

const USidebar = () => {
    return (
         <div class="col-md-3 col-lg-3 sidebar-offcanvas pl-0 bro1" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>User Name</h5></a></li>
                 <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Apply</span></a></li>
            
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i> <span className="ml-3">View/Print Form</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i><span className="ml-3">View Status</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Appointments</span></a></li>
            </ul>
       </div>
    )
}
 
export default USidebar