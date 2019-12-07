

## Sobre o projeto

Imagine that you're in a zombie apocalypse. Just you is alive, and you have to create a software to help the others survivos.

#### state: *in production*

### :fallen_leaf: You are welcome survivor!

This is a `GraphQL` project, where you can add survivos with their items (water, food, guns..).
<p align="center">
  <img width="300" height="250" src="https://33.media.tumblr.com/48cd9cc09400e5499b6309c6bf1e0a97/tumblr_npuxsqaKaC1tbahjdo1_1280.gif">
</p> 

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

![Screenshot from 2019-12-06 18-44-49](https://user-images.githubusercontent.com/56616755/70378319-b626a580-18fd-11ea-8008-d99bda93feba.png)

Shown below are `location` and `infected status` updates as `"true"` or `"false"` of the survivor.

### !Importante
**Application bug report:** In the two `"Mutations"` of updates: `updateLocalization` and `updateStateAboutInfection`, their values in the Mutatios themselves are returned `"null"`. But the data update is `working normally`.


### :key: The localization and infect state can be changed only by `id`



## localização
![Screenshot from 2019-12-06 18-45-10](https://user-images.githubusercontent.com/56616755/70378320-b6bf3c00-18fd-11ea-95df-99f969d147fb.png)

## Changed value `infected` to `true`
![Screenshot from 2019-12-06 18-45-36](https://user-images.githubusercontent.com/56616755/70378321-b6bf3c00-18fd-11ea-9916-2693aeea5798.png)

### Here is an infected example  
![Screenshot from 2019-12-06 18-45-42](https://user-images.githubusercontent.com/56616755/70378322-b6bf3c00-18fd-11ea-854a-85484bfc1df4.png)

