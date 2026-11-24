import test from "@playwright/test";

test("To learn CSS selector for leaftap", async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main");
await page.waitForTimeout(2000);

//ENTER USERNAME
//await page.locator('input[id="username"]').fill('democsr2');
//or first match
//await page.locator('input').first().fill('democsr2');
//or index based
//await page.locator('input').nth(0).fill('democsr2');
//or parent child relation for first match
//await page.locator('p>label').fill('democsr2');
//or sibling relation for first match
await page.locator('label+input').nth(0).fill('democsr2');

//ENTER PASSWORD
//use # instead of mentioning id in locator
//await page.locator('#password').fill('crmsfa');
//or parent child relation for other matches using nth index
//await page.locator('p label').nth(0).fill('crmsfa');
//or sibling relation for other matches using nth index
await page.locator('label~input').nth(0).fill('crmsfa');

//CLICK LOGIN BUTTON
//await page.locator('[class="decorativeSubmit"]').click();
//or use . instead of mentioning class in locator
//await page.locator('.decorativeSubmit').click();
//or last match
//await page.locator('input').last().click();
//or parent child relation for other matches using nth index
await page.locator('p input').nth(2).click();

});

/*test.only("To learn CSS selector for salesforce", async ({page}) => {

await page.goto("https://login.salesforce.com/?locale=in");
await page.waitForTimeout(2000);
await page.locator('[class="slds-input"]').fill('saranpvino@gmail.com');
await page.locator('[type="button"]').click();
await page.locator('[name="password"]').fill('Immortal#100');
await page.locator('[aria-pressed="false"]').click();
await page.waitForTimeout(5000);

});*/