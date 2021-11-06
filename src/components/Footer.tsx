import {
  Box,
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'

import {
  // login,
  tentang,
  blog,
  ketentuanLayanan,
  kebijakanPrivasi,
  splitbeeAnalytics
} from 'constants/paths'
export interface IFooterProps {
  withBacklink: boolean
}

export function Footer({ withBacklink }: IFooterProps) {
  const boxColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box color={boxColor} as="footer" width="100%">
            {withBacklink ? (
               <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" ><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc66"></stop><stop offset="95%" stop-color="#32ded466"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,100 0,100 C 38.99593843117158,86.33562033821102 77.99187686234316,72.67124067642202 117,68 C 156.00812313765684,63.328759323577984 195.02843098179886,67.65065763252294 231,69 C 266.97156901820114,70.34934236747706 299.8943992104614,68.7261287934863 345,79 C 390.1056007895386,89.2738712065137 447.39397217635553,111.44482719353186 485,106 C 522.6060278236445,100.55517280646814 540.5297120841162,67.49456243238626 578,63 C 615.4702879158838,58.50543756761375 672.4871794871796,82.57692307692308 714,91 C 755.5128205128204,99.42307692307692 781.5215699671658,92.19774525992143 824,90 C 866.4784300328342,87.80225474007857 925.4265406441571,90.63209588339123 966,105 C 1006.5734593558429,119.36790411660877 1028.7722674562053,145.2738712065137 1061,134 C 1093.2277325437947,122.72612879348631 1135.4843895310216,74.272419290554 1180,74 C 1224.5156104689784,73.727580709446 1271.2901744197081,121.63645163127029 1315,134 C 1358.7098255802919,146.3635483687297 1399.354912790146,123.18177418436485 1440,100 C 1440,100 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" ></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 38.59166524321965,191.5807976997096 77.1833304864393,183.1615953994192 115,178 C 152.8166695135607,172.8384046005808 189.85834329746245,170.9344161020327 236,183 C 282.14165670253755,195.0655838979673 337.38329632371085,221.10074019245002 378,218 C 418.61670367628915,214.89925980754998 444.6084714076943,182.66262312816716 481,175 C 517.3915285923057,167.33737687183284 564.1828180455124,184.2487672948813 607,194 C 649.8171819544876,203.7512327051187 688.6602564102564,206.34230769230766 720,202 C 751.3397435897436,197.65769230769234 775.1761563134621,186.38200193588796 821,175 C 866.8238436865379,163.61799806411204 934.6351183358954,152.12968456414052 977,164 C 1019.3648816641046,175.87031543585948 1036.2833703429558,211.09925980755 1075,226 C 1113.7166296570442,240.90074019245 1174.231400292281,235.47327620565957 1214,231 C 1253.768599707719,226.52672379434043 1272.79102848792,223.00763536981157 1307,218 C 1341.20897151208,212.99236463018843 1390.60448575604,206.49618231509422 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" ></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,300 0,300 C 51.25243029854428,296.5845954563571 102.50486059708857,293.1691909127142 140,289 C 177.49513940291143,284.8308090872858 201.23298791019,279.9078318055002 234,275 C 266.76701208981,270.0921681944998 308.5631877621515,265.199481865285 352,283 C 395.4368122378485,300.800518134715 440.5142610412041,341.2942407333599 485,333 C 529.4857389587959,324.7057592666401 573.3797680730323,267.6235552012754 605,262 C 636.6202319269677,256.3764447987246 655.9666666666666,302.21153846153845 699,308 C 742.0333333333334,313.78846153846155 808.753565260301,279.53029095257074 861,270 C 913.246434739699,260.46970904742926 951.0190722921294,275.66729772817854 981,286 C 1010.9809277078706,296.33270227182146 1033.1701455711816,301.80051813471505 1073,309 C 1112.8298544288184,316.19948186528495 1170.3003454231434,325.1306297329613 1211,314 C 1251.6996545768566,302.8693702670387 1275.6284727362447,271.6769629334396 1311,266 C 1346.3715272637553,260.3230370665604 1393.1857636318778,280.1615185332802 1440,300 C 1440,300 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)"></path></svg>
      ) : null}

      {withBacklink ? (
        <Box width="100%">
          <Container maxW={'5xl'}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={4}>
              <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Lebih banyak
                </Text>
                <Link href={tentang}>Tentang Hamsh.me</Link>
                <Link href={blog}>Blog</Link>
                <Link href={splitbeeAnalytics} target="_blank" rel="noopener noreferrer">
                  Statistik Hamsh.me
                </Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Kebijakan
                </Text>
                <Link href={kebijakanPrivasi}>Kebijakan Privasi</Link>
                <Link href={ketentuanLayanan}>Ketentuan Layanan</Link>
              </Stack>

              {/* <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Sumber daya
                </Text>
                <Link
                  href="https://github.com/mazipan/Hamsh.me/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laporkan Isu
                </Link>
                <Link
                  href="https://trakteer.id/mazipan/tip?utm_source=ksana"
                  target="_blank"
                  title="Dukung Hamsh.me"
                  rel="noopener noreferrer"
                >
                  Dukung Hamsh.me
                </Link>
              </Stack> */}

              {/* <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Karya lain
                </Text>

                <Link
                  href="https://www.baca-quran.id/?utm_source=ksana"
                  target="_blank"
                  title="Cek Baca-Quran.id"
                  rel="noopener noreferrer"
                >
                  Baca-Quran.id
                </Link>
                <Link
                  href="https://pramuka.online/?utm_source=ksana"
                  target="_blank"
                  title="Cek Pramuka.Online"
                  rel="noopener noreferrer"
                >
                  Pramuka.Online
                </Link>
              </Stack> */}
            </SimpleGrid>
          </Container>
        </Box>
      ) : null}

      <Box bg="#008DEF" width="100%">
        <Container maxW={'5xl'}>
          <Flex
            as={Stack}
            py={4}
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}
          >
            <Text>
              © 2021{' '}
              Build by {' '}
              <Link
                textDecoration="underline"
                href={'https://ilhamshf.space/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ilham Shofa
              </Link>
              {' '} Based on {' '}
              <Link
                textDecoration="underline"
                rel="noopener noreferrer"
              >
                Ksana in
              </Link>
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
