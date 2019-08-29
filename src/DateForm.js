import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import InvoiceList from './InvoiceList'
import InvoiceList2 from './InvoiceList2'
import InvoiceList3 from './InvoiceList3'

import { invoiceData } from './Data'

class DateForm extends React.Component {

  state = {
    startDate: new Date(),
    endDate: new Date(),
    invoices: []
  }

  handleStartDateChange = (startDate) => {
    this.setState({
      startDate: startDate
    }, this.filterInvoiceDataByDate())
  }

  handleEndDateChange = (endDate) => {
    this.setState({
      endDate: endDate
    }, this.filterInvoiceDataByDate())
  }

  filterInvoiceDataByDate = () => {
    this.setState({
      invoices: invoiceData.invoices.filter(invoice => {
        return invoice.invoicedate >= this.state.startDate && invoice.invoicedate <= this.state.endDate
      })
    })
  }

  render() {
    console.log(this.state.startDate)
    console.log(this.state.invoices)
    console.log(this.state.endDate)
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
    )
  }
}

export default DateForm
