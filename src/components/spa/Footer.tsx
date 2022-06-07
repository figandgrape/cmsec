import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  VStack,
  HStack,
  IconButton,
  Image,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Tooltip,
  useClipboard,
  useColorMode,
  Center,
  Divider,
} from "@chakra-ui/react";
import {
  FaCalendar,
  FaCode,
  FaCoffee,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSmile,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { ReactNode } from "react";
import image2 from "../images/logo-cmsec.png";
// import image3 from '../../../images/logo-g27-estirado.png';

import { FaWallet } from "react-icons/fa";
import {
  BsGithub,
  BsLinkedin,
  BsMoonFill,
  BsPerson,
  BsSunFill,
  BsCalendar2DateFill,
  BsTwitter,
  BsPersonBadge,
  BsCalendar2Date,
  BsCalendar2Day,
  BsCalendar2,
  BsCalendar2Event,
  BsCalendar2EventFill,
  BsCalendarXFill,
  BsCalendarCheckFill,
  BsSun,
  BsMoon,
  BsMoonStarsFill,
} from "react-icons/bs";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Logo = (props: any) => {
  const bgColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.400");
  return (
    <Stack direction={["column", "row"]} spacing="-16">
      <Box
        fontWeight={"500"}
        fontSize={"sm"}
        mb={2}
        display="inline-flex"
        alignItems="center"
        bgColor={useColorModeValue("blackAlpha.800", "blackAlpha.100")}
      >
        <Link href={"https://conmatsecurity.net"}>
          <Image src={image2} w="28" h="24"></Image>
        </Link>
      </Box>
    </Stack>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      fontFamily={"Fashion-Fetish-Regular"}
    >
      {children}
    </Text>
  );
};

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.400");
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={10}
        h={10}
        mb="6"
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.2s ease"}
        _hover={{
          bg: useColorModeValue("blue.200", "whiteAlpha.600"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    <Box
      bgColor={useColorModeValue("blackAlpha.800", "blackAlpha.800")}
      color={useColorModeValue("white", "white")}
    >
      {/* <Divider mb='4' maxW='full'/> */}
      <Container as={Stack} maxW={"8xl"} py={12} align="center" mb="-16">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={12}
          fontSize={"sm"}
        >
          <Stack align={"center"}>
            <Stack align={"center"}>
              <ListHeader>
                <Text
                  textDecorationLine={"underline"}
                  textTransform={"uppercase"}
                >
                  Servicios
                </Text>
              </ListHeader>
              <Text  
              // href={"/vigilancia"}
              >
                Seguridad Física
              </Text>
              <Stack direction={"row"} align={"center"} spacing={0}>
                <Text  
                // href={"/higiene"}
                >
                  Seguridad e Higiene
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"} spacing={0}>
                <Text  
                // href={"/electronica"}
                >
                  Seguridad Electrónica
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"} spacing={0}>
                <Text  
                // href={"/hoteleria"}
                >
                  Seguridad Hotelera
                </Text>
              </Stack>

              <Text  
              // href={"/custodia-p"}
              >
                Custodia de Personas
              </Text>
              <Stack direction={"row"} align={"center"} spacing={0}>
                <Text  
                // href={"/custodia-m"}
                >
                  Custodia de Bienes
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"} spacing={0}>
                <Text  
                // href={"/vulns"}
                >
                  CiberSeguridad
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"} spacing={0}>
                <Text  
                // href={"/asesoria"}
                >
                  Asesoramiento
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"} spacing={0}>
                <Text  
                // href={"/auditorias"}
                >
                  Auditorías
                </Text>
              </Stack>
              
              <br />
            </Stack>
          </Stack>
          <Stack align={"center"}>
            <Stack align={"center"}>
              <ListHeader>
                <Text
                  textDecorationLine={"underline"}
                  textTransform={"uppercase"}
                >
                  Valores
                </Text>
              </ListHeader>
              <Link  href={"/nosotros"}>
                Sobre Nosotros
              </Link>
              <Link  href={"/historia"}>
                Nuestra Historia
              </Link>
              <Link  href={"/valores"}>
                Nuestros Valores
              </Link>
              <Link
                
                href={"mailto:contacto@conmatsecurity.net"}
              >
                Contáctanos
              </Link>
              <br />
            </Stack>
          </Stack>
          <Stack align={"center"}>
            <Stack align={"center"}>
              <ListHeader>
                <Text
                  textDecorationLine={"underline"}
                  textTransform={"uppercase"}
                >
                  Informacion
                </Text>
              </ListHeader>
              {/* <Link  href={"/clientes"}>
                Nuestros Clientes
              </Link> */}
              {/* <Link  href={"/socios"}>
                Nuestros Asociados
              </Link> */}
              <Link  href={"/privacidad"}>
                Avisos de privacidad
              </Link>
              <Link  href={"/cookies"}>
                Política de Cookies
              </Link>

              <br />
            </Stack>
          </Stack>
          <VStack align={"center"}>
            <Stack align={"center"}>
              <ListHeader>
                <Text
                  fontSize={"md"}
                  textDecoration={"underline"}
                  textTransform={"uppercase"}
                >
                  Siguenos
                </Text>
              </ListHeader>
              <HStack direction={"row"} spacing={3} fontSize={"xl"}>
                {/* <SocialButton
                  label={"Twitter"}
                  href={"https://twitter.com/group_alphabet?lang=en"}
                >
                  <FaTwitter />
                </SocialButton> */}
                {/* <SocialButton
                  label={"LinkedIn"}
                  href={
                    "https://www.linkedin.com/company/alphabet-capital-group/"
                  }
                >
                  <FaLinkedin />
                </SocialButton> */}
                <SocialButton
                  label={"Instagram"}
                  href={
                    "https://www.instagram.com/conmatsecurity.ok/?igshid=YmMyMTA2M2Y%3D"
                  }
                >
                  <FaInstagram />
                </SocialButton>
                {/* <SocialButton
                  label={"Facebook"}
                  href={"https://www.facebook.com/alphabetcapitalgroup"}
                >
                  <FaFacebook />
                </SocialButton> */}
              </HStack>
              <Center>
                {/* <IconButton
                  mt={2}
                  mb='8'
                  rounded={"full"}
                  size={"md"}
                  fontSize="lg"
                  cursor={"pointer"}
                  variant="ghost"
                  as="a"
                  href="#"
                  aria-label={"ColorMode"}
                  bg={useColorModeValue("whiteAlpha.100", "whiteAlpha.100")}
                  _hover={{
                    bg: useColorModeValue("blue.200", "whiteAlpha.600"),
                  }}
                >
                  <FaHome fontSize={"20px"} />
                </IconButton> */}
              </Center>
            </Stack>
          </VStack>
        </SimpleGrid>
      </Container>
      <Box py={0}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("whiteAlpha.700", "whiteAlpha.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("whiteAlpha.700", "whiteAlpha.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Box px="2">
          <Text py={1} fontSize={"10px"} textAlign={"center"}>
            Todos los derechos reservados &copy; {new Date().getUTCFullYear()}
            {/* | Site developed by&nbsp; */}
            {/* <Link href="https://figandgrape.io" textAlign={"center"}>
              Zansys-Tech <br />
            </Link> */}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
