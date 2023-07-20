import React,{useState} from 'react'
import { useHistory, useLocation } from 'react-router'
import {
  Link
} from "react-router-dom";
import ToggleSwitch from './ToggleSwitch';
import actions, { getPicsAction, searchImageAction,getRelatedWordsAction,emptyWord } from "../actions/actions"
import { useDispatch,useSelector } from 'react-redux';
import { CiSearch} from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function Navabar() {
  const dispatch = useDispatch();
  let history = useHistory();
  
  return (
  <nav className={`navbar nav navbar-expand-lg `} >
  <Link class="navbar-brand" to="/"></Link>
  {/* <div className="logo"></div> */}
  <button class="navbar-toggler" type="button" 
  data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" 
  aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        {/* <Link class="nav-link" to="/">Explore </Link> */}
      </li>
      <li class="nav-item active">
        {/* <Link class="nav-link" to="/">Collection </Link> */}
      </li>
      <li class="nav-item active">
        {/* <Link class="nav-link" to="/">Community </Link> */}
      </li>
    </ul>
  </div>
</nav>
    )
}
