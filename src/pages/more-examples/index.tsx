import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Link from 'next/link'

const Component = (props: any) => <p {...props} />

export default function MoreExamples() {
  const { t } = useTranslation('more-examples')
  const exampleWithVariable = t('example-with-variable', {
    exampleOfVariable: 42,
  })

  return (
    <>
      <h2>{exampleWithVariable}</h2>
      <Trans
        i18nKey="more-examples:example-with-html"
        components={[<Component />, <b style={{ color: 'red' }} />]}
      />
      <br />
      {t`nested-example.very-nested.nested`}
      <br />
      <br />
      <Link href="/more-examples/dynamic-namespace">
        <a>{t('dynamic-namespaces-link')}</a>
      </Link>
      <br />
      <Link
        href={{
          pathname: '/more-examples/dynamicroute/example',
          query: { another: 'another param' },
        }}
      >
        <a>{t('dynamic-route')}</a>
      </Link>
      <br />
      <Link href="/more-examples/catchall/this/is/an/example">
        <a>Catchall</a>
      </Link>
    </>
  )
}
