import { API } from "./api";
import { DataService } from "./data-service";
import { DevBlog } from "./dev-blog";

var greetMessage : string = "hello world";

console.log(greetMessage); 

const dataService = new DataService();
var api = new API(dataService);
api.setupRoutes();


