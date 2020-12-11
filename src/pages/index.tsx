import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('home');
  const description = t('description');

  return (
    <>
      <div>{description}</div>
    </>
  );
}
