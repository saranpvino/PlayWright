import { chromium, test } from "@playwright/test";

//This test can be run from either root directory or direct directory of this file
test("To launch a browser", async () => {

//In channel, we can mention chrome/edge but chromium is must to launch both
//const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });
let browserInstance = await chromium.launch({ headless: false, channel: "msedge" });

//channel is not required for webkit and firefox
//let browserInstance = await webkit.launch({ headless: false});
//let browserInstance = await firefox.launch({ headless: false});

let browserContext = await browserInstance.newContext();

let page = await browserContext.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main");
await page.waitForTimeout(2000);

});


//page fixture - this should be run from root directory(npx playwright test filename.spec.ts --headed) as it takes config details from playwright.config.ts
//test.only will execute only this test if you run from root directory(with headed mode to see browser)

test.only("To launch a browser using page fixture", async ({page}) => {

await page.goto("https://www.google.com");
await page.waitForTimeout(2000);

});