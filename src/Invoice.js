import React from 'react'

const renderInvoices = (props, detailAmountTotal) => {
  if (props.discrepency) {
    return (
      <div>
        <h2>Invoice num: {props.invoice.invoicenum}</h2>
        <p>Invoice date: {props.invoice.invoicedate.toDateString()}</p>
        <p>Invoice amount: {props.invoice.invoiceamount}</p>
        <p>Detail amount total: {detailAmountTotal}</p>
        <p>Discrepency amount: {props.invoice.invoiceamount - detailAmountTotal}</p>
      </div>
    )
  } else if (props.trackingArray) {
    // console.log(props.invoice)
    // console.log(props.trackingArray)
    const chargesAmountTotal = props.trackingArray.charges.reduce((total, charge) => {
      return total + charge.chargeamount
    }, 0)
    return (
      <div>
      <h2>Invoice num: {props.invoice.invoicenum}</h2>
      <p>Invoice date: {props.invoice.invoicedate.toDateString()}</p>
      <p>Tracking number: {props.trackingArray.trackingno}</p>
      <p>Detail amount: {props.trackingArray.detailamount}</p>
      <p>Charges amount: {chargesAmountTotal}</p>
      <p>Discrepency amount: {props.trackingArray.detailamount - chargesAmountTotal}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Invoice num: {props.invoice.invoicenum}</h2>
        <p>Invoice date: {props.invoice.invoicedate.toDateString()}</p>
        <p>Invoice amount: {props.invoice.invoiceamount}</p>
      </div>
    )
  }
}

const Invoice = (props) => {
  // console.log(props.invoice.invoicedetail[0].detailamount)
  const detailAmountTotal = props.invoice.invoicedetail.reduce((total, detail) => {
    return total + detail.detailamount
  }, 0)

  return(
    renderInvoices(props, detailAmountTotal)
  )
}

export default Invoice
