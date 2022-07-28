import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="text-center bg-gray-900 text-white">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6">
            <a
              rel="noreferrer"
              href="https://web.facebook.com/PlayVALORANT/"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                target="_blank"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>

            <a
              rel="noreferrer"
              href="https://twitter.com/playvalorant"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>

            <a
              rel="noreferrer"
              href="https://www.instagram.com/playvalorantofficial/"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="mb-6">
            <p>
              I'm sorry Riot Games for making this website, because I really
              love one of your games!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="178"
                viewBox="-67.88565 -36 588.3423 216"
              >
                <path
                  d="M73.33 130.566l-6.542-16.855 63.228 3.251-2.839 26.976zM88.48 0L0 41.797l13.684 62.983h18.048l-3.117-45.054 2.769-.858 10.852 45.912h18.75l-.694-54.88 2.77-.859 9.484 55.739h19.852l4.683-66.29 2.768-.86 4.913 67.15h26.251l9.24-92.183zm273.252 137.113l-.183-5.255 18.165-.214.167-5.727-18.547-.23-.185-5.32 24.435-.573.2-6.282H352.82L351.837 144h34.556l-.243-6.295zm-164.367-11.21l-.388 5.705 9.168.306-.116 5.791-19.189-.563.836-16.725 26.384-.61-.381-6.295h-34.08L176.543 144h38.83l-1.006-18.392zm240.52 2.36l-25.185-4.258.109-3.3 24.093-.899-.608-6.294h-30.97l-1.584 15.802 25.603 4.452.116 2.904-26.64 1.035-.653 6.295h37.285zM335.116 144l-3.056-30.488h-8.774l-12.604 14.533-12.605-14.533h-8.773L286.248 144h10.307l.986-19.779 13.141 13.484 13.14-13.484.988 19.779zM291.8 1.863h-20.628l-1.878 94.285h24.923zm63.917 73.777l-22.761.734-.755-55.45 23.806.72zm19.948-73.735h-64.312l-2.504 94.243h71.383zm76.906 20.592l-2.297-20.634h-63.365l.536 18.38 20.266.702 2.078 75.204h24.973l-7.47-74.527zm-244.969-1.346l19.878-.665 2.265 18.785-22.943 10.837zm23.223 74.997h27.07l-17.642-42.316 14.079-7.692-9.619-44.277h-69.104l-2.274 20.433 15.458-.516-7.454 74.368h24.193l.654-23.706 17.432-9.523zm13.166 34.111l2.096-9.975 10.064-.455 2.103 10.01zM261.231 144h10.436l-8.257-30.49h-24.487L230.667 144h10.436l1.616-7.692 16.941.219z"
                  fill="gray"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <a
            rel="noreferrer"
            className="text-white"
            href="https://tailwind-elements.com/"
          >
            © Hanif Fauzi Hakim 2022
          </a>
        </div>
      </footer>
    </>
  );
};
