import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import placeholder from './placeholder.png';
import config from '../config.json'

class UploadPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            image: null,
            imagePath: placeholder,
            pictureChosen: false,
            resultData: null
        };
    }

    handlePicture = e => {
        this.setState({
            image: e.target.files[0],
            imagePath : URL.createObjectURL(e.target.files[0]),
            pictureChosen: true,
            resultData: null
        });
        e.target.value = null;
        e.target.files = null;
    };

    handleClick = e => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/octet-stream',
                       'Prediction-Key': config['PREDICTION_KEY']},
            body: this.state.image
        };
        fetch(config['PREDICTION_URL'], requestOptions)
            .then(response => response.json())
            .then(data => this.setState({resultData: data}))
    }

    handleResultData = () => {
        let maskProbability = this.state.resultData.predictions.find(entry => entry['tagName'] == 'mask').probability;
        let noMaskProbability = this.state.resultData.predictions.find(entry => entry['tagName'] == 'no_mask').probability;
        console.log(this.state.resultData.predictions)
        if (maskProbability < 0.5) {
            return (<Alert variant="danger">
            <Alert.Heading>No, this person has not the mask on!</Alert.Heading>
                <p>Probability : {noMaskProbability * 100}%  </p>
            </Alert>)
        } else {
            return (<Alert variant="success">
            <Alert.Heading>Yes, this person has the mask on!</Alert.Heading>
                <p>Probability : {maskProbability * 100}%  </p>
            </Alert>)
        }
    }

    render() { 
        let button = <Button variant="primary" 
            size="lg" 
            style={{ marginTop: `50%`, marginLeft:'10%'}} 
            disabled={!this.state.pictureChosen}
            onClick={this.handleClick}>
                Check if person has mask on
            </Button>
        return (
        <Container fluid="md">
            <Row style={{ marginTop: `15%`, marginLeft:'0%'}}>
                <Col xs={6}>
                    <img src={this.state.imagePath} className="img-thumbnail" width="400" height="400"/>
                </Col>
                <Col xs={3}>
                    {button}
                </Col>
            </Row>
            {this.state.resultData != null ? this.handleResultData() : null}
            <div className="input-group" style={{ marginTop: `4%` }}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                    </span>
                </div>
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={this.handlePicture}
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose face/person picture...
                    </label>
                </div>
            </div>
        </Container>
    )}
}
export default UploadPanel;