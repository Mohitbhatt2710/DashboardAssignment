import '../styles/Tabular.css';
import TableContainer from '@mui/material/TableContainer';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

// import { Button } from '@mui/material';
// import Paper from '@mui/material/Paper';

function createData(Avatar, Email, Name, Roles, Status, Edit) {
  return { Avatar, Email, Name, Roles, Status, Edit };
}

const rows = [
  createData('Avatar1', 'mohit@gmail.com', 'Mohit Bhatt', 'Admin', 'Invited '),
  createData(
    'Avatar2',
    'shubham22@gmail.com',
    'Shubham',
    'Custom Role',
    'Invited'
  ),
  createData('Avatar3', 'pragya@gmail.com', 'Pragya', 'Custom Role', 'Active'),
  createData('Avatar4', 'shanu22@gmail.com', 'Shanu', 'Custom Role', 'Invited'),
];

function Tabular() {
  return (
    <div className="main">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow variant="body">
              <TableCell style={{ fontWeight: 'bold' }}>Avatar</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="left">
                Email
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="left">
                Name
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="left">
                Roles
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="left">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Avatar}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  {/* {row.Avatar} */}
                </TableCell>
                <TableCell align="left">{row.Email}</TableCell>
                <TableCell align="left">{row.Name}</TableCell>
                <TableCell align="left">{row.Roles}</TableCell>
                <TableCell align="left">
                  {
                    <Button style={{ borderRadius: '20px' }} variant="outlined">
                      {row.Status}
                    </Button>
                  }
                </TableCell>
              </TableRow>
            ))}
            {/* <TableRow>
              <TableCell align="left">{}</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabular;
