import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './components/api/index';
// import cornaImage from './components/images/image.png';




class App extends Component{
  state={
    data: {},
    country:'',
  }
 async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data:fetchedData})

  }
  
  countryChangeHandler= async(country)=>{
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    //first we fectch the data
    this.setState({data:fetchedData, country: country})

    

  }
  render(){
    const {data, country} = this.state;
    return(
     
      <div className={styles.container}>
        <h1>SAU COVID-19 TRACKER</h1>
         <Cards data={data}/>
        <CountryPicker   countryChangeHandler={this.countryChangeHandler}/>
        <Chart data={data} country={country} />
        

      </div>
    );
  }
}


export default App;

