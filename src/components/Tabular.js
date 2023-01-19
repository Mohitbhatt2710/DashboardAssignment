import '../styles/Tabular.css';
import TableContainer from '@mui/material/TableContainer';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function createData(Avatar, Email, Name, Roles) {
  return { Avatar, Email, Name, Roles };
}

const rows = [
  createData('Avatar1', 'mohit@gmail.com', 'Mohit Bhatt', 'Not Invited'),
  createData('Avatar2', 'shubham22@gmail.com', 'Shubham', 'Invited'),
  createData('Avatar3', 'pragya@gmail.com', 'Pragya', 'Invited'),
  createData('Avatar4', 'shanu22@gmail.com', 'Shanu', 'Invited'),
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
              <TableCell align="left"></TableCell>
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
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabular;
