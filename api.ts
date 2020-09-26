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
      const devBlogs = await this.dataService.getDevBlogs();
      var devBlogsJSON = JSON.parse(JSON.stringify(devBlogs));

      res.send(devBlogsJSON);
    });

    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}
