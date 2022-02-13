import React, { Component } from 'react'
import bull from './bull-logo.png'


class Student extends Component {

  state = {
    advisor: 'Dr. Lucien',
    email: 'johndoe@usf.edu',
    entry_term: 'Spring 2022',
    usf_gpa: '3.80',
    overall_gpa: '3.92',
    honors_status: 'active'
  }


  render() {
    return (
      <div className='student-box'>
        <div>
          <img src={bull} alt="USF bull logo" className='bull' />
        </div>
        <div className='info'>
          <p>Advisor: {this.advisor}</p>
          <p>Email: {this.email}</p>
          <p>Entry Term: {this.entry_term}</p>
          <p>USF GPA: {this.usf_gpa}</p>
          <p>Overall GPA: {this.overall_gpa}</p>
          <p>Honors Status: {this.honors_status}</p>
        </div>
      </div>
    )
  }
}

export default Student