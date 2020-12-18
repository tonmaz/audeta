import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Nav from '../containers/homePage/navbar/navbar';
import { Button } from '../containers/Test';

export default function Home() {
  const { t } = useTranslation('home');
  const description = t('description');

  return (
    <>
      <div>
        <Nav />
        <div className="py-20">
          <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
            Next.js + Tailwind CSS 2.0
          </h1>
          <Button className="text-4xl text-white rounded p-52">
            small <br /> button
          </Button>
        </div>
      </div>
      <div className="text-4xl text-blue-400 text-center">{description}</div>
    </>
  );
}
