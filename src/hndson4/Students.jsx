import React from 'react'
import { Link } from 'react-router-dom'


const Student = () => {

    
    
  return (
    <div>
        <div className='Top'>
          <h2>Student Detail</h2>
          <button>Add new student</button>
        </div>

        <div className='studentDown'>
          <table >
            
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>

              <tr>
                <td>John</td>
                <td>24</td>
                <td>MERN</td>
                <td>October</td>
                <td><Link to={'/User/' }>Edit</Link></td>
              </tr>

              <tr>
                <td>Nikhil</td>
                <td>22</td>
                <td>MERN</td>
                <td>October</td>
                <td><Link to={'/User/' }>Edit</Link></td>
              </tr>

              <tr>
                <td>Naman</td>
                <td>25</td>
                <td>MERN</td>
                <td>October</td>
                <td><Link to={'/User/' }>Edit</Link></td>
              </tr>

              <tr>
                <td>Preeti</td>
                <td>27</td>
                <td>MERN</td>
                <td>October</td>
                <td><Link to={'/User/' }>Edit</Link></td>
              </tr>

              <tr>
                <td>Jisika</td>
                <td>24</td>
                <td>MERN</td>
                <td>October</td>
                <td><Link to={'/User/' }>Edit</Link></td>
              </tr>

              <tr>
                <td>Prerna</td>
                <td>23</td>
                <td>MERN</td>
                <td>October</td>
                <td><Link to={'/User/' }>Edit</Link></td>
              </tr>
          </table>
        </div>
    </div>
  )
}

export default Student