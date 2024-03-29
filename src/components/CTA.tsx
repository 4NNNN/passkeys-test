import { SimpleGrid, Icon, Text, Tag } from '@chakra-ui/react'
import { NavButton } from './NavButton'
import { CiCircleInfo, CiMoneyBill, CiBoxList, CiFlag1 } from 'react-icons/ci'


export const CTA = () => (
  <SimpleGrid columns={[1, 2, 2, 2]} spacing={2} mt={8}>
    <NavButton
      href="/introduction"
      variant="ghost"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >

      <Icon as={CiCircleInfo} mr="2" /><Text>Introduction to Passkeys</Text>
    </NavButton>
    <NavButton
      disabled
      opacity={0.5}
      href="/#"
      variant="solid"
      rounded="button"
      flexGrow={3}
      mx={2}
      width="full"
    >
      <Icon as={CiMoneyBill} mr="2" /><Text>Passkeys & Crypto</Text><Tag ml='2' colorScheme='yellow' variant='outline' size='sm'>Soon</Tag>
    </NavButton>
    <NavButton
      disabled
      opacity={0.5}
      href="/#"
      variant="solid"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >

      <Icon as={CiBoxList} mr="2" /><Text>Managing Passkeys (WIP)</Text>
    </NavButton>
    <NavButton
      href="/caveats"
      variant="ghost"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >

      <Icon as={CiFlag1} mr="2" /><Text>Passkeys' Caveats</Text>
    </NavButton>
  </SimpleGrid>
)
