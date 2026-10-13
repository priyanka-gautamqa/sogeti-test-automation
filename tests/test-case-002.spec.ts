import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { validContact } from '../data/contactFormData';

//Verify Contact us - user form

test('TC 002', async ({ page }) => {

    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);
    await homePage.navigateToHomePage();
    await homePage.acceptPopups();
    await homePage.navigateToContactUsPage();
    await expect(page).toHaveURL(/contact-us/);

    await expect(contactPage.formTitle).toBeVisible();
    await expect(contactPage.formTitle).toHaveText('Get in touch');

    await contactPage.fillContactForm(validContact);

    await contactPage.clickCheckbox();
    await expect(contactPage.checkBox).toBeChecked();

    //To avoid submitting the form with test user - checking the locator correctness
    await expect(contactPage.submitSlider).toHaveCount(1);

});
