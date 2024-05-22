import React from 'react'
import { Profile } from '../../components/profile'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { getAppLayout } from '@/components/layout'

export default function ProfilePage() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('welcome')}</title>
      </Helmet>
      <Profile />
    </>
  )
}

ProfilePage.getLayout = getAppLayout
