import React from 'react'
import { Match } from '../../components/match'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { getAppLayout } from '@/components/layout'

export default function MatchPage() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('welcome')}</title>
      </Helmet>
      <Match />
    </>
  )
}

MatchPage.getLayout = getAppLayout
