class RemoteControl{
  constructor(appliance){
    this.appliance = appliance;
  }
  on = () => {
    this.appliance.on();
  }
  off = () => {
    this.appliance.off();
  }
  setTemparature = (temperature) => {
    this.appliance.setTemparature(temperature);
  }

};

class InvertorRemoteControl {
  constructor(invertor){
    this.appliance = invertor;
  }
  heat = () => {
    this.appliance.heatOn();
  }
  cold= ()=> {
    this.appliance.coldOn();
  }
  on = () => {
      this.appliance.on();
  }
  off = () => {
      this.appliance.off();
  }
  setTemparature = (temperature) => {
      this.appliance.setTemparature(temperature);
  }
};


class AirConditioner {
  on = () => {
    console.log('Simple AC is on');
  }
  off = () => {
    console.log('Simple AC is off');
  }
  setTemparature = (temp) => {
      console.log(`Simple AC's cooling is set to ` + temp + ' degrees');
  }
}

class InvertorAirConditioner {
  constructor(){
    this.setting = "cool"
  }
  on = () => {
    console.log('Invertor AC is on');
  };
  off = () => {
    console.log('Invertor AC is off');
  };
  heatOn = () => {
    this.setting = "heat"
    console.log("Invertor AC's heating is on")
  };
  coldOn = () => {
    this.setting = "cool"
    console.log("Invertor AC's cooling is on")
  };
  setTemparature = (temp) => {
    if(this.setting == "cool") console.log(`Invertor AC's cooling is set to ` + temp + ' degrees');
    if(this.setting == "heat") console.log(`Invertor AC's heating is set to ` + temp + ' degrees');
  }

}

const ac = new AirConditioner();
const invertorAc = new InvertorAirConditioner();

const remote = new RemoteControl(ac);
const invertorRemote = new InvertorRemoteControl(invertorAc);

remote.on();
remote.setTemparature(16);
remote.off();

invertorRemote.on();
invertorRemote.heat();
invertorRemote.setTemparature(22);
invertorRemote.off();
