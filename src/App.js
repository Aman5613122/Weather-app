import React from "react";
import { Cardi, Charts, Pickers } from "./Component";
import { fetchData } from "./API";
import "./index.css";

const imgSorce = "https://i.ibb.co/7QpKsCX/image.png";
class App extends React.Component {
  state = {
    data: [],
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handelCountryPicker = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img src={imgSorce} alt="Covid-19" />
        <Cardi data={data} />
        <Pickers handelCountryPicker={this.handelCountryPicker} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
