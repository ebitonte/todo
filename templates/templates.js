var item_template = "<div class='view'>" +
                    "<input class='toggle' type='checkbox'" +
                        "{{#done}}"+
                            "checked='checked'"+
                        "{{/done}} />"+
                            "<label> {{title}} </label>"+
                            "<a class='destroy'></a>"+
                    "</div>"+
                    "<input class='edit' type='text' value="+ 
                    "{{title}} />";

var item = Hogan.compile(item_template);


item.render({done: true, title: "Hello World"});