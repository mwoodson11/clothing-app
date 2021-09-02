import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IteoNKGlGEV3x4n4EcblHNBDsRofqtq1RRCbxJhbjk5VQwplSfuwGq1GAAAYu4gwwblK0gEj823O6PiEMB1jW6M00CEofbyxP';
  const onToken = token => {
    // console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log("Payment error: ", error);
      alert("There was an issue with your payment. Please check that your card was correct.");
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Store'
      billingAddress
      shippingAddress
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;