import React from 'react'
import "./table.css"

const Table = () => {
  return (
    <div className='table-content'>
        <h1>Recent Orders</h1>
        <table  class="table table-borderless  my-5 bg-light ">
        <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>18 February 2023</td>
      <td className="text-success">Approved</td>
      <td className='text-primary'>Details</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>18 February 2023</td>
      <td className="text-danger">Pending</td>
      <td className='text-primary'>Details</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>18 February 2023</td>
      <td className="text-primary">Delivered</td>
      <td className='text-primary'>Details</td>
    </tr>
  </tbody>
        </table>
    </div>
  )
}

export default Table