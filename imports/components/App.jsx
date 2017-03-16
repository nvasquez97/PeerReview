import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import Project from "./Project.jsx";
import Projects from "../api/Projects.js";
import {createContainer} from "meteor/react-meteor-data";
export class App extends Component{


	render()
	{
		return(
			<div>
			<h1>Peer grader</h1>		
			{this.props.projects.map(project=>{
				return <Project key={project._id} project={project}/>
			})}
			Vote projects
					</div>)
	}
}
export default AppContainer = createContainer(()=>{
	let projects =Projects.find({});

	return {
		projects:projects.fetch()
	};
}, App);