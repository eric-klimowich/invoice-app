import React from 'react'

import Invoice from './Invoice'

// import { invoiceData } from './Data'

const InvoiceList2 = props => {

  const filteredInvoiceData = props.invoices.filter(invoice => {
    return invoice.invoiceamount !== invoice.invoicedetail.reduce((total, detail) => {
      return total + detail.detailamount
    }, 0)
  })

  const renderReportTwo = props => {
    if (props.invoices.length > 0) {
      return (
        <div>
          <h1>Report 2</h1>
          {filteredInvoiceData.map(invoice => <Invoice key={invoice.invoicenum} invoice={invoice} discrepency={true} />)}
        </div>
      )
    } else {
      return (
        <div>
          <h1>Report 2</h1>
          <h4>No invoices between those dates.</h4>
        </div>
      )
    }
  }

  return (
    renderReportTwo(props)
  )
}

export default InvoiceList2
