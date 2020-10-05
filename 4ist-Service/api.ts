import express from "express";
import { DataService } from "./data-service";
const app = express();
const cors = require("cors");
app.use(cors());

export class API {
  dataService: DataService;

  constructor(globalDataService: DataService) {
    this.dataService = globalDataService;
  }

  setupRoutes(): void {
    app.get("/api/DevBlogs", async (req, res) => {
      console.log(req);
      
      const devBlogs = await this.dataService.getDevBlogs();
      var devBlogsJSON = JSON.parse(JSON.stringify(devBlogs));

      res.send(devBlogsJSON);
    });

    app.get("/api/Bio", async (req, res) => {
      const bio = await this.dataService.getBio();
      var bioJSON = JSON.parse(JSON.stringify(bio));

      res.send(bioJSON);
    });

    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}
