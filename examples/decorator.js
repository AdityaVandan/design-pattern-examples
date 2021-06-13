class PaymentService {
  constructor(){
    // code for setting up payment config
  }
  makePayment = (amount,txnId) =>{
    // code to make payment
    console.log("payment made");
  }
}

// decorator over payment service
class PaymentAndNotificationService {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }
  makePayment = (amount,txnId) => {
    this.paymentService.makePayment();
    this.sendNotificationToPhone();
  }
  sendNotificationToPhone() {
    // logic to send notification to phone
    console.log("notification sent to phone");
  }
}

const paymentService = new PaymentService();
const newPaymentService = new PaymentAndNotificationService();

newPaymentService.makePayment();
/* 
output: 
payment made
notification sent to phone
*/
