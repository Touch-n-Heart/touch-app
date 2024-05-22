import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Hero } from '@/components/hero'

export default function Home() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Hero />
    </>
  )
}
