import { AppBar, Toolbar, Typography,Container, Select, MenuItem } from '@mui/material'
import React from 'react'
import '../App.css'
import {useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const Header = () => {
    const Navigate = useNavigate();
    const {currency,setCurrency}=CryptoState();
    
    return (
        
        <AppBar style={{ backgroundColor: 'transparent', color: '#FFD700',position:'static' }}>
            <Container>
                <Toolbar>
                <Typography className="flex-1 text-white cursor-pointer "
                style={{fontWeight:800,fontFamily:'Montez',fontSize:'30px',}}
                variant='h6'
                onClick={()=>Navigate('/')}
                >
                    CryptoMart
                </Typography>
              <Select 
              className='text-black' 
              variant="outlined" 
              style={{width:100,height:40,marginRight:15,backgroundColor:"white"}}
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}
              >

                <MenuItem value={"USD"}>USD
                </MenuItem>
                <MenuItem value={"INR"}>INR
                </MenuItem>
              </Select>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
