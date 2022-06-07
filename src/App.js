// import logo from './components/images/logo-cmsec.png';
// import underconstructionimage from './components/images/NicePng_under-construction-png_1526045.png';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import { Simple_ES } from './components/spa/NavBarHeader_ES.tsx';
import './fonts/Fashion-Fetish-Bold.ttf';
import './fonts/Fashion-Fetish-Heavy.ttf';
import './fonts/Fashion-Fetish-Italic.ttf';
import './fonts/Fashion-Fetish-Light-Italic.ttf';
import './fonts/Fashion-Fetish-Outline.ttf';
import './fonts/Fashion-Fetish-Regular.ttf';
import './fonts/Fashion-Fetish-Small-Caps.ttf';
import { Footer } from './components/spa/Footer.tsx';
import './App.css';
// import portada0 from '../src/components/images/monitoreo2.jpg'
// import portada0 from '../src/components/images/monitoreo.jpg'
// import CaptionCarousel from './components/spa/Carousel.tsx';
import { FaRedRiver } from 'react-icons/fa';
import {Landing} from './components/spa/Landing.js';
import { Vigilancia } from "./components/spa/Vigilancia";
import { Vulns } from "./components/spa/Vulns";
import { Electronica } from "./components/spa/Electronica";
import { CustodiaP } from "./components/spa/CustodiaP";
import { CustodiaM } from "./components/spa/CustodiaM";
import { Privacidad } from "./components/spa/Privacidad";
import { Cookies } from "./components/spa/Cookies";
import { Nosotros } from "./components/spa/Nosotros";
import { Historia } from "./components/spa/Historia";
import { Valores } from "./components/spa/Valores";
import { Servicios } from "./components/spa/Servicios";

const IndexPage = () => {
   return(
  <Router>
    <Switch>

    <Route path='/' exact>
      <Landing/>
    </Route>

    <Route path='/vigilancia' exact>
      <Vigilancia/>
    </Route>
    
    <Route path='/servicios' exact>
      <Servicios/>
    </Route>

    <Route path='/vulns' exact>
      <Vulns/>
    </Route>

    <Route path='/electronica' exact>
      <Electronica/>
    </Route>

    <Route path='/custodia-p' exact>
      <CustodiaP/>
    </Route>

    <Route path='/custodia-m' exact>
      <CustodiaM/>
    </Route>

    <Route path='/privacidad' exact>
      <Privacidad/>
    </Route>

    <Route path='/cookies' exact>
      <Cookies/>
    </Route>

    <Route path='/nosotros' exact>
      <Nosotros/>
    </Route>

    <Route path='/historia' exact>
      <Historia/>
    </Route>

    <Route path='/valores' exact>
      <Valores/>
    </Route>

    <Redirect to="/" />

    </Switch>
  </Router>
  )
}
export default IndexPage;
