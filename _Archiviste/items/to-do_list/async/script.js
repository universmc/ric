$.getJSON("to-do_list.json", function(data) {
    const categories = Object.keys(data.categories);

    let output = '<div>';
    categories.forEach(category => {
      output += `<h2>${category}</h2>`;
      output += '<ul>';

      data.categories[category].forEach(todo => {
        output += `<li><span>${todo.name}</span> - ${todo.description}</li>`;
      });

      output += '</ul>';
    });
    output += '</div>';

    $("#todo-list").html(output);
  });
