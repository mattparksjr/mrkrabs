import Head from 'next/head'
import Link from 'next/link'
import { DesktopComputerIcon,CubeIcon, UserIcon} from '@heroicons/react/solid'

const name = "Matthew Parks"

export default function Layout({ children }) {
    return (
        <div>
            <Head>
            </Head>
            <div class="relative min-h-screen md:flex">
                {/*This is a comment*/}
                <div class="bg-gray-800 text-gray-100">
                    <UserIcon className="block w-8 h-8 text-white"/>
                    <a href="#" class="block p-4 text-white font-bold"></a>
                </div>

                <div class="bg-blue-800 text-blue-100 w-52
                 space-y-6 py-7 px-2 absolute inset-y-0
                  left-0 transform -translate-x-full transition duration-200 ease-in-out">
                    <Link href="/">
                        <a class="text-white flex items-center space-x-2 px-4">
                            <CubeIcon className="w-8 h-8"/>
                            <span class="text-2xl font-extrabold">Mr. Krabs</span>
                        </a>
                    </Link>
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
                </div>

                <div class="p-10 text-2xl font-bold flex-1">
                    {children}
                </div>
            </div>
        </div>
    )
}