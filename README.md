# Advanced-jQueryFilters-Practise
Practice for advanced jQuery selectors.

# Advanced jQuery Selectors Including

- a tags and id attribute that is equal to the string Content
- a tags that have the presence of a class attribute
- a tags and id starts with the string of icon
- a tags and id starts with the string of icon, also a language attributes that contain the text "en-"


#Examples

- $("div[id=Content]").css("padding", "5em"); 

- $("a[class]").css("font-size", "2.5em");

- $("a[id^=icon]").css("color", "#b26c34"); 

- $("a[id^=icon][lang^=en-]").css("color", "#eba96d"); 
