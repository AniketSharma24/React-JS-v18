/*
The below code will create a following HTML structure
<div id='root'>
    <div>
        <h1>Hello React</h1>
        <h2>We have rendered this nested hierarchy using React</h2>
    </div>
</div>
*/

const heading1 = React.createElement('h1', {}, 'Hello React!'); // Creates h1 element using React createElement
const heading2 = React.createElement(
  'h2',
  {
    id: 'heading-two',
  },
  'We have rendered this nested hierarchy using React'
); // Creates h2 element using React createElement

const container = React.createElement(
  'div',
  {
    className: 'container',
  },
  [heading1, heading2]
); // Creates container element using React createElement and adds both headings to it

const root = ReactDOM.createRoot(document.getElementById('root')); // Sets root
root.render(container); // Adds container to root element and renders it
