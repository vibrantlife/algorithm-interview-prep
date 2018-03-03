# Full Stack Developer Interview Questions 

## Web 

* What is Hypertext Transfer Protocol (HTTP)?
	* HTTP is a networking protocol for distributed, collaborative, hypermedia information systems. 

* What happens when you type a URL in the browser and press enter? 
	1. Enter www.exampleurl.com
	2. The browsers checks the cache for a DNS record to find the corresponding IP adress of exampleurl.com
		* DNS (Domain Name System) is a database with URLs and their IP addresses. The main purpose of the DNS is for human friendly navigation. 

* Explain the purpose of each of the HTTP request types when used with a RESTful web service 
	* GET: retrieves data from the server 
	* POST: Sends data to the server for a new entity. It is often used when uploading a file or submitting a completed web form. 
	* PUT: Similar to POST, but used to replace an existing entity. 
	* PATCH: Similar to PUT, but used to update only certain fields within an existing entity.
	* DELETE: Removes data from the server. 
	* TRACE: Provides a means to test what a machine along the network path receives when a request is made. As such, it simply returns what was sent. 
	* OPTIONS: Allows a client to request information about the rquest methods supported by a service. The relevant response header is Allow and it simply lists the supported methods. 
	* HEAD: Same as GET, but only returns the response headers (not body)
	* CONNECT: Primarily used to establish a network connection to a resource. Once established, the response sends a 200 status code and a 'connection established' message. 




Resources: 
[https://www.toptal.com/web/interview-questions]
[https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a]
