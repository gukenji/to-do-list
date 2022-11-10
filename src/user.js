export default class User {
  constructor() {
    this.project_list = [];
  };

  searchProject(projectName){
    let obj;
    this.project_list.forEach( (element) => {if (element.name == projectName) obj = element});
    return obj;
  };

  appendProject(project){
    this.project_list.push(project);
  }

}