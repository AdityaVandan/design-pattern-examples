class HtmlElement {
  constructor(id=undefined,type="div",innerHTML=undefined) {
    this.id=id;
    this.element = document.createElement(type);
    this.children = [];
    if(id) this.element.setAttribute("id",id);
    if(innerHTML) this.element.innerHTML=innerHTML;
  }
  addEventListener(event,func) {
    this.element.addEventListener(event,func);
  }
  getChildren(){
    return this.children;
  }
  addChildren(...elements){
    for(const element in elements){
      this.children.push(element);
      this.element.appendChild(element.innerHTML);
    }
  }
  // ... other functions
}

class HtmlInput extends HtmlElement {
  constructor(id=undefined,type="input",innerHTML=undefined){
    super(id,type,innerHTML);
  }
  //@override
  addChildren(...elements){
    console.error("cannot add children to HtmlInput");
  }
}

class HtmlDiv extends HtmlElement {
  constructor(id=undefined,type="div",innerHTML=undefined){
    super(id,type,innerHTML);
  }
  //@override
  addChildren(...elements) {
    for(const element in elements){
      if(typeof element === "string") {
        this.children.push(new HtmlElement('text',undefined,element));
        this.element.appendTextNode(element);
      }
      else this.element.appendChild(element);
    }
  }
}

root = new HtmlDiv("root");
header = new HtmlDiv("header");
form = new HtmlElement();
form.addChildren(new HtmlInput("formInput"));
footer = new HtmlDiv("footer");
root.addChildren(header,form,footer);
console.log(root.getChildren());
