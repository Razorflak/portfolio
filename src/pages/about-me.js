import LevelCompetence from "../composant/level-competence/level-competence";
import './about-me.css'
import ScrollService from "../service/scroll-service";
import CommonService from "../service/common-service";
const { Component } = require("react");


class AboutMe extends Component {
	render() {
		return (
			<div id='aboutMe__layout' className="aboutMe__layout page__layout">
				<div className="competences">
					<LevelCompetence key="javaScript" niveau='100' libelle='javaScript' pathLogo={CommonService.icons.ts} isDisplay={this.props.isDisplay} position='1'/>
					<LevelCompetence key="1" niveau='70' libelle='javaScript' pathLogo={CommonService.icons.js} isDisplay={this.props.isDisplay} position='2'/>
					<LevelCompetence key="2" niveau='50' libelle='javaScript' pathLogo={CommonService.icons.html} isDisplay={this.props.isDisplay} position='3'/>
					<LevelCompetence key="3" niveau='50' libelle='javaScript' pathLogo={CommonService.icons.css} isDisplay={this.props.isDisplay} position='4'/>
					<LevelCompetence key="4" niveau='80' libelle='javaScript' pathLogo={CommonService.icons.node} isDisplay={this.props.isDisplay} position='5'/>
					<LevelCompetence key="5" niveau='40' libelle='javaScript' pathLogo={CommonService.icons.nginx} isDisplay={this.props.isDisplay} position='6'/>
				</div>
			</div>
			
		);
	}
	scrollService
	componentDidMount(){
		this.scrollService = new ScrollService(document.getElementById('aboutMe__layout'), this.props.isDisplay) 
	}

	componentDidUpdate(){
		this.scrollService.setIsDisplay(this.props.isDisplay)
	}
}

export default AboutMe;