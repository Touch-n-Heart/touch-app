import React from 'react'
import { Chat } from '../../components/chat'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { getAppLayout } from '@/components/layout'

export default function ChatPage() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('welcome')}</title>
      </Helmet>
      <Chat />
    </>
  )
}

ChatPage.getLayout = getAppLayout
