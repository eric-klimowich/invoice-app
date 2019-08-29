import React from 'react'

import Invoice from './Invoice'
import { invoiceData } from './Data'

let invoiceTotal = 0

invoiceTotal = invoiceData.invoices.forEach(invoice => {
  invoiceTotal += invoice.invoiceamount
})

const InvoiceList = () => {
  // console.log(invoiceData)
  return (
    <div>
      <h1>Report 1</h1>
      {invoiceData.invoices.map(invoice => <Invoice key={invoice.invoicenum} invoice={invoice} />)}
      <h2>Invoice Totals</h2>
      <p>No. of invoices: {invoiceData.invoices.length}</p>
      <p>Total of invoices: {invoiceTotal}</p>
    </div>
  )
}

export default InvoiceList
