import { Page, Locator } from '@playwright/test';

export class HomePage {

    page: Page;
    servicesElement: Locator;
    contactUsElement: Locator;
    qualityEngineeringElement: Locator;

    qualityEngineeringLink: Locator;
    qualityEngineeringBanner: Locator;

    locationPopupAcceptButton: Locator;
    cookieConsentPopupAcceptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.servicesElement = page
            .locator('#menu-main-desktop')
            .getByRole('link', { name: 'Services menu', exact: true });

        this.contactUsElement = page.getByRole('link', { name: 'Contact us', exact: true });
        this.qualityEngineeringElement = page
            .locator('.menu-l1')
            .getByRole('link', { name: 'Quality Engineering menu', exact: true });


        this.qualityEngineeringLink = page
            .locator('.sub-navigation__list')
            .locator('a[href$="/services/quality-engineering/"]');

        this.qualityEngineeringBanner = page
            .locator('.banner-content-inset')
            .getByText('Quality Engineering', { exact: true });

        this.locationPopupAcceptButton = page.locator('#geoRedirectStayBtn');
        this.cookieConsentPopupAcceptButton = page.locator('#accept');


    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async acceptPopups() {
        await this.locationPopupAcceptButton.click();
        await this.cookieConsentPopupAcceptButton.click();

    }

    async hoverOverServices() {
        await this.servicesElement.hover();

    }

    async navigateToQualityEngineeringPage() {
        console.log(await this.qualityEngineeringElement.count());
        await this.qualityEngineeringElement.click();
    }


}