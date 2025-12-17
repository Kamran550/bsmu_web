module.exports = {
    apps: [
      {
        name: "bsmu-next",
        script: "node_modules/next/dist/bin/next",
        args: "start -p 3000",
        cwd: "/home/bsmu/htdocs/bsmu.edu.rs",
        interpreter: "node",
        env: {
          NODE_ENV: "production",
          PORT: 3000
        }
      }
    ]
  };
  