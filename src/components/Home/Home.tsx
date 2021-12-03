import React, { Suspense } from "react";
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import background_img from '../../assets/images/background.jpg'
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire';
import { useGetJoke } from '../../custom-hooks';
import { server_calls } from '../../api';

interface Props{
    title: string;

}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo: {
        margin: '0 0 0 0.45rem'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    navigation: {
        display: 'flex',
        listStyle: 'none'
    },
    main: {
        backgroundImage: `url(${background_img})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '10%'
    },
    title: {
        fontSize: '70px',
        paddingBottom: '30px'
    },
    sub_text: {
        fontSize: '30px',
        paddingBottom: '200px'
    },
    joke_text: {
        fontSize: '50px',
        paddingTop: '150px'
    }

});

export const Home = (props:Props) =>{
    const classes = useStyles();
    let { joke, getData } = useGetJoke();

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={classes.logo}>
                        <a href="" className={`${classes.logo} ${classes.logo_navigation}`}>Brand</a>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <Suspense fallback={'loading'}>
                            <AuthCheck fallback={
                                <li>
                                    <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                                </li>
                            }>
                                <li>
                                    <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                                </li>
                                <li>
                                    <Link to='/signin' className={classes.nav_a}>Sign Out</Link>
                                </li>
                            </AuthCheck>
                        </Suspense>
                        
                        
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1 className={classes.title}>{ props.title }</h1>
                    <p className={classes.sub_text}>Welcome to Joke Collection API! Sign in with Google to get started. Press the button below for a joke, save the joke, and view your collection in your dashboard!</p>
                    <Button color='primary' variant="contained" onClick={getData}>Click Here For A Joke!</Button>
                    <p className={classes.joke_text}>{joke.joke}</p>
                </div>
            </main>
        </div>
    )
}