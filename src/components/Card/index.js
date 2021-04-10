import React from 'react';
import { Image, Flex, Text } from '@chakra-ui/react';

const Card = ({ children, date, img, alt }) => {
  return (
    <Flex align="center" justifyContent="center" width={'60%'} p={'1em'}>
      <Image src={img} alt={alt} htmlWidth={'50%'} />
      <Flex direction="column">
        {children}
        <Text align="center">{date}</Text>
      </Flex>
    </Flex>
  );
};

export default Card;
