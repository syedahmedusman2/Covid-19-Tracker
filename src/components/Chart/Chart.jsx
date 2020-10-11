import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../api/index';
import  Bar from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart =({data:{ confirmed, recovered, deaths}, country})=>{
    const [dailyData, setdailyData] = useState([]);
    useEffect(()=>{
        const  fetchAPI = async () => {
            setdailyData(await fetchDailyData());

        }
        console.log(dailyData);
        fetchAPI();

    }, );
    // now we work on the chart 
    // const lineChart =(
    //     dailyData.length[1]
    //     ?(
    //         <Line 
    //         data={{
    //        labels: dailyData.map(({date})=> date),
    //        datasets: [{
    //            data: dailyData.map(({confirmed})=> confirmed),
    //            label: 'Infected',
    //            borderColor: '#3333ff',
    //            fill:true,

    //        },
             
    //        {
    //         data: dailyData.map(({deaths})=> deaths),
    //         label: 'Infected',
    //         borderColor: 'red',
    //         backgroundColor:'rgba(255, 0, 0 , 0.5)',
    //         fill:true,

    //     },]
    //    }}
    //    />
    //     ): null
       
       
    // );
    //Now start work on barchart
    const barChart =(
        confirmed
        ?(
            <Bar
            data={{
                labels: ['Infected' , 'Recoverd', 'Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]

            }}
            options={{
                legend:{display: false},
                title:{display: true, text:`current state in ${country}`},
            }}
             />

        ): null
    );

    return(
        <div className={styles.container}>
            {country} {barChart }
        </div>
    );

}

export default Chart;