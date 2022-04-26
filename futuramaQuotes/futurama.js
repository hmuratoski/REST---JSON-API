fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => {
        // Data taken ---implement
        // Create ul-buletin
        let ul = document.createElement('ul');
        // for or forEach loop
        data.forEach(quote => {
            // create LI table component
            let li = document.createElement('li');
            // LI element content
            li.innerHTML = quote.quote;       
            // add li to ul
            ul.appendChild(li);
        });
        // add ul buletin
        document.getElementById('print-here').appendChild(ul);
    });


    // FETCH LINK code

// fetch('link')

  //.then(response => response.json())

  //.then(data => document.getElementById('print-here').innerHTML = JSON.stringify(data));