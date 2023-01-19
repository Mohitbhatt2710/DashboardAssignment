import React from 'react';

import '../styles/Bodyform.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
import UndoIcon from '@mui/icons-material/Undo';
import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/material/Button';

const bodyform = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div className="form-section">
          {/* <input type="text" name="email" placeholder="Email" /> */}
          <Box
            sx={{
              display: 'grid',
              gap: 4,
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Name" variant="outlined" />

            <TextField id="outlined-basic" label="Role" variant="outlined" />
            <TextField id="outlined-basic" label="Status" variant="outlined" />
          </Box>

          {/* <div className="extra-form"> */}
          {/* <input type="text" name="email" placeholder="Role" /> */}
          {/* <input type="text" name="email" placeholder="Status" /> */}
          <div className="searchButton">
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: 'repeat(2, 1fr)',
              }}
            >
              <Button className="search" variant="contained">
                <SearchIcon />
                &nbsp;Search
              </Button>
              <Button href="#reset">
                <UndoIcon />
                &nbsp; RESET
              </Button>
            </Box>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* Buttons */}
      {/* <div className="searchButtons">
       
      </div> */}

      {/* after this is table , used in another component for that*/}
    </div>
  );
};

export default bodyform;
