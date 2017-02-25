import React, { Component } from 'react';
import {Table,FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import File from './File';

class UploadApp extends Component {

onMessage(e) {
        if (e.origin === 'http://localhost:3000') {
            console.log(e.data);
        }
    }
    render() {
//        var action = "http://localhost:3000/upload";
	var action = "/upload";
        return (
<div>
<div>
<FormGroup controlId="formControlsFile">
      <ControlLabel>Select</ControlLabel>

            <File onMessage={this.onMessage} action={action}>
                <button>upload</button>
            </File>
</FormGroup>
</div>
<div>
 <Table striped bordered condensed hover responsive>
    <thead>
      <tr>
        <th>File Name</th>
        <th>RAP Section</th>
        <th>Question #</th>
	<th>Comments</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>file1.doc</td>
        <td><FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="admin">Administration</option>
        <option value="coach">Coaches</option>
        <option value="ref">Referees</option>
        <option value="finance">Finance</option>
        <option value="comm">Community</option>
        <option value="sponsor">Sponsors</option>
        <option value="other">Other</option>
      </FormControl>
    </FormGroup></td>
        <td>3</td>
        <td>Here are copies of the checks we wrote.</td>
      </tr>
</tbody>
</Table>
</div>
</div>
        )
    }

}

export default UploadApp;
