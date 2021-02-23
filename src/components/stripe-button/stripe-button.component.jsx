import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51INpq7GzBwQFWirdeSSWMPvaFpc02zShQeqTp9WTfy8SHk98gXR2ooXNKcyNJf8E6BQePp88tswBPVLrsT6dJA5D00mPMwjyq9'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful!')
  }

  return (
    <StripeCheckout label = 'Pay Now' name = 'CRWN Clothing Ltd.' billingAddress shippingAddress
    image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`}
    amount = {priceForStripe}  panelLabel= 'Pay Now' token ={onToken} stripeKey ={publishableKey}
    />
  )
}

export default StripeCheckoutButton
