
import React from 'react';
//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';
import Header from "./components/Header";
import { Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData} from './api';

class App extends React.Component {
  state = {
    data  : {},
    country: '',
  }
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render(){
    const { data, country } = this.state;
    return(

      <div className = {styles.container}>
        <Header />
          
        <Cards data = {this.state.data}/>
        
        <CountryPicker handleCountryChange={this.handleCountryChange} />  
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;