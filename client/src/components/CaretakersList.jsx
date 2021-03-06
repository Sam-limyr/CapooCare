import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${
//         params.getValue('lastName') || ''
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
const columns = [
  { field: 'id', headerName: 'Index', width: 100 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'carername', headerName: 'First name', width: 130 },
  { field: 'age', headerName: 'Age', width: 130 },
  { field: 'pettypes', headerName: 'Pet types', width: 130 },
  { field: 'rating', headerName: 'Rating', width: 130 },
  { field: 'salary', headerName: 'Salary', width: 130 }
];

const CaretakersList = () => {

  const getCareTakers = useStoreActions(actions => actions.careTakers.getCareTakers); // use getCareTakers action

  useEffect(() => {
    getCareTakers();
    return () => {};
  }, [])
  const caretakers = useStoreState(state => state.careTakers.caretakers);
  // console.log(caretakers);
  var id = 0;
  return (
    <div style={{ height: 800, width: '90%', marginTop: 100}}>
      <DataGrid rows={caretakers.map(caretaker => ({
        "id": ++id,
        "username": caretaker.username,
        "carername": caretaker.carername,
        "age": caretaker.age,   
        "pettypes": caretaker.pettypes,
        "rating": caretaker.rating,
        "salary": caretaker.salary
      }))} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}

export default CaretakersList