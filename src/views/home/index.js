import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import classeConnectee from '../../assets/img/projets/classe_uni.PNG';
import sante from '../../assets/img/projets/poste de sante-min.jpg';
import soutienScolaire from '../../assets/img/projets/soutien_scolaire.jpg';
import daaras from '../../assets/img/projets/daaras.jpg';
import './home.scss';
import LeftCard from '../../components/LeftCard';
import RightCard from '../../components/RightCard';

const Home = () => {
  return (
    <Text align={'center'}>
      <Flex p={6} justifyContent="space-between">
        <Heading as="h2" size="xl">
          Nos projets
        </Heading>
        <Text fontSize="xl" as="cite" lineHeight="3em">
          "On ne peut pas aider tout le monde, mais tout le monde peut aider quelqu'un."
        </Text>
      </Flex>

      <Flex direction="column" alignItems="center">
        <LeftCard
          img={classeConnectee}
          alt={'Classe connectée'}
          date={2021}
          description="Construction d'un espace numérique connecté dans une école élémentaire à Gossas."
          objectifs="Offrir une éducation de qualité avec l'initiation au développement durable et encourager la scolarisation des filles."
          title="VERTIC'elle"
        />

        <RightCard
          img={soutienScolaire}
          alt={'Soutien scolaire'}
          date={2021}
          title="Soutien scolaire et action contre le décrochage scolaire."
          objectifs="Lutter contre les échecs / abandons scolaire. Donner de l'ambition
            professionnel aux enfants en difficulté."
        />

        <LeftCard
          img={daaras}
          alt={'Daaras'}
          date={2021}
          title="Daara's school (Sénégal)"
          description="Modernisation et daaras grace à une education inclusive."
          objectifs="Offrir un avenir meilleur aux jeunes talibés, leur permettre de
            bénéficier d'une formation complète pour s'insérer facilement dans le monde du travail."
        />

        <RightCard
          img={sante}
          alt={'Prévention santé'}
          date={'Depuis 2020'}
          title="Prévention santé"
          description="Campagnes de prévention contre les maladies chroniques non transmissibles et la
              malnutrition."
          objectifs="Lutter contre les maladies chroniques et la malnutrition."
        />
      </Flex>
    </Text>
  );
};

export default Home;
