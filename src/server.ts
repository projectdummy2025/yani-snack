import { createStaticHandler } from './handlers/staticHandler';

const currentTimestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);

const serverInstance = createStaticHandler();

console.log(`(${currentTimestamp}) Server running on http://localhost:${serverInstance.port}`);

export default serverInstance;
