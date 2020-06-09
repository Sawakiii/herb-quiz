import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./reset.css"
import "./App.css"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import styled from "styled-components"

import Home from "./Home"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import Section4 from "./sections/Section4"
import Section5 from "./sections/Section5"
import Section6 from "./sections/Section6"
import Section8 from "./sections/Section8"


const useStyles = makeStyles({
  root: {
    position: 'fixed',
    display: 'flex',
    flexDirection: "column",
    width: '25%',
    left: 0,
    zIndex: 1000,
    height: "100%",
    borderRight: "solid 1px #e9e9e9",
  },
  button: {
    width: "100%",
    maxWidth: "100%"
  }
})

const App = () => {
  const classes = useStyles()
  const btnNavList = [
    {btnLabel: "Home", btnLinkTo: "/"}, 
    {btnLabel: "第1章　ハーブティーの基本知識", btnLinkTo: "/section1"}, 
    {btnLabel: "第2章　ハーブティーの歴史", btnLinkTo: "/section2"}, 
    {btnLabel: "第3章　ハーブティーの働きと嗜好性", btnLinkTo: "/section3"}, 
    {btnLabel: "第4章　ハーブティーを生かすティーブレンドとアレンジ", btnLinkTo: "/section4"}, 
    {btnLabel: "第5章　ティーを楽しむ", btnLinkTo: "/section5"}, 
    {btnLabel: "第6章　ブレンドメソッドとアレンジティー", btnLinkTo: "/section6"}, 
    {btnLabel: "第8章　ハーブティープロファイル", btnLinkTo: "/section8"},  
  ]
  
  return(
    <>
      <BrowserRouter>
        <BottomNavigation 
        showLabels
        // className="a"
        className={classes.root}
        >

          {btnNavList.map((btnNav)=>(
            <BottomNavigationAction 
            label={btnNav.btnLabel}
            component={Link}
            to={btnNav.btnLinkTo}
            className={classes.button}
            >
            </BottomNavigationAction>
            ))}

        </BottomNavigation>

        <section className="content">
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/section1">第1章　ハーブティーの基本知識</Link></li>
            <li><Link to="/">第2章　ハーブティーの歴史</Link></li>
            <li><Link to="/"></Link></li>
            <li><Link to="/"></Link></li>
            <li><Link to="/"></Link></li>
          </ul>
        </nav> */}

        {/* <hr /> */}

        <Route exact path="/" render={()=><Home></Home>}/>
        <Route exact path="/section1" render={()=><Section1></Section1>}/>
        <Route exact path="/section2" render={()=><Section2></Section2>}/>
        <Route exact path="/section3" render={()=><Section3/>}/>
        <Route exact path="/section4" render={()=><Section4/>}/>
        <Route exact path="/section5" render={()=><Section5/>}/>
        <Route exact path="/section6" render={()=><Section6/>}/>
        <Route exact path="/section8" render={()=><Section8/>}/>
        </section>
      </BrowserRouter>
    </>
  )
}


export default App;
