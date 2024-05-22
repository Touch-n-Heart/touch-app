import React from 'react'
import { Signup } from '../../components/signup'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { getBackgroundMaskLayout } from '@/components/layout'

export default function Match() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('signup')}</title>
      </Helmet>
      <Signup />
    </>
  )
}

Match.getLayout = getBackgroundMaskLayout
