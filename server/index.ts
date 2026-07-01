import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const nodeEnv = process.env.NODE_ENV || "development";
  const port = Number(process.env.PORT || 3000);

  const dbHost = process.env.DB_HOST || "mongodb";
  const dbPort = process.env.DB_PORT || "27017";
  const dbName = process.env.DB_NAME || "my-content";
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;

  console.log("NODE_ENV:", nodeEnv);
  console.log("PORT:", port);
  console.log("DB_HOST:", dbHost);
  console.log("DB_PORT:", dbPort);
  console.log("DB_NAME:", dbName);
  console.log("DB_USER exists:", Boolean(dbUser));
  console.log("DB_PASSWORD exists:", Boolean(dbPassword));

  if (dbUser && dbPassword) {
    const mongoUrl = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

    try {
      const client = new MongoClient(mongoUrl);
      await client.connect();
      console.log("MongoDB connection successful");
      await client.close();
    } catch (error) {
      console.error("MongoDB connection failed:", error);
    }
  } else {
    console.log("MongoDB credentials not provided. Skipping DB connection.");
  }

  const staticPath =
    nodeEnv === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
