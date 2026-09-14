import { serverPort } from '../config/serverConfig';

export function createStaticHandler() {
  return {
    port: serverPort,
    fetch(request: Request): Response | Promise<Response> {
      const requestLocation = new URL(request.url);
      const pathName = requestLocation.pathname;

      if (pathName === '/') {
        return new Response(Bun.file('./dist/index.html'));
      }

      const assetPath = './dist' + pathName;
      const targetFile = Bun.file(assetPath);

      if (targetFile.size > 0) {
        return new Response(targetFile);
      }

      return new Response(Bun.file('./dist/index.html'));
    },
  };
}
