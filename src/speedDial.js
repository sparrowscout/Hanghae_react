import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useHistory } from 'react-router-dom';


export default function BasicSpeedDial() {
  const history = useHistory();
  return (
  
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon onClick={() => {history.push("/addword")}}/>}
      >
      </SpeedDial>

  );
}
