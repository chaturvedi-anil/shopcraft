import app from "./app";

const startServer = async () => {
  app.listen(5000, () => {
    console.info(`INFO : express server is listing on port ${5000} `);
  });
};

startServer().catch((err) => {
  console.error(`ERORR : server failed to start`, err);
  process.exit(1);
});
