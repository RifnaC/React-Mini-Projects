import { Link, NavLink } from "react-router-dom"


export default function Header() {
  return (
      <header className="shadow sticky z-50 top-0">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACUCAMAAADmiEg1AAAAclBMVEX///8PEhcAAACRkpX8/PxSU1Lm5+cAAwyUlZaYmJoNERX5+fkAAAXy8vIMDxXr6+xwcHO/v8FkZGaKi40pKivHyMmmqavZ2tvNzc83NzgZGhwwMTNKS07U1NWEhYfh4eMfICWvsLBZWVt6e3w9PkGgoKIlPGu2AAAEmklEQVR4nO2b63LqOgyFE2FwCeBACLcm3OH9X/FICSFO4pTdM3O2lTn6ZvqjbrtnVZW9LFk7CARBEARBEARBEARBEARBEARBEIT/DUr5VvDvGKRutT0HQ9S9gVQNUbgawdS13Pv9/6GWX6CCRfa9cSxv1tMWz9XOg8A+VLCDfNJdX4ODy3K1+PsS+3jCvXumjCDsYDTA4xp7EelgkcCqk7cu3QTAbcUly/dp1skUp26DHxFEro3sARVcIZm1FvviTephuWAS8SVsWys/6MZkWc4YCMc9OUmjc3PxR90h7mQOqGAFh+ZSQ3fUVI2fdv4+flBom1+NFVt31BYehvrAwoTQNh9N27R065fr6EamrNs72Qsq2MPNdpRatzlMt8jzfrGV6wuLgCNTOFmGUuvW4+r32T/ARHXAPelsU9jmG1v325TiuzbVX0Ff/J+EJQ3bdOme0e9WZ/jRj8w2ZJvkJ2UYnfEOgvPlFXATOu/tfkjqY9mtW6GzvnUvvWh0cc7SqtrsiTca1DtPbn5EdpmhqvGPuvGcr9dzFic4odS6ss2+eM846saTrrLNvnjH7/U5H92YIpVtTnt0W/mdeNPpYoS2ifp3mXboDoJbrfvO4A5eU9nmNTSmq3sTmbfuLSvdaJsHEjq7Qzfe57Hll9wadM8yU2Kt27rjvEqeKJynPjU6KWyTbraUE0aPz2qGLCZPsIoJbmmCTNJ0R6LWJNOY9H5C7om2Szf9OH/+h/4219LD4/LwMK96570jDXVRptyijZHGPVlcsDapCd00iyMmoCvmaJt4o332dCMM7H2LdFFWm5gIKne328qNy5EllQUq2H3rbqoYOPEUjXwBbMr7SEf3PHr6VtfPCHQal1u0HezH6vOPewPvsZgNuDXj1O73RAB3Lo0TJ6jb6Gvx0mNnyvy2Y5vaBVQ36KwI7cl294TrQfKiqHdetjm2hTPek0Sh28CV3Gf1XWeKvrB0nDdlfWlKlbZtAscLVc2rLoaEDsPAtk1G/R4HL92mtM1jfRhGISWPb3m9VH0IukGhyu3cSvF0z1d4pTuaZ/S03bBNlpfYF3XfB0706DexbNNQh58pte451sWKBlVqszeOh3EmtPtsyrZNFO4YoWBBUzcFN86hfg6EhNFAh42jr2nbptH86uICVz/WetOMtOlOCXHA2Udu2GbKMlO6ulXDNqkfy3Hw0BHvoi9hpTj6PT9culu2qR2DcN7ped+ZZHam5Fzmfmo+vwPSzfA0EN2o0s6UCNi1JEi3oc6raca7qjaLr2HlTI/0nGLelydN2wxptI2VbmvOtDmGWlywrNnTES/dm/VXxbZtjDkk0/dX13xriDbHy4Olx3/kSTU9p+z4QxYJS4//zDnNmEwp/YrXSNPgUDSvxLzB2cMkh+MAt6YKVlE+yMNQnWA0vHgTGWwGmClom/TiNkSeTMbuf8ss4Vc3/AEKbZPH2P3vUDSokvArjT9Besk2h6ab2B2A9fNaL6v5EG1TBTQJPMRECWbZnPcLch9HGK5tcuwofwSrzSEGXAW78wDjXfzv++HJLjSrAcZbEARBEARBEARBcPAPxoIyZ7ThQU8AAAAASUVORK5CYII="
                          className="mr-3 h-12"
                          alt="Logo"
                      />
                  </Link>
                  <div className="flex items-center lg:order-2">
                      <Link
                          to="#"
                          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </Link>
                      <Link
                          to="#"
                          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Get started
                      </Link>
                  </div>
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink 
                                  to="/"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700": "text-gray-70"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }>
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink 
                                  to="/about"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700": "text-gray-70"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }>
                                  About
                              </NavLink>
                          </li>
                          <li>
                              <NavLink 
                                  to="/contact"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700": "text-gray-70"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }>
                                  Contact
                              </NavLink>
                          </li>
                          <li>
                              <NavLink 
                                  to="/github"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700": "text-gray-70"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }>
                                  Github
                              </NavLink>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}


