import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Income() {
    return (
        <Layout>
            <Head>
               <title>Income</title>
            </Head>
            <h1>The income page</h1>
            <Link href="/">
                <a>back to home</a>
            </Link>
        </Layout>
    )
}