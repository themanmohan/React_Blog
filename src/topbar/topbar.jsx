import React from 'react'
import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
          <i className="topIcon fa fa-brands fa-facebook"></i>   
          <i className="topIcon fa fa-brands fa-instagram-square"></i>
        </div>

        <div className='topCenter'>
          <div className='topList'>
          <div className='topListItem'>HOME</div>
          <div className='topListItem'>ABOUT</div>
          <div className='topListItem'>CONTACT</div>
          <div className='topListItem'>WRITE</div>
          <div className='topListItem'>LOGOUT</div>
          </div>
        </div>
        
        <div className='topRight'>
          <img className='topImg' src="https://res.cloudinary.com/dq7iwl5ql/image/upload/v1648631101/Cities1/Village_sur_la_route_d_27AM-TIMAN01-Tchad_wgptey.jpg" alt="" />
          <i className="topSearch fa fa-search" aria-hidden="true"></i>
        </div>

    </div>
  )
}
