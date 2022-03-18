import React, { Component } from 'react'
import "../Style/modal.css"
import {Button, ButtonToolbar} from 'react-bootstrap';
export default class modal extends Component {
  render() {
    return (


      <div className="right-menu">	
         
				{/* <!-- Button trigger modal --> */}
					<button type="button" class="btn btn-primary-menu" data-toggle="modal" data-target="#exampleModalLong">
						Menu
					</button>

				{/* <!-- Modal --> */}
			<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
				<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div class="modal-header-menu">
					<div class="menu-t">
					    <div class="open-menu-title">
						K!sbag Design Studio
						</div>
						<div class="menu-links-on" > 
						Home
						</div>
						<div> 
						<a class="menu-links" href="works.html"> Perfum </a>
						</div> 
						<div> 
						<a class="menu-links" href="logos.html"> Order </a>
						</div>
						<div> 
						<a class="menu-links" href="about.html"> About & Contact </a>
						</div>
						<div> 
						<a class="menu-links" href="blog.html"> Events </a>
						</div>
						<button type="button" class="menu-close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
			</div>
				</div>
				</div>
		</div>		  
    )
  }
}
