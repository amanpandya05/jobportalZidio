import React from 'react'

function Job() {
  return (
    <>
    
    

    <div className="filter-box">
      <div className="box">
        <h2>Filter Jobs</h2>
        <h3>Select jobs by your preference</h3>
        

      

        <select className="options">

<option value="">Select Job Location</option>
<option value="option1">Delhi</option>
<option value="option2">Banglore</option>
<option value="option3">Hyderabad</option>
<option value="option4">Chennai</option>
<option value="option4">Mumbai</option>
<option value="option4">Remote</option>
</select>

<select className="options">

<option value="">Select Work Mode</option>
<option value="option1">Work from Office</option>
<option value="option2">Work from Home</option>
</select>

<select className="options">

<option value="">Select Industry</option>
<option value="option1">IT Sector</option>
<option value="option2">Data Science</option>
<option value="option2">Marketing</option>
<option value="option2">Development</option>
</select>

<select className="options">

<option value="">Select Salary</option>
<option value="option1">0-15k</option>
<option value="option2">20k-40k</option>
<option value="option2">50k-75k</option>
<option value="option2">1lakh-2lakh</option>
</select>


      </div>
      <button>
     Search For Jobs   
      
 </button>
    </div>
    </>
  )
}

export default Job