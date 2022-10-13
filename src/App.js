import React from "react";

import { Cards , Chart , CountryPicker } from "./components";
import styles from './App.module.css';  
import { fetchData } from "./api";


class APP extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.containers}>
          <Cards data={data}/>
          <CountryPicker />
          <Chart />
      </div>
    )
   }
}

export default APP;