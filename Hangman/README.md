
<img src="http://devbasu.com/wp-content/uploads/2015/04/describe-your-ideal-boss.jpg" height="250px" />

Hi Kid, 

Welcome aboard.  
Listen, I got the project of your life in my backhand! I was talking to my Son the other day, and he told me retro games was the new Black. So I contracted this guy called Jamie Duct Tape, and he started working on this great old game called HangMan. He was doing it in something called Angel Eyes 2... (Sounds like a Chuck Norris film to me...). Only problem is, he got hit by a train the other day... 
So I got this codebase, but it's not quite ready...

Before he left us, he seemed quite tired, and I asked him if he was sad, then he mailed me this picture.
![Project1 - Overview](http://cyberdada.com/images/Project1.png)

Header of the email was - Heres your f\***ing SAD
he also wrote me  to git this repository

https://github.com/Cyberdada/Angular2Worksho.git

FTW? 

When he did a demo on it for me you could log in, but not much more. 
He said he just needed to finish the hangman component, and jack it into the main app component. He claimed he was 95% done. 
So do me favour finish it off, and git on with it. Code by 12. :8ball: 


***
<img src="http://1.bp.blogspot.com/-aeF1Vhzaeck/UQnxO4lKlkI/AAAAAAAAGc0/1ajSxMIqBqc/s1600/SMCARRADINE2.jpg" height="250px" />  

This should get you familiarised with 

* Input
* Output

Lifecycle Hooks, (well actually just one hook :) OnInit  

* Component
* Metadata  

* Application
* Composition  
 
built in structural directives such as 
*ngIf
*ngFor
*ngClass

Ok lets open up the project 

and btw if you have never played hangman...
<https://en.wikipedia.org/wiki/Hangman_(game)>
***

  

Bonus round -- 
Jamie Duct Tape must have been in a hurry... A component should just concern itself with aligning models with the UI. App.Component is talking directly to localstorage. Seems to me we need another level of indirection here. Add a storage service and change the local storage code, so that it talks to the service instead.


If you have looked at the word service, you might be wondering about the marked out lines on top: 
```
//import {Injectable} from 'angular2/core';

//@Injectable()

```

This is needed for Angulars inbuilt Dependency Framework, but as the service is not dependent on other services, the framework does not need to resolve the service.  
It is best practise though to decorate all services with  @Injectable, so that you do not run into problems later on when adding to the complexity of the service, so please remove the double dashes.  
Dependency injection is out of scope for this workshop, here is a good article about Dependency Injection in Angular 2:
<https://angular.io/docs/ts/latest/guide/dependency-injection.html>
