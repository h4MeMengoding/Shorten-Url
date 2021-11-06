import { ChangeEvent, useState } from 'react'
import { mutate } from 'swr'
import {
  FormControl,
  FormHelperText,
  Box,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  Button
} from '@chakra-ui/react'

import { checkSlug, saveUrl } from 'libs/supabase'
import { sanitizeSlug } from 'libs/helpers'

import { HOME, apiUrlsGet } from 'constants/paths'
import { useAlertContext } from 'context/Alert'
import { IUser } from 'interfaces/IUser'

export interface IUrlFormProps {
  user: IUser
  onSuccess: () => void
}

export function UrlForm({ user, onSuccess }: IUrlFormProps) {
  const { showAlert, hideAlert } = useAlertContext()

  const [url, setUrl] = useState<string>('')
  const [slug, setSlug] = useState<string>('')
  const [isCheckPass, setIsCheckPass] = useState<boolean>(false)
  const [errorUrl, setErrorUrl] = useState<boolean | string>(false)
  const [errorSlug, setErrorSlug] = useState<boolean | string>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChangeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUrl(value)
    setErrorUrl('')
  }

  const handleChangeSlug = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSlug(value)
    setErrorSlug('')
  }

  const resetErrorMessage = () => {
    setErrorUrl('')
    setErrorSlug('')
  }

  const checkIsEmpty = () => {
    resetErrorMessage()

    if (url === '') {
      setErrorUrl('URL dan slug tidak bisa dikosongkan')
      return true
    }

    if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1) {
      setErrorUrl('Pastikan URL dimulai dengan http:// atau https://')
      return true
    }

    if (slug === '') {
      setErrorSlug('URL dan slug tidak bisa dikosongkan')
      return true
    }

    return false
  }

  const handleCheckAvailability = async () => {
    setLoading(true)
    const isEmpty = checkIsEmpty()
    if (!isEmpty) {
      const response = await checkSlug({ slug: sanitizeSlug(slug) })
      if (response.error) {
        setIsCheckPass(true)
        resetErrorMessage()
      } else {
        setErrorSlug(`Slug ${slug} telah digunakan, coba slug lain`)
      }
    }
    setLoading(false)
  }

  const handleSaveNew = async () => {
    setLoading(true)
    const isEmpty = checkIsEmpty()
    if (!isEmpty) {
      const { error: errorInsert } = await saveUrl({
        url: url,
        slug: sanitizeSlug(slug),
        userId: user?.id
      })

      if (!errorInsert) {
        showAlert({
          title: 'Sukses menyimpan tautan baru',
          message: 'Tautan telah disimpan dalam basis data kami, silahkan mulai bagikan',
          onClose: () => {
            hideAlert()
            mutate(apiUrlsGet(user?.id))
            setUrl('')
            setSlug('')
            setIsCheckPass(false)
            resetErrorMessage()
            onSuccess()
          }
        })
      } else {
        showAlert({
          title: 'Terjadi galat pada saat berusaha menyimpan data',
          message: `Pesan: ${errorInsert.message}`,
          onClose: () => {
            hideAlert()
            setIsCheckPass(false)
            resetErrorMessage()
          }
        })
      }
    }
    setLoading(false)
  }

  return (
    <Box width={{ base: '100%' }}>
      <Stack spacing={4} direction={{ base: 'column' }}>
        <FormControl id="url" isRequired>
          <Input
            isRequired
            isInvalid={Boolean(errorUrl)}
            size="lg"
            name="url"
            placeholder={'Tautan yang ingin dipercantik'}
            variant="filled"
            value={url}
            onChange={handleChangeUrl}
          />
          {errorUrl && <FormHelperText color="red.500">Error: {errorUrl}</FormHelperText>}
          <FormHelperText>
            Hai, silahkan masuka tautan utuh ya, termasuk awalan 'https://' juga
          </FormHelperText>
        </FormControl>

        <FormControl id="slug" isRequired>
          <InputGroup size="lg">
            <InputLeftAddon
              color={'#008DEF'}
              fontWeight="bold"
              px={2}
              children={HOME?.replace('https://', '').replace('http://', '')}
              fontSize="xs"
            />
            <Input
              isRequired
              isInvalid={Boolean(errorSlug)}
              size="lg"
              name="slug"
              placeholder={'Slug cantik impianmu'}
              variant="filled"
              value={slug}
              onChange={handleChangeSlug}
            />
          </InputGroup>
          {errorSlug && <FormHelperText color="red.500">Error: {errorSlug}</FormHelperText>}
          <FormHelperText>
            Perlu diingat ya, hamsh hanya memperbolehkan menggunakan huruf, angka, karakter titik & strip saja
          </FormHelperText>
        </FormControl>

        {isCheckPass ? (
          <Button
            isLoading={loading}
            loadingText="Processing"
            size="lg"
            px={6}
            mt="4"
            color={'white'}
            bg={'green.400'}
            _hover={{
              bg: 'green.500'
            }}
            _focus={{
              bg: 'green.500'
            }}
            onClick={handleSaveNew}
          >
            Simpan sekarang
          </Button>
        ) : (
          <Button
            isLoading={loading}
            loadingText="Processing"
            size="lg"
            px={6}
            my="4"
            color={'white'}
            bg={'#008DEF'}
            _hover={{
              bg: '#00548E'
            }}
            _focus={{
              bg: '#00548E'
            }}
            onClick={handleCheckAvailability}
          >
            Cek dulu ya
          </Button>
        )}
      </Stack>
    </Box>
  )
}