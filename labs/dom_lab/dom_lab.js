
//DOM Introduction Lab
//Max Rivera 10/16/2024

/*
Task #1
<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

The <div> DOM node?
    var divNode=document.getElementByTagName("div")[0]
The <ul> DOM node?
    var ulNode=document.getElementByTagName("ul")[0]
The second <li> (with Pete)?
    var liNode=document.getElementByTagName("li")[1]


Task #2
If elem – is an arbitrary DOM element node…

Is it true that elem.lastChild.nextSibling is always null?
-Yes. The last child has no next sibling, so it's always null.
Is it true that elem.children[0].previousSibling is always null ?
-No. If there's a text or comment before the first child element, previousSibling won't be null.


Task #3
<script>
  var table = document.getElementById('myTable');

  for (var i = 0; i < table.rows.length; i++) {
    var td = table.rows[i].cells[i];
    td.style.backgroundColor = 'red';
  }
</script>


Task#4
Here’s the document with the table and form.

How to find?…

The table with id="age-table".
-var ageTable = document.getElementById("age-table")
All label elements inside that table (there should be 3 of them).
-var labelsInTable = ageTable.getElementsByTagName("label")
The first td in that table (with the word “Age”).
-var firstTd = ageTable.getElementsByTagName("td")[0]
The form with name="search".
-var searchForm = document.forms["search"]
The first input in that form.
-var firstInput= searchForm.getElementsByTagName("input")[0]
The last input in that form.
-var lastInput= searchForm.getElementsByTagName("input");
-var last= lastInput[lastInputInForm.length - 1]


Task #5
 <script>
    var listItems = document.getElementsByTagName('li');

    for (var i = 0; i < listItems.length; i++) {
      var li = listItems[i];

      var title = li.childNodes[0].nodeValue.trim(); // Access the first child node's value

      var descendants = li.getElementsByTagName('li').length;

      console.log('Text: ' + title);
      console.log('Number of descendants: ' + descendants);
    }
  </script>


Task #6
  The script shows an alert with 1, which means the last child of the <body> is an element node, which is the <script> tag.


Task #7
    The code shows an alert with the text BODY because it replaces the body content with a comment of BODY, and then retrieves the content of the comment, which is BODY.

Task #8
    Which class does the document belong to?
The document belongs to the Document class.

What’s its place in the DOM hierarchy?
The document is the "root" of the DOM tree and stands for the entirety of the HTML document. It is a "direct" child of the Window object.

Does it inherit from Node, Element, or maybe HTMLElement?
The document inherits from the Node class, but not from Element or HTMLElement.

Task #9
<script>
    var divs = document.getElementsByTagName('div');

    for (var i = 0; i < divs.length; i++) {
      if (divs[i].hasAttribute('data-widget-name')) {
        var widgetName = divs[i].getAttribute('data-widget-name');
        console.log(widgetName);
      }
    }
  </script>


Task #10
<script>
  var links = document.getElementsByTagName('a');


  for (var i = 0; i < links.length; i++) {
    var href = links[i].href;

    if (href.includes('://') && !href.startsWith('http://internal.com')) {
      links[i].style.color = 'orange';
    }
  }
</script>

Task #11
It will prably be the 1st and 3rd one.
elem.textContent = text: This basically replaces the element’s content with plain text (no HTML is parsed).
elem.append(document.createTextNode(text)): This adds the text as plain text but appends it instead of replacing the content.


Task #12
<script>
  function clear(elem) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }
  var elem = document.getElementById('elem');
  clear(elem);
</script>


Task #13
The text "aaa" is outside the table's rows and cells, so when you remove the table, "aaa" stays there because it's not really part of the table. The table is gone, but "aaa" was never inside it properly.


Task #14
function createListFromInput() {
    let ul = document.getElementById('userList');

    while (true) {
      var userInput = prompt("Enter a list item (or press Cancel or leave empty to stop):");

      if (!userInput) {
        break;
      }

      var li = document.createElement('li');

      var textNode = document.createTextNode(userInput);

      li.appendChild(textNode);

      ul.appendChild(li);
    }
  }

  createListFromInput();
</script>


Task #15
var container = document.getElementById('container');

  var ul = document.createElement('ul');

  function buildTree(parentElement, obj) {
    for (let key in obj) {
      var li = document.createElement('li');
      li.textContent = key;


      for (let subkey in obj[key]) {
        var nestedUl = document.createElement('ul');
        buildTree(nestedUl, obj[key]);
        li.appendChild(nestedUl);
        break;
      }

      parentElement.appendChild(li);
    }
  }

  buildTree(ul, data);
  container.appendChild(ul);

</script>


Task #16
<script>

    function addDescendantsCount(li) {

      var childUl = li.getElementsByTagName('ul')[0];

      if (childUl) {
        var descendants = childUl.getElementsByTagName('li').length;
        li.firstChild.textContent += ` [${descendants}]`;

        var childLi = childUl.getElementsByTagName('li');
        for (var i = 0; i < childLi.length; i++) {
          addDescendantsCount(childLi[i]);
        }
      }
    }
    var entireUl = document.getElementsByTagName('ul');

    for (var i = 0; i < entireUl[0].children.length; i++) {
      addDescendantsCount(entireUl[0].children[i]);
    }

  </script>


  Task #17
<script>
function createCalendar(elem, year, month) {
      var table = document.createElement('table');
      var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

      var headerRow = table.insertRow();
      daysOfWeek.forEach(day => {
        var th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
      });

      var firstDay = new Date(year, month - 1, 1).getDay();
      var lastDay = new Date(year, month, 0).getDate();

      var startDay = firstDay === 0 ? 7 : firstDay;

      var currentDay = 1;
      var row = table.insertRow();

      for (var i = 1; i < startDay; i++) {
        row.insertCell();
      }

      while (currentDay <= lastDay) {
        if (row.cells.length === 7) row = table.insertRow();

        var cell = row.insertCell();
        cell.textContent = currentDay++;
      }

      elem.appendChild(table);
    }

    var calendar = document.getElementById('calendar');
    createCalendar(calendar, 2012, 9);
  </script>


Task #18
<div id="clock">00:00:00</div>

  <button onclick="clockStart()">Start</button>
  <button onclick="clockStop()">Stop</button>

  <script>
    var clockInterval;

    function updateClock() {
      document.getElementById('clock').textContent = new Date().toLocaleTimeString();
    }

    function clockStart() {
      if (!clockInterval) {
        updateClock();
        clockInterval = setInterval(updateClock, 1000);
      }
    }

    function clockStop() {
      clearInterval(clockInterval);
      clockInterval = null;
    }
  </script>


Task #19
<script>
  var ul = document.getElementById('ul');

  var li2 = document.createElement('li');
  li2.textContent = '2';

  var li3 = document.createElement('li');
  li3.textContent = '3';

  var li4 = document.getElementById('two');

  ul.insertBefore(li2, li4);
  ul.insertBefore(li3, li4);
</script>


Task #20
<script>
  function sortTableByName() {
    var table = document.getElementById('myTable');
    var tbody = table.getElementsByTagName('tbody')[0];
    var rowsArray = Array.from(tbody.getElementsByTagName('tr'));

    rowsArray.sort((rowA, rowB) => {
      var nameA = rowA.getElementsByTagName('td')[0].textContent.toLowerCase();
      var nameB = rowB.getElementsByTagName('td')[0].textContent.toLowerCase();
      return nameA > nameB ? 1 : -1;
    });

    rowsArray.forEach(row => tbody.appendChild(row));
  }

  sortTableByName();
</script>


Task #21
<script>
  function showNotification({top = 0, right = 0, html = "", className = ""}) {

    var notification = document.createElement('div');
    notification.className = "notification";

    if (className) {
      notification.classList.add(className);
    }

    notification.innerHTML = html;

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    document.body.append(notification);

    setTimeout(() => {notification.remove();}, 1500); }
</script>

*/