import React, { Component } from 'react'

export default class InformationTable extends Component {
    

    render() {

        
        return (
            <div>
                <h2>Listing</h2>
                <thead> 
                    <tr>
                    <th style={this.props.style.tableCell}>First name</th>
                    <th style={this.props.style.tableCell}>Last name</th>
                    <th style={this.props.style.tableCell}>Phone</th>
                    </tr>
                </thead>
                 {this.props.listing.map((person, index) => {
                     return(
                      <table style={this.props.style.table} className='informationTable'>
                <tbody>
                    <tr>
                        <th style={this.props.style.tableCell}>{person.firstName} </th>
                        <th style={this.props.style.tableCell}>{person.lastName}</th>
                        <th style={this.props.style.tableCell}>{person.phoneNumber}  </th>
                    </tr> 
                    </tbody>
                </table>
                    )
                })}
            </div>
        )
    }
}
