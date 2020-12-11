import Head from 'next/head'
import { css } from '@emotion/react'
import React from 'react'
import { Button } from '../components/button'
import CardsSection from '../containers/homePage/cardsSection/cardsSection'
import { NavBar } from '../containers/homePage/navbar/navbar'
import styled from '@emotion/styled'

const style = css`
  color: #ff0051;
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="container">
        <main>
          <CardsSection />

          <h1 className="title">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
            <A>Hellllllooooo benjamin</A>
          </h1>

          <div className="col-md-6 col-lg-5">
            <div className="p-3 p-sm-5">
              <div className="login-form ml-lg-4">
                <h1 className="mb-3">Sign in</h1>
                <form className="pt-2">
                  <div className="mb-4">
                    <label className="form-label form-label-lg">Username</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value="fabrxdesign"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label form-label-lg">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value="••••••••••••••••"
                    />
                  </div>

                  <div className="mt-4 d-flex">
                    <div className="form-check form-check-sm mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label
                        className="form-check-label text-gray-600"
                        htmlFor="gridCheck"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="small text-gray-600 ml-auto mt-1">
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <p className="description">
            Get started by editing <code>pages/index.tsx</code>
          </p>

          <Button
            onClick={() => {
              window.alert('With typescript and Jest')
            }}
            className="bg-primary p-2 "
          >
            Test Button
          </Button>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  )
}

export default Home

export const A = styled.a`
  color: ${(p) => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`
