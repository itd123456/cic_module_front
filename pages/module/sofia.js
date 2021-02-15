import React, {Component} from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'PN', headerName: 'PN Number', width: 160 },
  { field: 'firstName', headerName: 'Name', width: 130 },
//   { field: 'firstName', headerName: 'Birthdate', width: 130 },
//   { field: 'firstName', headerName: 'Civil Status', width: 130 },
//   { field: 'firstName', headerName: 'Address', width: 130 },
//   { field: 'firstName', headerName: 'Monthly Income', width: 130 },
//   { field: 'firstName', headerName: 'SSS', width: 130 },
//   { field: 'firstName', headerName: 'TIN', width: 130 },
//   { field: 'firstName', headerName: 'Driver License', width: 130 },
//   { field: 'firstName', headerName: 'Mobile No.', width: 130 },
//   { field: 'firstName', headerName: 'Released Date', width: 130 },
//   { field: 'firstName', headerName: 'Needed Date', width: 130 },
//   { field: 'firstName', headerName: 'Contract End', width: 130 },
//   { field: 'firstName', headerName: 'Last Payment Date', width: 130 },
//   { field: 'firstName', headerName: 'Finance Amount', width: 130 },
//   { field: 'firstName', headerName: 'Terms', width: 130 },
//   { field: 'firstName', headerName: 'Monthly Payment', width: 130 },
//   { field: 'firstName', headerName: 'First Payment Date', width: 130 },
//   { field: 'firstName', headerName: 'Balance', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, PN: 'GD3102021000035', lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, PN: 'GD3102021000035', lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, PN: 'GD3102021000035', lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, PN: 'GD3102021000035', lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, PN: 'GD3102021000035', lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, PN: 'GD3102021000035', lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, PN: 'GD3102021000035', lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, PN: 'GD3102021000035', lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 13, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 14, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 15, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 16, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 17, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 18, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 19, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 20, PN: 'GD3102021000035', lastName: 'Roxie', firstName: 'Harvey', age: 65 },

];

class Sofia extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return <>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
        </>
    }

}
export default Sofia;


