import React, { Component } from 'react';

class NavbarElement extends Component{

    constructor(props) {
        super(props);
        this.state = {
            text : props.text,
            type : props.type
        }
    }

    render() {
        let display="";
        console.log("test : "+this.props.type);
        switch(this.props.type){
            case 'user':
                display=(
                    <div>
                        <i className="fa fa-user"></i> 
                        &nbsp;
                        <div className="btn-group" role="group">
                            {this.props.text}
                            
                        </div>                        
                    </div>
                );
            break;

            case 'money':
                display=(
                    <div>
                        <i className="fa fa-dollar"></i>
                        &nbsp;
                        <div className="btn-group" role="group">
                            {this.props.text}
                            
                        </div>
                    </div>
                    
            );
            break;

            case 'title':
                display=(
                    <div className="btn-group" role="group">
                        {this.props.text}
                    </div>
                    
            );
            break;
        }
        return display;
    }

}
export default NavbarElement;