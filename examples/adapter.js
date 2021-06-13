class DataGenerator {
  setDataStream() {
    //implementation
  }
  getOutputInXML() {
    const sampleOutput = `
    <image type="png">
      <pixel x=23 y=43>
        <red>34</red>
        <green>231</green>
        <blue>145</blue>
      </pixel>
    </image>
    `
    return sampleOutput;
  }
}

class DataConsumer {
  static sendRequest(jsonObject) {
    //sends request
    this.axios.get({
      host: "http://example.com/request",
      payload: jsonObject
    })
  }
}

//adapter class
class DataConverter {
  constructor(driver){
    this.driver=driver;
  }
  convertXmlToJson = (data) =>{
    return this.driver.convert(data);
  }
}

const dataGenerator = new DataGenerator();
const dataConsumer = new DataConsumer();
const adapter = new DataConverter({/** dummy driver */});

try {
  const xmlInput = dataGenerator.getOutputInXML();
  const convertedJson = adapter.convertXmlToJson(xmlInput);
  dataConsumer.sendRequest(convertedJson);
} catch {
  console.error("error occured during conversion of data from xml to json")
}
