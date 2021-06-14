import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div  style={{width:150}} >
                <img className="card-img-top" src={this.props.flag} alt="Card cap" />
                <div className="card-body">

                    <h5 className="card-title">{this.props.name}</h5>
                    <p>
                        <br />Name : {this.props.name}
                        <br />Capital : {this.props.capital}
                        <br />Population : {this.props.population}
                        <br />Region : {this.props.region}
                    </p>

                </div>
            </div>
        )


    }
}

export default Card