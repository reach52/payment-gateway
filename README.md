<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

-->

## About The Project

Reach52 payment gateway for all of its core application

### Built With

-   [Express.js](https://expressjs.com/)
-   [MongoDB Database](https://www.mongodb.com/)
-   [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing)
    -   [Mocha](https://mochajs.org/)
    -   [Chai](https://www.chaijs.com/)
    -   [Supertest](https://www.npmjs.com/package/supertest)
-   [CI/CD](https://en.wikipedia.org/wiki/CI/CD)
    -   [Jenkins](https://www.jenkins.io/)
-   [Swagger Documentation](https://swagger.io/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Before anything else lets first install yarn

-   npm
    ```sh
    npm install yarn@latest -g
    ```
-   Install mongoDB LTS or use mongo Atlas
-   Install Jenkins (optional)

### Installation

1. Clone the repo
    ```sh
    git clone https://reach52-xin@bitbucket.org/reach52/reach52-payment-gateway.git
    ```
2. Install yarn packages
    ```sh
    yarn install
    ```

## Usage

We have 3 types of environment test, development, production

1. Development env. enter required configuration in `development.json` under `config` folder
   **development.json**
    ```sh
       "server": "development",
       "port": "",
       "mongoURL": "",
       "secretKey": ""
    ```
    **run**
    ```sh
    yarn dev
    ```
2. Test env. enter required configuration in `test.json` under `config` folder
   **test.json**
    ```sh
       "server": "test",
       "port": "",
       "mongoURL": "",
       "secretKey": ""
    ```
    **run**
    ```sh
    yarn test
    ```
    Using **[Mochawesome](https://www.npmjs.com/package/mochawesome) test report generator**
    ```sh
    yarn report
    ```
3. For Production create `production.json` under `config` folder and enter required configuration
   **producation.json**
    ```sh
       "server": "production",
       "port": "",
       "mongoURL": "",
       "secretKey": ""
    ```
    **run**
    ```sh
    yarn prod
    ```

## Roadmap

See the [open issues](https://bitbucket.org/reach52/reach52-payment-gateway/jira?statuses=new&statuses=indeterminate&sort=-updated&page=1) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Robert Janagap - [@Linkedin](https://www.linkedin.com/in/robert-janagap/)

Project Link: [https://bitbucket.org/reach52/reach52-payment-gateway/src/master/](https://bitbucket.org/reach52/reach52-payment-gateway/src/master/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!--
[contributors-shield]: https://img.shields.io/github/contributors/Robert-Janagap/express-app-bootstrap
[contributors-url]: https://github.com/Robert-Janagap/express-app-bootstrap/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Robert-Janagap/express-app-bootstrap
[forks-url]: https://github.com/Robert-Janagap/express-app-bootstrap/network/members
[stars-shield]: https://img.shields.io/github/stars/Robert-Janagap/express-app-bootstrap
[stars-url]: https://github.com/Robert-Janagap/express-app-bootstrap/stargazers
[issues-shield]: https://img.shields.io/github/issues/Robert-Janagap/express-app-bootstrap
[issues-url]: https://github.com/Robert-Janagap/express-app-bootstrap/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://github.com/Robert-Janagap/express-app-bootstrap/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/robert-janagap/
-->
