import React from "react";
import styled, { keyframes } from 'styled-components';

const stroke = keyframes `
  0% {
    fill: transparent;
    stroke-dasharray: 100 200;
    stroke-dashoffset: 400;
  }

  50% {
    stroke: #197278;
    stroke-dashoffset: 0;
    stroke-width: 1px;
  }

  100% {
    stroke: #197278;
    stroke-dashoffset: 0;
    stroke-width: 4px;
  }
`

const StyledSvgRight = styled.svg`
  position: absolute;
  right: 1%;
  top: -1.5%;
  width: 26%;
  fill: transparent;
  opacity: .8;
  transform: scaleX(-1);
  animation: 3.2s ${stroke} .3s linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  `

function Icon() {
  return (
    <StyledSvgRight
      xmlns="http://www.w3.org/2000/svg"
      width="1222.66"
      height="1048.371"
      viewBox="0 0 1222.66 1048.371"
    >
      <path
        d="M1616.959 6249.608a8.648 8.648 0 010 17.293 89.815 89.815 0 01-60.882-23.323c-15.873-14.613-25.677-34.867-25.677-57.26 0-32.316 14.175-61.562 37.115-82.681 22.706-20.923 53.985-33.872 88.468-33.872a133.12 133.12 0 0151.863 10.4c4.732-23.431 4.817-43.3 1.358-59.94-4.287-20.622-14.09-36.379-27.29-48.008-19.926-17.552-42.653-27.6-65.762-31.105a129.814 129.814 0 00-66.123 7.5 138.276 138.276 0 00-55.492 39.536c-16.764 19.735-28.733 44.982-33.04 74.64-.191 1.361-.382 2.745-.573 4.106a127.874 127.874 0 01-1.528 15.347q-.732 10.181-.722 20.665a311.761 311.761 0 0010.738 80.973c.043.13.064.26.106.367a254.575 254.575 0 0023.852 58.73c22.791 40.054 56.977 70.1 102.813 77.017a139.639 139.639 0 0020.754 1.513c40.977 0 77.985-15.239 104.723-39.881 26.5-24.426 42.908-58.146 42.908-95.347 0-27.279-12.032-51.986-31.47-69.927a108 108 0 00-22.748-16.04 11.38 11.38 0 01-.912-.475 116.052 116.052 0 00-53.476-12.818c-30.2 0-57.465 11.219-77.136 29.333-19.459 17.919-31.47 42.647-31.47 69.927 0 17.336 7.661 33.072 20.053 44.485a72.823 72.823 0 0049.529 18.806zm585.728 90.311a5.315 5.315 0 015.9-4.669 5.374 5.374 0 014.583 6.009l-3.374 26.89a5.315 5.315 0 01-5.9 4.669 5.373 5.373 0 01-4.584-6.009zm-73.762-363.729l28.987 90.852h93.795a8.565 8.565 0 018.488 8.646 8.673 8.673 0 01-3.883 7.263l-75.5 55.877 28.988 90.872a8.67 8.67 0 01-5.432 10.873 8.36 8.36 0 01-7.6-1.21l-75.885-56.158-75.883 56.157a8.382 8.382 0 01-11.841-1.924 8.683 8.683 0 01-1.1-8l28.9-90.592-75.885-56.158a8.722 8.722 0 01-1.889-12.062 8.39 8.39 0 016.854-3.566v-.021h93.795l28.987-90.852a8.429 8.429 0 0110.674-5.534 8.536 8.536 0 015.43 5.537zm34.5 108.144l11.884 37.222 50.314-37.222h-62.2zm-10.186 23.95l-7.64-23.95h-49.459l-15.279 47.9 40.021 29.614 40.022-29.614-7.64-23.95zm-13.157-41.243l-19.226-60.265-19.226 60.265zm45.518 142.729l-19.226-60.265-31.109 23.021zm-79.174-37.244l-31.11-23.021-19.225 60.265zm-90.314-88.192l50.314 37.222 11.883-37.222h-62.2zm-69.264 166.031a238.69 238.69 0 006.6 8.8l8.255-6.788q-3.246-4.118-6.281-8.365zm292.27 54.3a216.715 216.715 0 008.913-6.333l-6.3-8.689q-4.17 3.113-8.488 6.031zm17.528-13.121q4.2-3.5 8.255-7.219l-7.13-8a183.518 183.518 0 01-7.851 6.852l6.727 8.344zm16.127-14.85a203.174 203.174 0 007.491-8.02l-7.894-7.22a199.51 199.51 0 01-7.13 7.63l7.512 7.63zm14.578-16.428q3.438-4.28 6.663-8.754l-8.552-6.376q-3.055 4.247-6.345 8.322zm12.9-17.833c1.995-3.091 3.926-6.2 5.772-9.4l-9.146-5.469a199.27 199.27 0 01-5.475 8.927l8.87 5.944zm11.056-19.065q2.515-4.928 4.817-9.943l-9.656-4.5a214.398 214.398 0 01-4.562 9.446l9.422 4.993zm9.1-20.1c1.358-3.437 2.61-6.9 3.8-10.4l-10.037-3.5a212.077 212.077 0 01-3.607 9.878zm7.066-20.967c1-3.545 1.931-7.134 2.737-10.744l-10.334-2.4a238.844 238.844 0 01-2.589 10.181l10.207 2.962zm4.923-21.573a238.954 238.954 0 001.655-10.959l-10.525-1.318c-.446 3.48-.955 6.938-1.571 10.4zm2.759-21.983c.276-3.674.467-7.371.552-11.067l-10.61-.259a216.696 216.696 0 01-.531 10.526zm.573-22.135l-.043-1.815-.042-1.4-.064-1.405-.063-1.4-.064-1.405-.085-1.4-.085-1.384-.064-.864-10.589.821.063.8.085 1.319.085 1.318.063 1.34.064 1.34.063 1.34.043 1.34.042 1.751 10.61-.281zm-1.592-22.091l-.063-.54-.17-1.362-.191-1.362-.191-1.362-.191-1.362-.212-1.362-.212-1.362-.233-1.362-.148-.886-10.441 1.9.149.821.212 1.275.212 1.3.191 1.3.191 1.3.191 1.3.17 1.3.17 1.3.063.541 10.525-1.362zm-3.777-21.81l-.361-1.622-.318-1.318-.318-1.318-.319-1.318-.339-1.318-.34-1.3-.361-1.3-.34-1.253-10.207 2.961.318 1.189.34 1.232.318 1.232.318 1.253.318 1.253.3 1.254.3 1.254.361 1.556 10.334-2.421zm-5.942-21.334l-.34-.995-.424-1.275-.446-1.253-.446-1.254-.446-1.253-.467-1.253-.467-1.254-.488-1.254-.233-.6-9.846 4.021.212.541.446 1.188.446 1.188.446 1.189.424 1.188.424 1.189.424 1.189.4 1.21.34.995 10.037-3.523zm-8.021-20.579l-.658-1.47-.552-1.21-.573-1.188-.573-1.189-.573-1.189-.573-1.189-.594-1.189-.679-1.361-9.379 5.036.637 1.232.552 1.124.551 1.124.552 1.125.552 1.146.531 1.146.531 1.146.637 1.405 9.634-4.518zm-10.058-19.649l-.319-.562-.658-1.146-.679-1.124-.679-1.124-.679-1.124-.679-1.124-.7-1.1-.7-1.1-.636-.995-8.87 5.944.594.951.658 1.06.658 1.059.658 1.059.658 1.06.636 1.081.637 1.081.637 1.081.318.562 9.125-5.49zm-11.947-18.524l-.509-.713-.764-1.059-.785-1.06-.785-1.038-.785-1.037-.785-1.038-.806-1.037-.807-1.016-.615-.757-8.233 6.831.573.713.764.973.764.973.764.994.743.994.743.994.743.995.743.995.509.713zm-13.708-17.185l-.7-.778-.87-.973-.87-.973-.891-.951-.891-.951-.891-.951-.891-.951-.912-.93-.573-.583-7.512 7.652.509.541.849.886.849.886.849.908.849.908.828.908.828.907.828.93.7.778 7.852-7.263zm-15.343-15.693l-.891-.821-.955-.865-.976-.865-.976-.864-.976-.865-.976-.843-1-.843-1-.843-.488-.411-6.706 8.387.446.367.934.8.934.8.934.8.934.822.934.821.912.822.913.821.891.822 7.088-8.042zm-16.785-14.029l-1.125-.843-1.04-.778-1.061-.756-1.061-.757-1.061-.756-1.061-.757-1.061-.735-1.443-.973-5.836 9.036 1.337.908 1.018.714 1.019.713 1 .713 1 .713 1 .735 1 .735 1.082.821 6.3-8.689zm-18.123-12.256l-1.422-.843-1.125-.67-1.125-.648-1.125-.648-1.135-.651-1.146-.627-1.146-.627-1.294-.691-4.9 9.6 1.167.627 1.082.6 1.082.6 1.082.605 1.082.627 1.083.626 1.061.627 1.358.822 5.39-9.3zm-19.247-10.333l-.637-.3-1.188-.562-1.188-.541-1.188-.54-1.21-.54-1.209-.519-1.21-.519-1.209-.519-.934-.389-3.947 10.03.87.368 1.146.475 1.146.5 1.146.5 1.146.5 1.146.519 1.125.519 1.125.519.637.3 4.435-9.813zm-20.181-8.279l-1.167-.411-1.237-.437-1.252-.411-1.252-.411-1.252-.41-1.273-.39-1.273-.389-1.655-.5-2.907 10.4 1.528.454 1.21.368 1.209.367 1.188.39 1.188.389 1.188.389 1.188.411 1.167.411 3.4-10.246zm-20.881-6.139l-.679-.151-1.294-.3-1.294-.3-1.316-.281-1.315-.281-1.316-.259-1.316-.259-1.316-.259-.806-.151-1.867 10.635.742.129 1.252.237 1.252.238 1.252.259 1.252.259 1.252.281 1.231.281 1.231.281.679.151 2.377-10.527zm-21.39-3.956l-1.783-.238-1.358-.151-1.358-.151-1.358-.151-1.358-.13-1.358-.13-1.358-.108-.912-.064-.806 10.786.827.064 1.295.108 1.294.129 1.294.13 1.295.13 1.294.151 1.273.151 1.273.151.446.065 1.337-10.721zm-21.687-1.729l-.594-.022-1.379-.021-1.38-.021-1.379-.021h-2.759l-1.379.021-1.38.021-.594.021.276 10.808.531-.021 1.316-.022 1.315-.021h2.631l1.316.021 1.316.022 1.316.021.594.021.276-10.808zm-21.751.476l-.913.065-1.358.108-1.358.108-1.358.129-1.358.13-1.358.151-1.358.151-1.358.151-.424.043 1.337 10.722 1.634-.194 1.294-.151 1.294-.13 1.294-.129 1.294-.13 1.294-.108 1.294-.108.913-.065-.806-10.786zm-21.582 2.7l-.849.151-1.316.237-1.316.259-1.316.26-1.315.259-1.316.281-1.315.281-1.295.3-.636.151 2.376 10.526.573-.129 1.231-.281 1.252-.281 1.252-.259 1.252-.259 1.252-.238 1.252-.237 1.252-.238.849-.151zm-21.2 4.906l-.446.13-1.273.368-1.273.389-1.273.389-1.273.39-1.252.41-1.252.411-1.252.411-1.1.367 3.4 10.246 1.04-.346 1.188-.39 1.188-.389 1.188-.389 1.209-.367 1.209-.368 1.21-.367 1.209-.346.446-.129-2.907-10.4zm-20.626 7.09l-1 .411-1.21.5-1.21.519-1.21.519-1.21.519-1.209.54-1.188.541-1.188.541-.573.259 4.435 9.813.509-.238 1.125-.519 1.146-.519 1.146-.5 1.146-.5 1.146-.5 1.146-.475 1.146-.476 1-.411zm-19.777 9.187l-1.358.735-1.146.627-1.146.627-1.146.627-1.146.648-1.125.648-1.125.648-1.358.8 5.39 9.295 1.252-.735 1.082-.627 1.082-.627 1.082-.6 1.082-.605 1.082-.605 1.082-.583 1.294-.691-4.9-9.6zm-18.78 11.176l-.446.3-1.082.735-1.082.735-1.061.735-1.061.757-1.061.756-1.061.757-1.061.756-1.04.778 6.26 8.733 1-.735 1-.735 1-.713 1-.713 1.019-.713 1.019-.713 1.019-.691 1.019-.692.446-.3-5.836-9.035zm-17.571 13.056l-.573.476-1 .843-1 .843-1 .843-.976.843-.976.865-.976.864-.976.865-.827.756 7.088 8.042.785-.713.912-.822.934-.821.934-.822.934-.8.934-.8.933-.8.955-.8.573-.475-6.706-8.387zm-16.179 14.785l-.637.648-.912.929-.913.93-.891.951-.891.951-.891.951-.891.951-.87.973-.637.713 7.852 7.263.594-.67.828-.907.828-.908.849-.908.849-.908.849-.886.849-.886.87-.887.637-.648-7.512-7.651zm-14.642 16.363l-.658.821-.806 1.016-.806 1.017-.806 1.038-.785 1.037-.785 1.038-.785 1.038-.785 1.059-.467.627 8.531 6.42.425-.583.742-.994.743-.995.743-.994.764-.995.764-.973.764-.973.764-.973.658-.822-8.234-6.83zm-12.966 17.79l-.7 1.059-.7 1.1-.7 1.1-.7 1.1-.679 1.124-.679 1.125-.679 1.124-.679 1.124-.276.476 9.125 5.49.891-1.492.637-1.081.658-1.059.658-1.06.658-1.059.658-1.059.679-1.059.7-1.059-8.87-5.944zm-11.12 19l-.743 1.426-.594 1.189-.594 1.189-.573 1.189-.573 1.189-.573 1.189-.573 1.188-.637 1.384 9.634 4.518.594-1.275.53-1.146.552-1.146.552-1.125.552-1.124.552-1.124.573-1.125.7-1.362zm-9.188 20.1l-.255.648-.488 1.232-.488 1.253-.467 1.254-.467 1.253-.446 1.254-.446 1.254-.446 1.253-.318.952 10.037 3.523.3-.886.424-1.188.424-1.189.424-1.188.446-1.189.446-1.189.446-1.189.467-1.188.255-.649zm-7.13 20.924l-.382 1.34-.361 1.3-.361 1.3-.34 1.3-.339 1.318-.318 1.318-.318 1.318-.361 1.557 10.334 2.421.339-1.427.3-1.254.318-1.253.318-1.253.318-1.233.34-1.232.339-1.232.361-1.253zm-5.008 21.594l-.17.93-.234 1.339-.233 1.362-.212 1.362-.212 1.362-.191 1.362-.191 1.362-.191 1.362-.064.519 10.525 1.362.234-1.75.191-1.3.191-1.3.191-1.3.212-1.3.212-1.275.212-1.275.17-.93zm-2.822 21.961l-.064.865-.106 1.383-.085 1.384-.085 1.4-.064 1.405-.064 1.4-.064 1.405-.064 1.815 10.61.281.064-1.665.064-1.34.064-1.34.064-1.34.085-1.318.085-1.319.085-1.319.063-.864-10.589-.821zm-.658 22.135c.063 3.7.233 7.371.488 11.067l10.589-.756c-.234-3.5-.382-7.025-.467-10.527l-10.61.238zm1.528 22.091c.446 3.675.955 7.306 1.57 10.959l10.462-1.837a241.24 241.24 0 01-1.507-10.44zm3.692 21.832q1.178 5.416 2.653 10.743l10.207-2.918a187.602 187.602 0 01-2.525-10.2l-10.356 2.377zm5.857 21.335q1.719 5.252 3.735 10.419l9.868-3.977a210.036 210.036 0 01-3.522-9.878l-10.059 3.437zm7.958 20.622a236.579 236.579 0 004.732 9.965l9.422-4.951q-2.355-4.7-4.5-9.489zm9.974 19.692q2.738 4.8 5.708 9.425l8.891-5.9a214.234 214.234 0 01-5.433-8.97zm-19.311 54.666c-4.8-6.074-12.732-16.125-13.815-17.617-14.239-19.583-24.849-42.323-31.958-66.792a286.666 286.666 0 01-10.907-80.238 269.178 269.178 0 0176.84-188.706c47.364-48.246 112.744-78.076 185.042-78.076 72.32 0 137.806 29.852 185.191 78.141a268.482 268.482 0 0176.712 188.641 271.267 271.267 0 01-9.21 70.294 31.184 31.184 0 014.117-1.3 29.013 29.013 0 0117.549.995 30.071 30.071 0 0113.411 10.4c5.22 7.111 7.937 16.8 6.6 27.517a8.616 8.616 0 01-.148 3.523c-4.457 17.7-20.393 57.714-39.47 99.541-16.637 36.509-35.714 74.553-51.651 100.471-21.263 34.628-63.789 48.246-108.119 62.469-20.159 6.463-40.7 13.056-59.142 21.638-25.4 12.753-61.836-.108-85.879-8.582-1.592-.562 2.631.93-4.18-1.448-18.356-6.4-36.011-12.018-53.476-17.012a965.872 965.872 0 00-52.415-13.423c-27.183-6.161-52.287-3.674-76.627 3.372-24.849 7.2-49.147 19.195-74.038 31.667a8.383 8.383 0 01-11.332-3.913 8.684 8.684 0 013.841-11.543c25.634-12.84 50.675-25.226 76.946-32.813 26.759-7.738 54.516-10.462 84.861-3.588 18.144 4.108 35.756 8.582 53.327 13.619 17.783 5.1 35.735 10.786 54.346 17.271 4.117 1.427-.255-.065 4.244 1.513 21.369 7.544 53.773 18.957 72.871 9.381l.233-.108c19.693-9.187 40.722-15.931 61.37-22.546 41.274-13.229 80.85-25.938 98.781-55.12 15.406-25.1 33.931-61.973 50.187-97.552-16.064 23.994-33.083 48.592-46.324 67.636-16.361 23.54-20.987 25.4-41.783 33.764a5519.59 5519.59 0 00-7.6 3.07c-14.515 5.988-33.656 12-52.308 17.228-32.743 9.187-64.659 16-67.163 16.083a8.62 8.62 0 01-.531-17.228c2.058-.065 31.576-6.614 63.195-15.477 17.974-5.037 36.415-10.851 50.441-16.623 3.544-1.448 5.729-2.334 7.724-3.134 17.062-6.874 20.86-8.387 34.229-27.625 17.316-24.923 41.38-59.768 61.985-91.478 19.735-30.371 35.481-56.482 36.69-64.416 1-6.441-.382-12.018-3.225-15.888a13.177 13.177 0 00-5.857-4.583 12.67 12.67 0 00-7.6-.389c-5.666 1.384-11.99 6.226-18.016 15.715a8.558 8.558 0 01-1.082 1.383q-4.138 10.085-9.061 19.757a266.745 266.745 0 01-73.7 89.446 31.054 31.054 0 017.746 13.77 24.159 24.159 0 01.531 2.594c1.507 9.424-1.889 19.973-8.637 28.771a51.57 51.57 0 01-27.184 18.4 42.769 42.769 0 01-4.583.973c-25.083 4.129-50.1-1.578-74.527-7.155-9.443-2.162-18.78-4.28-27.926-5.771-4.117-.67-8.318-1.21-12.668-1.556a101.62 101.62 0 00-11.332-.346c-10.25 2.292-18.589 7.544-26.886 12.8-11.31 7.133-22.579 14.245-39.279 16.1a8.629 8.629 0 01-1.783-17.163c12.9-1.427 22.536-7.5 32.192-13.6 9.761-6.16 19.523-12.321 33.04-15.174l.679-.151.721-.022a120.137 120.137 0 0113.984.324c4.457.346 9.146.973 13.984 1.751 9.507 1.535 19.162 3.74 28.924 5.966 22.876 5.209 46.3 10.571 68.245 6.939q1.369-.227 2.929-.648a34.523 34.523 0 0018.165-12.3c3.947-5.145 5.984-10.83 5.263-15.477a13.932 13.932 0 00-.191-.886c-4.223-16.3-38.536-20.73-60.479-23.561-4.011-.519-7.682-.995-9.443-1.254-12.435-1.881-21.73-2.853-29.709-3.674-25.083-2.616-37.857-3.956-76.224-23.129-35.035-17.509-64.574-26.306-93.2-25.291-28.457.995-56.6 11.781-89.02 33.418a220.8 220.8 0 01-19.629 11.845 198.185 198.185 0 01-26.717 11.608c-9.358 3.329-36.2 11.867-62.006 19.238-17.528 4.993-34.78 9.511-46.218 11.629a8.47 8.47 0 01-9.825-6.96 8.6 8.6 0 016.833-10.008c10.589-1.946 27.353-6.355 44.627-11.284 25.677-7.328 51.99-15.693 61.009-18.892a180.673 180.673 0 0024.531-10.678 199.167 199.167 0 0018.1-10.981 333.313 333.313 0 0111.862-7.565zm349.332 37.094a249 249 0 0073.444-87.069 253.289 253.289 0 00-44.415-291.078c-44.33-45.155-105.551-73.083-173.18-73.083-67.609 0-128.745 27.906-173.032 73.018a251.736 251.736 0 00-71.916 176.472 269.753 269.753 0 0010.249 75.374c6.557 22.589 16.3 43.491 29.306 61.389.87 1.211 10.525 13.4 14.918 18.958l.34.432c24.488-12.753 47.428-19.3 70.855-20.125 31.64-1.124 63.64 8.279 101.158 27.041 35.608 17.791 47.385 19.022 70.537 21.443 8.4.887 18.186 1.9 30.43 3.739 3.714.563 6.3.887 9.125 1.254 15.555 2.011 36.33 4.691 52.181 12.213zm-664.2-343.865a5.3 5.3 0 01-6.154-4.323 5.386 5.386 0 014.244-6.269c14.069-2.637 30.621.994 45.263 8.128 15.385 7.479 28.923 18.957 35.565 31.191a5.453 5.453 0 01-2.1 7.328 5.252 5.252 0 01-7.194-2.14c-5.56-10.246-17.316-20.037-30.833-26.63-12.839-6.247-27.056-9.468-38.812-7.285zM1433.211 6478.3a5.293 5.293 0 1110.568-.6c1.294 23.712 8.679 43.858 20.032 59.271 11.947 16.233 28.329 27.3 46.664 31.861a5.4 5.4 0 013.9 6.506 5.29 5.29 0 01-6.387 3.978c-20.711-5.145-39.173-17.618-52.627-35.882-12.584-17.077-20.733-39.211-22.154-65.15zm-178.061-389.47c-24.743 13.034-38.452 37.244-43.226 64.739-3.289 19.043-2.355 39.622 2.164 59.249 4.52 19.649 12.584 38.26 23.534 53.326 15.109 20.795 35.735 34.866 60.011 35.3a175.546 175.546 0 015.687-33.375c6.515-24.037 18.1-46.431 33.932-63.875 26.844-29.614 65.508-45.2 112.066-31.3a330.317 330.317 0 01-7.576-69.949 302.326 302.326 0 012.271-37.265c.042-1.189.064-2.4.064-3.588h.042a105.8 105.8 0 00-22.621-65.842 96.739 96.739 0 00-60.075-35.385 106.393 106.393 0 00-17.953-1.47c-22.366 0-42.632 9.878-57.317 25.831-14.812 16.1-23.979 38.39-23.979 63.075a67.489 67.489 0 0017.4 45.826c10.631 11.543 25.295 18.7 41.444 18.7 16.17 0 30.812-7.133 41.444-18.7a67.449 67.449 0 0017.4-45.826 42.069 42.069 0 00-10.822-28.576 34.094 34.094 0 00-51.141 0 42.109 42.109 0 00-10.822 28.576 8.49 8.49 0 11-16.976 0 59.567 59.567 0 0115.47-40.4 50.77 50.77 0 0175.842 0 59.566 59.566 0 0115.47 40.4 84.989 84.989 0 01-22.048 57.649c-13.751 14.936-32.764 24.167-53.794 24.167s-40.043-9.23-53.794-24.167a82.492 82.492 0 01-12.097-17.12zm42.144 229.862c-30.006-.5-55.131-17.336-73.253-42.281-12.372-17.033-21.433-37.849-26.462-59.681s-6.069-44.81-2.377-66.145c5.729-33.029 22.663-62.188 53.454-77.73a87.284 87.284 0 01-3.48-24.555c0-29.2 10.929-55.682 28.626-74.9 17.8-19.346 42.441-31.3 69.667-31.3a125.843 125.843 0 0120.733 1.729 113.528 113.528 0 0170.431 41.545 120.463 120.463 0 0120.032 37.136 159.748 159.748 0 0127.12-45.609 154.877 154.877 0 0162.325-44.4 146.271 146.271 0 0174.548-8.43c26.165 3.956 51.863 15.326 74.378 35.147 15.894 13.985 27.693 32.878 32.807 57.52 4.138 19.93 3.862 43.577-2.271 71.354a125.735 125.735 0 0120.945 15.563c22.94 21.141 37.115 50.365 37.115 82.681 0 42.258-18.547 80.476-48.552 108.122-29.772 27.431-70.813 44.4-116.076 44.4a153.882 153.882 0 01-23.215-1.729c-51.566-7.782-89.763-41.092-115.015-85.447a271.762 271.762 0 01-24.425-58.838c-43.948-17.077-80.192-3.956-104.638 23.021-13.984 15.434-24.255 35.342-30.069 56.785-5.836 21.529-7.194 44.55-3.332 66.1 7.427 41.265 34.335 77.255 86.092 86.68 15.7-34.823 46.621-66.339 96.384-86.852a8.42 8.42 0 0111.035 4.755 8.685 8.685 0 01-4.668 11.24c-56.871 23.453-86.474 62.081-95.45 102.286a129.093 129.093 0 001.358 61.086 131.156 131.156 0 0028.032 52.916c24.976 28.4 62.834 45.351 107.694 38.434a8.521 8.521 0 019.655 7.262 8.636 8.636 0 01-7.13 9.836c-43.523 6.722-81.338-6.4-109.264-30.565-33.125 52.591-33.528 95.11-15.258 125.956 16.021 27.063 46.388 45.739 81.72 54.775 35.926 9.187 76.776 8.365 113.02-3.719 53.773-17.919 97.317-61 98.59-133.369.764-43.6-8-84.539-26.377-119.73a204.06 204.06 0 00-78.855-82.464 8.71 8.71 0 01-3.119-11.759 8.38 8.38 0 0111.544-3.177c38.027 22.264 66.484 52.98 85.434 89.294 19.693 37.763 29.093 81.535 28.287 128.1-1.422 81.21-50.123 129.479-110.262 149.517-39.279 13.1-83.5 13.985-122.379 4.042-39.47-10.095-73.656-31.408-92.118-62.6-21.815-36.855-21.709-86.723 17.358-147.075-.382-.432-.764-.842-1.146-1.275a148.673 148.673 0 01-31.809-59.94 146.281 146.281 0 01-1.485-69.344q1.273-5.673 3.013-11.283c-57.847-11.8-88.086-52.916-96.532-99.93a159.063 159.063 0 01-2.4-23.194zm187.4-511.905a8.73 8.73 0 01-1.294 12.126 8.359 8.359 0 01-11.9-1.318 23.89 23.89 0 00-15.194-8.949 20.243 20.243 0 00-15.682 4.021c-.615.475.106-.108-.276.216a19.887 19.887 0 00-7.088 13.855 23.827 23.827 0 004.923 16.385c.085.13.191.238.276.368a40.193 40.193 0 0025.486 14.98 34.452 34.452 0 0026.717-6.9c.127-.086.233-.194.361-.28l.021-.021c7.682-6.312 13.093-17.379 14.982-29.116 1.868-11.521.276-23.389-5.963-31.56a3.112 3.112 0 00-.276-.368c-9.1-11.478-23.067-18.308-37.857-20.556-15.724-2.378-32.17.41-44.542 8.3-12.032 7.673-19.99 20.146-23.937 34.737-4.159 15.3-3.968 32.855.424 49.737s12.944 32.964 25.528 45.351c13.475 13.25 31.619 22.307 54.282 23.518a8.626 8.626 0 01-.87 17.227c-27.141-1.448-48.956-12.342-65.168-28.295-14.918-14.677-25.019-33.613-30.176-53.391-5.135-19.757-5.326-40.486-.361-58.709 5.051-18.611 15.427-34.672 31.3-44.788 15.809-10.073 36.436-13.683 55.958-10.721 18.738 2.853 36.648 11.759 48.595 26.846.531.67.233.281.467.584 9.337 12.213 11.862 29.03 9.295 44.917-2.546 15.693-10.122 30.781-21.093 39.795l-.106.086a4.565 4.565 0 01-.488.411 51.053 51.053 0 01-39.534 10.333 57.239 57.239 0 01-36.308-21.27l-.064-.086c-.127-.151-.276-.325-.4-.476a41.283 41.283 0 01-8.446-28.4 37.3 37.3 0 0113.39-25.874 5.14 5.14 0 01.488-.411 36.789 36.789 0 0128.478-7.458 40.911 40.911 0 0126 15.217z"
        data-name="Path 29"
        transform="translate(-1192.995 -5751.637)"
      ></path>
    </StyledSvgRight>
  );
}

export default Icon;
