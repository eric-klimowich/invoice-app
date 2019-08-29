import React from 'react'

import Invoice from './Invoice'

// import { invoiceData } from './Data'

let invoiceTotal = 0

const InvoiceList = props => {
  // console.log(props)

  invoiceTotal = props.invoices.reduce((total, invoice) => {
    return total + invoice.invoiceamount
  }, 0)

  return (
    <div>
      <h1>Report 1</h1>
      {props.invoices.map(invoice => <Invoice key={invoice.invoicenum} invoice={invoice} />)}
      <h2>Invoice Totals</h2>
      <p>No. of invoices: {props.invoices.length}</p>
      <p>Total of invoices: {invoiceTotal}</p>
    </div>
  )
}

export default InvoiceList
