const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signInButton = page.locator('#signInBtn');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('Test');
    await password.fill('Test');
    await signInButton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await password.fill('');
    await password.fill('learning');
    await signInButton.click();


});

test('UI Controls', async ({ page }) => {
    await page.goto('https://google.com');
    const title = await page.title();
    console.log(await page.title());
    await expect(title).toHaveTitle('Google');
});