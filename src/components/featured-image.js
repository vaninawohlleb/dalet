import React from "react";
import styled from 'styled-components';


const StyledSvg = styled.svg`
  max-height: 50vh;
  max-width: 45vw;
`
function FeaturedImg() {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="768"
      viewBox="0 0 1024 768"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill="#F4C578"
          d="M738.321 566.027c-4.517 5.224-11.187 9.101-16.305 13.877-5.374 5.017-11.207 9.401-16.56 14.357-23.614-28.86-55.962-46.558-83.985-70.507-13.285-11.355-23.073-26.756-30.236-42.562-3.672-8.103-6.385-16.443-8.508-25.075-.956-3.888-1.89-7.763-2.516-11.704-.757-4.773-.953-5.18-4.173-8.905-1.386-1.603-4.07-6.287-6.786-5.77-2.285.434-6.464 7.39-7.908 9.107-6.944 8.263-13.676 16.777-20.987 24.72-11.185 12.154-21.368 24.114-31.753 36.996-21.244 26.355-44.16 51.164-67.284 75.963-1.715 1.84-5.714 7.232-8.178 7.957-2.996.881-7.865-2.794-10.882-4.848-7.283-4.958-13.023-11.095-19.249-17.24-12.149-11.992-20.376-28.825-25.91-44.84-3.313-9.588-5.467-19.526-8.886-29.08-1.425-3.982-4.655-8.876-3.015-12.344.488-1.034 3.596-3.78 4.692-3.99 1.296-.25 3.457 1.527 3.907 1.404 4.3-1.177 1.914-5.678 4.472-8.1 1.45-1.374 8.825-1.173 11.027-1.928 8.051-2.762 15.274-8.03 22.885-11.175 31.863-13.164 64.114-25.969 91.621-47.466 7.134-5.574 11.874-9.763 20.386-13.366 8.602-3.64 17.25-6.889 26.026-10.066 7.744-2.803 15.53-5.43 23.53-7.44 8.65-2.173 20.921-4.928 29.564-2.129 16.973 5.495 22.454 19.48 29.213 34.233 9.145 19.96 20.202 38.848 32.19 57.22 23.06 35.348 51.105 67.067 73.608 102.701"
        ></path>
        <g fill="#fff" transform="translate(35 89)">
          <path d="M192.16 164.53c-.934-.474-8.226 2.494-9.45 2.948-4.889 1.814-9.494 4.828-14.1 7.28l10.59 12.89c3.46-8.487 7.907-15.49 12.96-23.118zm2.407 52.805c-1.201.135 8.939 24.502 10.123 27.238 4.309 9.95 8.833 19.805 13.199 29.73 4.23 9.62 9.596 18.469 15.002 27.455 4.624 7.685 9.38 19.61 16.355 25.303-4.404-19.538-3.824-42.003-16.456-58.408-13.094-17.007-26.04-33.614-38.223-51.318zm508.754 260.56c-19.567-30.985-44.061-58.396-64.465-88.828-11.425-17.04-22.545-34.298-32.162-52.436-6.995-13.194-11.343-32.02-22.147-42.106-4.761-4.444-9.848-8.794-16.237-10.785-8.743-2.724-20.781-.024-29.564 2.13-16.367 4.013-32.356 10.245-47.859 16.79-15.725 6.638-29.141 18.562-43.349 28.142-15.241 10.278-31.739 17.765-48.815 24.319-14.868 5.707-28.095 13.9-42.884 19.644-2.947 1.145-8.961.977-11.433 2.47-2.664 1.607-1.615 6.353-4.849 8.104-1.459.79-1.945-2.074-3.065-2.027-1.37.057-2.619 1.665-3.939 2.683-5.375 4.147-2.082 6.912.046 12.618 6.937 18.592 10.665 37.508 20.405 55.06 8.008 14.427 19.469 27.355 32.963 36.906 2.053 1.454 8.744 7.086 11.153 6.71 2.169-.335 6.582-6.101 8.08-7.667 6.795-7.106 13.006-14.75 19.797-21.867 10.494-11 20.596-22.293 30.78-33.442 11.822-12.943 22.285-27.608 32.933-41.437 4.898-6.362 11.203-11.544 16.647-17.443 7.321-7.932 14.043-16.46 20.988-24.72 2.1-2.5 5.62-8.895 8.885-8.82 2.288.053 6.322 5.44 7.519 7.128 4.448 6.275 4.428 17.607 6.64 25.44 5.398 19.1 15.131 37.755 28.48 52.494 13.274 14.657 30.278 25.08 45.978 36.86 17.008 12.765 33.121 25.827 46.609 42.314 5.353-4.956 11.186-9.341 16.56-14.357 5.119-4.777 11.789-8.653 16.305-13.877zm-251.869 87.66c3.804.039 10.246 2.379 13.649.97-10.094-11.17-19.364-20.752-32.135-28.937-13.253-8.494-26.462-16.912-39.334-25.972-25.941-18.258-45.021-39.911-55.857-70.317-2.79-7.83-4.659-16.042-6.704-24.091-1.1-4.335-3.29-24.615-7.009-26.366-2.203-1.038-18.783 10.615-21.41 12.067-6.142 3.397-12.307 6.03-18.657 8.689-13.649 5.715-27.72 10.074-42.194 13.713-17.353 4.363-29.173-2.856-39.923-16.495-12.196-15.474-22.331-32.933-33.482-49.183-5.071-7.391-9.272-14.77-13.017-22.922-2.451-5.334-12.172-19.725-8.813-25.408 9.583 7.296 13.031 21.803 19.559 31.572 8.136 12.175 17.305 23.654 25.483 35.818 6.877 10.228 13.893 22.623 24.053 29.976 8.937 6.467 17.427 4.479 27.045 1.572 11.657-3.522 23.74-5.258 35.164-9.627 12.363-4.727 24.06-11.433 36.122-16.901 5.623-2.55 12.356-4 17.655-7.178 4.567-2.738 3.886-4.184 4.221-10.015.392-6.803.843-13.611 1.144-20.42.202-4.575-2.272-10.778-.593-14.193-13.694 2.374-27.078 5.554-40.676 8.367-7.445 1.54-14.624 3.444-22.145 4.654-2.867.46-6.786.448-9.353 1.697-2.048-.588-3.092-.214-3.132 1.12-.098.726-.253 1.44-.466 2.144-4.199 1.91-6.641-2.187-10.283-6.117-4.494-4.85-7.859-10.312-11.156-16.011-7.372-12.742-15.869-24.726-22.691-37.827-6.953-13.355-12.6-27.654-18.495-41.51-5.408-12.712-8.871-26.46-14.847-38.871-2.667-5.54-6.047-10.121-9.994-14.801-3.257-3.862-8.268-12.193-13.132-13.967-1.286-.47-4.654.319-6.115.215-2.912-.208-5.507-1.277-8.487-1.043-6.452.505-13.486 4.585-18.642 8.172 3.332 2.97 11.667 6.58 5.68 11.93-5.81 5.194-9.019-4.123-11.236-8.205-10.44 8.573-8.931 20.394-10.137 32.507-.63 6.324-2.287 12.552-3.356 18.78-.77 4.484-.23 9.12-.45 13.698-.561 11.63-1.73 22.764-1.675 34.232.062 12.258.897 24.096 1.878 36.265 1.651 20.488 5.434 40.983 8.678 61.308 1.825 11.425 4.323 22.525 6.748 33.765 2.752 12.757 7.843 24.84 10.698 37.564 2.909-3.698 5.097-3.716 9.802-3.226 3.619.377 6.05-.484 5.838 4.539-.137 3.258-3.011 5.746-6.191 6.315-4.147.74-5.556-1.328-7.693-4.47-.5 5.949 3.5 12.168 5.082 17.977 1.497 5.505 2.489 10.9 5.005 16.17 2.455 5.14 4.557 10.21 7.041 15.3 1.144 2.343 2.214 4.722 3.371 7.058.585 1.183 1.274 2.813 2.147 3.81 2.048 2.337 1.722 1.205 4.119 2.536 5.222 2.9 3.261 2.178 3.383 8.168.119 5.909 3.149 10.25 8.008 13.57 10.309 7.049 20.477 9.009 32.197 12.57 10.92 3.318 22.422 6.165 33.985 6.1 14.162-.08 28.136-1.936 42.298-2.124 15.624-.207 31.398-.122 46.99.418 6.423.222 12.388.508 18.589 2.148 7.201 1.906 14.167 1.15 21.589.86 15.834-.615 32.214-1.84 47.841-1.95 11.252-.08 23.124-.865 34.418-.187zm410.588 6.138c2.815 1.487 9.125.877 11.955.464 4.985-.727 5.519-2.703 8.682-7.148 5.444-7.655 9.864-14.986 13.067-23.853 6.13-16.971 8.633-34.333 11.324-52.086 2.991-19.726-2.471-40.173-4.425-59.765-.449-4.495-1.063-8.95-1.773-13.41-.425-2.667-.536-11.74-2.291-14.05-3.372-4.435-19.052-.857-25.217-.455-17.208 1.124-34.529 1.387-51.729 1.582-9.171.104-18.393.488-27.473.559-4.17.033-8.247-.174-12.432-.58-1.4-.135-2.767-.457-4.177-.535-4.828-.267-4.465-.967-5.713 3.308-2.186 7.49-.504 17.019-1.078 24.793-.768 10.388-1.183 20.923-.993 31.333.176 9.62-.152 19.218.207 28.859.15 3.993.586 7.248 1.639 11.06 1.191 4.312 2.501 14.384 5.467 17.367.337.34 2.858-.452 3.527.394 1.031 1.303.842 4.06 1.55 4.902 2.291 2.726 7.026 2.942 10.461 4.167 9.425 3.36 18.071 7.01 26.954 11.542 7.937 4.049 20.734 7.495 25.506 15.483 2.188 3.662 2.483 8.49 4.495 12.269 2.291 4.304-2.293 2.054 3.32 3.8 2.528.786 6.556 0 9.147 0zM25.285 523.015c-.714 9.939-6.313 19.406-8.262 29.178-.912 4.576-2.459 9.074-3.531 13.623-1.028 4.364-4.742 9.532-4.366 13.85 13.708-4.884 27.593-6.112 41.92-7.43 13.579-1.248 27.924-1.745 41.389-1.751 13.721-.007 28.392-1.347 42.52-1.555 14.775-.217 29.773-.6 44.334-2.132-7.614-5.64-17.141-10.935-22.763-18.781-6.112-8.53-9.286-19.215-14.664-28.215-10.792-18.061-17.653-40.472-23.31-60.763-11.421-40.962-24.184-81.168-27.26-123.656-5.854 2.998-10.501 14.629-13.432 20.42-3.741 7.396-5.7 15.412-8.132 23.272-5.008 16.189-8.474 32.975-14.606 49.01-11.72 30.652-19.253 63.68-29.837 94.93zm744.112-238.737c2.535 18.32 7.851 36.877 8.055 55.418.045 4.079-.646 8.609.204 12.63.908 4.295 3.861 8.09 5.566 12.172 2.706 6.478 9.559 19.756 2.95 25.245-.134-5.21-4.901-11.824-7.302-16.38-3.619-6.862-8.374-13.137-12.297-19.83-8.212-14.01-17.414-27.718-27.997-40.068-10.308-12.03-22.188-22.701-33.119-34.156-3.284-3.442-29.63-36.57-30.677-36.106 8.172 31.514 22.064 58.934 41.075 85.32 9.321 12.935 20.508 21.447 31.855 32.405 9.449 9.126 27.258 18.884 23.991 33.837 14.771-1.42 29.445-3.69 44.35-3.69-2.451-18.864-4.328-37.43-8.704-55.985-4.968-21.07-8.333-42.768-12.537-64.024-4.29-21.7-11.567-42.708-16.094-64.367a1136.68 1136.68 0 01-11.237-62.414c-2.626 11.62-1.657 24.383-2.589 36.239-.952 12.113-.86 24.003-.543 36.187.587 22.63 2.999 44.989 5.05 67.567zm64.006-107.898c.083-9.687 1.96-19.243 2.539-28.907.178-2.965 3.131-23.194.377-24.25-2.265 4.938-2.793 11.257-4.85 16.438-2.055 5.176-4.804 10.107-6.776 15.319-4.272 11.29-5.746 24.067-6.206 36.07-1.041 27.153-1.579 54.244.246 81.396.782 11.638 1.382 23.296 1.168 34.957-.235 12.83-2.2 23.968.186 36.694 2.362 12.602 3.846 25.152 4.633 37.938.552 8.974.774 8.339 9.336 7.708 6.181-.456 12.423.03 18.613-.252-2.894-34.976-3.367-70.024-7.99-104.866-2.359-17.775-2.422-35.807-5.352-53.516-1.456-8.797-3.899-17.417-5.303-26.224-1.507-9.456-.765-18.976-.621-28.505zm-626.108-22.011c16.483 1.428 34.016 6.356 50.911 3.102-2.785-1.128-10.073-2.684-6.793-7.136 3.335-4.527 8.955 1.215 12.281.622 2.051-.366 6.583-8.94 7.847-10.714 2.869-4.034 3.215-4.737 8.374-5.771 4.998-1 6.131.083 6.764-4.886.727-5.714-1.25-12.138-1.054-17.981.421-12.58 4.479-23.61 8.256-35.445-16.047 3.49-31.738 7.63-48.146 9.88-7.014.963-17.926 3.182-24.298-1.586-1.657-1.24-1.392-2.914-2.748-4.351-2.274-2.411-6.492-4.905-9.717-5.592-19.847-4.225-21.783 24.068-11.837 34.655 2.491 2.653 5.957 3.963 8.508 6.394 3.405 3.242 3.684 6.657 4.181 11.606.932 9.28-.334 18.596-4.293 27.085l1.764.118zm240.845 133.57c5.859 1.112 11.974.858 17.848 1.807 2.087.337 8.344 1.513 10.179.293 2.802-1.863 3.798-8.696 5.123-11.878 2.33-5.597 5.627-10.48 7.849-16.178 9.08-23.278 17.547-46.65 28.529-69.132-4.209-1.094-7.441-1.137-11.683-1.702-4.419-.59-8.425-3.202-12.641-4.325-4.007-1.067-8.205-.795-12.175-2.036-2.187-.683-4.064-2.202-6.22-2.733-3.437-.845-7.448-1.34-9.492.917-2.095 2.314-2.83 8.659-3.97 11.648-3.036 7.963-6.563 15.648-9.106 23.794-2.295 7.347-4.475 14.616-6.495 22.03-2.134 7.827-6.34 14.278-8.902 21.755-1.949 5.69-3.788 11.509-4.079 17.577-.283 5.92-1.145 6.298 4.776 7.244 2.989.477 7.647 2.253 10.459.919zm385.49 277.116c1.526.71 2.965.617 4.315-.284-13.23-5.588-26.099-13.338-39.901-17.172-12.947-3.595-25.531-7.891-38.004-12.32-10.135-3.597-19.247-6.398-28.41-12.73-5.562-3.844-10.503-8.166-14.325-13.783-4.255-6.254-5.202-15.154-9.81-20.786-6.22 6.83-13.527 12.004-20.886 17.432-2.546 1.878-8.653 5.972-9.524 8.878-1.099 3.667 1.845 7.175 3.301 10.886 3.729 9.504 5.551 19.003 7.574 28.884.811 3.96 2.562 9.913 5.815 11.572 2.962 1.509 11.54.412 15.226.132 19.23-1.457 38.119-2.95 57.465-1.622 21.892 1.5 45.329 2.538 67.164.913zm38.409-176.112c3.495.012 6.909-.425 10.391-.425-2.01-9.385 2.689-21.53 4.355-30.897 1.864-10.48 3.283-21.315 4.526-31.878 2.62-22.25 3.807-44.228 3.841-66.64.032-21.687 3.98-41.505 9.51-62.353 5.938-22.39 15.662-42.525 23.702-64.118-8.819 4.662-13.701 15.57-18.335 23.91-5.858 10.546-9.76 22.222-12.152 34.06-4.615 22.837-9.677 45.743-15.002 68.542-5.545 23.739-8.805 47.696-15.157 71.24-3.098 11.483-7.31 25.609-7.544 37.45-.097 4.898-1.573 15.156.647 19.41 2.076 3.98 6.666 2.105 11.218 1.699zm-527.551-29.454c-.184 2.438-.358 4.757-.791 7.165 4.841-.046 10.972-5.07 15.124-7.324 5.058-2.747 10.122-5.777 15.069-8.538 9.55-5.332 20.392-8.845 30.589-13.225 11.714-5.032 22.481-11.112 33.683-17.17 3.913-2.116 32.035-14.306 31.563-17.636l-18.523-.616c-5.293-.176-13.491 1.02-18.56-.616-2.776-.897-5.893-4.198-6.941-6.783-1.037-2.558 1.294-14.323-.061-15.073-6.91 7.055-11.255 16.432-17.433 24.043-6.827 8.412-15.649 13.324-25.372 17.794-10.737 4.937-21.85 8.76-32.823 12.99-4.628 1.785-4.536 2.806-4.939 7.88-.451 5.67-.402 11.423-.585 17.109zm557.947 213.36c11.639 1.249 23.567.537 35.297 1.51 4.268.355 10.185.883 5.891 6.61-2.704 3.609-11.366 2.452-15.295 2.702-10.549.67-21.718.31-32.291.154-2.226-.032-4.686-.694-6.936-.545-2.597.17-5.707 2.039-8.074 2.025-1.459-.01-1.982-1.548-3.24-1.69-2.741-.307-5.481-.532-8.245-.531-41.79.009-83.006-.831-124.692-.876-19.933-.021-40.186-.365-60.111-1.301-4.184-.197-28.012.659-27.352-6.875.339-3.88 8.116-4.427 10.954-4.84 2.103-.304 4.285-.256 6.392-.37 5.598-.3 8.05 1.048 6.869-5.077-4.479-23.232-12.505-42.432-29.653-59.136-14.022-13.66-30.906-26.05-46.788-37.455-19.284-13.85-34.928-28.416-46.377-49.61-6.686-12.375-12.283-25.028-15.718-38.712-1.236-4.923-1.265-10.522-2.78-15.268-1.165-3.654-3.821-6.211-5.385-9.996-19.186 32.046-44.615 58.857-67.931 87.75-11.141 13.805-23.85 26.916-37.161 38.925-3.95 3.564-7.636 7.285-11.323 11.12-3.084 3.21-7.98 6.063-10.584 9.624-2.498 3.416-1.883 3.253 1.919 5.966 5.026 3.585 10.565 6.564 15.67 10.06 8.16 5.589 17.067 10.31 24.363 17.037 7.891 7.274 14.785 15.7 21.682 23.902 4.597 5.467 10.629 12.482 11.785 19.394.383 2.287 1.837 7.943-.082 9.618-1.64 1.43-1.475.888-3.511.015-2.668-1.144-3.453-3.77-6.712-5.02-8.339-3.2-18.43-2.101-27.107-2.14-8.68-.04-17.432.936-26.108.9-19.812-.081-39.202 1.523-59.008 2.384-21.036.914-42.33-1.28-63.296-.97-15.534.23-31.482-.93-47.445-.067-8.211.443-16.275-.584-24.281-.7-10.482-.15-21.247 1.276-31.819 1.479-17.352.335-34.492.333-51.95.75-37.552.899-74.901 1.827-112.475 2.422-5.012.079-10.499-.091-15.452.473-5.257.6-2.543 1.717-6.15 3.61-10.098 5.297-7.766-14.34-7.524-18.201 1.298-20.696 6.552-40.994 12.866-60.642 5.99-18.635 10.853-38.14 15.926-57.177 5.553-20.837 12.788-40.821 19.358-61.453 6.732-21.142 12.213-43.108 24.44-61.85 2.785-4.267 5.663-8.86 10.143-11.551 5.022-3.017 5.238-1.255 5.234-6.776-.003-5.2.317-12.147-.91-17.11-1.109-4.482-.938-1.824-3.435-5.044-2.032-2.62-4.158-4.41-5.616-7.59-8.956 9.082-29.457 4.29-38.11-2.25-10.591-8.003-18.658-21.506-21.614-34.366-2.374-10.327.539-30.012 11.969-34.978 5.572-2.421 26.038-4.251 26.857-12.141.422-4.073-6.781-9.8-8.443-13.302-3.08-6.488-6.038-15.118-6.894-22.23-1.672-13.882 4.63-29.405 14.669-38.782 18.416-17.202 50.819-26.03 74.508-15.116-5.006-19.123-8.028-35.62-5.507-55.512 2.172-17.137 12.283-26.725 26.196-35.261C175.78 4.2 208.066-1.55 235.213 2.686c6.169.963 12.089 3.028 17.801 4.67 8.298 2.388 18.232 1.593 26.067 5.47 5.681 2.812 9.995 8.412 14.984 12.15 5.825 4.366 10.665 10.88 14.712 16.906 8.655 12.884 5.273 36.796-1.971 49.729-1.553 2.774-3.472 5.109-6.042 7.002-2.676 1.97-6.755 2.583-8.134 5.138-3.532 6.545-.125 20.714.346 27.788.549 8.214-3.604 14.384-12.918 15.039-5.388.38-5.56-2.746-8.14 3.686-1.672 4.169-3.191 8.71-5.604 12.533-4.975 7.877-14.087 7.108-22.387 6.895-9.608-.248-19.072-1.766-28.685-2.724 2.539 8.135 9.489 14.449 13.829 21.696 5.868 9.802 9.4 17.927 10.354 29.347.732 8.774-.848 15.703-6.852 22.233-2.485 2.703-4.688 2.836-4.071 5.954.376 1.902 3.665 5.04 4.829 6.558 3.079 4.016 6.654 7.702 9.364 11.99 10.428 16.503 13.508 41.659 13.534 60.869.001.88.471 2.754.082 3.665-.288.673-2.476 2.804-2.508 2.987-.428 2.47 1.98 6.704 5.759 7.123 3.969.439 11.238-2.873 14.93-3.961 5.908-1.742 11.93-3.028 17.825-4.817 9.521-2.89 18.998-5.193 28.677-7.457 4.374-1.022 8.772-1.874 13.16-2.83 4.998-1.088 7.32-3.191 9.9 1.894 2.213 4.364.837 5.155 6.198 2.956 5.323-2.185 10.524-4.893 15.721-7.36 9.166-4.347 20.082-8.223 27.989-14.642 13.189-10.71 18.073-27.763 30.696-39.126 3.515-3.164 5.612-3.22 7.834-7.603 2.379-4.691 3.606-10.707 4.856-15.753 2.191-8.836 3.75-17.703 5.737-26.531 2.475-10.998 7.824-20.958 11.727-31.448 1.521-4.087 2.309-9.282 4.762-12.955.65-.974 1.892-1.523 2.399-2.33 1.745-2.766 1.727-3.526 2.179-6.855 2.115-15.555 11.4-7.372 21.546-3.805 4.275 1.503 24.574 11.25 16.823 17.732 9.24 2.68 24.039 1.224 23.915 14.466-.064 6.785-4.122 14.043-6.3 20.394-1.935 5.639-3.805 11.3-5.77 16.93-4.305 12.333-9.528 24.297-13.729 36.668-1.915 5.638-3.495 11.408-6.161 16.729-2.351 4.694-8.044 9.868-8.982 15 24.623-10.504 47.402-25.692 74.963-24.724 12.068.423 23.02 5.496 29.685 16.107 8.356 13.3 13.854 28.19 22.021 41.614 29.711 48.829 65.147 93.189 97.763 139.997 2.505 3.597 5.727 6.998 6.596 11.443.567 2.9-.533 5.8.147 8.587 1.411 5.79 8.54 13.019 13.374 16.346 9.266 6.378 24.329 15.374 35.892 14.578-7.257-17.44-7.16-36.55-6.823-55.152.321-17.671 2.231-35.2 4.498-52.69.513-3.956.96-7.624 2.097-11.46 1.305-4.4 3.097-3.982-.812-7.937-6.016-6.09-13.172-11.101-19.237-17.267-13.117-13.334-26.561-23.785-36.885-39.708-9.818-15.145-20.176-30.728-27.444-47.313-7.482-17.073-10.473-35.306-14.187-53.387-1.507-7.337-7.003-15.528-5.899-23.19 1.396-9.683 5.886-2.632 7.714 2.579 5.578 15.907 18.639 30.144 29.457 42.937 11.688 13.82 25.983 25.383 38.183 38.8 13.285 14.615 22.385 31.41 34.199 47.01 0-19.36-6.61-39.074-9.314-58.226-2.379-16.857-3.126-33.767-4.63-50.697-3.415-38.458-.464-78.05 4.329-116.232 2.278-18.134.986-35.841 1.055-54.037.022-5.791-2.375-19.138.68-24.277 5.851-9.843 9.264 11.68 9.56 14.889 1.769 19.116-1.404 38.019.217 57.053 1.694 19.877 5.37 39.196 8.498 58.843 3.389 21.273 8.906 42.066 14.188 62.93 5.546 21.908 10.21 44.272 16.376 66.004 1.663-6.831-.67-15.223-1.131-22.18-.658-9.956-1.943-19.914-2.054-29.896-.178-15.91-.302-32.113.598-47.948.887-15.608.619-31.963 5.406-47 2.272-7.137 5.604-14.1 8.864-20.823 4.022-8.29 5.444-16.328 7.671-25.145 1.908-7.551 4.7-14.903 5.971-22.605.79-4.79 2.995-18.93 8.479-8.217 3.184 6.218 1.808 15.436 1.897 22.116.114 8.564-1.197 16.89-1.398 25.419-.391 16.732-.672 33.444-1.92 50.148-1.309 17.525-.166 33.23 3.168 50.499 3.649 18.902 4.717 37.845 6.608 56.978.975 9.879 2.619 19.703 3.413 29.596.42 5.239-1.734 20.262 2.02 23.993.363-9.074 2.963-18.156 4.934-26.998 2.335-10.475 3.278-21.487 4.999-32.112 2.787-17.214 8.195-33.653 11.773-50.674 7.375-35.087 13.503-80.182 44.411-103.148 4.044-3.005 8.488-5.223 12.86-7.696 2.475-1.4 6.152-5.022 8.984-5.654 3.091-.69 4.38-.154 5.633 3.432 1.747 4.999-1.448 7.334-4.431 10.965-10.323 12.564-14.733 28.67-21.107 43.405-14.596 33.74-21.054 69.329-21.128 105.8-.039 19.094-1.356 37.509-3.392 56.486-2.191 20.423-5.076 42.023-11.281 61.67 6.223 1.395 12.975-.685 14.664 6.549.415 1.777-.335 3.878.124 6.19.446 2.249 1.519 4.485 2.154 6.696 1.312 4.573 2.006 9.085 2.644 13.78 2.467 18.149 6.703 35.41 7.154 53.81.415 17.01-2.915 34.243-5.983 50.925-3.091 16.802-11.956 31.125-18.935 46.32 3.004 0 6.007.03 9.011.062z"></path>
          <path d="M507.434 534.225c-3.31.936-19.289 2.702-19.286 7.716.002 3.007 15.96 2.948 18.784 3.275l.502-10.99m35.271 34.598c9.208 1.751 21.707-.71 27.594-8.829 2.751-3.793 4.055-9.562 4.951-14.089.856-4.314 3.495-15.079 1.7-19.123-2.206-4.966-23.363.224-29.524.794-10.749.992-21.864 1.11-32.62.408 0 11.106-.568 21.93 5.964 31.49 4.713 6.896 13.563 8.524 21.935 9.35m-1.85 13.717c-10.006-3.662-20.51-1.282-27.025-12.023-1.653-2.725-3.045-5.655-4.045-8.682a26.17 26.17 0 01-1.139-4.075c.51-2.994-.588-3.838-3.29-2.533-5.303-1.03-11.118 2.61-16.704 1.536-13.548-2.602-11.087-22.009-1.995-28.727 1.796-1.328 3.59-1.697 5.646-2.353 4.532-1.444 6.985.17 11.13-.24 3.35-.332 4.271-3.845 7.871-5.392 2.357-1.012 5.63-.934 8.107-1.036 12.968-.533 25.977-.528 39.028-1.373 6.087-.394 12.66.57 18.622-.47 2.792-.488 2.391-2.346 5.035-.716 2.737 1.688 1.555 7.93 1.417 10.42-.799 14.392-1.656 29.828-9.366 42.411-7.054 11.513-20.935 12.691-33.293 13.253M12.467 586.508c3.219-.035 6.437-.07 9.645-.102l-9.645.102M906.295 279.631l-.02-9.27.02 9.27M87.468 292.329l-.03 9.029c.009-3.014.019-6.022.03-9.03M355.037 583.093c2.561.004 5.122.007 7.671.014-2.565-.003-5.117-.008-7.671-.014M199.54 582.479c2.56.008 5.12.016 7.67.026-2.565-.007-5.117-.017-7.67-.026M759.45 457.387l-.338 6.094.338-6.094M902.435 572.848c-1.979-.02-3.958-.04-5.937-.062 1.988-.829 3.967-.792 5.937.062M726.73 581.85c1.42-.022 2.84-.044 4.247-.068-1.424.021-2.836.045-4.248.068M905.524 304.719l.105-4.604-.105 4.603M459.54 579.88c1.264.019 2.527.037 3.779.053-1.265-.02-2.522-.036-3.778-.053M784.847 582.47c1.234.024 2.469.05 3.692.075l-3.692-.074M918.2 470.76c-.089-1.394-.178-2.786-.265-4.178.09 1.394.177 2.786.265 4.178M896.037 583.825a762.18 762.18 0 013.003-.014 761.28 761.28 0 01-3.003.014M759.119 582.534l2.975-.072-2.975.072"></path>
          <path d="M535.43 581.774c1.097-.006 2.192-.012 3.277-.02l-3.276.02M221.371 581.938l3.174-.177-3.174.177M515.576 177.32l-4.74-.409c1.582.111 3.255-.825 4.74.41M918.35 573.449l-4.674-.473 4.674.473M809.678 186.913l-.314 4.092.314-4.092M906.617 243.825l.318-3.877-.318 3.877M809.058 208.087l-.336 4.083.336-4.083M905.957 296.063l-.03-3.947c.85 1.313.817 2.627.03 3.947M759.473 485.195c-.012 1.32-.023 2.64-.037 3.955-.872-1.331-.698-2.646.037-3.955M858.775 332.472l-.457-4.005.457 4.005M36.51 209.843c-1.033 1.365-2.44.43-3.668.596 1.224-.2 2.446-.397 3.668-.596M547.302 518.59l-3.915.006 3.915-.005M755.799 215.451l.365 3.326-.365-3.326M110.851 105.21l-3.936.078c1.298-.764 2.606-.985 3.936-.078M809.025 227.288l-.254 3.486.254-3.486M773.046 84.406l.304-3.178-.304 3.178M762.736 81.082a6245.19 6245.19 0 00-.308 3.45l.308-3.45M192.843 4.19l-4.004.485 4.004-.485M96.419 106.126l-4.11.42 4.11-.42M847.152 109.5l.25-3.208-.25 3.208M51.453 286.256l2.354.035-2.354-.035M843.262 187.64c-.032-1.143-.063-2.285-.096-3.425.034 1.144.065 2.284.096 3.425M226.45 1.486h-3.65c1.217-.835 2.433-.814 3.65 0M551.36 270.51l-3.997.101c1.31-.926 2.643-.949 3.997-.102M667.85 579.833c.79.016 1.58.033 2.36.052-.793-.015-1.577-.034-2.36-.052M697.606 581.222l2.356-.083-2.356.083M231.911 581.77l2.458.063-2.458-.062M917.517 457.536c-.117-1.13-.234-2.261-.352-3.386l.352 3.386M810.033 267.038l.28 3.224-.28-3.224M851.396 248.548l-.383-3.422.383 3.422M238.588 582.452c.83-.013 1.66-.026 2.482-.037-.834.014-1.658.025-2.482.037M540.854 582.542l2.412-.109-2.412.11M844.645 165.159l-.109-3.47.11 3.47M159.885 583.208l2.418-.018-2.418.018M844.307 583.197l2.487.026-2.487-.026M862.282 583.097c.804.057 1.607.115 2.401.17l-2.4-.17M869.542 583.083c.818.024 1.637.05 2.445.067-.821-.025-1.633-.046-2.445-.067M906.817 253.134l-.16-3.412.16 3.412M357.484 568.166l7.47-.389-7.47.39M207.295 154.369c2.16.188 4.322.376 6.48.562l-6.48-.562M817.442 248.32l.203 6.18-.203-6.18M862.04 571.692l6.767.41c-2.27.103-4.574.75-6.767-.41M848.69 327.786l.05-5.896-.05 5.896M842.916 389.587l5.938.079-5.938-.08M875.86 291.531a2496.146 2496.146 0 000 0M833.63 565.054c1.44-.097 2.88-.194 4.317-.288-1.083.868-2.172.94-4.317.288M823.993 370.056l.296 4.819-.296-4.82M285.578 116.252l.046-4.653-.046 4.653M825.736 389.911l5.367-.117c-1.77.856-3.56.886-5.367.117M875.25 401.372a2289.042 2289.042 0 000 0M411.78 565.673l5.255.068c-1.765.885-3.519 1.01-5.256-.068M81.749 570.835c1.778-.16 3.557-.318 5.335-.477l-5.335.477M818.06 261.564l.26 4.837-.26-4.837M250.517 158.158c1.5-.739 3.01-.863 4.536-.08l-4.536.08M769.026 280.201l.372 4.08-.372-4.08M895.653 248.434c-.77-1.332-.743-2.657.038-3.97l-.038 3.97M818.305 202.194v0M872.039 388.943c1.543-.473 3.086-1.142 4.622.016l-4.622-.016M373.434 567.557l4.657-.434-4.657.434M160.589 567.56c1.422-.625 2.84-.953 4.242.048l-4.242-.048M451.452 565.554c1.521-.663 3.038-1.029 4.539.048l-4.539-.048M112.964 368.829l.342 4.115c-.115-1.374-.23-2.744-.342-4.115M465.988 289.745c1.496-.544 2.987-.828 4.456.081-1.486-.028-2.97-.054-4.456-.08M818.036 330.615l.248 4.023-.248-4.023M111.997 209.523l-.371 3.238.37-3.238M25.285 523.014l-.229 3.151c.079-1.054.154-2.103.229-3.15M849.353 337.717l-.252-3.259.252 3.26M740.404 563.523l3.998.028c-1.333-.01-2.666-.02-3.998-.028M344.127 364.264l.747 2.378c-1.663.402-1.912-.391-.747-2.378M444.079 287.955l4.062-.017c-1.352.642-2.705 1.083-4.062.017M128.047 568.873l3.92-.003c-1.308 0-2.613.002-3.92.003M772.313 387.982l.146 3.31c-.047-1.109-.097-2.209-.146-3.31M100.3 570.22c1.286-.854 2.574-.78 3.864-.014l-3.863.014M93.615 570.336l4.007.017c-1.34.912-2.675.955-4.007-.017M833.403 176.38l.031-3.435-.03 3.434M220.054 156.339l3.833.5-3.833-.5M107.278 255.238a1644.55 1644.55 0 000 0M842.007 255.084l-.21-3.265.21 3.265M543.934 569.058l4.73.428-4.73-.428M538.666 528.235c-.853.014-1.704.027-2.55.045a352.83 352.83 0 002.55-.045M538.738 568.434l3.968.39-3.968-.39M300.717 479.365c1.72 9.724-13.391 19.234-14.59 5.411-.437-5.055 2.943-8.608 6.728-11.699 5.372-4.385 8.373-.185 7.862 6.288M134.144 360.728c3.56 1.457 30.76 10.32 16.631 14.778-3.74 1.18-9.393 1.356-12.635-.723-3.9-2.502-7.834-9.885-3.996-14.055M140.838 229.044c9.232-1.072 17.738 14.09 6.356 13.599-8.285-.36-19.427-13.6-6.356-13.6M173.863 266.222c7.71 6.726-6.58 21.78-12.253 15.953-2.897-2.976-.225-9.387 2.166-11.877 2.454-2.555 6.82-3.035 10.087-4.076M196.813 440.591c-4.55.723-24.565 7.263-20.39-4.616 1.591-4.53 6.031-3.186 10.09-2.978 6.542.334 10.3.021 10.3 7.594M183.63 471.188c6.813 3.645-3.146 24.043-8.793 19.703-7.835-6.022 2.88-17.87 8.793-19.703M213.344 454.79c3.313-1.352 18.93 13.67 12.985 17.849-3.047 2.142-8.82-1.53-10.657-3.744-3.444-4.152-3.756-9.274-2.328-14.104M123.241 332.006c3.386.556 9.232.732 9.451 5.49.192 4.182-5.05 5.537-8.742 5.865-3.83.34-8.9-.741-8.973-5.556-.077-5.195 8.144-4.882 8.264-5.8M206.74 539.058c3.605 2.189 20.425 10.07 13.215 15.765-2.698 2.13-10.877-2.27-12.718-4.507-2.197-2.67-4.344-8.925-.498-11.258M253.497 481.864c-.521-8.7 14.157-12.163 11.114.186-.858 3.482-1.688 8.767-5.993 8.969-5.088.239-5.272-5.781-5.121-9.155M208.155 330.574c.102 6.6-12.544 12.42-12.642 1.959-.087-9.349 13.114-12.084 12.642-1.96M199.805 296.2c3.116 1.004 7.257 1.521 7.53 5.48.292 4.19-3.6 6.055-7.102 5.82-2.872-.193-7.122-2.319-7.644-5.435-.765-4.574 3.699-4.873 7.216-5.865M141.862 417.033c-.053-5.446 10.861-11.991 12.871-5.672.643 2.022-4.5 11.089-6.212 11.768-4.527 1.797-5.159-2.391-6.659-6.096M231.297 507.676c-3.688 3.3-14.751 12.574-13.924.126.528-7.952 14.897-7.537 13.924-.126M411.54 543.253c1.209-5.234 18.517 3.846 12.74 10.457-1.937 2.22-7.006.211-8.955-1.104-3.857-2.603-3.941-5.006-3.785-9.353M315.105 431.216c.675-2.333 1.425-6.46 3.651-7.948 4.028-2.694 7.535 1.37 7.536 5.653.001 7.99-9.094 10.51-11.187 2.295M272.208 524.634c4.494 1.03 14.5 11.954 8.697 16.41-5.585 4.289-13.013-13.147-8.697-16.41M276.486 441.946c5.778.46 13.72 9.818 4.74 11.305-7.026 1.164-15.196-9.013-4.74-11.305M328.796 485.003c1.449-4.88 15.779.35 14.974 5.723-.428 2.857-6.287 3.528-9.367 2.773-4.534-1.113-5.711-4.087-5.607-8.496M159.879 212.397c.104-6.31 12.229-8.882 13.117-2.523.803 5.745-13.27 11.858-13.117 2.523M324.79 550.022c.874-3.173 1.25-6.992 5.214-7.41 4.538-.48 4.404 3 3.87 6.607-1.451 9.81-6.995 10.3-9.084.803M133.314 287.472c-6.32 1.426-17.898-10.748-10.822-13.36 4.986-1.843 10.822 9.687 10.822 13.36M213.936 382.036c-3.217 1.515-3.958 2.434-6.429-.052-2.152-2.165-2.057-8.197-.21-10.45 7.074-8.623 6.908 7.012 6.64 10.502M240.183 364.545c3.355.427 13.324 9.883 8.133 13.64-6.361 4.605-9.96-9.818-8.133-13.64M312.77 367.035c-2.439 9.39-8.526 3.072-8.18-4.034.553-11.382 6.861-1.47 8.18 4.034M349.782 517.861c4.126 1.707 9.726 17.48 3.833 18.325-6.619.95-4.415-15.04-3.833-18.325M298.257 509c4.72-1.593 6.45 8.366 3.707 10.216-6.037 4.07-4.764-7.866-3.707-10.216"></path>
          <path d="M253.497 481.864l-.181 3.958c.059-1.324.119-2.641.18-3.958M328.796 485.003c-.026 1.15-.054 2.3-.084 3.443.026-1.153.056-2.298.084-3.443M850.993 465.212c9.788-.314 20.707-3.998 30.325-2.826 2.648.323 8.743.99 4.501 4.917-2.029 1.878-11.742.907-14.682 1.53-17.971 3.805-38.371 6.259-56.798 5.942-8.626-.148-17.316-.84-25.938-1.295-8.616-.456-9.463-3.957.232-5.071 10.069-1.156 20.401-.727 30.52-.74 10.638-.013 21.223-1.747 31.84-2.457M872.481 441.63c-.942 2.682-1.769 8.838-5.379 9.242-5.056.565-5.893-8.116-5.707-11.29.226-3.833 1.605-10.199 6.368-8.87 4.023 1.12 4.426 7.851 4.718 10.918M841.872 439.666c.739-2.872 1.102-9.348 5.164-9.568 4.54-.245 5.837 6.502 5.807 9.735-.03 3.07-1.165 8.866-4.78 9.575-4.901.961-5.34-6.46-6.191-9.742M790.896 444.818c-1.47 3.452-2.444 8.207-6.996 5.853-3.52-1.82-4.01-9.16-3.347-12.522.688-3.482 2.145-7.476 6.146-5.91 4.614 1.807 4.148 8.778 4.197 12.58M829.499 441.63c-4.34 13.153-12.253 4.254-9.248-5.566 3.142-10.264 8.849-.295 9.248 5.566M808.358 442.281c-1.205 2.316-2.487 7.312-5.735 6.786-3.982-.646-4.11-8.309-3.673-11.163.381-2.498 1.503-6.661 4.836-6.607 4.816.078 4.493 7.986 4.572 10.984M894.91 444.806c-3.23 7.247-7.673 1.004-6.251-4.143 2.109-7.633 6.068-.87 6.251 4.143"></path>
          <path d="M815.806 467.679l-10.583-.04c3.53-.665 7.06-.924 10.583.04M885.907 462.356l-9.177.06c3.054-.917 6.113-.937 9.177-.06M850.993 465.212l-7.345.492 7.345-.492M790.896 444.818c-.022-1.758-.046-3.516-.067-5.27.905 1.748.842 3.504.067 5.27M810.09 474.738l4.249.038-4.248-.038M786.245 473.48h4.305-4.305M798.037 467.83l-5.999.493 5.999-.492M825.077 467.657l-5.924.012c1.974-.832 3.948-.856 5.924-.012M808.358 442.281c-.049-1.832-.097-3.664-.143-5.494.05 1.833.096 3.664.143 5.494M862.214 464.547l-5.235.473 5.235-.473M894.91 444.806l-.169-4.681.169 4.68M872.481 441.63l-.32-3.363.32 3.363M829.499 441.63l-.235-3.454.235 3.454M202.863 103.1c-4.779-1.254-5.675-7.97-4.907-12.095l2.613-5.963-1.02-2.205c.436-4.094-.68-5.873 4.024-4.215 8.74 3.082 10.137 24.162-.71 24.478M273.604 90.115c3.937-.31 11.088 4.275 7.17 8.711-2.429 2.748-10.43 1.448-13.694 2.022-4.329.761-8.844 1.802-6.502-4.682 1.84-5.092 8.407-6.184 13.026-6.051M269.462 120.614c-4-3.207-2.214-17.814 3.872-15.186 6.26 2.705-.535 13.078-3.872 15.186"></path>
          <path d="M197.956 91.005c0 1.537-.001 3.075-.004 4.605-.834-1.54-.808-3.073.004-4.605M202.863 103.1c.815-.023 1.631-.047 2.436-.068-.819.026-1.627.047-2.436.068M696.645 523.767c-.374 6.644-7.509 1.732-7.003-2.713.92-8.066 5.48-.095 7.003 2.713"></path>
        </g>
      </g>
    </StyledSvg>
  );
}

export default FeaturedImg;
