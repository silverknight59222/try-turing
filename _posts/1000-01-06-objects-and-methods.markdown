---
title: Objects and Methods
layout: post
date: 1000-01-06
permalink: objects-and-methods
---

The material on this page probably won't be covered during the weekend class, but you're welcome to try it out on your own! 

<h4>What is a Class?</h4>

A class is what is used to define an object that has behavior and attributes. We've already seen built-in classes in Ruby: String, Array, Integer, etc. These classes are all objects with their own behavior and attributes. For example, it wouldn't make sense to call `#capitalize` on an object of type Integer. 

<h4>Naming Conventions</h4>

Unlike variable naming, we use CamelCase for naming classes:

```ruby
class Person
end

class StudentTeacher
end
```

<h4>Attributes</h4>

Objects generally will have attributes that contain some type of data specific to that instance. These attributes are stored as instance variables (`@attribute`) upon initialization of a new object. Let's look at the example below:

```ruby
class Task
  def initialize(title, status)
    @title       = title
    @status      = status
  end
end
```

We can use these instance variables in any other method that we define in the class. 

```ruby
class Task
  attr_reader :title, :status

  def initialize(title, status)
    @title       = title
    @status      = status
  end
end
```

This allows us to do the following:

```ruby
task = Task.new("Buy airplane ticket", "Incomplete")
task.title #=> "Buy airplane ticket"
task.status #=> "Incomplete"
```

<h4>Behavior and Actions</h4>

Behavior of an object is encapsulated in its methods. For example, completing a task would be an action. Asking whether or not the task is complete would also be an action. 

```ruby
class Task
  attr_reader   :title, :description
  attr_accessor :status

  def initialize(title, description, status)
    @title       = title
    @description = description
    @status      = status
  end

  def complete!
    @status = "Complete"
  end

  def complete?
    @status == "Complete"
  end
end
```

<h4>Initializing an Object</h4>

Now that we've defined the class, we can create new instances of the object and call its methods:

```ruby
task = Task.new("Buy ticket", "Incomplete")
task.complete? #=> false
task.complete!
task.complete? #=> true
```

<h4>Classes Interacting</h4>

<div class="try-it">
<h2>Try It: Creating the Person Class</h2>

<p>Create a new file called <code>person.rb</code>. A person should have <b>attributes</b> of name, age, and gender. Create a method celebrate_birthday! that increases the person's age by one year. The interaction patter should look like the one below. Try out your code and make sure it works!</p>
<pre>frankie = Person.new("Frankie", 7, "male")
frankie.name
"Frankie"
frankie.gender
"male"
frankie.age
7
frankie.celebrate_birthday!
frankie.age
8
</pre>
</div>
