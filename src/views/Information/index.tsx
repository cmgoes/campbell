import { useState } from "react";
import {
  Box,  
  Typography, 
} from "@mui/material";
function Information() { 
  return (
    <>
      <Box display="flex">
        <Box color="white">
          <Typography
            fontFamily="Oxanium Medium"            
            fontWeight="400"
            lineHeight="25px"
          >
            The Miners Union
          </Typography>    
        </Box>
      </Box>
    </>
  );
}

export default Information;
