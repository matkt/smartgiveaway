[![smartgiveaway Actions Status](https://github.com/abdelhamidbakhta/smartgiveaway/workflows/smartgiveaway-ci/badge.svg)](https://github.com/abdelhamidbakhta/smartgiveaway/actions)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/abdelhamidbakhta/smartgiveaway/blob/master/LICENSE)
[![sonar-quality-gate][sonar-quality-gate]][sonar-url] [![sonar-coverage][sonar-coverage]][sonar-url] [![sonar-bugs][sonar-bugs]][sonar-url] [![sonar-vulnerabilities][sonar-vulnerabilities]][sonar-url]

# Smart Giveaway
[Build On XDai: Applications & Bridges GR8 Hackathon](https://gitcoin.co/issue/xdaichain/site/9/100024347)

As part of the Gitcoin Hackathon we are building a Giveaway platform (similar to twitter giveaways).

This is a Proof Of Concept aiming to use `xDai` technology to build innovative features on top of an Ethereum smart contract solution.

## Architecture

We have 3 main components:
- SmartGiveaway smart contract
- Front-End web application
- Back-End service

### SmartGiveAway smart contract

Project is using [OpenZeppelin CLI](https://docs.openzeppelin.com/cli/2.7/) and is fully compatible with Truffle based projects.

#### Compile

```shell script
npx oz compile
```

### Front-End web application

#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
# Static site is generate to: ./dist
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Back-End service

[sonar-url]: https://sonarcloud.io/dashboard?id=abdelhamidbakhta_smartgiveaway
[sonar-quality-gate]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_smartgiveaway&metric=alert_status
[sonar-coverage]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_smartgiveaway&metric=coverage
[sonar-bugs]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_smartgiveaway&metric=bugs
[sonar-vulnerabilities]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_smartgiveaway&metric=vulnerabilities