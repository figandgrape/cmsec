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
import image1 from '../../components/images/monitoreo-3.jpg'
import CaptionCarousel from '../../components/spa/Carousel.tsx';

export const Servicios = () => {
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
            <Heading fontFamily={'Fashion-Fetish-Regular'}  textDecoration={'underline'} color={"whiteAlpha.900"} size="xl">SERVICIOS</Heading>
            {/* <Divider w='6xl' colorScheme={'black'}></Divider> */}
            <Text py={0} color={"whiteAlpha.900"} justifyContent={'center'} >
              <List fontSize={'xl'} spacing={0} textTransform={'uppercase'} >
                <br />
                <ListItem>Auditorias</ListItem>
                <ListItem>Seguridad Física</ListItem>
                <ListItem>Seguridad Electrónica</ListItem>
                <ListItem>Seguridad Hotelera</ListItem>
                <ListItem>Seguridad e Higiene</ListItem>
                <ListItem>CiberSeguridad</ListItem>
                <ListItem>Asesoramiento</ListItem>
                {/* <ListItem>Programa "Tu Casa Segura"</ListItem>
                <ListItem>Programa "Seguridad Somos Todos"</ListItem> */}

                <br />
              </List>
              <Heading fontFamily={'Fashion-Fetish-Bold'} textDecoration={'underline'} color={"whiteAlpha.900"} size="md">MAS DE NUESTROS SERVICIOS</Heading>
              <br />

              <Heading fontFamily={'Fashion-Fetish-Light'} color={"whiteAlpha.900"} size="md" >PROGRAMA "TU CASA SEGURA"</Heading>
              <List spacing={0} >
                <br />
                <ListItem>Este programa, impulsado por conmat security, propone un sistema integral de seguridad para su
                  hogar, la combinación entre el mejor sistema de alarma, la última tecnología en camaras de
                  seguridad y la domótica, permite a nuestros clientes no solo tener el control total de su vivienda desde
                  cualquier parte del planeta desde una aplicacion de celular, sino que tambien minimizar los riesgos de
                  que se produzca cualquier contingencia.
                  a medida que pasa el tiempo debemos incorporar la tecnología a todo lo que hacemos, es por ello que en
                  conmat security ponemos los mejores profesionales a disposicion de nuestros clientes para que el
                  proceso sea mucho mas fácil.</ListItem>
                <br />
                <Heading fontFamily={'Fashion-Fetish-Light'} color={"whiteAlpha.900"} size="md" >PROGRAMA "SEGURIDAD SOMOS TODOS"</Heading>
                <br />
                <Heading fontFamily={'Fashion-Fetish-Light'} color={"whiteAlpha.900"} size="sm" >HOTELERIA</Heading>
                <br />

                <ListItem>Este programa impulsado por conmat security apunta al rubro hotelero.
                  se basa en el entrenamiento de todos los colaboradores de los departamentos que conforman la organización (hotel).
                  “seguridad somos todos” es la transmisión de conceptos sobre seguridad a todos los colaboradores, poner en conocimiento el
                  funcionamiento general del sistema de seguridad, como afecta a su tarea y cual es la responsabilidad que tiene cada miembro del equipo para
                  evitar vulnerabilidades.
                  asimismo se deja en claro como identificar a una persona sospechosa y los procedimientos que deben llevarse a cabo.
                  el principal objetivo es involucrar a todos los departamentos y sus colaboradores del hotel en el sistema de seguridad, ayudando de esta
                  manera, al equipo de seguridad y prepararlos para afrontar situaciones peligrosas, utilizando procedimientos especificos para cada
                  departamento hotel.</ListItem>
                <br />
                <Heading fontFamily={'Fashion-Fetish-Light'} color={"whiteAlpha.900"} size="md" >SERVICIOS PERSONALIZADOS</Heading>
                <br />
                <ListItem>Conmat security realiza a través de sus profesionales una evaluación de la
                  persona, organización, propiedad o bien a proteger, con el que se identifica posibles
                  amenazas y riesgos a los que se enfrenta, para determinar los planes y sistemas que se
                  implementarán, los recursos humanos, barreras fisicas y sistemas tecnológicos
                  necesarios para minimizar al maximo los riesgos y amenazas existentes.
                  para conmat security es imprescindible la capacitación de nuestros colaboradores
                  que llevan adelante la funcion de seguridad, esto les permitirá minimizar y
                  neutralizar cualquier contingencia que se presente, siempre con el apoyo de las
                  herramientas tecnológicas.
                  la relacion con cada cliente es única y sus necesidades tambien, es por ello que
                  conocernos es fundamental para poder brindarle el mejor servicio personalizado.</ListItem>
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
