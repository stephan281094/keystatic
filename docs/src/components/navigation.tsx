'use client';

import Link from 'next/link';

import Button from './button';
import { useState } from 'react';
import { NavItem, NavList } from './sidenav';
import { XMarkIcon } from '@heroicons/react/24/outline';

type NavigationProps = {
  navigationMap?: {
    groupName: string;
    items: {
      label: string;
      href: string;
      title: string | undefined;
    }[];
  }[];
};

export default function Index({ navigationMap }: NavigationProps) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-keystatic-gray-light w-full">
      <div className="mx-auto max-w-7xl">
        <nav className="lg:h-24 py-6 px-6 flex flex-row items-center justify-between gap-6">
          <Link href="/">
            <svg
              className="h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 111 16"
            >
              <path
                fill="#000"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.103 2.126a1 1 0 0 0-1.754-.773l-6.111 7.2A1 1 0 0 0 2 10.2h4.365l-.468 3.674a1 1 0 0 0 1.754.773l6.111-7.2A1 1 0 0 0 13 5.8H8.635l.468-3.674Z"
              />
              <path
                fill="#000"
                d="M22.011 14V2.364h2.46v5.13h.154l4.188-5.13h2.948l-4.318 5.21L31.813 14h-2.944l-3.187-4.784-1.21 1.477V14h-2.46Zm11.032 0V2.364h7.84v2.028h-5.38v2.773h4.977v2.028h-4.977v2.779h5.403V14h-7.863Zm9.115-11.636h2.755l2.654 5.011h.113l2.654-5.011h2.755l-4.244 7.522V14h-2.443V9.886l-4.244-7.522ZM60.746 5.71c-.046-.458-.24-.814-.586-1.068-.344-.254-.812-.38-1.403-.38-.401 0-.74.056-1.017.17a1.43 1.43 0 0 0-.636.46c-.144.197-.216.42-.216.67a.957.957 0 0 0 .13.546c.099.155.233.29.404.403.17.11.367.207.59.29.224.08.463.148.717.205l1.045.25c.508.113.974.265 1.398.454.424.19.792.423 1.102.7.31.276.551.601.722.976.174.375.263.805.267 1.29-.004.712-.186 1.33-.546 1.852-.356.52-.87.923-1.545 1.21-.67.285-1.48.427-2.426.427-.94 0-1.758-.144-2.455-.432-.693-.288-1.235-.714-1.625-1.279-.386-.568-.589-1.27-.608-2.107h2.38c.027.39.14.716.336.977.2.257.468.453.801.585a3.18 3.18 0 0 0 1.142.193c.417 0 .779-.06 1.086-.181.31-.122.55-.29.721-.506.17-.216.256-.464.256-.744a.967.967 0 0 0-.233-.66c-.152-.178-.375-.33-.67-.454a6.816 6.816 0 0 0-1.074-.341l-1.267-.318c-.982-.239-1.756-.612-2.324-1.12-.569-.507-.85-1.19-.847-2.05-.004-.705.184-1.32.563-1.847.382-.527.907-.938 1.573-1.233.667-.296 1.425-.443 2.273-.443.864 0 1.618.147 2.261.443.648.295 1.152.706 1.512 1.233.36.526.545 1.136.557 1.83h-2.358Zm3.728-1.318V2.364h9.557v2.028H70.47V14h-2.432V4.392h-3.563ZM76.19 14h-2.636L77.57 2.364h3.17L84.751 14h-2.636L79.2 5.023h-.09L76.188 14Zm-.165-4.574h6.227v1.92h-6.227v-1.92Zm8.263-5.034V2.364h9.557v2.028H90.28V14H87.85V4.392h-3.562Zm13.59-2.028V14h-2.46V2.364h2.46Zm12.292 4.074h-2.489a2.427 2.427 0 0 0-.278-.858c-.14-.254-.32-.47-.54-.648a2.365 2.365 0 0 0-.761-.41 2.912 2.912 0 0 0-.926-.141c-.603 0-1.127.15-1.574.449-.447.295-.794.727-1.04 1.295-.246.564-.369 1.25-.369 2.057 0 .83.123 1.526.369 2.09.25.565.599.991 1.046 1.28.447.287.964.431 1.551.431.329 0 .634-.044.914-.13.285-.088.536-.215.756-.381.22-.17.402-.377.546-.62a2.41 2.41 0 0 0 .306-.83l2.489.012a4.484 4.484 0 0 1-.483 1.545 4.66 4.66 0 0 1-1.028 1.324c-.428.387-.94.694-1.534.92-.591.224-1.26.336-2.006.336-1.038 0-1.966-.235-2.784-.705-.815-.47-1.459-1.15-1.932-2.04-.47-.89-.705-1.967-.705-3.232 0-1.27.24-2.349.716-3.239.478-.89 1.125-1.568 1.944-2.034.818-.47 1.738-.704 2.761-.704a5.97 5.97 0 0 1 1.875.284c.579.189 1.093.466 1.54.83.447.359.81.8 1.091 1.323.284.523.465 1.121.545 1.795Z"
              />
            </svg>
          </Link>

          <div className="hidden lg:flex flex-row items-center gap-4 justify-between">
            <SocialLinks />
          </div>

          <Button
            onClick={() => setNavOpen(true)}
            impact="light"
            className="px-3 pt-2 pb-2 lg:hidden"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              Menu
            </div>
          </Button>

          <div
            onClick={prev => setNavOpen(!prev)}
            className={`fixed top-0 left-0 bottom-0 right-0 bg-stone-800/[.6] z-30 transition-opacity lg:hidden ${
              navOpen
                ? 'visible opacity-100'
                : 'invisible opacity-0 lg:visible lg:opacity-100'
            }`}
          />

          <ul
            className={`overflow-y-auto list-none fixed top-0 bg-white h-screen w-64 z-30 drop-shadow-2xl flex flex-col transition-[right] ${
              navOpen ? '-right-0' : '-right-full'
            }`}
          >
            {/* Close button */}
            <div className="sticky top-0 left-0 right-0 p-4 bg-white z-30 justify-end flex">
              <button
                type="button"
                className="flex items-center justify-center rounded-lg bg-keystatic-gray h-10 w-10 hover:bg-stone-300 hover:text-stone-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setNavOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-4 pb-10">
              <NavItem level="top" label="Home" href="/" />

              <div className="pt-6">
                {navigationMap?.map(({ groupName, items }) => (
                  <NavList key={groupName} title={groupName}>
                    {items.map(({ label, href, title }) => (
                      <NavItem
                        key={href}
                        label={label}
                        href={href}
                        title={title}
                        level="sub"
                      />
                    ))}
                  </NavList>
                ))}
              </div>

              <hr className="h-px my-3 mx-4 border-stone-400/20" />

              <div className="flex flex-row items-center gap-4 justify-center px-4 pt-6">
                <SocialLinks />
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <Link
        href="https://fosstodon.org/@keystatic"
        className="shrink-0 rounded-lg bg-keystatic-gray p-3 hover:bg-stone-300"
      >
        <span className="sr-only">Keystatic on Mastodon</span>
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
        >
          <g clipPath="url(#a)">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M11.941.206c1.776.262 3.275 1.617 3.506 3.336.1 1.023.05 2.56.027 3.306l-.011.39c0 .101-.015 1.017-.02 1.114-.156 2.457-1.688 3.427-3.297 3.736l-.058.013-.015.003c-1.02.199-2.114.252-3.151.281-.248.007-.495.007-.743.007a13.04 13.04 0 0 1-3.062-.364.035.035 0 0 0-.044.036c.029.326.1.647.212.955.139.357.624 1.213 2.427 1.213 1.049.002 2.093-.12 3.113-.364a.035.035 0 0 1 .016 0c.005.001.01.003.014.007a.036.036 0 0 1 .013.027v1.206a.038.038 0 0 1-.015.029c-.319.23-.747.367-1.123.486l-.05.016c-.17.054-.344.1-.519.142a8.792 8.792 0 0 1-4.796-.254c-1.442-.506-2.914-1.746-3.278-3.237a17.596 17.596 0 0 1-.41-2.454C.596 8.932.568 8.027.54 7.12.53 6.78.52 6.437.506 6.095c-.034-.87-.015-1.82.17-2.677C1.057 1.678 2.634.46 4.361.206a4.68 4.68 0 0 0 .12-.02C4.824.126 5.537 0 7.856 0h.02c2.63 0 3.766.161 4.065.206Zm.956 9.539V5.474c0-.873-.222-1.567-.667-2.08-.461-.513-1.064-.776-1.812-.776-.865 0-1.52.333-1.956.998l-.421.707-.422-.707c-.436-.665-1.09-.998-1.957-.998-.748 0-1.351.263-1.811.776-.446.514-.668 1.207-.668 2.08v4.27h1.691V5.6c0-.873.368-1.318 1.103-1.318.813 0 1.221.526 1.221 1.566v2.27h1.683v-2.27c0-1.04.407-1.566 1.22-1.566.74 0 1.103.445 1.103 1.318v4.145h1.693Z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      </Link>

      <Link
        href="https://github.com/thinkmill/keystatic"
        className="shrink-0 rounded-lg bg-keystatic-gray p-3 hover:bg-stone-300"
      >
        <span className="sr-only">Keystatic on GitHub</span>
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="#000"
            d="M8 0a8 8 0 0 0-2.529 15.591c.4.074.529-.174.529-.384v-1.49c-2.225.484-2.689-.944-2.689-.944-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.713 1.223 1.871.87 2.328.665.071-.517.279-.87.508-1.07-1.777-.203-3.645-.889-3.645-3.953 0-.874.313-1.588.824-2.148-.082-.202-.356-1.016.078-2.117 0 0 .672-.215 2.201.82A7.673 7.673 0 0 1 8 3.868c.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.161 1.916.079 2.117.513.56.823 1.274.823 2.148 0 3.072-1.871 3.749-3.653 3.947.287.248.549.735.549 1.481v2.196c0 .212.128.462.534.384A8.002 8.002 0 0 0 8 0Z"
          />
        </svg>
      </Link>

      <Link
        href="https://twitter.com/thekeystatic"
        className="shrink-0 rounded-lg bg-keystatic-gray p-3 hover:bg-stone-300"
      >
        <span className="sr-only">Keystatic on Twitter</span>
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
        >
          <g clipPath="url(#a)">
            <path
              fill="#000"
              d="M16 3.038a6.554 6.554 0 0 1-1.885.517 3.288 3.288 0 0 0 1.443-1.816 6.576 6.576 0 0 1-2.085.796A3.285 3.285 0 0 0 7.88 5.528 9.319 9.319 0 0 1 1.114 2.1a3.287 3.287 0 0 0 1.015 4.383 3.269 3.269 0 0 1-1.486-.41c-.036 1.52 1.054 2.943 2.633 3.26a3.29 3.29 0 0 1-1.483.055 3.285 3.285 0 0 0 3.067 2.28A6.6 6.6 0 0 1 0 13.027 9.293 9.293 0 0 0 5.032 14.5c6.095 0 9.538-5.147 9.33-9.764A6.684 6.684 0 0 0 16 3.038Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
}
