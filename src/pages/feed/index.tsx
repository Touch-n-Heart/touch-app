import React from 'react'
import { Feed } from '@/components/feed'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { getAppLayout } from '@/components/layout'

export default function FeedPage() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('feed')}</title>
      </Helmet>
      <Feed />
    </>
  )
}

FeedPage.getLayout = getAppLayout
