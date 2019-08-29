import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import InvoiceList from './InvoiceList'
import InvoiceList2 from './InvoiceList2'
import InvoiceList3 from './InvoiceList3'

import { invoiceData } from './Data'

class DateForm extends React.Component {

  // There is no issue with the date range, working on capturing the date to represent midnight, not the current time of the current day, on that past date. Changed the date in the data table, which now works, but now creates an error with the endDate. Working on capturing just the year, month, and day when handlers are called.

  state = {
    startDate: new Date(),
    endDate: new Date(),
    invoices: []
  }

  handleStartDateChange = (startDate) => {
    let adjustedDate = new Date(startDate.toDateString());
    this.setState({
      startDate: adjustedDate
    }, () => this.filterInvoiceDataByDate())
  }

  handleEndDateChange = (endDate) => {
    let adjustedDate = new Date(endDate.toDateString());
    this.setState({
      endDate: adjustedDate
    }, () => this.filterInvoiceDataByDate())
  }

  filterInvoiceDataByDate = () => {
    this.setState({
      invoices: invoiceData.invoices.filter(invoice => {
        return invoice.invoicedate >= this.state.startDate && invoice.invoicedate <= this.state.endDate
      })
    })
  }

  render() {
    // console.log(this.state.startDate)
    // console.log(this.state.invoices)
    // console.log(this.state.endDate)
    return (
      <div>
        <h3>Start Date:</h3>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartDateChange}
        />
        <h3>End Date:</h3>
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleEndDateChange}
        />
        <InvoiceList invoices={this.state.invoices} />
        <InvoiceList2 invoices={this.state.invoices} />
        <InvoiceList3 invoices={this.state.invoices} />
      </div>
    )
  }
}

export default DateForm
