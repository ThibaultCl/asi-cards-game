import React, {Component} from 'react';
import { connect } from 'react-redux';

class SelectedCardDisplay extends Component{

	constructor(props){
		super(props);
		this.state = {
			card: this.props.card,
		};
	}

	render(){
		let display = (
            <div className="ui special cards centered">
                <div className="card">
                    <div className="content">
                        <div className="ui grid">
                            <div className="one column row">
                                <div className="column">
                                        <h5>{this.props.card.family}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image imageCard">

                        <div className="blurring dimmable image">
                            <div className="ui inverted dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui primary button"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui fluid image">
                                <a className="ui left corner label" href="">
                                    {this.props.card.name}
                                    </a>
                                <img id="cardImgId" alt="card" className="ui centered image" src={this.props.card.imgUrl}></img>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ui form tiny">
                            <div className="field">
                                <label id="cardNameId"></label>
                                <p id="cardDescriptionId" className="overflowHiden" >{this.props.card.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <i className="heart outline icon"></i><span id="cardHPId"> HP {this.props.card.hp}</span> 
                        <div className="right floated ">
                                <span id="cardEnergyId">Energy {this.props.card.energy}</span>
                            <i className="lightning icon"></i>
                                
                        </div>
                    </div>
                    <div className="content">
                        <span className="right floated">
                                <span id="cardAttackId"> Attack {this.props.card.attack}</span> 
                            <i className=" wizard icon"></i>
                        </span>
                        <i className="protect icon"></i>
                        <span id="cardDefenceId">Defense {this.props.card.defence}</span> 
                    </div>
                </div>
            </div>
        );
		return display;
	}
}

export default connect()(SelectedCardDisplay);
