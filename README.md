## Trailing Slashes

This is a minified reproduction that demonstrates how Gatsby and Gatsby Cloud should handle trailing slashes at the routing/CDN layer.

## Test Plan

- Go to /about-us/ and validate a 200 response
- Go to /about-us and validate a 301 response pointing to /about-us/
- Go to <root domain> (e.g. https://gatsbyjs.com) and validate that that is a 301 redirect to the trailing slash domain

### Additional Test Cases

Gatsby produces html files that are routed to the "trailing slash" URL, so please validate that:

- /about-us/index.html is a 301 redirect to /about-us/
- /index.html is a 301 redirect to / (root domain)
