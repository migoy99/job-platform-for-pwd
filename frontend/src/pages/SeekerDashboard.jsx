import React from 'react';
import SeekerNavbar from '../components/SeekerNavbar';
import JobListingCard from '../components/JobListingCard';
import './pageStyles/seekerdashboard.css';
import CategoryDropdown from '../components/SeekerDashboardComponents/CategoryDropdown';
import EmploymentTypeRadio from '../components/SeekerDashboardComponents/EmploymentTypeRadio';

const SeekerDashboard = () => {
  return (
    <div className='mainDiv'>
      <SeekerNavbar />
      {/* <h1 className='header1'>Jobs you might like</h1> */}
      <div className='search-and-button'>
        <input placeholder="Search Jobs" style={{ fontSize: '75%' }} type="search" className="searchjobs" />
      </div>
      <div className='body'>
        <div className='category-container' style={{ margin: '1px' }}>
          <div className='category-items' style={{margin: '5%', alignItems: 'center', justifyContent: 'center'}}>
            <h6 className='jobcategory'>Job Category</h6>
            <CategoryDropdown/>
            <h6 className='employmenttype' style={{marginTop: '15px'}}>Employement Type</h6>
            <EmploymentTypeRadio />
          </div>
        </div>
        <div className='job-listings' style={{backgroundColor: 'white'}}>
          <h4 style={{ fontSize: '20px' }}>Recent listings: </h4>
          <JobListingCard />
        </div>


      </div>
    </div>
  )
}

export default SeekerDashboard;