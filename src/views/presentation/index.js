import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import equipe from '../../assets/img/portraits/equipe-min.JPG';
import './presentation.scss';

const Presentation = () => {
  return (
    <Box width="70%" textAlign="center" margin="auto">
      <Text as="cite" lineHeight="2em" mt="2em">
        Axel, comme tous les jeunes migrants rencontrés ont quitté leurs pays à la quête d’un avenir
        meilleur et surtout pour subvenir aux besoins de leurs familles malgré les risques.
      </Text>
      <Text mt="2em">
        Ensemble, nous avons décidé de planter L’ARBRE DE L’ESPOIR pour accompagner ces jeunes
        migrants dans leur insertion sociale. L’ADE a pour vocation de lutter contre la précarité.
      </Text>
      <Image src={equipe} alt="equipe" m={'2em auto'} boxSize={'80%'} />
    </Box>
  );
};

export default Presentation;
