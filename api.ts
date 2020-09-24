import express from "express";
import { DataService } from "./data-service";
const app = express();

export class API {
  

  setupRoutes(): void {

    app.get("/api/GetDevBlogs", (req, res) => {
      var devBlogs: string[] = DataService.getDevBlogs();
      res.send(devBlogs);
    });

    app.get("/api/notes", (req, res) => {});

    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}
