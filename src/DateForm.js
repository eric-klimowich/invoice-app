import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DateForm extends React.Component {
  state = {
    startDate: new Date()
  };

  handleStartDateChange = (startDate) => {
    this.setState({
      startDate: startDate
    });
  };
  handleEndDateChange = (endDate) => {
    this.setState({
      endDate: endDate
    });
  };

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleEndDateChange}
        />
      </div>
    );
  }
}

export default DateForm
