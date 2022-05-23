import Layout from "../components/layouts/Main"
import Chakra from "../components/Chakra"

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
