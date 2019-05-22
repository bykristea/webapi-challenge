## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Mention two parts of Express that you learned about this week.
        A: Routing: lets us select the url for a request handler to run on. 
        B: Error Handling: Express can catch and process errors by calling next().

- [ ] Describe Middleware? Middle ware operates under the hood, is an array of functions that will be called in the order you put them into the code. You need to .use to opt in to using middleware

- [ ] Describe a Resource?
    A: Resource is the content on your server. In our challenges the resource would have been the list of hobbits, or messages. --data

- [ ] What can the API return to help clients know if a request was successful?
        A: Application Programming Interface: part of the server that receives and sends responses. Your server can talk to a third=party server, using API requests. Weather API, get weather on your site, without leaving etc.

        --can return a success code 200 

- [ ] How can we partition our application into sub-applications?
        A: Using Express Routers. Break out your code, so server.js would just have the server listen, routes.js would handle routes, endpoints on their own and so on. 