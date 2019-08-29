import React from 'react'

import Invoice from './Invoice'
import { invoiceData } from './Data'

const filteredInvoiceData = invoiceData.invoices.filter(invoice => {
  return invoice.invoiceamount !== invoice.invoicedetail.reduce((total, detail) => {
    return total + detail.detailamount
  }, 0)
})

const InvoiceList2 = () => {
  return (
    <div>
      <h1>Report 2</h1>
      {filteredInvoiceData.map(invoice => <Invoice key={invoice.invoicenum} invoice={invoice} discrepency={true} />)}
    </div>
  )
}

export default InvoiceList2
