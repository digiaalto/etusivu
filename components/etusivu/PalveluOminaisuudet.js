import styles from "./PalveluOminaisuudet.module.sass"

const PalveluOminaisuudet = () => {
  return (
    <div className={styles.container}>
      <Ominaisuus icon={BrainIcon} header="Asiakaslähtöinen suunnittelu.">
        <p>
          Designinimme päätarkoitus on saada käyttäjä pysymyään sivuillasi,
          oppimaan yrityksestäsi ja kiinnostumaan palveluistasi. Viimeinen asia
          minkä haluamme tapahtuvan, on että vierailija poistuu ennenaikaisesti
          ja kääntyy kilpailijanne puoleen. Opimme sinulta kuka asiakkaasi on,
          ja yhdistämme hänen tarpeensa sinun tarjoamiisi palveluihin ja
          tuotteisiin.
        </p>
      </Ominaisuus>
      <Ominaisuus icon={CogIcon} header="Nykyaikainen arkkitehtuuri.">
        <p>
          Hybrid-sivumme renderöidään käyttäjien laitteilla tavanomaisia
          palvelinsivuja nopeammin ja älykkäämmin. Sivustomme ovat
          suorituskykyisiä, turvallisia, kustannustehokkaita ja toimivat
          virheettömästi ilman erillistä ylläpitopalvelua. Käytämme globaalia
          sisällönjulkaisuverkkoa, jossa sivumme skaalautuu automaattisesti
          vaikka käyttäjävirta kasvaisi 10,000x.
        </p>
      </Ominaisuus>
      <Ominaisuus icon={HeartIcon} header="Vaivaton palvelu.">
        <p>
          Luomme sivustonne niin itsenäisesti tai tiiviissä yhteistyössä
          kanssanne kuin teille parhaiten sopii. Tarjoamme myös käteviä
          julkaisun jälkeisiä kertahintaisia mikropalveluita. Ymmärrämme että
          pienyrittäjän elämä on kiireistä. Aina ei ole taloudellisesti
          kannattavaa käyttää normaaliin yritystoimintaan kuuluvia arvokkaita
          työtunteja verkkosivun suunnitteluun.
        </p>
      </Ominaisuus>
    </div>
  )
}

const Ominaisuus = ({ icon, header, children }) => {
  const CustomIcon = icon

  return (
    <div className={styles.ominaisuus}>
      <CustomIcon />
      <Header text={header} />
      <div className={styles.oText}>{children}</div>
    </div>
  )
}
const Header = ({ text }) => {
  return <h3 className={styles.ominaisuusHeader}>{text}</h3>
}

