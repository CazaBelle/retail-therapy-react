import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; 
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  const welcome = <p>Edit <code>src/App.js</code> and save to reload.</p>;
  expect(wrapper).toContainReact(welcome);
});
