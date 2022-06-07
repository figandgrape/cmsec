import logo from '../../components/images/logo-cmsec.png';
import underconstructionimage from '../../components/images/NicePng_under-construction-png_1526045.png';
import {
  VStack,
  ListItem,
  Heading,
  List,
  Link,
  Image,
  Text,
  Center,
  useColorModeValue,
  Flex,
  Button,
  StackDivider,
  Divider,
} from '@chakra-ui/react';
import { Simple_ES } from '../../components/spa/NavBarHeader_ES.tsx';
import '../../fonts/Fashion-Fetish-Bold.ttf';
import '../../fonts/Fashion-Fetish-Heavy.ttf';
import '../../fonts/Fashion-Fetish-Italic.ttf';
import '../../fonts/Fashion-Fetish-Light-Italic.ttf';
import '../../fonts/Fashion-Fetish-Outline.ttf';
import '../../fonts/Fashion-Fetish-Regular.ttf';
import '../../fonts/Fashion-Fetish-Small-Caps.ttf';
import { Footer } from '../../components/spa/Footer.tsx';
// import './App.css';
import portada0 from '../../components/images/monitoreo2.jpg'
import image1 from '../../components/images/monitoreo.jpg'
import CaptionCarousel from '../../components/spa/Carousel.tsx';

export const Nosotros = () => {
  return (<>
    <Simple_ES />
    {/* <div className='background-wrapper'> */}
      <Flex
        backgroundImage={image1}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        h={{ base: 'auto', md: 'auto' }}
        w='100%'
        py={[0, 10, 4]}
        direction={{ base: 'column-reverse', md: 'row' }}>

        <VStack
          w="100%"
          h="100%"
          p={2}
          spacing={4}
          alignitems="center"
          textColor={'black'}
          bg={'blackAlpha.800'}

        >
          <VStack alignItems="center" >
            <VStack size="xl" w='100%' textAlign={'center'} fontFamily={'Fashion-Fetish-Regular'}>
              <Heading fontFamily={'Fashion-Fetish-Regular'} textDecoration={'underline'} color={"whiteAlpha.900"} size="lg">SOBRE NOSOTROS</Heading>
              {/* <Divider w='6xl' colorScheme={'black'}></Divider> */}
              <Text py={0} color={"whiteAlpha.900"} justifyContent={'center'} >
                <Heading fontFamily={'Fashion-Fetish-Bold'} color={"whiteAlpha.900"} size="md" >La Empresa</Heading>
                <List spacing={0} >
                  <br />
                  <ListItem>CONMAT SECURITY es una empresa creada por un grupo de profesionales con mas de 20 años
                    de experiencia en distintos rubros de la Seguridad (Publica, Privada, Hotelera, Patrimonial,
                    Seguridad e Higiene, de la Salud, Electrónica y del Hogar), para brindar un servicio de
                    seguridad PREMIUM.</ListItem>
                    <br/>
                    <Heading fontFamily={'Fashion-Fetish-Bold'} color={"whiteAlpha.900"} size="md" >La Tecnologìa</Heading>
                    <br/>

                  <ListItem>CONMAT SECURITY cuenta con tecnologia de ultima generación, recursos humanos altamente
                    capacitados y profesionales de primer nivel, quienes van a conocer al cliente, para brindarle un
                    servicio más eficaz y que se adapte a sus necesidades. La relación con cada cliente es única y esa es
                    la base de nuestra política, servicio personalizado para generar relaciones que perduren en el
                    tiempo.</ListItem>
                    <br/>
                    <Heading fontFamily={'Fashion-Fetish-Bold'} color={"whiteAlpha.900"} size="md" >La Confianza</Heading>
                    <br/>
                  <ListItem>En CONMAT SECURITY apuntamos a que nuestros clientes desarrollen una emoción que hoy en
                    día está en desuso, LA CONFIANZA.</ListItem>
                  <br />
                </List>
                <br />
                

              </Text>
              </VStack>
          </VStack>
        </VStack>
      </Flex>
      <Footer />
    {/* </div> */}
  </>
  );
}
