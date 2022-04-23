# IBM-Hackathon

## Project Outline
We will be implementing an app that can show threat intelligence information based on an IP address or optionally a domain name supplied to the app.

We will get threat intelligence from one or multiple public APIs available for free on the web. Combining this data, we can get a clearer picture into the threat profile of an address.

### Scenario
To get an idea of what this app should do, we will walk through a scenario. You are a security analyst looking to learn more about a suspicious IP address.

You visit a website (the website we will be making today) and input a suspicious IP address.
The website responds by presenting information about that IP address, such as:
-IP address location
-Is the IP address blacklisted?
-Threat actors that may be using the IP address.
-And more...

### Requirements
A way to input an IP address.
A back-end you can call into to get more information about an IP address.
UI to display the results in a well-structured way.
Example UI
Here is a very basic example of a UI that performs this functionality. This has no styling, doesn't parse the result into something pretty, and doesn't use real data, but it should give you an idea.

### Example Information Sources
#### INFO
The Back-End Example App uses AbuseIPDB as an example on how to use these web APIs in your back-end.

[AbuseIPDB](https://www.abuseipdb.com/)

[Cisco Umbrella](http://s3-us-west-1.amazonaws.com/umbrella-static/index.html)

You can find more data sources on [GitHub](https://github.com/hslatman/awesome-threat-intelligence).

##### Things to Think About
- Secret management - How do I store the API keys in a secure way?
- CORS - Cross Origin Resource Sharing. By default browsers will not allow a website to access resources on a different website. This is a problem when we are calling third party APIs. This is handled for you in the back-end example app.
- Data normalization - How do I compile all these data sources to a single format?
- Calling Web APIs - What library can I use to simplify calling Web APIs?
