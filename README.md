# bookmarks
search and bookmark github repositories

In order to run the app download the repository and open the project in visual studio  2017.

Notes:

1) The client is pure Angular 5.
2) ASP.NET core api is used to managed the bookmarks in session cache
3) Components prefixed with ui are dumb components, i.e. only include the presentation part and are generic or very easily can be reused 
   in other apps.
4) Folders prefixed with '+' are lazy loaded modules. 
5) DRY principle is kept.
6) Single Responsibility Principle (SRP) is kept.
7) Business logic is injected to smart components using services.
8) Communication between smart and dumb components is done in downhill streem direction using Input and uphill stream direction using observers
   service.
