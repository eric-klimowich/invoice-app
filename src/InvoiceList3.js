import React from 'react'
import uuid from 'uuid'

import Invoice from './Invoice'

// import { invoiceData } from './Data'

// let trackingArray = []
let filteredTrackingArray = []

const InvoiceList3 = props => {
  let trackingArray = []
  props.invoices.forEach(invoice => {
    invoice.invoicedetail.forEach(innerInvoice => {
      trackingArray.push([invoice, innerInvoice])
    })
  })

  // console.log(trackingArray)

  filteredTrackingArray = trackingArray.filter(trackedInvoice => {
    return trackedInvoice[1].detailamount !== trackedInvoice[1].charges.reduce((total, charge) => {
      return total + charge.chargeamount
    }, 0)
  })

  // console.log(filteredTrackingArray)

  const renderReportThree = props => {
    if (props.invoices.length > 0) {
      return (
        <div>
          <h1>Report 3</h1>
          {filteredTrackingArray.map(invoice => <Invoice key={uuid.v4()} invoice={invoice[0]} trackingArray={invoice[1]} />)}
        </div>
      )
    } else {
      return (
        <div>
          <h1>Report 3</h1>
          <h4>No invoices between those dates.</h4>
        </div>
      )
    }
  }

  return (
    renderReportThree(props)
  )
}

export default InvoiceList3
