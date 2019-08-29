import React from 'react'
import uuid from 'uuid'

import Invoice from './Invoice'

import { invoiceData } from './Data'

let trackingArray = []
let filteredTrackingArray = []

const InvoiceList3 = props => {

  invoiceData.invoices.forEach(invoice => {
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

  return (
    <div>
      <h1>Report 3</h1>
      {filteredTrackingArray.map(invoice => <Invoice key={uuid.v4()} invoice={invoice[0]} trackingArray={invoice[1]} />)}
    </div>
  )
}

export default InvoiceList3
