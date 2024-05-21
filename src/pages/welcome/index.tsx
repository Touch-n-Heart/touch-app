import React from 'react'
import { Slash } from '../../components/splash'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { getBackgroundMaskLayout } from 'src/components/layout'

export default function Welcome() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('welcome')}</title>
      </Helmet>
      <Slash />
    </>
  )
}

Welcome.getLayout = getBackgroundMaskLayout
