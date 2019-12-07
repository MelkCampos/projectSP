


## Sobre o projeto

Imagine that you're in a zombie apocalypse. Just you is alive, and you have to create a software to help the others survivos.

### :fallen_leaf: You are welcome survivor!
This is a `GraphQL` project, where you can add survivos with their items (water, food, guns..).

### Technologies used for development
* Javascript - `NodeJS`
* GraphQL 
* Graphql-yoga - using `EXPRESS`
* Yarn
* Nodemon
* Mongoose
* Docker

### :maple_leaf: How does it work?

### Register
Here you can register a new `survivor`. The survivor need to have:
* `name`
* `age`
* `sex`

### Localization
They need to say where they're, enter with:

* `latitude`
* `longitude`

### Infecteds and uninfected
At first they start marked as `"uninfected"`. If this person happens to be infected, other teammates may mark in the software that they lost their partner :(
* `infected`

In this topic they can state if they have any `items` like `weapons`, some `food` or `water`.
* `items`

When registration ends, an `id` is created for each survivor. As the picture below shows.

![Screenshot from 2019-12-06 18-44-33](https://user-images.githubusercontent.com/56616755/70376901-e580e680-18ec-11ea-80c1-61ff1c7907f2.png)

## Search a specific survivor by `ID`

