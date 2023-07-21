# Companies House KPI Monitoring Proxy

This creates a proxy to the Companies House CompanyProfile API to fix an issue in KPI Monitoring software where it doesn't return the response from the API if it is a HTTP error code. It simply replaces HTTP error codes with HTTP success codes.

## Build & Deploy

###### 1. Clone the GitHub repository
First, make sure you have Git installed on your machine. Open a terminal or command prompt and use the following command to clone the repository:

```bash
git clone https://github.com/PeterHolcroft/CompaniesHouse-KPIMonitoring-Proxy
```
###### 2. Build the project
Change into the cloned repository's directory then use npm (Node Package Manager) to install the project dependencies:

```bat
npm install
```
###### 3. Deploy to fly.io
fly.io is a platform for running applications globally. You'll need to sign up for an account on their website and have their CLI tool installed. Follow the instructions on the fly.io website to set up your account and install the CLI.

Once you have the CLI installed, use it to deploy your application:

```bat
flyctl init      # Initializes your project on fly.io
flyctl deploy    # Deploys your application to fly.io
```

###### 4. Update KPI Monitoring with the new URL
After the deployment is complete, you can replace the URL `https://api.company-information.service.gov.uk` in the KPI Monitoring Web API properties with the URL provided by fly.io.

