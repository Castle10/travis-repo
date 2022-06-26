const testName = process.env.Name;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${testName} rocks!`);
    await sleep(5000);
  }
}

main();
