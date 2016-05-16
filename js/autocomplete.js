  // autocomplete
    var searchDBString = [
    { value: "JavaScript", url: "courses.html#javascript"},
    { value: "HTML", url: "courses.html#HTML"},
    { value: "CSS", url: "courses.html#CSS"},
    { value: "C", url: "courses.html#C"},
    { value: "swift", url: "courses.html#swift"},
    { value: "Java", url: "courses.html#java"},
    { value: "web design", url: "courses.html#webdesign"},
    { value: "apps", url: "courses.html#apps"},
    { value: "computer science", url: "courses.html#cs"},

  ];

  $("#autocompleteme").autocomplete( {
    source: searchDBString,
    messages: {
        noResults: '',
        results: function() {}
    },
    select: function( event,ui ) {
      window.location = ui.item.url;
    }
  });