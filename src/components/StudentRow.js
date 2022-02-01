import React, { Component } from 'react';

export default class StudentRow extends Component {
  render() {
      const student = this.props.student
    return (
        <tr>
            <th>{student.id}</th>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
        </tr>

    );
  }
}
