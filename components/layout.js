import Head from 'next/head'
import Link from 'next/link'

const name = "Matthew Parks"

export default function Layout({ children }) {
    return (
        <div>
            <Head>
            </Head>
            <div class="rounded-lg shadow bg-base-200 drawer drawer-mobile h-screen">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/> 
                <div class="flex flex-col items-center justify-center drawer-content">
                    <label for="my-drawer-2" class="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label> 
                    <div class="hidden text-xs text-center lg:block">
                        <main>{children}</main>
                    </div> 
                    <div class="text-xs text-center lg:hidden">
                        <main>{children}</main>
                    </div>
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label> 
                    <div class="menu flex flex-col p-4 overflow-y-auto w-60 h-full bg-base-100 text-base-content">
                        <div class="avatar flex justify-center">
                            <div class="rounded-full w-16 h-16 justify-center">
                                <img class="object-fill w-full" src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"/>
                            </div>
                        </div> 
                        <div class="flex justify-center">
                            <p>{name}</p>
                        </div>
                        <div class="divider"></div> 
                        <ul class="flex flex-col justify-right">
                            <li><Link href="/"><a>Dashboard</a></Link></li>
                            <li><Link href="/income"><a>Income</a></Link></li>
                            <li><Link href="/expenses"><a>Expenses</a></Link></li>
                            <li><Link href="/assets"><a>Assets</a></Link></li>
                        </ul>
                            <p class="text-gray-50">Mr. Krabs V0.0.1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}