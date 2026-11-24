// Bu fayl build ilə birlikdə hər release qovluğuna kopyalanır (server.js-in yanına)
module.exports = {
  apps: [
    {
      name: "bsmu-next",
      script: "server.js",
      cwd: __dirname,
      interpreter: "node",
      max_memory_restart: "350M",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        // Yalnız lokal: tətbiqə internetdən birbaşa yox, nginx vasitəsilə çatılır
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
