# Bugs / Features

- [ ] Allow people to submit location updates (F3 Expansion request)
- [ ] Sometimes user location doesn't work right (I've added debug msgs on screen to help troubleshoot)
- [ ] data is severly outdated
- [ ] Schema isn't used properly
- [ ] Not tested on anything besides MacBook Chrome and iOS Chrome / Safari
- [ ] When I choose a search result, it takes me to the map and my query is still in the search bar. When i click on the search bar my query remains and is highlighted. But it doesn’t bring the results back up. I have to add or delete a character to see results. I think it should bring the results back up.
- [ ]The filter options for time are before or after. If i say before 5, it excludes 5am workouts. Would it make more a sense for the options to be “at or before” and “at or after”, and then include results on the boundary?
- [ ] MINOR the outlines for the states don't fully overlap
- [ ] MINOR center map and consider the drawer location
- [ ] MINOR "contact site leaders"

# Finished

- [x] Code is moved to F3Nation/f3-nation-map-v2
- [x] light mode is default. dark mode still exists. No system theming
- [x] Markers are now easier to press (made clickable region 4x bigger)
- [x] Moved location results below the search bar, F3 results in the sidebar
- [x] Dots should also smoothly move when zooming
- [x] In some cases it allows you to easily go to your location (50% of the time it works every time)
- [x] mobile search bar onClick selects the input text instead of clearing it

# Other / Not sure

- [ ] "Can we implement the ability to switch to satellite mode? That helps me visualize where I’m going?" If we can get access to satellite tiles, then we can use it. I think we might be able to through GCP
- [ ] "When I search, sometime the results appear above the top of the screen, so it looks like I have no results unless I think to scroll up. Try typing Denver." - I may have already resolved this?
- [ ] "When searching. If I click a non-ao result, like a town, it takes me to the map. If I click an ao result, the first click does nothing, I have to click it a second time. " - Not sure if this still happens

# Other

Rebuilt git history on 9-3-24 to clean it

# leaflet server component

- Path is not defined. Not sure where to go from here:
- https://github.com/pimterry/leaflet-map-server-component/blob/master/src/index.js
- https://medium.com/@pimterry/building-a-server-rendered-map-component-part-2-using-client-side-libraries-6f1bb751f31c
- https://github.com/pimterry/leaflet-map-server-component/blob/master/package.json
- https://www.npmjs.com/package/sandboxed-module
- https://github.com/felixge/node-sandboxed-module/pull/61/files
