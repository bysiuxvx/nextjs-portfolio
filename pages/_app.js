import { ChakraProvider } from "@chakra-ui/react"
import Chakra from "../components/Chakra"

import Layout from "../components/layouts/Main"

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Chakra>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}
export default MyApp
