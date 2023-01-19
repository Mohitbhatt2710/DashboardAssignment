import '../styles/Tabular.css';
import TableContainer from '@mui/material/TableContainer';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function createData(Avatar, Email, Name, Roles, Status) {
  return { Avatar, Email, Name, Roles, Status };
}

const rows = [
  createData(
    'Avatar1',
    'mohit@gmail.com',
    'Mohit Bhatt',
    'Admin',
    'Not Invited'
  ),
  createData(
    'Avatar2',
    'shubham22@gmail.com',
    'Shubham',
    'Custom Role',
    'Invited'
  ),
  createData('Avatar3', 'pragya@gmail.com', 'Pragya', 'Custom Role', 'Invited'),
  createData('Avatar4', 'shanu22@gmail.com', 'Shanu', 'Custom Role', 'Invited'),
];

function Tabular() {
  return (
    <div className="main">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow variant="body">
              <TableCell>Avatar</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Roles</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Avatar}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Avatar}
                </TableCell>
                <TableCell align="left">{row.Email}</TableCell>
                <TableCell align="left">{row.Name}</TableCell>
                <TableCell align="left">{row.Roles}</TableCell>
                <TableCell align="left">{row.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabular;
