import useTranslation from 'next-translate/useTranslation'

export default function Error404() {
  const { t, lang } = useTranslation()

  return t`error:404`
}
