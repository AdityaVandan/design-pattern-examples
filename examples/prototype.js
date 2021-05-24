function Page() {
  this.name = "";
  this.uri = "";
  this.height = 0;

  this.setName = function (name) {
    this.name = name;
  }

  this.setUri = function (uri) {
    this.uri = uri;
  }

  this.getPageUrl = function () {
    const url = this.origin + this.uri;
    return url;
  }

  // setters, getters and other functionalities ...
}

// properties and methods that prototype will contain
Page.prototype.width = 500;
Page.prototype.uri = "/";
Page.prototype.origin = "http://www.prototype-example.com";
Page.prototype.toString = () => {
  const htmlToString = "";
  // code to convert html to string;
  return htmlToString
}


const HomePage = new Page();
HomePage.setName("HomePage");
console.log(HomePage.getPageUrl());
// http://www.prototype-example.com/


const ProfilePage = new Page();
ProfilePage.setName("ProfilePage");
ProfilePage.setUri("/profile");
console.log(ProfilePage.getPageUrl());
// http://www.prototype-example.com/profile
