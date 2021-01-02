---
layout: lesson
---

# Workshop 1: How the Web Works

## Connecting to our Our Experiences

While this workshop will be more of a lecture style than interactive, let's start off with connecting some fundamentals about the web to your lived experiences as a user of it!

<div class="try-it-new">
  <h2>Share Out</h2>
  <p>What are all the devices you have accessed the internet with?</p>  
</div>

## Client

All of the devices you just listed out will be referred to as **clients** moving forward. You as the human are not the client, but the _device_ is.
<br><br>

<div class="try-it-new">
  <h2>Share Out</h2>
  <p>What are some of the websites or apps you regularly visit?</p>  
</div>

## Server

All of those websites and apps you just listed are tied to a certain location, and at that location, they have a **server** that holds all the information that that site may potentially give you.
<br><br>

## HTTP

You've probably seen `http` and `https` a million times. It stand for **hypertext transfer protocol** and it's the set of rules that defines how clients and servers can talk to each other. The `s` in `https` stands for secure; `https` is an extension of `http` and is used for secure communication over the web.

**Why do we need it?** Imagine this: if Amazon and Etsy had totally different ways of communicating with a client, how would the client know how to communicate or what to expect? Maybe it could be figured out, but that would likely take much more (uneccesary) time for our pages to load. HTTP keeps these processes uniform across the web, which benefits everyone.

## Request Response Cycle

The **request-response cycle** is the process of the clients and servers talking to each other. It is best understood when we can diagram it out. We'll start with a base diagram:

[insert KWK diagram with client and server and arrows]

### How does the client know which server to send a request to?

Explain IP and DNS

### What should and must be in a request?

### What does the server do once it gets a request?

### What should and must be in a response?

### What does the client do with the response?


## Back-End and Front-End Engineering

You may be wondering how Back-End and Front-End Engineering fit into all of this, or you may have some clues. 

We will go into detail in each of the upcoming Lunch 'n Learn Workshops, but at a high level, we'll end with this:

- **Front-End Engineering** involves writing all of the code on the client side. It presents the data to the user, packages up the requests and makes the requests. Once a response is sent back from the server, Front-End code "unpacks" the response and displays the relevant information to the user.
- **Back-End Engineering** involves writing all of the code on the server side. It receives the request, communicates with a database if necessary, then packages up a response and sends it to the client.
<br>

## Vocabulary
- client 
- server
- URL
- request
- response
- status code
- HTTP
- IP Address
- DNS Lookup
- Database
- authorization/authentication

