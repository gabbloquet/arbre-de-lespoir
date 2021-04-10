import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Card from '../../components/Card';
import classeConnectee from '../../assets/img/projets/classe_uni.PNG';
import sante from '../../assets/img/projets/poste de sante-min.jpg';
import soutienScolaire from '../../assets/img/projets/soutien_scolaire.jpg';
import daaras from '../../assets/img/projets/daaras.jpg';
import './home.scss';

const Home = () => {
  return (
    <Text align={'center'}>
      <Box p={10}>
        <Text fontSize="xl" as="cite" lineHeight="3em">
          "On ne peut pas aider tout le monde, mais tout le monde peut aider quelqu'un."
        </Text>
      </Box>

      <Heading as="h2" size="xl">
        Nos projets
      </Heading>

      <Flex direction="column" alignItems="center">
        <Card img={classeConnectee} alt={'Classe connectée'} date={2021}>
          <Heading as="h3" size="md">
            Classe universelle connectée (Sénégal)
          </Heading>
          <p>
            <i>Construction d'un espace numérique connecté dans l'école élémentaire SBM Gossas.</i>
          </p>
          <p>
            <b>Objectifs : </b> Offrir une éducation de qualité avec l'initiation au développement
            durable et encourager la scolarisation des filles.
          </p>
        </Card>

        <Card img={soutienScolaire} alt={'Soutien scolaire'} date={2021}>
          <Heading as="h3" size="md">
            Soutien scolaire et action contre le décrochage scolaire
          </Heading>
          <p>
            <b>Objectifs : </b> Lutter contre les échecs / abandons scolaire. Donner de l'ambition
            professionnel aux enfants en difficulté.
          </p>
        </Card>

        <Card img={daaras} alt={'Daaras'} date={2021}>
          <Heading as="h3" size="md">
            Daara's school (Sénégal)
          </Heading>
          <p>
            <i>Modernisation et daaras grace à une education inclusive</i>
          </p>
          <p>
            <b>Objectifs : </b> Offrir un avenir meilleur aux jeunes talibés, leur permettre de
            bénéficier d'une formation complète pour s'insérer facilement dans le monde du travail.
          </p>
        </Card>

        <Card img={sante} alt={'Prévention santé'} date={2021}>
          <Heading as="h3" size="md">
            Prévention santé
          </Heading>
          <p>
            <i>
              Campagnes de prévention contre les maladies chroniques non transmissibles et la
              malnutrition
            </i>
          </p>
          <p>
            <b>Objectifs : </b> Lutter contre les maladies chroniques et la malnutrition
          </p>
        </Card>
      </Flex>
    </Text>
  );
};

export default Home;
