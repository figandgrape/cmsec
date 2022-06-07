import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  VisuallyHidden,
  Container,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure, Image,
  Center,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  FaAccessibleIcon,
  FaBitcoin,
  FaLink,
  FaMoneyBill,
  FaNetworkWired,
  FaPaperclip,
  FaSmile,
  FaWallet,
} from "react-icons/fa";
import image2 from '../images/logo-cmsec.png';
// import './fonts/Fashion-Fetish-Bold.ttf';
// import './fonts/Fashion-Fetish-Heavy.ttf';
// import './fonts/Fashion-Fetish-Italic.ttf';
// import './fonts/Fashion-Fetish-Light-Italic.ttf';
// import './fonts/Fashion-Fetish-Outline.ttf';
// import './fonts/Fashion-Fetish-Regular.ttf';
// import './fonts/Fashion-Fetish-Small-Caps.ttf';

export const Simple_ES = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box >
      <Flex
        bg={'black'}
        color={useColorModeValue("blackAlpha.900", "whiteAlpha.400")}
        textColor={useColorModeValue("gray.800", "whiteAlpha.500")}
        bgGradient={
          "linear(to-r, black, black, black, #918CB9, #F26D35, #FAA954)"
        }
        minH={"51px"}
        zIndex={20}
        top="0"
        w="full"
        h={0}
        py={{ base: 2, md: 0 }}
        px={{ base: 4, md: 0 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          px={{ base: 4, md: 8 }}

        >
          <IconButton
            onClick={onToggle}
            color={"whiteAlpha.900"}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              bg: "gray.700",
            }}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
          w='200px'
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"Fashion-Fetish-Bold"}
            color={useColorModeValue("gray.800", "white")}
            ml='1'
          >
            <Link target="_blank" href={"https://conmatsecurity.net"}>
              <Image alt="logoACG" src={image2} w='14' h='12'/>
            </Link>
          </Text>

          <Flex 
          display={{ base: "none", md: "flex" }} 
          ml={"auto"} 
          // mr={'px'} 
          px={"2"} 
          align='center'
          >
            <DesktopNav />
            <Flex align={'center'} justify='left' textAlign={'left'}
                    // marginLeft='96'                     
                    px={"6"}
                    // py={2}
                    // ml='auto'
                    // mr='52'
                    // h='12'
                    >
              
              <Menu placement="bottom-end">
                <MenuButton
                  rounded={"full"}
                  cursor={"pointer"}
                  minW={0}
                >
                  {/* <VisuallyHidden><Avatar size={"md"} bg={"blue.400"} src={image4} /></VisuallyHidden> */}
                </MenuButton>

                <MenuList
                  bgGradient={
                    "linear(to-l, black, gray.800, green.700, gray.800, black, black, black)"
                  }
                  textColor={useColorModeValue("whiteAlpha.700", "blackAlpha.900")}
                  bgColor={useColorModeValue("blackAlpha.900", "whiteAlpha.700")}
                >
                  <MenuItem
                    as="a"
                    href="kyc-form-es"
                    target={"_blank"}
                    // _hover={{ bg: useColorModeValue("green.700", "green.700") }}
                  >
                    Sign in
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    as="a"
                    href="login-es"
                    target={"_blank"}
                    // _hover={{ bg: useColorModeValue("green.700", "green.700") }}
                  >
                    Log in
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            {/* <Button
                    as='a'
                    rounded={"full"}
                    size={'sm'}
                    cursor={"pointer"}
                    variant='link'
                    px={-24}
                    mr={2}
                    href='/'
                    aria-label={"ColorMode"}
                    bgColor={useColorModeValue("blackAlpha.200", "blackAlpha.200")}
                    textColor={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
                  _hover={{ bg: useColorModeValue("green.700", "green.700")}}
                  >
                    <Image src={image6} h={'32px'} w={'32px'} rounded='full'/> 
                  </Button> */}
              {/* <IconButton
                    rounded={"full"}
                    size={'xs'}
                    fontSize='xs'
                    cursor={"pointer"}
                    variant='outline'
                    px={-24}
                    onClick={toggleColorMode}
                    aria-label={"ColorMode"}
                    bgColor={useColorModeValue("blackAlpha.700", "blackAlpha.700")}
                    textColor={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
                  _hover={{ bgGradient: "linear(to-r, black, #918CB9, black)" }}
                  >
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </IconButton> */}
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          direction={"row"}
          spacing={4}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
          </Flex>
          {/* <IconButton
            onClick={onToggle}
            color={"whiteAlpha.900"}
            
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              bg: "gray.700",
            }}
          /> */}

        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.200", "whiteAlpha.500");
  const linkHoverColor = useColorModeValue("blackAlpha.900", "whiteAlpha.800");
  const popoverContentBgColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const popoverContentBg2Color = useColorModeValue("blackAlpha.600", "whiteAlpha.600");
  const popoverTextBgColor = useColorModeValue("whiteAlpha.900", "blackAlpha.900");

  const bgColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");

  return (
    <Stack direction={"row"} spacing={-4} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={"hover"}  placement={"bottom-end"} >
            <Center>
            <PopoverTrigger >
              <Link
                position={'static'}
                px={5}
                py={1}
                mr={0}
                // href={navItem.href ?? "#"}
                fontSize={"xs"}
                fontFamily={'Fashion-Fetish-Regular'}
                textTransform='uppercase'
                textDecoration='none'
                fontWeight={600}
                variant={'unstyled'}
                color={'whiteAlpha.900'}
                rounded={"md"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
              

            {navItem.children && (
              <PopoverContent
                border={1}
                boxShadow={"xl"}
                bgColor={popoverContentBgColor}
                p={4}
                textColor={popoverTextBgColor}
                rounded={"lg"}
                minW={"sm"}
                _hover={{
                  bgGradient: 'linear(to-l, black,#918CB9,#918CB9,#918CB9,#918CB9,black)',
                  bgColor: "#918CB9",
                  transition: '.3s'
                }}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Center>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const popoverContentBgColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const dsubnavColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"lg"}
      target={'_blank'}
      // bg={dsubnavColor}
      _hover={{ bg: useColorModeValue("gray.500", "whiteAlpha.900"), bgColor: dsubnavColor }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: useColorModeValue("gray.700", "gray.700") }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} >{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blackAlpha.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("gray.300", "gray.600")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        variant='unstyled'
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
          
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "La Empresa",
    children: [
      {
        label: "Nuestra historia",
        subLabel: "Somos expertos en lo que hacemos",
        href: "/nosotros",
      },
      // {
      //   label: "Nuestra Trayectoria",
      //   subLabel: "Más de 20 años de trayectoria en Seguridad",
      //   href: "/trayectoria",
      // },
    ],
  },
  {
    label: "Servicios",
    children: [
      {
        label: "Todos los servicios de seguridad en un solo lugar",
        subLabel: "Conoce todo lo que tenemos para ofrecerte",
        href: "/servicios",
      },
      // {
      //   label: "Seguridad informática",
      //   subLabel:
      //     "Asesoría de necesidades. Consultoría de proyectos. Análisis de vulnerabilidades de sistemas requeridos",
      //   href: "/vulns",
      // },
      // {
      //   label: "Consultoría en Seguridad",
      //   subLabel:
      //     "Asesoría en todos los niveles de seguridad",
      //   href: "/",
      // },
      // {
      //   label: "Protección y Custodia Personal",
      //   subLabel:
      //     "Personal altamente especializado para su tranquilidad",
      //   href: "/custodia-p",
      // },
      // {
      //   label: "Custodia de mercaderías",
      //   subLabel:
      //     "Cuidamos tus productos tanto en tránsito como en almacenamiento",
      //   href: "/custodia-m",
      // },
      // {
      //   label: "Seguridad electrónica",
      //   subLabel:
      //     "Proveemos las mejores soluciones de todo tipo de seguridad electrónica. Consultanos!",
      //   href: "/electronica",
      // },
    ],
  },

  // {
  //   label: "Clientes",
  //   children: [
  //     {
  //       label: "Cliente 1",
  //       subLabel: "Alguna reseña del cliente 1",
  //       href: "/",
  //     },
  //     {
  //       label: "Cliente 2",
  //       subLabel: "Alguna reseña del cliente 2",
  //       href: "/",
  //     },
  //     {
  //       label: "Cliente 3",
  //       subLabel: "Alguna reseña del cliente 3",
  //       href: "/",
  //     },
  //   ],

  // },
  {
    label: "Contacto",
    href: '/contacto',
    // children: [
    //   {
    //     label: "¿Cómo conectar Metamask a esta web?",
    //     subLabel: "Te brindamos todos los tips para que puedas conectar tu billetera",
    //     href: "/metamask-es",
    //   },
    //   {
    //     label: "¿Cómo comprar el Token G27?",
    //     subLabel: "¡Te brindamos un paso a paso para que puedas adquirir tus G27!",
    //     href: "/ayuda-g27",
    //   },
    // ],
  },
  {
    label: "Sumate al equipo",
    children: [
      // {
      //   label: "Nuestros Equipos",
      //   subLabel:
      //     "Trabajamos 24-7-365 para su tranquilidad",
      //   href: "/equipos",
      // },
      {
        label: "Enviar CV",
        subLabel: "Puedes enviarnos tu cv aquí",
        href: "mailto:contacto@conmatsecurity.net",
      },
    ],
  },
];


{/* <Button
            mr={0}
            as="a"
            alignSelf={'center'}
            variant={"ghost"}
            bgColor={"green.800"}
            textColor={"gray.200"}
            size={"sm"}
            href={"/kyc-form"}
            target="_blank"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            Sign Up
          </Button>
          <Button
            mr={0}
            as="a"
            alignSelf={'center'}
            variant={"ghost"}
            colorScheme={"gray"}
            bgColor={"green.800"}
            textColor={"gray.200"}
            size={"sm"}
            href={"/login"}
            target="_blank"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            Sign In
          </Button> */}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //alphabetcapitalgroup.com/real-estate-developments/
// const Links = ["Buy Crypto", "Buy G27 Token", "Whitepaper", "About us"];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={4}
//     py={2}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.400", "gray.700"),
//     }}
//     href={"/login"}
//   >
//     {children}
//   </Link>
// );

// export const Simple = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { colorMode, toggleColorMode } = useColorMode();
//   const bgColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.400");

//   return (
//     <Box bg={"blackAlpha.900"} px={4}>
//       <Flex
//         textColor={"whiteAlpha.900"}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         bgColor="black"
//         zIndex={20}
//         w="full"
//         h={14}
//         pos="fixed"
//         top="0"
//         left="0"
//         flexDir="row"
//         _hover={{
//           bg: "green.500",
//           textColor: "whiteAlpha.800",
//           bgGradient:
//             "linear(to-l, black, black, gray.800, green.700, gray.800, green.800, gray.800, green.800, gray.800, green.700, gray.800, black, black, black)",
//         }}
//       >
//         <IconButton
//           size={"md"}
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label={"Open Menu"}
//           display={{ md: "none" }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <Box bgColor={bgColor} textColor={"whiteAlpha.700"}>
//           <Link target="_blank" href={"https://alphabetcapitalgroup.com"}>
//             <img alt="logoACG" src={image2}></img>
//           </Link>
//         </Box>

//         <HStack spacing={4} justifyContent={"center"} pr={44}>
//           <Button
//             as="a"
//             variant={"ghost"}
//             colorScheme={"gray"}
//             size={"sm"}
//             mr={4}
//             href={"/buy-crypto"}
//             target="_blank"
//             leftIcon={<FaBitcoin />}
//             _hover={{ bg: "whiteAlpha.400" }}
//           >
//             Invest in Crypto
//           </Button>
//           <Button
//             as="a"
//             variant={"ghost"}
//             colorScheme={"gray"}
//             size={"md"}
//             mr={6}
//             href={"/login"}
//             leftIcon={<FaMoneyBill />}
//             _hover={{ bg: "whiteAlpha.400" }}
//           >
//             Invest in G27
//           </Button>
//           <Button
//             variant={"ghost"}
//             colorScheme={"gray"}
//             size={"md"}
//             mr={6}
//             href={"https://g27.alphabetcapitalgroup.com/about-us/"}
//             leftIcon={<FaPaperclip />}
//             _hover={{ bg: "whiteAlpha.400" }}
//           >
//             Whitepaper
//           </Button>
//           <Button
//             as="a"
//             variant={"ghost"}
//             colorScheme={"gray"}
//             size={"md"}
//             mr={6}
//             href={"/about-us"}
//             leftIcon={<FaNetworkWired />}
//             target="_blank"
//             _hover={{ bg: "whiteAlpha.400" }}
//           >
//             About Us
//           </Button>
//         </HStack>

//         <Flex alignItems={"center"}>
//           <Menu>
//             <IconButton
//               onClick={toggleColorMode}
//               aria-label={"ColorMode"}
//               margin={2}
//               bgColor={useColorModeValue("blackAlpha.700", "blackAlpha.700")}
//               textColor={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
//               _hover={{ bg: useColorModeValue("green.900", "green.900") }}
//             >
//               {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//             </IconButton>
//             <MenuButton
//               as={Button}
//               rounded={"full"}
//               variant={"link"}
//               cursor={"pointer"}
//               minW={0}
//             >
//               <Avatar size={"md"} bg={"blue.400"} src={image4} />
//             </MenuButton>
//             <MenuList
//               bgGradient={
//                 "linear(to-l, black, gray.800, green.700, gray.800, black, black, black)"
//               }
//               bgColor={useColorModeValue("blackAlpha.700", "blackAlpha.300")}
//             >
//               <MenuItem
//                 as="a"
//                 href="kyc-form"
//                 target={"_blank"}
//                 _hover={{ bg: useColorModeValue("green.700", "green.700") }}
//               >
//                 Sign in
//               </MenuItem>
//               <MenuDivider />
//               <MenuItem
//                 as="a"
//                 href="login"
//                 target={"_blank"}
//                 _hover={{ bg: useColorModeValue("green.700", "green.700") }}
//               >
//                 Log in
//               </MenuItem>
//               <MenuDivider />
//               <MenuItem
//                 as="a"
//                 href="whitepaper"
//                 target={"_blank"}
//                 _hover={{ bg: useColorModeValue("green.700", "green.700") }}
//               >
//                 Whitepaper
//               </MenuItem>
//               <MenuDivider />
//               <MenuItem
//                 as="a"
//                 href="about-us"
//                 target={"_blank"}
//                 _hover={{ bg: useColorModeValue("green.700", "green.700") }}
//               >
//                 About us
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </Flex>
//       </Flex>

//       {isOpen ? (
//         <Box pb={4} display={{ md: "none" }}>
//           <Stack as={"nav"} spacing={4}>
//             {Links.map((link) => (
//               <NavLink key={link}>{link}</NavLink>
//             ))}
//           </Stack>
//         </Box>
//       ) : null}
//     </Box>
//   );
// };
