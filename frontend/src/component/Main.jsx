import React, { useEffect } from 'react';
import "../Style/main.css";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },

];


function Main() {
    return (
        <body>
        <>
            <nav className="navbar">
                    <div>MIND CHAT</div>
                    <ul className="n-list">
                        <li><a href="">Perfume</a></li> &nbsp;
                        <li><a href="">About</a></li>
                        <li><Link to="/main/Cart/Order">Order</Link></li>
                        <li><Link to="/main/Cart">Cart</Link></li>
                        <li><Link to="/main/Cart/Event">event</Link></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </nav>
                <section>
                    <h1 className='mainshow'>
                        It smells great
                    </h1>
                    <h4> Expectaion
                        Predetermined resentments
                    </h4>
                </section>

                <div className="main_text0">
                    <h3>BEST COLLECTION</h3>
                    <div className="contents1">나만 알고싶은 설레는 향 </div>
                </div>


                <div style={{ width: '100%', margin: '3ream auto', textAlign: '-webkit-center'}}>


                    {/* Filter */}

                    {/* Search */}

                    {/* Cards*/}
                    <ImageList sx={{  width: '80%', height: '500', margin:'30px', alignItems:'center'}}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>


                    <div style={{ justifyContent: 'center'}}>

                        <Button variant="outlined">더보기</Button>
                    </div>


                </div>
        </>
            </body>
    );
};


export default Main;