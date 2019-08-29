const date1 = new Date(2019, 7, 1)
const date2 = new Date(2019, 7, 2)

export const invoiceData = {
  invoices: [
    {
      invoicenum: '00551198',
      invoicedate: date1,
      invoiceamount: 150.5,
      invoicedetail: [
        {
          trackingno: '1Z2F12346861507266',
          detailamount: 50,
          charges: [
            {
              chargetype: 'FRT',
              chargeamount: 40
            },
            {
              chargetype: 'FUE',
              chargeamount: 11
            }
          ]
        },
        {
          trackingno: '1Z2F12346861507267',
          detailamount: 80,
          charges: [
            {
              chargetype: 'FRT',
              chargeamount: 65
            },
            {
              chargetype: 'FUE',
              chargeamount: 17
            }
          ]
        },
        {
          trackingno: '1Z2F12346861507268',
          detailamount: 20.5,
          charges: [
            {
              chargetype: 'FRT',
              chargeamount: 10
            },
            {
              chargetype: 'FUE',
              chargeamount: 5
            },
            {
              chargetype: 'HAZ',
              chargeamount: 5.5
            }
          ]
        }
      ]
    },
    {
      invoicenum: '00551199',
      invoicedate: date2,
      invoiceamount: 10,
      invoicedetail: [
        {
          trackingno: '1Z2F12346861503423',
          detailamount: 10.5,
          charges: [
            {
              chargetype: 'FRT',
              chargeamount: 8
            },
            {
              chargetype: 'FUE',
              chargeamount: 8
            }
          ]
        }
      ]
    }
  ]
}
