export default async function sleepFunction(ms) {
    // Time in ms
    return new Promise(r => setTimeout(r, ms));
};
