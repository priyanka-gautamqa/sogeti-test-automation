import { Page, Locator } from '@playwright/test';
import { ContactFormData } from '../data/contactFormData';

export class ContactPage {
    page: Page;
    formTitle: Locator;
    contactForm: Locator;
    purposeOfContactDropdown: Locator;
    positionLevelDropdown: Locator;
    countryDropdown: Locator;
    firstName: Locator;
    lastName: Locator;
    jobTitle: Locator;
    email: Locator;
    phoneNumber: Locator;
    company: Locator;
    checkBox: Locator;
    submitSlider: Locator;



    constructor(page: Page) {
        this.page = page;
        this.formTitle = page.getByRole('heading', { name: 'Get in touch', level: 2 });

        //9 matches were there hence using "visible" as only one form is visible on the page.
        this.contactForm = page.locator('form.mf_form__form:visible');

        /*  
            this.purposeOfContact = this.contactForm.getByLabel('Purpose of contact'); => This Was giving two matches because of hidden input field for "Other Purpose of contact" which is not visible on the page.
            Possible Solutions : 
            1. Create Xpath or CSS selector for the dropdown and use that to locate the element.
            2. Use getByRole('combobox', { name: 'Purpose of contact' }) to locate the dropdown. This will only return the visible dropdown and ignore the hidden input field.
            3. Use getByLabel('Purpose of contact') and then filter the results to only include visible elements. This can be done using the .filter() method and checking for the visibility of each element.
                    this.purposeOfContact = this.contactForm.getByLabel('Purpose of contact').filter({ visible: true });

            I have used option 2 here as it is more straightforward and less error-prone.
            1) <select ... data-key="purpose_of_contact">            → role: combobox
            2) <input aria-label="Enter other Purpose of contact">   → role: textbox
            getByLabel ignores the role, so it found both. getByRole('combobox', ...) asks for a specific role, so the text box is excluded:
        */

        this.purposeOfContactDropdown = this.contactForm.getByRole('combobox', { name: 'Purpose of contact' });
        this.positionLevelDropdown = this.contactForm.getByRole('combobox', { name: 'Position/Level' });
        this.countryDropdown = this.contactForm.getByRole('combobox', { name: 'Country' });

        this.firstName = this.contactForm.getByLabel('First name');
        this.lastName = this.contactForm.getByLabel('Last name');
        this.jobTitle = this.contactForm.getByLabel('Job Title');
        this.email = this.contactForm.getByLabel('E-mail address');
        this.company = this.contactForm.getByLabel('Company');
        this.phoneNumber = this.contactForm.getByLabel('Phone number');

        this.checkBox = this.contactForm.getByRole('checkbox');
        this.submitSlider = this.contactForm.locator('input[type="range"]');

    }

    //  selects an option from a dropdown
    async selectOption(dropdown: Locator, value: string) {
        await dropdown.selectOption(value);
    }

    //  fills the complete form from a data object
    async fillContactForm(data: ContactFormData) {

        //Scroll into view if needed before filling the form
        await this.contactForm.scrollIntoViewIfNeeded();

        await this.selectOption(this.purposeOfContactDropdown, data.purpose);
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.jobTitle.fill(data.jobTitle);
        await this.selectOption(this.positionLevelDropdown, data.position);
        await this.email.fill(data.email);
        await this.selectOption(this.countryDropdown, data.country);
        await this.phoneNumber.fill(data.phoneNumber);
        await this.company.fill(data.company);
    }

    async clickCheckbox() {
        await this.checkBox.check();
    }
    async clickSubmitButton() {

        /*  DOM : <input type="range"> with min and max value
        
            fill() works on a range input
        
            Playwright treats <input type="range"> as an input type it can set directly. For range (and also date, time, color), fill() doesn’t type characters.
            It does this:
            Checks that the value is valid for the input (a number between min and max, here 0 to 100).
            Sets input.value = '100'.
            Fires an input event and then a change event. 
            
            */
            //await contactPage.submitSlider.fill('100');
    }


}