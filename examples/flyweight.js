// state which will be share between objects
const DAY_STATE = {
  primaryColor: '#cc2941',
  secondaryColor: '#135ad4',
  disableButton: false,
  showMessage: true,
  message: 'Please book your orders !!'
}
const NIGHT_STATE = {
  primaryColor: '#135ad4',
  secondaryColor: '#cc2941',
  disableButton: true,
  showMessage: true,
  message: 'We don\'t accept orders during the night, as market is closed'
}

class OrderSection  {
  constructor(state = DAY_STATE) {
    const time = new Date();
    // logic to set state
    this.state = state
  }

  acceptOrders = () =>{
    if(this.state.disableButton === false){
      // logic to accept orders
    }
    console.log(this.state.message);
  }
}


const foodOrderSection = new OrderSection();
const appliancesOrderSection = new OrderSection();
const clothesOrderSection = new OrderSection();
const jewellaryOrderSection = new OrderSection();
const stationaryOrderSection = new OrderSection();

foodOrderSection.acceptOrders();
appliancesOrderSection.acceptOrders();
clothesOrderSection.acceptOrders();
jewellaryOrderSection.acceptOrders();
stationaryOrderSection.acceptOrders();

