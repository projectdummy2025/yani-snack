// Define target server port number
const serverPort = 3215;

// Initialize Bun HTTP server instance
const serverInstance = Bun.serve({
  port: serverPort,
  fetch(request: Request): Response {
    // Parse requested location URL
    const requestLocation = new URL(request.url);
    const pathName = requestLocation.pathname;

    // Serve main index page for root route
    if (pathName === "/") {
      return new Response(Bun.file("index.html"));
    }

    // Resolve static asset filepath
    const assetPath = "." + pathName;
    const targetFile = Bun.file(assetPath);

    // Serve existing static file if found
    if (targetFile.size > 0) {
      return new Response(targetFile);
    }

    // Fallback to main index page
    return new Response(Bun.file("index.html"));
  },
});

// Format current timestamp string for logging
const currentTimestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

// Print startup confirmation message
console.log(`(${currentTimestamp}) Server running on http://localhost:${serverInstance.port}`);

export default serverInstance;
