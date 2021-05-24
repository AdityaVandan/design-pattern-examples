class ReturnsCalculator {
  constructor(fund = null, compoundType = null, policy, fundConfig) {
    this.fund = fund;
    this.compoundType = compoundType;
    this.policy = policy;
    this.fundConfig = fundConfig;
  }

  getReturns(amount, time) {
    let returns = 0;
    // some process involving use of internal api or fetching data
    // ...
    if (this.compoundType === 'anually') {
      switch (fund) {
        case 'Axis Blue Chip':
          // some complex calculation logic
          returns = amount + Math.pow(amount * (1 + this.fundConfig.rate), time);
        case 'Parag Flexi':
          returns = amount + Math.pow(amount * this.fundConfig.rate, time) + this.fundConfig.dividend;
        default:
          returns = amount + amount * time * this.fundConfig.rate;
      }

    } else {
      // more complex code ...
    }

    return returns;
  }
}

class ReturnsCalculatorBuilder {
  constructor(fund = null, compoundType = null) {
    this.fund = fund;
    this.compoundType = compoundType;
  }
  setPolicy(policy) {
    this.policy = policy;
    return this;
  }

  setFundConfig(fundConfig) {
    this.fundConfig = fundConfig;
    return this;
  }

  build() {
    if (!this.fundConfig) {
      console.error("fundConfig is not provided");
    } else if (!this.policy) {
      console.error("policy is not provided");
    } else {
      // some complex process to create Object starts
      // ...
      return new ReturnsCalculator(this.fund, this.compoundType, this.policy, this.fundConfig);
    }
  }
}

const COMPOUND_TYPE = {
  ANUALLY: "anually",
  QUARTERLY: "quarterly",
  MONTHLY: "monthly"
  //...
}

const FUNDS = {
  AXIS: "Axis Blue Chip",
  //...
}

const fund = FUNDS.AXIS;
const compoundType = COMPOUND_TYPE.ANUALLY;

const AxisReturnsCalculatorBuilder = new ReturnsCalculatorBuilder(fund, compoundType)
  .setPolicy("NA").setFundConfig({
    rate: 0.10,
    dividend: 0
  });

const AxisReturnsCalculator = AxisReturnsCalculatorBuilder.build();

const returns = AxisReturnsCalculator.getReturns(100, 2);
console.log("builder output: " + returns);
