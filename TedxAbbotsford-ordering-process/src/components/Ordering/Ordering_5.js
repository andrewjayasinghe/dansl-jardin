import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Ordering.css"

class Ordering_5 extends Component {
    render() {
        return (
            <ReactBootStrap.Container className="top-space">
            <div className="bg-display">
    
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>5. Is it a suprise?</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={6}>
                    <div className="bg-display-button">
                    <ReactBootStrap.Col><a href="/order6"><p>Yes</p></a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={6}>
                    <div className="bg-display-button" style={{marginTop:'8px'}}>
                    <ReactBootStrap.Col><a href="/order6">No</a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
                </div>
            </ReactBootStrap.Container>
        );
    }
}

export default Ordering_5;