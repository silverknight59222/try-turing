---
layout: lesson
---

# Workshop 2: Back-End Engineering

<a href="../">Back to Series Page</a>

## Welcome Back 👋

We'll start at 12:00MT again, and have a mixx of screen sharing this content, iPad diagrams, and some conversations!

<br>
<br>

## What is Back-End Engineering?

>We will use the terms 'engineering', 'programming', 'coding' and 'developing' interchangably!

In a broad sense, Back-End engineering is concerned with managing and manipulating ​data​ (aka information).

Consider a website like Instacart. When we view an Instacart page, what are the parts we actually care about? Why did we come here in the first place? In the screenshot below, the blue boxes represent examples of **dynamic data** that had to come from somewhere. That "somewhere" is what Back-End engineering is concerned with.

<img src="{{ site.url }}/assets/images/instacart.png" alt="Instacart.com screenshot">

When we talk about Back-End engineering, we're often thinking of the programming tasks involved in making this possible:

- Storing data and accessing it later
- Verifying that data is accurate
- Manipulating, analyzing, and/or calculating data
- Making sure data can be retrieved quickly and easily

<div class="try-it-new">
  <h2>Share Out</h2>
  <p>What is an app you use that stores data? Would it be helpful to you if it didn't have the ability to store your data?</p>  
</div>
<br>

## What technologies are used on the Back-End?

**Programming Languages** are the way we communicate instructions to the computer. Just like English, Spanish and Arabic, etc., it is the main form of communication. 

Most programming languages are built with the same concepts and can effectively _do_ the same thing; but the small implementation details vary from one language to another. This is why it is relatively easy for programmers to learn a new language once they already know how to program.

The example below shows the code to solve a simple problem in Ruby (on the left) and in Python (on the right):

<img class="small-img" src="{{ site.url }}/assets/images/ruby-syntax-1.png" alt="if/else statement in Ruby language">
<img class="small-img" src="{{ site.url }}/assets/images/python-syntax-1.png" alt="if/else statement in Python language">

From the very similar code snippets above, we can identify some small differences:
- Ruby uses a keyword `end` on the last line of code, Python does not
- Python uses the `:` character after lines 3 and 5, Ruby does not
- Python uses the `()` around the statments `age is odd/even`, Ruby does not

While those differences seem small, each character is essential for the respective language.
<br>
<br>

**Frameworks** are built to work in conjuction with a specific language. They provide building blocks and organizational structures that make it easier for developers to start an app, and maintain an app as it gets very large in size.

A framework is kind of like a set of [Lincoln Logs](https://www.google.com/search?q=lincoln+logs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiLg-valJ_lAhVeGTQIHWh1BmkQ_AUIEygC&biw=1440&bih=766). You can think of a framework as providing "pre-cut" pieces of code that you'll need in order to build an application, just like Lincoln Logs provide "pre-cut" pieces wood that you can use to build a tiny house.

A job posting might say, "We are looking for a Ruby on Rails developer" - this means that the company is looking for a developer who will be writing the Ruby language, and using the Rails framework with it. Someone may say, "I'm currently building a Django app" - this means that they are writing Python code and using the Django framework.

Most applications you enjoy as a user were likely built with one _or more_ frameworks! Instagram and Pinterest use Python and Django for their Back-Ends and GitHub and Shopify use Ruby on Rails.
<br>
<br>

**Databases** actually store the data for an application in an organized fashion. The apps, built in language/framework will communicate with the database it's set up to work with, to get and give information.

Some popular database options are: PostgreSQL, MySQL, Oracle Database, MongoDB, and more.

In Back-End development, there are so many languages, frameworks and databases out there, that it can be overwhelming. Some may wonder, "Where do I start? Do I need to learn them ALL?". Rest assured, even though we are working with powerful technologies, learners and developers are still only humans. There is absolutely no way that one programmer could work fluently in all languages and frameworks on a regular basis. As a learner, it's usually best to pick a starting point, internalize the concepts and gain comfort using one set of technologies, then move into another _if_ you're interested to do so!

>At Turing, we have found Ruby to be a beginner friendly programming language that helps learners deeply understand the concepts of programming. Many of our Back-End graduates get their first job out of the program writing code in a different language. They are able to quickly transition to a new language because they've developed such a deep understanding of the core concepts that apply to all languages.

<br>

<div class="try-it-new">
  <h2>Research</h2>
  <p>We may or may not be able to dig up this information, but run a Google search and see if you can find out what language/framework your favorite app was biult with. Then, share out!</p>  
  <p>Example search: <em>what technologies was pinterest backend built with</em></p>
</div>

## What does Back-End code actually _do_?

It's common to understand the utility of what a Back-End is, but still wonder "What type of things are actually written in the code?".

- **Handle HTTP requests from the client.** Back-End code, or a `server` is prepared to handle requests from the client and send back a response. The code will have several paths written out such as "if the client requests the friends list, I will go to the database, ask for the friend list, then send the friend list back in the response"
- **Handle Login and Permissions.** We know that for any app that holds personal data, we have to sign in with a username and password. The Back-End code handles verifying that the user entered the right credentials - this called _authentication_. The Back-End code also determines the levels of permissions a user has. Think about an interface for high school students, parents and teachers to enter and check grades. The students should only be able to view grades, the teachers should be able to enter grades, and the teachers and parents may have a chat feature where they can communicate without the student seeing it. For this to happen, the Back-End code will have to "label" each user with a type, then make sure it only sends back information that a requesting user is permitted to see - this is called _authorization_.
- **Set up automated tasks.** As users of the internet, we benefit (or are annoyed by) tasks on a regular basis. After a user makes a GrubHub order on their computer, their phone will receive a series of text messages updating the user on the order status. After a user has shared their email address, they may receive a promotional email every Tuesday morning. These texts and emails were not manually sent; Back-End code wrote directions to send them off, at a certain time, to a certain list of numbers of email addresses. Once a number or email address is added to the list, it will begin getting the relevant messages.

## How do companies ensure their app is "up and running"?

At one time or another, our favorite app or most essential app, has probably crashed. For a user, ot can be anywhere from incredibly stressful to slightly disappointing. For a company, the consequence is potentially losing a lot of money - both that day and in future business!

There are many people on an engineering and product team who would contribute to making sure this doesn't happen, or at least, when it does happen, things get back to normal as soon as humanly possible.

Back-End developers make an important contribution to this effort by writing automated tests to ensure the code they write will work as expected. These tests are also written in code, almost always in the same language their implementation code is written in.

Here's a contrived example of what that may look like for a simple Ruby program:

```ruby
# this is the implementation code
def add(num1, num2)
  num1 + num2
end

# this is the test code that checks the implementation code
def test_it_can_add_two_numbers
  sum = add(4, 5)
  assert 9, sum

  sum = add(0, 3)
  assert 3, sum

  sum = add(4, -9)
  assert -5, sum

  sum = add(12, 13)
  assert 25, sum
end
```

When developers write tests, they work to check as many edge cases as possible. In the example above, the test ensures that 0, negative, and two-digit numbers behave as one would expect.

## Back-End Wrap Up

You have heard a LOT of information about what Back-End code is responsible for and may have learned some new buzzwords. If you still have a lot of questions on your mind or feel fuzzy on things, that's ok and very common. If you are interested in coding, join us for a [Back-End workshop](https://www.eventbrite.com/o/turing-school-of-software-amp-design-9895674202) where we'll get our hands on the keyboard and write some code in Ruby! 

Next week, we'll do a deep dive into Front-End, similar to today's session.

Next Session: <a href="../fe">3: Front-End Engineering</a>