import React from 'react';
import Shelter from './Shelter/Shelter.js';

// Function that displays the list of shelters
const SheltersList = props => {
  const shelters = props.shelters;
  return shelters.map((shelter, index) => (
    <Shelter shelter={shelter} shelterId={index} key={index} />
  ));
};

export default SheltersList;
