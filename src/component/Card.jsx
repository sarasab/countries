import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div  className="card" style={{ width: '18rem', margin: 'auto' }} >
                <img className="card-img-top " src={this.props.flag} alt="Card cap" />
                <div className="card-body">

                    <h5 className="card-title">{this.props.name}</h5>
                    <p>
                        
                        <br />🌍Name : {this.props.name}
                        <br />Capital : {this.props.capital}
                        <br />Region : {this.props.region}
                        <br />👪Population : {this.props.population}
                        
                    </p>

                </div>
            </div>
        )


    }
}

export default Card