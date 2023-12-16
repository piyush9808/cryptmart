import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { Container, LinearProgress, Table, TableContainer, TableHead, TableRow, TableCell, TextField, Typography, TableBody, Pagination } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const CoinsTable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false)
  const { currency,symbol } = CryptoState();
  const [search, setsearch] = useState("");
  const [page, setPage] = useState(1);


  const fetchCoins = async () => {
    setloading(true)
    const { data } = await axios.get(CoinList(currency),{
      headers:{
        'Access-Control-Allow-Origin' : 'true',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         'Access-Control-Allow-Headers': '*',
      }
    }
    
    
    );
    setcoins(data);
    setloading(false);
  }
  console.log(coins);

  useEffect(() => {
    fetchCoins()
  }, [currency])

  const handleSearch = () => {
    return coins.filter((coin) => (
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search)
    ))
  }

  const navigate = useNavigate();

 
  

  return (
    <Container style={{ textAlign: "center" }}>
      <Typography
        variant='h4'
        style={{ margin: 18, fontFamily: "Montserrat" }}
      >
        CryptoCurrencies Prices By Market Cap

      </Typography>
      <TextField
        label="Search For a Crypto Currency.."
        variant='outlined'
        className='w-full bg-white mb-20'
        onChange={(e) => setsearch(e.target.value)}
      />
      <TableContainer>
        {
          loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead className='bg-[#EEBC1D]'>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  handleSearch()
                  .slice(((page-1)*10,(page-1)*10+10)).map((row)=> {

                  const profit = row.price_change_percentage_24h > 0;
                  
                  return(
                    <TableRow
                    onClick={() => navigate(`/coins/${row.id}`)}
                    style={{backgroundColor:"#16171a",cursor:'pointer',"&:hover":{
                      backgroundColor:"#131111",
                    },fontFamily:"Montserrat"}}
                    key={row.name}
                  >
                    <TableCell
                     component="th"
                     scope='row'
                     style={{
                      display:'flex',
                      gap:"15",
                    }}
                    >
                      <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                      <div className="flex flex-col">

                        <span style={{
                          textTransform:"uppercase",
                          fontSize:22,
                          }}>
                          {row.symbol}
                        </span>
                        <span style={{color:'darkgrey'}}>
                          {row.name}
                        </span>
                      </div>
                      

                    </TableCell>
                    <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                     </TableRow>
                  );
                  })
                }
              </TableBody>

            </Table>
          )
        }
      </TableContainer>
      
      <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            "&.MuiPaginationItem-root":{
              color:"gold",
            },
          }}
          
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />


    </Container>
  )
}

export default CoinsTable
