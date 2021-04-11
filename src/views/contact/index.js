import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import arbreLogo from '../../assets/img/arbre_logo.png';
import './contact.scss';

const Contact = () => {
  return (
    <Flex justifyContent="center" mt="20vh">
      <Flex alignItems="center" border={'1px'} borderColor="green.600" borderRadius="8px">
        <Image height="40vh" className="logo" src={arbreLogo} alt="Arbre de l'espoir" borderTopLeftRadius="8px" borderBottomLeftRadius="8px"/>
        <Box m="1em">
          <Text>
            Courriel : <a href="mailto:larbredelespoir@gmail.com">larbredelespoir@gmail.com</a>
          </Text>
          <Text mt="1em">Numero du secrétaire générale : +33 6 42 55 83 49</Text>
          <Text mt="1em">Numero de téléphone : +33 7 82 94 62 13</Text>
          <Text mt="1em">
            Website : <a href="https://www.larbredelespoir.fr/">Arbre de l'espoir</a>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
