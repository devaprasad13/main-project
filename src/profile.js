import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './profile.css'
import pa from'./p1.jpg'
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import  { useEffect } from 'react';
export default function ProfilePhot()
{

    return (
        <>
             <div class='bac'>
			 <div class="container-xl">
    <div class="row">
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0" id="pe">
                <div class="card-headersss" style={{fontFamily: 'Exo 2 sans-serif'}}>Profile Picture</div>
                <div class="card-body text-center">
                    <img class="img-account-profile rounded-circle mb-2" id="pho" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <button class="btn btn-primary" type="button"><i class="bi bi-camera"></i> Upload new image</button>
                </div>
            </div>
			<div class="card p-4" style={{marginTop:'8px'}}>
			<ul class="list-group list-group-flush">
  <li class="list-group-item"> <i class="bi bi-person-fill"></i> Personal Profile</li>
  <li class="list-group-item"><i class="bi bi-key-fill"></i> Reset Password</li>
  <li class="list-group-item"><Link  to="/land" style={{color:'black'}}> &nbsp;&nbsp;&nbsp;&nbsp;Back &nbsp;<i class="bi bi-box-arrow-right"></i> </Link>
 </li>
</ul>
    </div>
        </div>
        <div class="col-xl-8" id="mat"  style={{fontFamily: 'Exo 2 sans-serif'}}>
            
            <div class="card mb-4">
                <div class="card-headersss">Account Details</div>
                <div class="card-body">
                    <form class='ops'>
                       
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername" >Username</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" />
                        </div>
                       
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Roll No</label>
                                <input class="form-controlss" id="inputFirstName" type="text" placeholder="eg.717821F113" />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Year</label>
                                <input class="form-controlss" id="inputLastName" type="text" placeholder="eg.1,2,3,4" />
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Role</label>
                                <input class="form-controlss" id="inputOrgName" type="text" placeholder="eg.Student/Faculty" />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Bus No</label>
                                <input class="form-controlss" id="inputLocation" type="text" placeholder="eg.10" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-controlss" id="inputEmailAddress" type="email" placeholder="eg.717821@kce.ac.in" />
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-controlss" id="inputPhone" type="tel" placeholder="eg.+91 99838 82828" />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Boarding</label>
                                <input class="form-controlss" id="inputBirthday" type="text" name="birthday" placeholder="eg. Tiruppur" />
                            </div>
                        </div>
                     
                        <button class="btn btn-primary" type="button">Save changes</button>&nbsp;
                        <button class="btn btn-secondary" type="button">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

        </>
    )
}