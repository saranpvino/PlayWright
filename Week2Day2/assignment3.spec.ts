import { chromium, test } from "@playwright/test";

//This test can be run from either root directory or direct directory of this file
test("To launch two web applications in two different browsersr", async () => {

let edgeInstance = await chromium.launch({ headless: false, channel: "msedge" });
let edgeContext = await edgeInstance.newContext();
let edgePage = await edgeContext.newPage();
await edgePage.goto("https://www.redbus.in");
console.log(await edgePage.title());
console.log(edgePage.url());

let chromeInstance = await chromium.launch({ headless: false, channel: "chrome"});
let chromeContext = await chromeInstance.newContext();
let chromePage = await chromeContext.newPage();
await chromePage.goto("https://www.flipkart.com");
console.log(await chromePage.title());
console.log(chromePage.url());
//wait and close browsers
await edgePage.waitForTimeout(5000);
await chromePage.waitForTimeout(5000);
await edgeInstance.close();
await chromeInstance.close();
});