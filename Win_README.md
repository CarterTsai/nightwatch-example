Install nightwatch on windwos Window 10
====================================

### Install Node.js
Go to http://nodejs.org/ get https://nodejs.org/dist/v6.3.1/node-v6.3.1-x64.msi 

### Install nightwatch.js

### Get Selenium Server
* Download Page
```
https://selenium-release.storage.googleapis.com/index.html
```

* Downoload Selenium-server-standalone-2.53.1
```
https://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.1.jar
```

* Create Selenium Directory
```
1. Make directory C:\selenium
2. Put selenium-server-standalone-2.53.1.jar to C:\selenium
```

* Download IEDriverServer
Don't Download IEDriverServer_x64_2.53.0.zip, beacuse that is very slow.
```
https://selenium-release.storage.googleapis.com/2.53/IEDriverServer_Win32_2.53.0.zip
```
    1. extract zip and put ***IEDriverServer_Win32_2.53.exe*** to C:\selenium and rename to ***IEDriverServer.exe***

* Download EdgeDriver
```
https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
```
Because my EdgeHTML version is 13.10586, So Download ***Release 10586***
```
https://download.microsoft.com/download/C/0/7/C07EBF21-5305-4EC8-83B1-A6FCC8F93F45/MicrosoftWebDriver.msi
```

    1. Install MicrosoftWebDriver.msi to C:\selenium

* Download Chromedriver
```
http://chromedriver.storage.googleapis.com/2.23/chromedriver_win32.zip
```
    1. extract zip and put ***chromedriver_win32.exe*** to C:\selenium and rename to ***chromedriver.exe***

* Download Geckodriver (Firefox)
```
https://github.com/mozilla/geckodriver/releases
https://github.com/mozilla/geckodriver/releases/download/v0.10.0/geckodriver-v0.10.0-win64.zip
```
    1. extract zip and put ***geckodriver-v0.10.0-win64.exe*** to C:\selenium and rename to ***geckodriver.exe***


