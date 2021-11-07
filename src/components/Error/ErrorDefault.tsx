import Image from 'next/image'
import { Stack, Button, Heading } from '@chakra-ui/react'

export interface IErrorDefaultProps {
  title: string
  ctaLink: string
  ctaText: string
}
export function ErrorDefault({ title, ctaLink, ctaText }: IErrorDefaultProps) {
  return (
    <Stack as="section" spacing={8} mx={'auto'} mt="20" maxW={'lg'} py={12} px={6}>
      <Stack align={'center'} spacing={8}>
        <Heading
          fontWeight={700}
          fontSize={{ base: 'xl', md: '2xl' }}
          lineHeight={'110%'}
          textAlign="center"
          as="h3"
        >
          {title}
        </Heading>
        <Image
          width={1086}
          height={588}
          src={'/images/illustrations/people.gif'}
          alt="lari ada wibu"
        />
        <Button
          px={6}
          size="lg"
          color={'white'}
          bg="#008DEF"
          _hover={{
            bg: '#00548E'
          }}
          as={'a'}
          href={ctaLink}
        >
          {ctaText}
        </Button>
      </Stack>
    </Stack>
  )
}

ErrorDefault.defaultProps = {
  title: 'Terjadi kesalahan pada sistem',
  ctaLink: '/auth/sign-in',
  ctaText: 'Masuk'
}
