import React from 'react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
configure({ adapter: new Adapter() });

it('renders a full class div', () => {
  const app = shallow(<App />)
  expect(app.find('div.full').length).toEqual(1);
});

it('state.loading should be false after rendered', function() {
  var component = mount(<App />);
  expect(component.state.loading).toBeFalsy();
});