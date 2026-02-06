import blogApp from "./app.js";
import appConfig from "./config/env.js";

let shutting_down = false;

async function startServer() {
    const server = blogApp.listen(appConfig.PORT, () => {
        console.log(`Server Listening on PORT: ${appConfig.PORT}`);
    });
    
    const gracefulShutdown = () => {
        if(shutting_down) {
            return;
        };
        console.log("Shutting down graefully...");
        shutting_down = true;
        server.close(async() => {
            process.exit(0);
        });
    };

    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);
};

startServer().catch(err => {
    console.error("Failed to start server: ", err);
    process.exit(1);
});



