
//Create XMLHttpRequest object
let xhr = new XMLHttpRequest();

//When response has loaded check the server status. if the server status was ok, execute code inside.
xhr.onload = () => {
  let result;
  if (xhr.status === 200) {
      //converts the JSON data into a JS objects ready for browser to use.
      result = JSON.parse(xhr.responseText);
      console.log(result);
      let myDiv = document.getElementById('my-degree');
      let table = document.createElement('TABLE');
      let header = document.createElement('TR');
      for (let col of columnOrder) {
          let c = document.createElement('TH');
          c.innerText = col.toUpperCase();
          header.appendChild(c);
      }
      table.appendChild(header);
      for (let degree of result.degrees) {
          table.appendChild(createRow(degree));
      }
      myDiv.appendChild(table);
  }
};


const columnOrder = ['School', 'Major', 'Type', 'Year'];
const createRow = degree => {
    let row = document.createElement('TR');
    for (let col of columnOrder) {
        let column = document.createElement('TD');
        column.innerText = degree[col];
        row.appendChild(column);
    }
    return row;
};

xhr.open('GET', 'data/my-degrees.json', true);
xhr.send(null);