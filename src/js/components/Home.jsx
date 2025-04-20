import React from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
import CardList from "./CardList";
import Footer from "./Footer"



//create your first component
const Home = () => {
	return (
		<div>
		<NavBar/>
		<Heading/>	
		<CardList/>
		<Footer/>	
		</div>
	);
};

export default Home;