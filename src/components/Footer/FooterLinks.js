import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <footer className="footer p-10 bg-white text-base-content">
      <div>
        <span className="text-lg font-bold text-black font-inter">
          Products
        </span>
        <Link to="#" className="footer_link_style">
          Features
        </Link>
        <Link to="#" className="footer_link_style">
          {" "}
          Integrations{" "}
        </Link>
        <Link to="#" className="footer_link_style">
          Enterprise
        </Link>
        <Link to="#" className="footer_link_style">
          Solutions
        </Link>
      </div>
      <div>
        <span className="text-lg font-bold text-black font-inter">
          Services
        </span>
        <Link to="#" className="footer_link_style">
          Branding
        </Link>
        <Link to="#" className="footer_link_style">
          Design
        </Link>
        <Link to="#" className="footer_link_style">
          Marketing
        </Link>
        <Link to="#" className="footer_link_style">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="text-lg font-bold text-black font-inter">
          Resources
        </span>
        <Link to="#" className="footer_link_style">
          Partners
        </Link>
        <Link to="#" className="footer_link_style">
          Developers
        </Link>
        <Link to="#" className="footer_link_style">
          Community
        </Link>
        <Link to="#" className="footer_link_style">
          Apps
        </Link>
      </div>
      <div>
        <span className="text-lg font-bold text-black font-inter">Company</span>
        <Link to="#" className="footer_link_style">
          About Us
        </Link>
        <Link to="#" className="footer_link_style">
          Careers
        </Link>
      </div>
      <div>
        <span className="text-lg font-bold text-black font-inter">
          Mobile app
        </span>
        <Link to="#" className="link link-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="none"
          >
            <g clip-path="url(#clip0_1_14487)">
              <path
                d="M110.303 0H9.703C9.336 0 8.973 0 8.608 0.002C8.302 0.004 7.998 0.01 7.689 0.015C7.01752 0.0223323 6.34758 0.0808351 5.685 0.19C5.02373 0.302207 4.38318 0.513588 3.785 0.817C3.18671 1.12335 2.64009 1.52151 2.165 1.997C1.68826 2.47032 1.29084 3.01732 0.988001 3.617C0.684079 4.21585 0.47332 4.85757 0.363001 5.52C0.251729 6.18171 0.191883 6.85105 0.184001 7.522C0.174001 7.829 0.174001 8.137 0.169001 8.443V31.56C0.174001 31.87 0.175001 32.17 0.184001 32.481C0.192209 33.152 0.252389 33.8213 0.364001 34.483C0.473608 35.1461 0.684044 35.7885 0.988001 36.388C1.29112 36.9854 1.68893 37.5297 2.166 38C2.63875 38.4771 3.18504 38.8751 3.784 39.179C4.38253 39.4831 5.02335 39.6954 5.685 39.809C6.34765 39.9179 7.01752 39.9771 7.689 39.986C7.999 39.993 8.302 39.997 8.608 39.997C8.974 39.999 9.336 39.999 9.703 39.999H110.303C110.663 39.999 111.027 39.999 111.387 39.997C111.691 39.997 112.004 39.993 112.309 39.987C112.979 39.9782 113.648 39.9187 114.309 39.809C114.973 39.6946 115.616 39.4823 116.217 39.179C116.816 38.875 117.362 38.4769 117.834 38C118.31 37.5273 118.709 36.9827 119.016 36.386C119.318 35.7862 119.527 35.1438 119.635 34.481C119.746 33.8192 119.808 33.15 119.82 32.479C119.824 32.169 119.824 31.869 119.824 31.558C119.832 31.194 119.832 30.833 119.832 30.464V9.536C119.832 9.17 119.832 8.806 119.824 8.444C119.824 8.138 119.824 7.83 119.82 7.524C119.808 6.85266 119.746 6.18314 119.635 5.521C119.526 4.8589 119.317 4.21723 119.015 3.618C118.398 2.41511 117.419 1.43588 116.217 0.818C115.616 0.515273 114.973 0.303946 114.309 0.191C113.648 0.0810377 112.979 0.0221968 112.309 0.015C112.004 0.01 111.691 0.004 111.387 0.002C111.027 0 110.662 0 110.303 0Z"
                fill="#A6A6A6"
              />
              <path
                d="M8.613 39.125C8.308 39.125 8.011 39.121 7.709 39.115C7.08247 39.1066 6.45743 39.0518 5.839 38.951C5.26284 38.8516 4.70471 38.6669 4.183 38.403C3.66589 38.1414 3.1942 37.7984 2.786 37.387C2.37207 36.9801 2.02751 36.5082 1.766 35.99C1.50106 35.4687 1.3176 34.9099 1.222 34.333C1.11929 33.7131 1.0638 33.0863 1.056 32.458C1.049 32.248 1.041 31.545 1.041 31.545V8.445C1.041 8.445 1.05 7.753 1.056 7.55C1.06345 6.92272 1.11861 6.29691 1.221 5.678C1.31661 5.09952 1.50006 4.53905 1.765 4.016C2.02571 3.4983 2.36847 3.0262 2.78 2.618C3.19096 2.20578 3.66404 1.86058 4.182 1.595C4.70264 1.33189 5.25986 1.14851 5.835 1.051C6.45536 0.949562 7.08245 0.894742 7.711 0.887L8.613 0.875H111.382L112.295 0.888C112.918 0.895224 113.539 0.949378 114.153 1.05C114.734 1.14872 115.297 1.33341 115.824 1.598C116.862 2.13288 117.706 2.97908 118.239 4.018C118.499 4.53755 118.68 5.0935 118.774 5.667C118.878 6.29093 118.936 6.9216 118.948 7.554C118.951 7.837 118.951 8.142 118.951 8.444C118.959 8.819 118.959 9.176 118.959 9.536V30.465C118.959 30.828 118.959 31.183 118.951 31.54C118.951 31.865 118.951 32.163 118.947 32.47C118.936 33.091 118.879 33.7103 118.777 34.323C118.684 34.9041 118.502 35.4673 118.237 35.993C117.973 36.5056 117.63 36.9733 117.221 37.379C116.812 37.7927 116.34 38.1377 115.821 38.401C115.296 38.6671 114.733 38.8525 114.153 38.951C113.535 39.0519 112.91 39.1064 112.284 39.114C111.991 39.121 111.684 39.125 111.387 39.125L110.303 39.127L8.613 39.125Z"
                fill="black"
              />
              <path
                d="M24.937 20.3C24.9479 19.4656 25.1696 18.6475 25.5815 17.9217C25.9934 17.196 26.5822 16.5862 27.293 16.149C26.8414 15.504 26.2456 14.9731 25.553 14.5985C24.8604 14.2239 24.09 14.0159 23.303 13.991C21.623 13.815 19.995 14.996 19.139 14.996C18.267 14.996 16.949 14.008 15.531 14.038C14.6133 14.0676 13.7189 14.3345 12.935 14.8126C12.1511 15.2906 11.5044 15.9637 11.058 16.766C9.124 20.114 10.567 25.035 12.419 27.742C13.346 29.067 14.429 30.547 15.847 30.495C17.234 30.437 17.752 29.61 19.427 29.61C21.085 29.61 21.571 30.495 23.017 30.462C24.506 30.437 25.443 29.13 26.337 27.792C27.0035 26.8479 27.5165 25.8043 27.857 24.7C26.992 24.3343 26.2538 23.7221 25.7346 22.9396C25.2153 22.1571 24.9379 21.2391 24.937 20.3ZM22.205 12.21C23.0166 11.236 23.4166 9.9841 23.32 8.72C22.0799 8.85018 20.9345 9.4429 20.112 10.38C19.71 10.8375 19.402 11.3697 19.2057 11.9462C19.0094 12.5227 18.9286 13.1323 18.968 13.74C19.5881 13.7464 20.2016 13.612 20.7623 13.347C21.323 13.082 21.8163 12.6932 22.205 12.21Z"
                fill="white"
              />
              <path
                d="M42.47 27.14H37.738L36.601 30.496H34.596L39.08 18.078H41.163L45.646 30.496H43.607L42.47 27.14ZM38.227 25.59H41.979L40.129 20.144H40.078L38.227 25.59ZM55.327 25.97C55.327 28.783 53.822 30.59 51.549 30.59C50.9736 30.62 50.4013 30.4875 49.8977 30.2075C49.394 29.9276 48.9793 29.5115 48.701 29.007H48.658V33.491H46.798V21.442H48.598V22.948H48.631C48.9221 22.4456 49.3439 22.0316 49.8515 21.7498C50.3592 21.4681 50.9337 21.3292 51.514 21.348C53.812 21.348 55.327 23.164 55.327 25.97ZM53.417 25.97C53.417 24.137 52.47 22.932 51.025 22.932C49.605 22.932 48.65 24.162 48.65 25.97C48.65 27.794 49.605 29.016 51.025 29.016C52.47 29.016 53.417 27.819 53.417 25.97ZM65.293 25.97C65.293 28.783 63.787 30.59 61.514 30.59C60.9386 30.62 60.3663 30.4875 59.8627 30.2075C59.359 29.9276 58.9443 29.5115 58.666 29.007H58.623V33.491H56.764V21.442H58.563V22.948H58.597C58.8881 22.4456 59.3099 22.0316 59.8175 21.7498C60.3252 21.4681 60.8997 21.3292 61.48 21.348C63.778 21.348 65.293 23.164 65.293 25.97ZM63.383 25.97C63.383 24.137 62.435 22.932 60.99 22.932C59.57 22.932 58.615 24.162 58.615 25.97C58.615 27.794 59.57 29.016 60.99 29.016C62.435 29.016 63.383 27.819 63.383 25.97ZM71.878 27.036C72.016 28.268 73.212 29.076 74.848 29.076C76.414 29.076 77.541 28.268 77.541 27.157C77.541 26.193 76.861 25.617 75.251 25.221L73.642 24.833C71.362 24.283 70.303 23.216 70.303 21.485C70.303 19.343 72.17 17.871 74.822 17.871C77.446 17.871 79.245 19.343 79.305 21.485H77.429C77.317 20.246 76.293 19.498 74.795 19.498C73.297 19.498 72.274 20.255 72.274 21.356C72.274 22.234 72.928 22.751 74.529 23.146L75.897 23.482C78.445 24.085 79.503 25.108 79.503 26.925C79.503 29.248 77.653 30.703 74.71 30.703C71.956 30.703 70.096 29.283 69.976 27.036H71.878ZM83.514 19.3V21.442H85.236V22.914H83.514V27.905C83.514 28.681 83.859 29.042 84.616 29.042C84.8203 29.0384 85.0242 29.0241 85.227 28.999V30.462C84.8868 30.5256 84.541 30.5544 84.195 30.548C82.362 30.548 81.647 29.859 81.647 28.103V22.914H80.331V21.442H81.647V19.3H83.514ZM86.233 25.97C86.233 23.121 87.911 21.331 90.527 21.331C93.152 21.331 94.822 23.121 94.822 25.97C94.822 28.826 93.161 30.608 90.527 30.608C87.894 30.608 86.233 28.826 86.233 25.97ZM92.928 25.97C92.928 24.016 92.033 22.862 90.527 22.862C89.021 22.862 88.127 24.024 88.127 25.97C88.127 27.932 89.021 29.076 90.527 29.076C92.033 29.076 92.928 27.932 92.928 25.97ZM96.354 21.442H98.127V22.983H98.17C98.2901 22.502 98.5721 22.077 98.9685 21.7793C99.3649 21.4816 99.8516 21.3293 100.347 21.348C100.561 21.3471 100.775 21.3703 100.984 21.417V23.155C100.714 23.0725 100.432 23.0347 100.149 23.043C99.879 23.032 99.6098 23.0796 99.3599 23.1825C99.1101 23.2854 98.8854 23.4411 98.7014 23.639C98.5174 23.8369 98.3784 24.0722 98.2939 24.3289C98.2094 24.5856 98.1815 24.8575 98.212 25.126V30.496H96.354V21.442ZM109.552 27.837C109.302 29.48 107.702 30.608 105.654 30.608C103.02 30.608 101.385 28.844 101.385 26.013C101.385 23.173 103.029 21.331 105.575 21.331C108.081 21.331 109.655 23.051 109.655 25.797V26.434H103.261V26.546C103.232 26.8792 103.273 27.2149 103.384 27.5307C103.494 27.8465 103.67 28.1352 103.9 28.3778C104.131 28.6203 104.41 28.811 104.72 28.9372C105.03 29.0635 105.363 29.1224 105.697 29.11C106.136 29.1511 106.576 29.0493 106.953 28.82C107.33 28.5906 107.622 28.2459 107.787 27.837H109.552ZM103.27 25.135H107.796C107.813 24.8354 107.767 24.5357 107.663 24.2545C107.558 23.9733 107.397 23.7167 107.188 23.5009C106.98 23.2852 106.729 23.1148 106.451 23.0005C106.174 22.8863 105.876 22.8306 105.576 22.837C105.273 22.8352 104.973 22.8933 104.693 23.008C104.413 23.1227 104.159 23.2918 103.944 23.5055C103.73 23.7191 103.56 23.9731 103.444 24.2528C103.328 24.5325 103.269 24.8323 103.27 25.135Z"
                fill="white"
              />
              <path
                d="M37.994 8.731C38.3836 8.70304 38.7746 8.7619 39.1388 8.90334C39.5029 9.04478 39.8311 9.26527 40.0998 9.5489C40.3684 9.83254 40.5707 10.1723 40.6921 10.5435C40.8136 10.9148 40.8511 11.3084 40.802 11.696C40.802 13.602 39.772 14.698 37.994 14.698H35.839V8.73L37.994 8.731ZM36.766 13.854H37.891C38.1693 13.8705 38.4479 13.8247 38.7063 13.7201C38.9647 13.6154 39.1966 13.4544 39.385 13.2489C39.5734 13.0433 39.7136 12.7984 39.7954 12.5318C39.8772 12.2653 39.8986 11.9838 39.858 11.708C39.8957 11.4332 39.8722 11.1535 39.7892 10.8889C39.7061 10.6242 39.5655 10.3812 39.3776 10.1773C39.1896 9.97336 38.9588 9.81351 38.7018 9.70921C38.4448 9.60491 38.1679 9.55874 37.891 9.574H36.766V13.854ZM41.849 12.444C41.821 12.1483 41.8551 11.8499 41.9491 11.5681C42.043 11.2863 42.1948 11.0272 42.3947 10.8075C42.5947 10.5878 42.8383 10.4122 43.11 10.2921C43.3816 10.172 43.6754 10.1099 43.9725 10.1099C44.2696 10.1099 44.5634 10.172 44.835 10.2921C45.1067 10.4122 45.3503 10.5878 45.5503 10.8075C45.7502 11.0272 45.902 11.2863 45.9959 11.5681C46.0899 11.8499 46.124 12.1483 46.096 12.444C46.1255 12.7406 46.0926 13.0401 45.9993 13.3232C45.9061 13.6063 45.7545 13.8667 45.5545 14.0877C45.3544 14.3087 45.1103 14.4853 44.8378 14.6061C44.5653 14.727 44.2706 14.7894 43.9725 14.7894C43.6744 14.7894 43.3797 14.727 43.1072 14.6061C42.8347 14.4853 42.5906 14.3087 42.3905 14.0877C42.1905 13.8667 42.0389 13.6063 41.9457 13.3232C41.8524 13.0401 41.8195 12.7406 41.849 12.444ZM45.182 12.444C45.182 11.468 44.743 10.897 43.974 10.897C43.201 10.897 42.767 11.468 42.767 12.444C42.767 13.428 43.201 13.994 43.974 13.994C44.744 13.994 45.182 13.424 45.182 12.444ZM51.742 14.698H50.819L49.889 11.381H49.819L48.892 14.698H47.979L46.737 10.195H47.639L48.445 13.631H48.512L49.438 10.195H50.29L51.216 13.631H51.286L52.089 10.195H52.978L51.742 14.698ZM54.022 10.195H54.877V10.91H54.943C55.0557 10.6531 55.2458 10.4377 55.4867 10.294C55.7276 10.1502 56.0074 10.0852 56.287 10.108C56.5061 10.0915 56.7262 10.1246 56.9308 10.2047C57.1354 10.2848 57.3194 10.4099 57.4691 10.5708C57.6188 10.7316 57.7304 10.9241 57.7957 11.1339C57.8609 11.3438 57.8781 11.5656 57.846 11.783V14.698H56.957V12.006C56.957 11.282 56.643 10.922 55.985 10.922C55.8363 10.9151 55.6878 10.9405 55.5498 10.9963C55.4118 11.0521 55.2875 11.1372 55.1854 11.2455C55.0833 11.3539 55.0058 11.483 54.9583 11.6241C54.9107 11.7652 54.8943 11.9149 54.91 12.063V14.698H54.022V10.195ZM59.262 8.437H60.15V14.697H59.262V8.437ZM61.386 12.444C61.358 12.1483 61.3921 11.8499 61.486 11.5681C61.58 11.2863 61.7318 11.0272 61.9317 10.8075C62.1317 10.5878 62.3753 10.4122 62.647 10.2921C62.9186 10.172 63.2124 10.1099 63.5095 10.1099C63.8066 10.1099 64.1004 10.172 64.372 10.2921C64.6437 10.4122 64.8873 10.5878 65.0872 10.8075C65.2872 11.0272 65.439 11.2863 65.533 11.5681C65.6269 11.8499 65.661 12.1483 65.633 12.444C65.6625 12.7406 65.6296 13.0401 65.5363 13.3232C65.4431 13.6063 65.2915 13.8667 65.0915 14.0877C64.8914 14.3087 64.6473 14.4853 64.3748 14.6061C64.1023 14.727 63.8076 14.7894 63.5095 14.7894C63.2114 14.7894 62.9167 14.727 62.6442 14.6061C62.3717 14.4853 62.1276 14.3087 61.9275 14.0877C61.7275 13.8667 61.5759 13.6063 61.4827 13.3232C61.3894 13.0401 61.3565 12.7406 61.386 12.444ZM64.719 12.444C64.719 11.468 64.28 10.897 63.511 10.897C62.738 10.897 62.304 11.468 62.304 12.444C62.304 13.428 62.738 13.994 63.511 13.994C64.281 13.994 64.719 13.424 64.719 12.444ZM66.569 13.424C66.569 12.614 67.172 12.146 68.244 12.08L69.464 12.01V11.621C69.464 11.146 69.149 10.877 68.542 10.877C68.045 10.877 67.702 11.059 67.603 11.377H66.743C66.833 10.604 67.561 10.107 68.583 10.107C69.711 10.107 70.348 10.67 70.348 11.621V14.698H69.493V14.065H69.423C69.2802 14.2921 69.0798 14.4772 68.8421 14.6014C68.6043 14.7256 68.3379 14.7845 68.07 14.772C67.8809 14.7917 67.6898 14.7716 67.509 14.7129C67.3282 14.6542 67.1617 14.5582 67.0203 14.4312C66.8788 14.3042 66.7656 14.1489 66.6879 13.9754C66.6102 13.8019 66.5697 13.6141 66.569 13.424ZM69.463 13.04V12.663L68.363 12.733C67.743 12.775 67.463 12.986 67.463 13.383C67.463 13.788 67.814 14.023 68.297 14.023C68.4385 14.0373 68.5815 14.023 68.7174 13.9809C68.8533 13.9389 68.9793 13.87 69.0881 13.7783C69.1968 13.6866 69.2861 13.574 69.3505 13.4472C69.4149 13.3204 69.4531 13.1819 69.463 13.04ZM71.516 12.444C71.516 11.021 72.248 10.12 73.386 10.12C73.6673 10.1072 73.9464 10.1747 74.1907 10.3146C74.4351 10.4544 74.6346 10.661 74.766 10.91H74.833V8.437H75.721V14.697H74.87V13.987H74.8C74.6582 14.2345 74.4514 14.4385 74.202 14.5769C73.9526 14.7152 73.67 14.7827 73.385 14.772C72.24 14.772 71.516 13.871 71.516 12.444ZM72.434 12.444C72.434 13.399 72.884 13.974 73.637 13.974C74.387 13.974 74.849 13.391 74.849 12.448C74.849 11.51 74.381 10.918 73.637 10.918C72.889 10.918 72.434 11.498 72.434 12.444ZM79.398 12.444C79.37 12.1483 79.4041 11.8499 79.498 11.5681C79.592 11.2863 79.7438 11.0272 79.9437 10.8075C80.1437 10.5878 80.3873 10.4122 80.659 10.2921C80.9306 10.172 81.2244 10.1099 81.5215 10.1099C81.8186 10.1099 82.1124 10.172 82.384 10.2921C82.6557 10.4122 82.8993 10.5878 83.0993 10.8075C83.2992 11.0272 83.451 11.2863 83.5449 11.5681C83.6389 11.8499 83.673 12.1483 83.645 12.444C83.6745 12.7406 83.6416 13.0401 83.5483 13.3232C83.4551 13.6063 83.3035 13.8667 83.1035 14.0877C82.9034 14.3087 82.6593 14.4853 82.3868 14.6061C82.1143 14.727 81.8196 14.7894 81.5215 14.7894C81.2234 14.7894 80.9287 14.727 80.6562 14.6061C80.3837 14.4853 80.1396 14.3087 79.9395 14.0877C79.7395 13.8667 79.5879 13.6063 79.4947 13.3232C79.4014 13.0401 79.3685 12.7406 79.398 12.444ZM82.731 12.444C82.731 11.468 82.293 10.897 81.523 10.897C80.751 10.897 80.316 11.468 80.316 12.444C80.316 13.428 80.751 13.994 81.523 13.994C82.293 13.994 82.731 13.424 82.731 12.444ZM84.837 10.194H85.693V10.91H85.759C85.8717 10.6531 86.0618 10.4377 86.3027 10.294C86.5436 10.1502 86.8234 10.0852 87.103 10.108C87.3221 10.0915 87.5422 10.1246 87.7468 10.2047C87.9514 10.2848 88.1354 10.4099 88.2851 10.5708C88.4348 10.7316 88.5464 10.9241 88.6117 11.1339C88.6769 11.3438 88.6941 11.5656 88.662 11.783V14.698H87.773V12.006C87.773 11.282 87.459 10.922 86.801 10.922C86.6523 10.9151 86.5038 10.9405 86.3658 10.9963C86.2278 11.0521 86.1035 11.1372 86.0014 11.2455C85.8993 11.3539 85.8218 11.483 85.7743 11.6241C85.7267 11.7652 85.7103 11.9149 85.726 12.063V14.698H84.837V10.194ZM93.683 9.074V10.215H94.659V10.964H93.683V13.279C93.683 13.751 93.877 13.958 94.32 13.958C94.4333 13.9575 94.5465 13.9505 94.659 13.937V14.677C94.4992 14.7058 94.3373 14.7212 94.175 14.723C93.187 14.723 92.794 14.375 92.794 13.507V10.964H92.079V10.215H92.794V9.074H93.683ZM95.873 8.437H96.753V10.918H96.823C96.9413 10.6587 97.1368 10.4421 97.3826 10.2979C97.6285 10.1537 97.9129 10.0887 98.197 10.112C98.4149 10.1002 98.6328 10.1366 98.835 10.2187C99.0373 10.3008 99.2189 10.4265 99.367 10.5869C99.515 10.7473 99.6258 10.9383 99.6915 11.1465C99.7572 11.3546 99.7762 11.5747 99.747 11.791V14.698H98.858V12.01C98.858 11.29 98.523 10.926 97.895 10.926C97.7422 10.9134 97.5885 10.9344 97.4447 10.9875C97.3009 11.0406 97.1704 11.1244 97.0623 11.2332C96.9543 11.342 96.8714 11.4731 96.8193 11.6173C96.7673 11.7615 96.7474 11.9153 96.761 12.068V14.698H95.873V8.437ZM104.929 13.482C104.808 13.8934 104.547 14.2493 104.191 14.4874C103.834 14.7256 103.405 14.8309 102.979 14.785C102.682 14.793 102.387 14.7363 102.114 14.6188C101.842 14.5013 101.598 14.3259 101.4 14.1046C101.202 13.8834 101.054 13.6216 100.968 13.3376C100.881 13.0536 100.857 12.7541 100.898 12.46C100.859 12.1652 100.883 11.8653 100.97 11.5807C101.056 11.2962 101.203 11.0335 101.4 10.8105C101.596 10.5875 101.839 10.4093 102.11 10.2882C102.382 10.167 102.677 10.1055 102.974 10.108C104.227 10.108 104.983 10.964 104.983 12.378V12.688H101.803V12.738C101.789 12.9033 101.81 13.0697 101.864 13.2265C101.918 13.3834 102.004 13.5271 102.117 13.6486C102.23 13.7701 102.368 13.8666 102.52 13.9319C102.673 13.9972 102.837 14.03 103.003 14.028C103.215 14.0531 103.43 14.0147 103.621 13.9175C103.811 13.8203 103.969 13.6687 104.073 13.482H104.929ZM101.803 12.031H104.078C104.089 11.8798 104.069 11.7278 104.018 11.585C103.967 11.4421 103.887 11.3115 103.782 11.2016C103.678 11.0916 103.551 11.0048 103.411 10.9467C103.271 10.8885 103.121 10.8604 102.969 10.864C102.815 10.8621 102.663 10.891 102.52 10.949C102.378 11.007 102.249 11.0929 102.14 11.2017C102.031 11.3104 101.945 11.4398 101.888 11.5823C101.83 11.7247 101.801 11.8773 101.803 12.031Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_14487">
                <rect width="120" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link to="#" className="link link-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="40"
            viewBox="0 0 135 40"
            fill="none"
          >
            <g clip-path="url(#clip0_1_14495)">
              <path
                d="M130.001 39.7964H4.9995C2.25 39.7964 1.90735e-06 37.5707 1.90735e-06 34.85V5.1536C1.90735e-06 2.432 2.25 0.203598 4.9995 0.203598H130.001C132.746 0.203598 135 2.432 135 5.1536V34.85C135 37.5707 132.75 39.7964 130.001 39.7964Z"
                fill="black"
              />
              <path
                d="M130.001 0.994698C132.314 0.994698 134.198 2.8613 134.198 5.1527V34.85C134.198 37.1387 132.314 39.0053 130.001 39.0053H4.9995C2.682 39.0053 0.801002 37.1423 0.801002 34.85V5.1536C0.801002 2.8613 2.6856 0.994698 4.9995 0.994698H130.001ZM130.001 0.202698H4.9995C2.25 0.203598 1.90735e-06 2.432 1.90735e-06 5.1536V34.85C1.90735e-06 37.5707 2.25 39.8 4.9995 39.8H130.001C132.746 39.8 135 37.5707 135 34.85V5.1536C135 2.432 132.75 0.203598 130.001 0.203598V0.202698Z"
                fill="#A6A6A6"
              />
              <path
                d="M44.469 13.286C43.587 13.286 42.8274 12.98 42.2055 12.3707C41.5863 11.7587 41.2731 10.9964 41.2731 10.1C41.2731 9.2036 41.5863 8.4404 42.2055 7.8356C42.8238 7.2281 43.587 6.9176 44.469 6.9176C44.8947 6.9176 45.3195 7.0031 45.7317 7.175C46.1358 7.3469 46.4589 7.5755 46.6983 7.8608L46.7433 7.9166L46.1106 8.5493L46.0548 8.4827C45.6642 8.0327 45.1476 7.8113 44.469 7.8113C44.1758 7.80801 43.8849 7.86252 43.6128 7.97169C43.3407 8.08087 43.0928 8.24259 42.8832 8.4476C42.4404 8.8697 42.219 9.425 42.219 10.1C42.219 10.7786 42.4404 11.3375 42.8832 11.7596C43.3332 12.1817 43.8678 12.3923 44.469 12.3923C45.1161 12.3923 45.657 12.1781 46.0863 11.756C46.35 11.4923 46.5048 11.144 46.557 10.6868H44.388V9.812H47.4363L47.4507 9.875C47.4822 10.019 47.4993 10.1666 47.4993 10.343C47.4993 11.1827 47.2392 11.8721 46.7334 12.3815C46.1493 12.9791 45.3906 13.2851 44.469 13.2851V13.286ZM52.1055 13.1483H48.4452V7.0553H52.1055V7.9445H49.3767V9.6635H51.8382V10.5392H49.3767V12.2582H52.1055V13.1483ZM55.3572 13.1483H54.4257V7.9445H52.7517V7.0553H57.0339V7.9445H55.3572V13.1483ZM60.7851 13.1483H59.8572V7.0553H60.7851V13.1483ZM64.2051 13.1483H63.2817V7.9445H61.6005V7.0553H65.8863V7.9445H64.206L64.2051 13.1483ZM71.4132 13.2851C70.5168 13.2851 69.7572 12.9755 69.1524 12.3608C68.5512 11.7488 68.2452 10.9892 68.2452 10.1036C68.2452 9.2144 68.5512 8.4512 69.1524 7.8428C69.7572 7.2308 70.5168 6.9185 71.4132 6.9185C72.3024 6.9185 73.0584 7.2308 73.6632 7.85C74.268 8.462 74.5731 9.2207 74.5731 10.1036C74.5731 10.9892 74.2671 11.7524 73.6668 12.3644C73.062 12.9764 72.3024 13.2851 71.4132 13.2851ZM69.8346 11.7524C70.2702 12.1844 70.7832 12.3959 71.4132 12.3959C71.7046 12.4015 71.9941 12.3472 72.2638 12.2365C72.5334 12.1259 72.7775 11.9611 72.981 11.7524C73.4094 11.3231 73.6281 10.7678 73.6281 10.1C73.6281 9.4358 73.4094 8.8805 72.9801 8.4512C72.5589 8.0219 72.0315 7.8077 71.4132 7.8077C70.7868 7.8077 70.2702 8.0183 69.8346 8.4512C69.4089 8.8805 69.1911 9.4358 69.1911 10.1C69.1911 10.7678 69.4089 11.324 69.8346 11.7524ZM80.2791 13.1474H79.3512L79.3269 13.1096L76.3947 8.4584L76.4226 9.3692V13.1483H75.4947V7.0553H76.5567L79.3755 11.5166L79.3485 10.613V7.0553H80.2791V13.1474ZM68.1327 21.737C65.7882 21.737 63.8685 23.5055 63.8685 25.9445C63.8685 28.3673 65.7882 30.1565 68.1327 30.1565C70.488 30.1565 72.4077 28.3673 72.4077 25.9445C72.4077 23.5055 70.488 21.737 68.1327 21.737ZM68.1327 28.4969C66.8457 28.4969 65.7387 27.443 65.7387 25.9445C65.7387 24.4298 66.8457 23.393 68.1327 23.393C69.4233 23.393 70.5375 24.4298 70.5375 25.9445C70.5375 27.443 69.4233 28.4969 68.1327 28.4969ZM58.824 21.737C56.4687 21.737 54.5562 23.5055 54.5562 25.9445C54.5562 28.3673 56.4687 30.1565 58.824 30.1565C61.1766 30.1565 63.0927 28.3673 63.0927 25.9445C63.0927 23.5055 61.1757 21.737 58.824 21.737ZM58.824 28.4969C57.5343 28.4969 56.4228 27.443 56.4228 25.9445C56.4228 24.4298 57.5343 23.393 58.824 23.393C60.111 23.393 61.2216 24.4298 61.2216 25.9445C61.2216 27.443 60.111 28.4969 58.824 28.4969ZM47.7432 23.0267V24.8168H52.0605C51.9345 25.8149 51.5961 26.5493 51.0795 27.0632C50.4495 27.6815 49.4685 28.3673 47.7432 28.3673C45.0882 28.3673 43.0074 26.2469 43.0074 23.618C43.0074 20.9882 45.0891 18.8642 47.7432 18.8642C49.1814 18.8642 50.2254 19.4195 50.9949 20.1404L52.2711 18.8786C51.1911 17.8589 49.7574 17.0786 47.7432 17.0786C44.1009 17.0786 41.0427 20.0108 41.0427 23.618C41.0427 27.2207 44.1045 30.1565 47.7432 30.1565C49.7115 30.1565 51.192 29.5175 52.3557 28.3178C53.5473 27.1406 53.9163 25.481 53.9163 24.1445C53.9163 23.7269 53.8812 23.3471 53.8218 23.0267H47.7432ZM93.0528 24.4127C92.7009 23.4695 91.6182 21.737 89.4105 21.737C87.2199 21.737 85.3992 23.4416 85.3992 25.9445C85.3992 28.3043 87.2028 30.1565 89.6175 30.1565C91.5723 30.1565 92.7009 28.9757 93.1617 28.2899L91.7127 27.3332C91.2276 28.0334 90.5697 28.4969 89.6175 28.4969C88.6725 28.4969 87.9939 28.0685 87.5574 27.2207L93.2454 24.8897C93.249 24.8897 93.0528 24.4127 93.0528 24.4127ZM87.2514 25.8149C87.2028 24.1904 88.524 23.3606 89.4744 23.3606C90.2151 23.3606 90.8442 23.7269 91.0557 24.2543L87.2514 25.8149ZM82.629 29.9H84.4992V17.525H82.629V29.9ZM79.5663 22.6721H79.5033C79.0848 22.1834 78.2829 21.7361 77.2677 21.7361C75.1365 21.7361 73.1889 23.5856 73.1889 25.9589C73.1889 28.3214 75.1365 30.1565 77.2677 30.1565C78.2829 30.1565 79.0857 29.7065 79.5033 29.2007H79.5663V29.8019C79.5663 31.412 78.6978 32.2769 77.2956 32.2769C76.1526 32.2769 75.4461 31.4606 75.1509 30.7757L73.5264 31.4471C73.9944 32.5613 75.2355 33.9356 77.2956 33.9356C79.4889 33.9356 81.3384 32.6594 81.3384 29.5526V21.9926H79.5663V22.6721ZM77.4252 28.4969C76.1382 28.4969 75.0591 27.4286 75.0591 25.9589C75.0591 24.4757 76.1391 23.393 77.4261 23.393C78.6978 23.393 79.6968 24.4757 79.6968 25.9589C79.6968 27.4286 78.6978 28.4969 77.4252 28.4969ZM101.806 17.525H97.3341V29.9H99.2016V25.211H101.806C103.881 25.211 105.909 23.726 105.909 21.368C105.909 19.0082 103.874 17.525 101.806 17.525ZM101.856 23.4911H99.2007V19.2476H101.856C103.248 19.2476 104.043 20.3906 104.043 21.368C104.043 22.3238 103.248 23.4911 101.856 23.4911ZM113.383 21.7118C112.037 21.7118 110.638 22.3031 110.062 23.6072L111.713 24.293C112.072 23.6072 112.726 23.3822 113.419 23.3822C114.385 23.3822 115.367 23.9582 115.381 24.9752V25.1048C115.043 24.9113 114.322 24.6269 113.432 24.6269C111.65 24.6269 109.836 25.5971 109.836 27.4106C109.836 29.0702 111.295 30.1358 112.937 30.1358C114.192 30.1358 114.884 29.5733 115.321 28.9226H115.384V29.8793H117.184V25.1327C117.184 22.9394 115.528 21.7118 113.383 21.7118ZM113.158 28.4933C112.546 28.4933 111.7 28.1918 111.7 27.443C111.7 26.4863 112.757 26.12 113.675 26.12C114.498 26.12 114.881 26.3 115.38 26.5358C115.236 27.6815 114.237 28.4933 113.158 28.4933ZM123.747 21.9827L121.603 27.3476H121.54L119.321 21.9836H117.311L120.64 29.4779L118.741 33.6512H120.689L125.818 21.9827H123.748H123.747ZM106.934 29.9H108.805V17.525H106.934V29.9Z"
                fill="white"
              />
              <path
                d="M10.4346 7.66371C10.143 7.96971 9.9702 8.44041 9.9702 9.05601V30.9476C9.9702 31.5632 10.1394 32.0339 10.4346 32.3399L10.5084 32.4065L22.9014 20.144V19.856L10.5075 7.59351L10.4346 7.66371Z"
                fill="url(#paint0_linear_1_14495)"
              />
              <path
                d="M27.0279 24.2363L22.9005 20.144V19.856L27.0315 15.7673L27.1233 15.8195L32.0166 18.5762C33.4125 19.3601 33.4125 20.6435 32.0166 21.431L27.1233 24.1832C27.1233 24.1805 27.0279 24.2363 27.0279 24.2363Z"
                fill="url(#paint1_linear_1_14495)"
              />
              <path
                d="M27.1233 24.1805L22.9005 20L10.4346 32.339C10.8981 32.8214 11.6541 32.8808 12.5154 32.3993L27.1233 24.1805Z"
                fill="url(#paint2_linear_1_14495)"
              />
              <path
                d="M27.1233 15.8195L12.5163 7.60071C11.6541 7.12191 10.8981 7.18221 10.4346 7.66371L22.9005 20L27.1233 15.8195Z"
                fill="url(#paint3_linear_1_14495)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_14495"
                x1="21.8068"
                y1="31.1742"
                x2="5.18661"
                y2="14.3865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00A0FF" />
                <stop offset="0.007" stop-color="#00A1FF" />
                <stop offset="0.26" stop-color="#00BEFF" />
                <stop offset="0.512" stop-color="#00D2FF" />
                <stop offset="0.76" stop-color="#00DFFF" />
                <stop offset="1" stop-color="#00E3FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_14495"
                x1="33.8469"
                y1="19.9915"
                x2="9.64112"
                y2="19.9915"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFE000" />
                <stop offset="0.409" stop-color="#FFBD00" />
                <stop offset="0.775" stop-color="#FFA500" />
                <stop offset="1" stop-color="#FF9C00" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_14495"
                x1="16.4886"
                y1="25.9817"
                x2="-6.04974"
                y2="3.21626"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF3A44" />
                <stop offset="1" stop-color="#C31162" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1_14495"
                x1="-1.04529"
                y1="31.3625"
                x2="9.0191"
                y2="21.1968"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#32A071" />
                <stop offset="0.069" stop-color="#2DA771" />
                <stop offset="0.476" stop-color="#15CF74" />
                <stop offset="0.801" stop-color="#06E775" />
                <stop offset="1" stop-color="#00F076" />
              </linearGradient>
              <clipPath id="clip0_1_14495">
                <rect width="135" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default FooterLinks;