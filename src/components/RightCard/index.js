import React from 'react';
import { Image, Flex, Text, Heading } from '@chakra-ui/react';

const RightCard = ({ alt, date, description, img, objectifs, title }) => {
  return (
    <Flex
      align="center"
      justifyContent="center"
      width={'60%'}
      m={'1em'}
      border={'1px'}
      borderColor="orange.400"
      borderRadius={'8px'}
      marginLeft={'20%'}
    >
      <Flex direction="column">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text as="i" m={'1em'}>
          {description}
        </Text>
        <Text>
          <b>Objectifs : </b> {objectifs}
        </Text>
        <Text align="center" mt={'1em'} fontWeight={'bold'}>
          {date}
        </Text>
      </Flex>
      <Image
        src={img}
        alt={alt}
        htmlWidth={'50%'}
        borderTopRightRadius={'8px'}
        borderBottomRightRadius={'8px'}
      />
    </Flex>
  );
};

export default RightCard;
