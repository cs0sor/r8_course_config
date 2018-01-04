import React from 'react'
import logo from '../logo.svg'
import * as bs from 'react-bootstrap/lib/'

const headerData = [
  {name: 'Title', style:{width:'550px'}},
  {name: 'ID', style:{width:'70px'}},
  {name: 'Credit', style:{width:'50px'}},
  {name: 'Level', style:{width:'50px'}},
  {name: 'Completed', style:{width:'75px'}},
  {name: 'Date Completed', style:{width:'182px'}}
]

const Completed = (props) =>
<bs.FormGroup controlId="formControlsSelect">
  <bs.FormControl componentClass="select" placeholder="select">
    <option value="select">Not Completed</option>
    <option value="other">Completed</option>
  </bs.FormControl>
</bs.FormGroup>

const Unit = (props) =>
  <tr>
    {console.log(props)}
    <td>{props.unit.name}</td>
    <td>{props.unit.id}</td>
    <td>{props.unit.credit}</td>
    <td>{props.unit.level}</td>
    <td>
      <Completed {...props}/>
    </td>
    <td>
      cate completed
    </td>
  </tr>
  

const Units = (props) =>
  <bs.Table striped condensed hover>
        {console.log(props)}
    <thead>
      <tr>
        {headerData.map((header) => <th key={header.name} style={header.style}>{header.name}</th>)}
      </tr>
    </thead>
    <tbody>
      {props.groupUnits.map(unit => <Unit {...props} unit={props.units[unit]} />)}
    </tbody>
  </bs.Table>

const Group = (props) => 
  <bs.Panel header={props.group.title}>
    <Units {...props} groupUnits={props.group.units} />
  </bs.Panel>

const Criteria = (props) =>
  <div>
    <h4>
      {props.criteria.overview}
    </h4>
    {props.criteria.groups.map(
      group => <Group {...props} group={props.groups[group]} /> )}
  </div>

const Qualification = (props) => 
  <bs.Panel header={props.qual.title}>
    {props.qual.criteria.map(criteria =>
      <Criteria {...props} criteria={props.criteria[criteria]} />
    )}
  </bs.Panel>

const Qualifications = (props) => 
  <div>
    {Object.entries(
      props.qualifications).map(qual => 
        <Qualification {...props} qual={qual[1]} />)}
  </div>

export default Qualifications