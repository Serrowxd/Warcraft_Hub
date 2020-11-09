# Warcraft_Hub

Timers, API's, and all the other interesting tidbits one might need for planning World of Warcraft.

## Notes

Going to be doing something like this, but for WoW -

[WarframeHub](https://hub.warframestat.us/#/)

[Github Link](https://github.com/WFCD/warframe-hub)

The end goal will be to have all the general information - world boss spawns, world quest rewards, auction house pricing, news and updates from wowhead, rare spawn timers, etc.

Secondary it will include a notes section, for things like a certain key you want to run, or simple notes that you want to carry over between sessions.

Stretch goal will be character-API integration, raiderio integration, logins, and the ability to modify the home screen to add/remove/move modules to get a more customized layout.

Dark/Light theme will be a mandatory requirement, color and module palette will be material-ui, base will be built on React.

Super simple, super effective.

---

**Module Thoughts**

Something to test out -

Modules are built off the same template.

Example:

```JS
// May have to test this logic, might be the wrong format for what I'm trying to do
const Module = function(title, type, cb) {
  let title = this.title;
  let type = this.type;
  let cb = this.cb;

  // Return pre-built HTML Template
  // Pass title / type to the template item

  // Callback that handles any logic that's passed to the function, specifically the internal guts.
  cb();
}
```

The `type` handler on the function will be something super simple, basically saying "this is a small/medium/large module" which dictates how much space it's alotted.

The internals of the template will be built to handle anything passed to it, so it'll be effectively the tortilla in a burrito, wrapping up any internals that we stuff into it - keeps the functionality clean.

Creating a module would look something like `let mod1 = new Module('Time', 'Small', Clock())`.

These modules can be stuffed into an array, then loaded in order which gives us our page layout.

`Layout = [mod1, mod2, mod3, mod4, mod5]`

Then we parse through them, applying them to the page via a flexbox layout where they automatically take-up as much space as the type allows.

Moving the modules will just be exchanging the index of the two modules swapped, adding and removing modules will follow the same array logic.
