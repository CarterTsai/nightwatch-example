Nightwatch Exmpale
==================

### MAC

#### Install homebrew services

```
$> brew tap homebrew/services
```

#### Install Selenium-Server

```
$> brew install homebrew/versions/selenium-server-standalone245
```

#### Install Chrome Driver

```
$> brew install chromedriver
```

#### Start Selenium-Server

```
$> brew services lis
```

```
$> brew services start selenium-server-standalone245
```

### Install Nightwatch

```
$> sudo npm -g nightwatch
```

### Run Test
```
$> nightwatch
```
