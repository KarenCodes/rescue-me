import React from 'react';
import Shelter from './Components/Shelter/Shelter.js';

const SheltersList = props => {
  const shelters = props.shelters;
  return shelters.map((shelter, index) => (
    <Shelter shelter={shelter} shelterId={index} key={index} />
  ));
};

export default SheltersList;
