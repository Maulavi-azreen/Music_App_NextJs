// lib/mongodb.js (or wherever you keep your connection logic)
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

export async function connect() {
  // Check if MONGO_URL is defined
  if (!MONGO_URL) {
    throw new Error("MONGO_URL environment variable is not defined");
  }

  // If already connected, return early to avoid multiple connections
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return mongoose.connection;
  }

  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "Music_App", // Explicitly specify the database
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1); // Exit with failure code
    });

    connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    return connection;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error; // Let the caller handle the error
  }
}

// Optional: Export a function to close the connection (useful for testing or cleanup)
export async function disconnect() {
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
}