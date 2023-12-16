import React from 'react'
import { Container, Typography } from '@mui/material'
import Carousel from './Carousel'
const Banner = () => {
    return (
        <div className='h-96 f-1'
            style={{ backgroundImage: "url(./banner.jpg)" }}>
            <Container className='h-96 flex flex-col pt-25 justify-around'
                style={{ 
                    height: "46", 
                    display: 'flex', 
                    flexDirection: 'column', 
                    paddingTop: '10', 
                    justifyContent:'space-around', 
                    marginTop: "10" }}>

                  <div className="tagline" style={{
                    display: "flex",
                    height: "40%",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                            textAlign: "center"
                        }}
                    >
                        CryptoMart
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                            textAlign: "center"
                        }}
                    >
                        Get all the Info regarding your favorite Crypto Currency
                    </Typography>
                </div>
                <Carousel/>
            </Container>
            
        </div>
    )
}

export default Banner
