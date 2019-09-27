Hello, Caspar team!

This test was written on mac os platform using JS+Nightwatch combination. Config file is already added, all you need is to set up a nightwatch environment on your PC.

To run this test please follow the steps:
1. Download this project to your PC
2. Install Node.js (proceed to https://nodejs.org/en/ and download suitable file, than just follow installer instructions) in order to run JS environment on your PC
3. Install Nightwatch to test folder. Open automationCaspar/ folder in terminal. Run 'npm install nightwatch' command there
4. Be sure your nightwatch.js file contains correct navigation to runner.js file which appears after nightwatch is installed, for me it is: require('../automationCaspar/node_modules/nightwatch/bin/runner.js');
5. Being in automationCaspar/ folder in terminal, run this command to start test: node node_modules/nightwatch/bin/nightwatch

If somehow this steps are incorrect please follow instructions from this article to set it up correctly: https://mailosaur.com/blog/2017/01/nightwatch-get-started-automation/

This should also work in Windows environment. 
