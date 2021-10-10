---
path: you_dont_need_classes
date: 2021-10-10T12:28:44.954Z
title: You don't need classes!
---
# TL:DR

I'm going to make a bold claim right away and tell you that you don't need classes to be a better programmer! Most of us programmers could just get away with using dynamic typed maps and arrays and compute what we need to compute. This way of thinking is going to improve your productivity. I'm going to tell you how.

![we dont need no education](assets/we-dont-need-no-education-yes-you-do-youve-just-used-a-double-negative-it-crowd.jpg "You need education, but not classes. ")



## A basic example

All programs have to do some kind of I/O at one point to be useful to humans. A program that doesn't do I/O is only interesting to mathematicians. If we get back to reality and pragmatism of every day life, one very basic example we can use would be to consume an API resource in our software.

### API

For example's sake let's use the publicly available API of `Rick and Morty` TV series: [](https://rickandmortyapi.com/)[https://rickandmortyapi.com](https://rickandmortyapi.com/).

Using [`https://rickandmortyapi.com/api/character/2`](https://rickandmortyapi.com/api/character/2) to get a character from the series we get back

```json
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
}
```

I am going to be implementing the fetch and printing of the character to stdout in Java and Javascript to state my case. You can fetch the codes here: [](https://github.com/erkinun/RickAndMortyJava)<https://github.com/erkinun/RickAndMortyJava> and [](https://github.com/erkinun/RickAndMortyJs)<https://github.com/erkinun/RickAndMortyJs>.

## Status quo in Java

In the OOP world, to consume the resource above you normally have to do two additional things besides the actual retrieval of the resource from the web:

1. Define a class to represent the object
2. Deserialise the resource into objects of the class you created

To keep fidelity in our argument, lets go ahead and do those things:

### Character class in Java:

```java
import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;

public class Character {
  private int id;
  private String name;
  private String status;
  private String species;
  private String type;
  private String gender;
  private Location origin;
  private Location location;
  private URL image;
  private URL url;
  private String created;

  public String getCreated() {
    return created;
  }

  public void setCreated(String created) {
    this.created = created;
  }

  private List<String> episode;

  public Character() {
  }

  public Character(int id, String name, String status, String species, String type,
                   String gender, Location originLocation, Location lastKnownLocation,
                   URL image, List<String> episodesUrl) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.origin = originLocation;
    this.location = lastKnownLocation;
    this.image = image;
    this.episode = episodesUrl;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getStatus() {
    return status;
  }

  public String getSpecies() {
    return species;
  }

  public String getType() {
    return type;
  }

  public String getGender() {
    return gender;
  }

  public Location getOrigin() {
    return origin;
  }

  public Location getLocation() {
    return location;
  }

  public URL getImage() {
    return image;
  }

  public List<String> getEpisode() {
    return episode;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public void setSpecies(String species) {
    this.species = species;
  }

  public void setType(String type) {
    this.type = type;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public void setOrigin(Location origin) {
    this.origin = origin;
  }

  public void setLocation(Location location) {
    this.location = location;
  }

  public void setImage(URL image) {
    this.image = image;
  }

  public void setEpisode(List<String> episode) {
    this.episode = episode;
  }

  public URL getUrl() {
    return url;
  }

  public void setUrl(URL url) {
    this.url = url;
  }
}
```

Here you go, 130 lines of Java code to represent a character from Rick and Morty API.**Bold claim number 1:** This is completely unnecessary piece of code for now! This took me around 15 minutes (because my Java and Intellij skills are a bit rusty at the moment) and I got distracted from the main problem of consuming the API.

Anyway, let's go ahead and try to consume the API now:

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class CharacterAPI {

  private static final String REST_URI = "https://rickandmortyapi.com/api/character";

  public static Character getCharacterById(String id) throws Exception {

    URL api = new URL(REST_URI + "/" + id);

    HttpURLConnection conn = (HttpURLConnection) api.openConnection();
    conn.setRequestMethod("GET");
    conn.connect();


    int responsecode = conn.getResponseCode();

    if (responsecode != 200) {
      throw new RuntimeException("HttpResponseCode: " + responsecode);
    } else {

      String inline = "";
      Scanner scanner = new Scanner(api.openStream());
      
      while (scanner.hasNext()) {
        inline += scanner.nextLine();
      }
      scanner.close();

      ObjectMapper objectMapper = new ObjectMapper();

      return objectMapper.readValue(inline, Character.class);
    }
  }
}
```

OK, this is just 38 lines of code and even though I just used Java's own HTTP library and bit of Jackson object mapping, did the work.

And here comes the main class:

```java
public class Main {
  public static void main(String[] args) throws Exception {
    // should be Rick
    System.out.println(CharacterAPI.getCharacterById("2"));
  }
}
```

## Moving to the dark side of the moon

Now, let's try to do the same thing in Javascript with only using maps. We'll write a simple Node application to achieve this:

## Index.js in Node

```jsx
import fetch from 'node-fetch'

const response = await fetch('https://rickandmortyapi.com/api/character/2')
const rick = await response.json()

console.log(rick)
```

Ahem, yeah it's only 6 lines of code including the blank lines. After line 4, I have a Javascript object (which I just call maps (coming from Clojure)) that holds all the fields for the Morty Smith character.

In the Java example we literally wrote all that boilerplate code for what? Type safety? We didn't take a look at the optional and required fields of the API yet. The object mapper we used required us to have the setters so that it could populate the object. What if most of the fields are optional? Will using some sort of an Optional field (or monad if you're functionally inclined) give anyone any real type safety? We had to write tedious code which distracted us from the main problem.

I know having types in certain applications or sections of applications would give you an extra level of safety. But on the other hand, **Bold claim number 2:** having this much code for no apparent benefit dampens a person's mind to begin with. Nobody should have to write this much code for no real benefit. I can even say, using classes for everything will make you a worse programmer!

# Conclusion

Keeping this post short, I'm reiterating my point: we almost never need classes! What we need is concise and expressive ways of handling and computing data. At the end of the day, that's what all programs do. For the next posts, I'm going to talk about what to use instead, maps!