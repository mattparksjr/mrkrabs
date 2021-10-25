import Head from 'next/head'
import Link from 'next/link'
import { DesktopComputerIcon, CubeIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import Donut from "./donut.js"

const name = "Matthew Parks"

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div class="bg-blue-800 text-blue-100 lg:w-1/6
                  py-7 px-2 fixed inset-y-0
                  left-0 transform  transition duration-200 ease-in-out">
                <Link href="/">
                    <a class="text-white flex items-center space-x-2 px-4">
                        <CubeIcon className="w-8 h-8" />
                        <span class="text-2xl font-extrabold">Mr. Krabs</span>
                    </a>
                </Link>
                <div class="h-2 rounded bg-gray-300 w-full space-x-2 my-4"/>
                <nav>
                    <Link href="/">
                        <a class="block py-2.5 px-4 rounded hover:bg-blue-900">Dashboard</a>
                    </Link>
                    <Link href="/">
                        <a class="block py-2.5 px-4 rounded hover:bg-blue-900">Assets</a>
                    </Link>
                    <Link href="/">
                        <a class="block py-2.5 px-4 rounded hover:bg-blue-900">Income</a>
                    </Link>
                    <Link href="/">
                        <a class="block py-2.5 px-4 rounded hover:bg-blue-900">Spending</a>
                    </Link>
                </nav>
                <div class="fixed left-0 bottom-0 w-full">
                    <p class="absolute py-2.5 px-4 rounded bottom-0">Mr. Krabs v0.0.1</p>
                    <ArrowLeftIcon className="md:invisible w-8 h-8"/>
                </div>
            </div>

            <div class="text-2xl font-bold flex w-5/6 float-right" >
                {children}
            </div>
        </div>

    )
}