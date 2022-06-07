import {
  Image,
  useColorModeValue,
  Flex,
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
import portada0 from '../../components/images/monitoreo2.jpg'

export const CustodiaM = () => {
  return (
  <>
    <Simple_ES /> 
    <div className='background-wrapper'>
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
