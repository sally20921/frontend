import React from 'react';
//import {Col} from 'react-bootstrap';

export default class TemplateListItem extends React.Component{
    localAddToCanvas = (e) => {
        e.preventDefault();
        this.props.addToCanvas(e.target, this.props.property_type, this.props.zIndex);
    }

    render(){

        return(
                <a href="#" className="thumbnail" onClick={this.localAddToCanvas}>
                    <img alt ="" src={this.props.url} />
                </a>
        );
    }
}