import React, { FC } from 'react'
import Head from 'next/head'

interface CustomHeadProps {
  title: string
  description?: string
  children: React.ReactNode
}

const CustomHead: FC<CustomHeadProps> = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{`${title} | Asya Kreasi Dahayu`}</title>
        <meta
          name='description'
          content={description || 'INA-Agro Garlic'}
          key='description'
        />
      </Head>
      {children}
    </div>
  )
}

export default CustomHead
