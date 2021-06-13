class BaseDataService {
  constructor(dataStream){
    this.dataStream = dataStream;
  }

  getData() {
    return this.dataStream.fetchData();
  }
}

class DataService extends BaseDataService {
  constructor(dataStream){
    super(dataStream);
  }
  getData() {
    return this.dataStream.fetchData();
  }
}

// proxy class
class ProxyDataService extends BaseDataService {
  constructor(dataStream) {
    super(dataStream);
    this.dataService = new DataService(dataStream);
    this.isFetching = false;
  }

  getData() {
    if(this.cachedData && this.isFetching){
      return this.cachedData;
    } else {
      this.cachedData = this.dataService.fetchData().then(()=>{
        this.isFetching = true;
      }).catch(()=>{
        console.error("unable to fetch data");
      });
      console.log("fetching data");
    }
  }
}

const dataStream = {/** example data stream */}
const dataService = new ProxyDataService(dataService);
dataService.getData();
