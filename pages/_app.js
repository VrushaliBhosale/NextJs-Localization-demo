import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from "../next-i18next.config";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
      // Will be passed to the page component as props
    },
  }
}


const App = (props) => {
  const {Component, pageProps, locale} = props;
  console.log(locale);
  return <Component {...pageProps} />
}

export default appWithTranslation(App, nextI18nextConfig);