const BrainIcon = () => {
  return (
    <div className={styles.iconWrapper}>
      <svg
        width="109"
        height="109"
        viewBox="0 0 109 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M39.3611 6.05574C33.7029 6.05574 29.0099 9.93508 27.6663 15.1769C27.5149 15.1769 27.4014 15.1391 27.25 15.1391C20.57 15.1391 15.1389 20.5702 15.1389 27.2502C15.1389 28.1585 15.2524 29.0479 15.4606 29.8995C9.93489 32.1703 6.05556 37.5825 6.05556 43.903C6.05556 46.2873 6.66111 48.5014 7.62621 50.5073C3.08455 53.1188 0 57.9632 0 63.5835C0 69.8851 3.86042 75.2972 9.34826 77.5681C9.17795 78.4386 9.08333 79.328 9.08333 80.2363C9.08333 87.7679 15.1767 93.8613 22.7083 93.8613C23.4842 93.8613 24.2411 93.7667 24.9792 93.6342C26.7958 99.0274 31.8295 102.945 37.8472 102.945C45.3788 102.945 51.4722 96.8512 51.4722 89.3196V18.1669C51.4722 11.4868 46.0411 6.05574 39.3611 6.05574ZM109 63.5835C109 57.9632 105.915 53.1188 101.374 50.5073C102.358 48.5014 102.944 46.2873 102.944 43.903C102.944 37.5825 99.0651 32.1703 93.5394 29.8995C93.7286 29.0479 93.8611 28.1585 93.8611 27.2502C93.8611 20.5702 88.43 15.1391 81.75 15.1391C81.5986 15.1391 81.4661 15.1769 81.3337 15.1769C79.9901 9.93508 75.297 6.05574 69.6389 6.05574C62.9589 6.05574 57.5278 11.4679 57.5278 18.1669V89.3196C57.5278 96.8512 63.6212 102.945 71.1528 102.945C77.1705 102.945 82.2042 99.0274 84.0208 93.6342C84.7589 93.7667 85.5158 93.8613 86.2917 93.8613C93.8233 93.8613 99.9167 87.7679 99.9167 80.2363C99.9167 79.328 99.822 78.4386 99.6517 77.5681C105.14 75.2972 109 69.8851 109 63.5835Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="109"
            y1="70.9367"
            x2="0"
            y2="70.9367"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00DFD8" />
            <stop offset="1" stopColor="#007CF0" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="109" height="109" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

const CogIcon = () => {
  return (
    <div className={styles.iconWrapper}>
      <svg
        width="109"
        height="109"
        viewBox="0 0 109 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.spinning}
      >
        <path
          d="M103.762 67.2093L94.693 61.9721C95.6085 57.0331 95.6085 51.9663 94.693 47.0272L103.762 41.7901C104.805 41.194 105.274 39.9593 104.933 38.8097C102.57 31.2307 98.5464 24.3757 93.288 18.6702C92.479 17.7974 91.1591 17.5845 90.1372 18.1806L81.068 23.4177C77.2573 20.1391 72.8718 17.6058 68.1243 15.9452V5.49228C68.1243 4.30009 67.294 3.25693 66.1231 3.00146C58.31 1.25576 50.3054 1.34091 42.8755 3.00146C41.7046 3.25693 40.8743 4.30009 40.8743 5.49228V15.9665C36.1481 17.6483 31.7626 20.1817 27.9306 23.439L18.8827 18.2018C17.8395 17.6058 16.5409 17.7974 15.7319 18.6915C10.4735 24.3757 6.4499 31.2307 4.08681 38.8309C3.7249 39.9805 4.21455 41.2153 5.25771 41.8114L14.3268 47.0485C13.4114 51.9876 13.4114 57.0544 14.3268 61.9934L5.25771 67.2305C4.21455 67.8266 3.74619 69.0614 4.08681 70.211C6.4499 77.7899 10.4735 84.645 15.7319 90.3505C16.5409 91.2233 17.8608 91.4362 18.8827 90.8401L27.9518 85.603C31.7626 88.8815 36.1481 91.4149 40.8956 93.0755V103.55C40.8956 104.742 41.7259 105.785 42.8968 106.04C50.7099 107.786 58.7145 107.701 66.1444 106.04C67.3153 105.785 68.1456 104.742 68.1456 103.55V93.0755C72.8718 91.3936 77.2573 88.8602 81.0893 85.603L90.1585 90.8401C91.2016 91.4362 92.5003 91.2446 93.3093 90.3505C98.5677 84.6663 102.591 77.8112 104.954 70.211C105.274 69.0401 104.805 67.8054 103.762 67.2093ZM54.4993 71.5309C45.1108 71.5309 37.4681 63.8882 37.4681 54.4997C37.4681 45.1112 45.1108 37.4684 54.4993 37.4684C63.8878 37.4684 71.5306 45.1112 71.5306 54.4997C71.5306 63.8882 63.8878 71.5309 54.4993 71.5309Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="3.83326"
            y1="107.318"
            x2="105.188"
            y2="107.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7928CA" />
            <stop offset="1" stopColor="#FF0080" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const HeartIcon = () => {
  return (
    <div className={styles.iconWrapper}>
      <svg
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M76.4892 56.7664C75.4734 55.751 74.0959 55.1805 72.6596 55.1805C71.2233 55.1805 69.8458 55.751 68.83 56.7664L65.0005 60.5906C64.0011 61.6253 62.8057 62.4506 61.484 63.0184C60.1623 63.5861 58.7407 63.885 57.3023 63.8975C55.8639 63.91 54.4373 63.6359 53.106 63.0912C51.7746 62.5465 50.565 61.7421 49.5478 60.7249C48.5307 59.7077 47.7263 58.4982 47.1815 57.1668C46.6368 55.8354 46.3627 54.4089 46.3752 52.9704C46.3877 51.532 46.6866 50.1104 47.2544 48.7887C47.8221 47.467 48.6474 46.2716 49.6821 45.2723L80.178 14.7656C87.398 13.1234 94.952 13.7993 101.766 16.6971C108.58 19.5948 114.306 24.5671 118.132 30.9067C121.957 37.2463 123.687 44.6307 123.074 52.0097C122.462 59.3887 119.538 66.3868 114.72 72.0089L103.302 83.5735L76.4892 56.761V56.7664ZM17.1225 24.2014C22.7275 18.5972 30.0587 15.0472 37.931 14.1252C45.8033 13.2032 53.7564 14.9632 60.5046 19.1206L42.0175 37.6131C38.0135 41.6091 35.7311 47.0127 35.658 52.6691C35.5849 58.3255 37.7269 63.7862 41.6263 67.8843C45.5257 71.9825 50.8733 74.3931 56.5264 74.6011C62.1794 74.809 67.6896 72.7978 71.8796 68.9973L72.6596 68.2552L95.6425 91.2327L72.6596 114.216C70.6281 116.247 67.8731 117.387 65.0005 117.387C62.1278 117.387 59.3728 116.247 57.3413 114.216L17.1171 73.9914C10.5149 67.3887 6.80588 58.4338 6.80588 49.0964C6.80588 39.7591 10.5149 30.8042 17.1171 24.2014H17.1225Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="6.93136"
            y1="117.387"
            x2="123.073"
            y2="117.387"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF4D4D" />
            <stop offset="1" stopColor="#F9CB28" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default PalveluOminaisuudet
