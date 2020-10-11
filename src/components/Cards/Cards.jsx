import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    
    if(!confirmed){
        return 'Loading!!!!!!'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography  className= {styles.para_1} color="textSecondary" gutterBottom>Infected People</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={confirmed.value} duration={2.0} separator="," />
                        </Typography>
                       <Typography className={styles.para_a}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography className={styles.para_b} variant="body2"> active cases in Covid-19</Typography>
                    </CardContent>

                </Grid>
                {/* End of first Grid */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recoverd)}>
                    <CardContent>
                        <Typography className= {styles.para_2} color="textSecondary" gutterBottom>Recoverd  People</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={recovered.value} duration={2.0} separator="," />
                        </Typography>
                        <Typography className={styles.para_a} color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography className={styles.para_b} variant="body2">recorved cases in Covid-19</Typography>
                    </CardContent>

                </Grid>
 {/* End of 2nd Grid */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className= {styles.para_3} color="textSecondary" gutterBottom>Death People</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={deaths.value} duration={2.0} separator="," />
                        </Typography>
                        <Typography className={styles.para_a} color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography className={styles.para_b} variant="body2"> deaths cases in Covid-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>
            

        </div>
    );
   
}

export default Cards;