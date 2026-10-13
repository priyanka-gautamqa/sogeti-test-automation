import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

//Verify Quality Engineering page with Heading

test('TC 001', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.acceptPopups();
    await homePage.hoverOverServices();
    await homePage.navigateToQualityEngineeringPage();
    await expect(page).toHaveURL(/quality-engineering/);
    await expect(homePage.qualityEngineeringLink).toBeVisible();
    await expect(homePage.qualityEngineeringBanner).toBeVisible();

});