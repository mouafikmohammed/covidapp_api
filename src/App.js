import React from "react";

import { Cards , Chart , CountryPicker } from "./components";
import styles from './App.module.css';  
import { fetchData } from "./api";


class APP extends React.Component {
  state = {
    
  }

  async componentDidMount(){
    const data = await fetchData();

    console.log(data);
  }
  render() {
    return (
      <div className={styles.containers}>
          <Cards />
          <CountryPicker />
          <Chart />
      </div>
    )
   }
}

export default APP;