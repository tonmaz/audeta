import React from 'react'
import { CardWrapper, StCard } from '../../../components/card'
import { Button } from '../../../components/button'
import CardBs from './cardbs'

function CardsSection() {
  return (
    <div>
      {' '}
      <div className="container">
        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
        <CardWrapper className="row gap-4 min-vw-90 p-2">
          <StCard className="col-sm my-3 text-capitalize p-4 text-muted max-w-">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquam at corporis cum earum eligendi error fugiat, harum impedit
            maiores numquam omnis, pariatur perferendis quas quia sapiente
            veritatis voluptate voluptatum?
          </StCard>{' '}
          <StCard className="col-sm my-3  text-capitalize p-4 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquam at corporis cum earum eligendi error fugiat, harum impedit
            maiores numquam omnis, pariatur perferendis quas quia sapiente
            veritatis voluptate voluptatum?
          </StCard>{' '}
          <StCard className="col-sm my-3  text-capitalize p-4 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquam at corporis cum earum eligendi error fugiat, harum impedit
            maiores numquam omnis, pariatur perferendis quas quia sapiente
            veritatis voluptate voluptatum?
          </StCard>{' '}
          <StCard className="col-sm my-3  text-capitalize p-4 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquam at corporis cum earum eligendi error fugiat, harum impedit
            maiores numquam omnis, pariatur perferendis quas quia sapiente
            veritatis voluptate voluptatum?
          </StCard>
        </CardWrapper>
        <CardBs />
        <Button classname="btn-secondary w-100 my-3 py-2">Hellllllo</Button>
        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </div>
  )
}

export default CardsSection
