import React, { Component } from 'react'
import PhoneBookForm from './components/PhoneBookForm'
import InformationTable from './components/InformationTable'

export default class App extends Component {



  state = {
    listing: []
  }

  style = {
    table: {
      borderCollapse: 'collapse'
    },
    tableCell: {
      border: '1px solid gray',
      margin: 0,
      padding: '5px 10px',
      width: 'max-content',
      minWidth: '150px'
    },
    form: {
      container: {
        padding: '20px',
        border: '1px solid #F0F8FF',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px'
      },
      inputs: {
        marginBottom: '5px'
      },
      submitBtn: {
        marginTop: '10px',
        padding: '10px 15px',
        border:'none',
        backgroundColor: 'lightseagreen',
        fontSize: '14px',
        borderRadius: '5px'
      }
    }
  }

  
  updateState = (person) => {
    
    this.setState({
      listing: [...this.state.listing, person]
    })
  }

  createListing = (event) => {
    event.preventDefault()
    let firstName = event.target[0].value 
    let lastName = event.target[1].value 
    let phoneNumber = event.target[2].value 

    let person = {
      firstName, lastName, phoneNumber
    }
    this.updateState(person)
    
  }
  render() {

    return (
      <div>
        <PhoneBookForm style={this.style} createListing={this.createListing} /> 
        <InformationTable  style={this.style} listing={this.state.listing} />
      </div>
    )
  }
}

