import logo from './components/images/logo-cmsec.png';
import underconstructionimage from './components/images/NicePng_under-construction-png_1526045.png';
import {
  VStack,
  Link,
  Image,
  Text,
  Center,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
// import './App.css';

export const Render = () => {
}

const IndexPage = () => {
  return (<>
    <Center bgGradient="linear(to-r, blackAlpha.500, gray.500, whiteAlpha.700, gray.500, blackAlpha.500)" m='4'>
      <VStack w='500px' h='500px' justify={'center'}><Image src={logo} /></VStack>
    </Center>
    <VStack spacing='4' py={1} bgGradient="linear(to-r, blackAlpha.500, gray.500, whiteAlpha.700, gray.500, blackAlpha.500)" m='4'>
      <Text fontSize={'3xl'} fontStyle='oblique' textAlign={'center'} textTransform='uppercase' color={useColorModeValue('black', 'white')}
      >Su tranquilidad es nuestra mayor preocupación</Text>
      {/* <Text fontSize={'3xl'} fontStyle='oblique' textAlign={'center'} textTransform='uppercase' color={useColorModeValue('black', 'white')}
      >Your safety is our most important concern </Text> */}
    </VStack>
    <VStack spacing='4' py={1} bgGradient="linear(to-r, orange.500, orange.700)" m='4' w={'auto'}>
      <Text fontSize={'3xl'} fontStyle='oblique' textAlign={'center'} textTransform='uppercase' color={useColorModeValue('black', 'white')}
      >Puede contactarnos <Button variant='link' color={useColorModeValue('orange.500', 'orange.500')} fontSize={'3xl'} as='a' href='mailto:contacto@conmatsecurity.net'>aquí</Button></Text>
      {/* <Text fontSize={'3xl'} fontStyle='oblique' textAlign={'center'} textTransform='uppercase' color={useColorModeValue('black', 'white')}
      >To contact us, you can do it <Button variant='link' color={useColorModeValue('orange.500', 'orange.500')} fontSize={'3xl'} as='a' href='mailto:contacto@conmatsecurity.net'>here</Button></Text> */}
    </VStack>
    <VStack mt={24}>
    <Center bgGradient="linear(to-r, blackAlpha.500, gray.500, whiteAlpha.700, gray.500, blackAlpha.500)" m='4'>
      <VStack w='auto' h='auto' justify={'center'}><Image src={underconstructionimage} /></VStack>
    </Center>
      <Text fontSize={'xl'} fontStyle='oblique' textAlign={'center'} textTransform='uppercase' color={useColorModeValue('black', 'white')}>Sitio en construcción</Text>
      {/* <Text fontSize={'xl'} fontStyle='oblique' textAlign={'center'} textTransform='uppercase' color={useColorModeValue('black', 'white')}>Site is under construction</Text> */}
    </VStack>
    <VStack mt={12}>
    <Text fontSize={'sm'} fontStyle='oblique' textAlign={'center'} textTransform='uppercase' color={useColorModeValue('black', 'white')} >
          <Link href="https://figandgrape.io" textAlign={"center"}>
          Site powered By Fig &amp; Grape<br />
          </Link>
          Copyright &copy; {new Date().getUTCFullYear()} 
        </Text>
    </VStack>
  </>
  );
}
export default IndexPage;
