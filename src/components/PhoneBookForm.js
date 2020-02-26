import React, { Component } from 'react'

export default class PhoneBookForm extends Component {
    render() {
        return (
            <div>
                <h2>Phone Book React Aim Assesment</h2>
                    <form onSubmit={this.props.createListing} style={this.props.style.form.container}>
                        <label>
                        First Name:
                        <br/>
                        <input type='text' placeholder='Alex' style={this.props.style.form.inputs}/>
                        </label>
                        <br/>
                        <label>
                        Last Name:
                        <br/>
                        <input type='text' placeholder='Borst' style={this.props.style.form.inputs}/>
                        </label>
                        <br/>
                        <label>
                        Phone Number:
                        <br/>
                        <input type='text' placeholder='Call Me' style={this.props.style.form.inputs}/>
                        </label>
                        <br/>
                        <input type='submit' value='Add User' style={this.props.style.form.submitBtn} />
                    </form>
            </div>
        )
    }
}
