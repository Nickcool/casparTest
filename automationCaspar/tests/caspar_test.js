	var login1 = 'IXE0865';
	var pass1 = '78350619';

module.exports = {
  'Login Caspar user' : function (browser) {
    browser
   	  .windowMaximize()
      .url('https://beta.caspar-health.com/en/#/user/sign_in')
      .waitForElementVisible('#mat-input-0')
      .setValue('input[name="login"]', login1)
	  .setValue('input[name="password"]', pass1)
      .waitForElementVisible('body > app-root > div > ui-view > ng-component > ui-view > app-sign-in > div > div.p-2.my-auto > form > div:nth-child(3) > div > button', 3000)
      .click('body > app-root > div > ui-view > ng-component > ui-view > app-sign-in > div > div.p-2.my-auto > form > div:nth-child(3) > div > button')
      .waitForElementVisible('body > app-root > div > ui-view > ng-component > ui-view > app-therapist-dashboard', 3000)
      .assert.urlContains('therapist/dashboard/my-patients')
},

	'Create new user': function (browser) {
	browser
	  .click('body > app-root > div > ui-view > ng-component > ui-view > app-therapist-dashboard > app-stats-display > div > div:nth-child(1) > button')
	  .waitForElementVisible('body > app-root > div > ui-view > ng-component > ui-view > app-new-patient > div', 3000)
	  // fill in user data
	  .setValue('input[formcontrolname="first_name"]', 'Nick')
	  .setValue('input[formcontrolname="last_name"]', 'Ponomarov')
	  .click('#mat-select-5 > div > div.mat-select-arrow-wrapper > div')
	  .click('#mat-option-27')
	  .click('#mat-select-6 > div > div.mat-select-arrow-wrapper > div')
	  .click('#mat-option-60')
	  .click('#mat-select-7 > div > div.mat-select-arrow-wrapper > div')
	  .click('#mat-option-92')
	  .click('#mat-select-4 > div > div.mat-select-arrow-wrapper > div')
	  .click('#mat-option-24')
	  .execute('window.scrollTo(0,document.body.scrollHeight)')	  
	  .click('#mat-select-8 > div > div.mat-select-arrow-wrapper > div')
	  .click('#mat-option-382')
	  .waitForElementVisible('body > app-root > div > ui-view > ng-component > ui-view > app-new-patient > div > div > app-profile-form > form > app-footer > button')
	  .click('body > app-root > div > ui-view > ng-component > ui-view > app-new-patient > div > div > app-profile-form > form > app-footer > button')
	  // save new user's login and password to a variable
	  .waitForElementPresent('#mat-dialog-0 > app-new-user-dialog > div.justify-content-between.mat-dialog-actions > button.card-action-button.duplicate.mat-icon-button > span > mat-icon')
	  .getText('#mat-dialog-0 > app-new-user-dialog > div.mat-dialog-content > div.d-flex.justify-content-between.mt-3 > div:nth-child(3) > div:nth-child(2)', function (result){
		login1 = result.value;
		console.log(login1);
		})
	  .getText('#mat-dialog-0 > app-new-user-dialog > div.mat-dialog-content > div.d-flex.justify-content-between.mt-3 > div:nth-child(4) > div:nth-child(2)', function (result){
		pass1 = result.value;
		console.log(pass1);
		})
	  .click('#mat-dialog-0 > app-new-user-dialog > div.justify-content-between.mat-dialog-actions > button.mat-button')
	  .click('#mobile-menu > ui-view > app-therapist-sidebar > div > div:nth-child(9) > div:nth-child(2)')
      .waitForElementVisible('body')
	  .assert.urlContains('en/#/user/sign_in')
},
	
	'Login new user' : function (browser) {
	browser
      .perform(function () {
			browser.setValue('input[name="login"]', login1);
		})
      .perform(function () {
			browser.setValue('input[name="password"]', pass1);
		})
      .waitForElementVisible('body > app-root > div > ui-view > ng-component > ui-view > app-sign-in > div > div.p-2.my-auto > form > div:nth-child(3) > div > button', 3000)
      .click('body > app-root > div > ui-view > ng-component > ui-view > app-sign-in > div > div.p-2.my-auto > form > div:nth-child(3) > div > button')
      .waitForElementVisible('#mat-checkbox-1')
      .assert.urlContains('user/terms_of_service?reset=true')
      .end();
  }
};
