import React from 'react';

import '../styles/Header.css';

import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import BackupIcon from '@mui/icons-material/Backup';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const header = () => {
  return (
    <div>
      <h1>Users</h1>
      <div className="sub-header">
        <Button variant="contained">
          <EmailIcon />
          &nbsp;INVITE
        </Button>
        <Button variant="contained">
          <BackupIcon />
          &nbsp;IMPORT
        </Button>
        <Button variant="outlined" href="#outlined-buttons" className="delete">
          <DeleteIcon />
          &nbsp; DELETE
        </Button>
        <Button href="#home">
          <RestoreIcon />
          &nbsp;AUDIT LOGS
        </Button>
        <Button href="#home">
          <InsertDriveFileIcon />
          &nbsp;EXPORT TO EXCEL
        </Button>
      </div>
    </div>
  );
};

export default header;
