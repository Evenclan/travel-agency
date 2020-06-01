import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

it('should check if link to the adress match the ID', () => {
  const expectedID = 'abc';
  const expectedLink = `/trip/${expectedID}`;
  const component = shallow(<TripSummary  id={expectedID} tags={[]} />);

  expect(component.find('.link').prop('to')).toEqual(expectedLink);

});

it ('should check src and alt of an IMG', () => {
  const expectedSrc = 'img.jpg';
  const expectedAlt = `imageAlt`;
  const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);

  expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  expect(component.find('img').prop('src')).toEqual(expectedSrc);
});

it ('should check if (name/cost/days) props renders properly', () => {

  const expectedName = 'expectedName';
  const expectedCost = '12,345';
  const expectedDays = 67;

  const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

  const title = component.find('.title').text();
  // Warning: Failed prop type: Invalid prop `days` of type `string` supplied to `TripSummary`, expected `number`.

  expect(title).toEqual(expectedName);



});
