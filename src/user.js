export default class User {
  constructor() {
    this.project_list = [];
  };

  searchProject(projectName){
    this.project_list.find( x => x.name == projectName);
    
  };

  appendProject(project){
    this.project_list.push(project);
  }

}