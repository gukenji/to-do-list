export default class Project {
  constructor(name,description) {
    this.items = [];
    this.name = name;
    this.description = description;
  }

  appendItem(item){
    this.items.push(item);
  }

}