import logo from '../../components/images/logo-cmsec.png';
import underconstructionimage from '../../components/images/NicePng_under-construction-png_1526045.png';
import {
  VStack,
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
// import portada0 from '../src/components/images/monitoreo.jpg'
import CaptionCarousel from '../../components/spa/Carousel.tsx';

export const Landing = () => {
  return (<>
    <Simple_ES /> 
    <div className='background-wrapper'>
    <Text
        // bgColor={'#585570'}
        textColor='#F26D35'
        textAlign={'center'}
        fontSize={'xl'}
        fontFamily={'Fashion-Fetish-Light'}
        >𝗦𝗨 𝗧𝗥𝗔𝗡𝗤𝗨𝗜𝗟𝗜𝗗𝗔𝗗 𝗘𝗦 𝗡𝗨𝗘𝗦𝗧𝗥𝗔 𝗠𝗔𝗬𝗢𝗥 𝗣𝗥𝗘𝗢𝗖𝗨𝗣𝗔𝗖𝗜𝗢́𝗡</Text>
      <Flex
        w='full'
        bgColor={useColorModeValue('blackAlpha.800', 'blackAlpha.800')}
      >
        
        {/* <CaptionCarousel/> */}
        <div className='back-image'>
        <Image src={portada0}/>
       
        </div>

      </Flex>
      <Divider
        borderRadius={'1px'}
        bgColor={'whiteAlpha.700'}
      ></Divider>

      <Flex
        bgColor={useColorModeValue('blackAlpha.800', 'blackAlpha.800')}
        justify={'center'}
      >
      </Flex>
      <Footer />
    </div>
  </>
  );
}
