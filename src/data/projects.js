export const projects = [
  {
    title: 'Indian Market AI',
    category: 'Personal Project',
    period: '2026',
    blurb: [
      'Built a Streamlit dashboard that predicts NIFTY direction from global market signals, technical indicators, and machine learning models.',
      'Combined global indices, India VIX, FII/DII flows, RSI, EMA20, and MACD with scikit-learn and XGBoost.',
      'Added historical backtesting, a SQLAlchemy data layer, and TTL caching for market data.',
      'Created interactive views for global markets, technical indicators, predictions, and trade ideas.'
    ],
    tech: ['Python', 'Streamlit', 'scikit-learn', 'XGBoost', 'pandas', 'NumPy', 'yfinance', 'SQLAlchemy', 'Plotly'],
    image: 'images/indian-market-ai.svg'
  },
  {
    title: 'OHi — Real-Time Social Networking App',
    category: 'Professional Project',
    period: 'Jul 2023 - Present',
    blurb: [
      'Delivered real-time chat and push notifications for a social app serving 1.2M+ users.',
      'Integrated GiftedChat and PhonePe production payments; built reusable video reel scrolling.',
      'Designed Redux state across 19 user-facing flows, with 144 reducers and 27 sagas.',
      'Shipped 43+ native releases and 5 CodePush updates through Fastlane, TestFlight, and Play Store Internal Testing.',
      'Maintained a shared component library of 198 source files used across 280+ feature and screen files.',
      'Implemented dynamic theming and diagnosed cross-platform navigation, media, build, and session issues.'
    ],
    tech: ['React Native','Redux','Firebase','GiftedChat','FCM','PhonePe','React Navigation','Video'],
    image: 'images/ohi.svg'
  },
  {
    title: 'Kiwitasks — Cross-Platform To-Do App',
    period: 'Apr 2023',
    blurb: [
      'Cross-platform To-Do application for iOS and Android.',
      'Built CRUD operations with React Hooks and persistent storage using AsyncStorage.',
      'Designed an intuitive UI following Material Design principles.',
      'Added custom animations and gesture handling using React Native Reanimated.'
    ],
    tech: ['React Native','AsyncStorage','Hooks','Reanimated'],
    image: 'images/kiwitask.png'
  },
  {
    title: 'Kiwibuzz — Social Content Discovery App',
    period: 'Mar 2023',
    blurb: [
      'A social media app to explore trending and latest content.',
      'Integrated Firebase Storage for media uploads and Firestore for data management.',
      'Developed user authentication, profiles, feed, likes, comments, and follow/unfollow features.',
      'Built responsive UI with React Native Paper and optimized performance across devices.',
      'Applied Redux and Context API for efficient state management.'
    ],
    tech: ['React Native','Firebase Storage','Firestore','Redux','Context API','React Native Paper'],
    image: 'images/kiwibuzz.png'
  },
  {
    title: 'Krisspi — On-Demand Grooming Services App',
    period: 'Jan 2023 - Feb 2023',
    blurb: [
      'On-demand grooming service app for home, office, or hotel bookings.',
      'Implemented Firebase Authentication, Firestore, and FCM for secure login, real-time updates, and notifications.',
      'Built real-time booking system with calendar management.',
      'Developed provider and consumer flows using React Navigation and conditional rendering.',
      'Created reusable components ensuring consistent UI/UX across iOS and Android.'
    ],
    tech: ['React Native','Firebase Auth','FCM','Firestore','React Navigation'],
    image: 'https://static.wixstatic.com/media/e79f94_ec74cd75644647cca33847c57e0398ee~mv2.png/v1/fill/w_158,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Krisspi%20Logo%20TM-%20ICON%20%2B%20TEXT.png'
  },
  {
    title: 'Fanful — Cross-Platform Sports Social App',
    period: 'Jun 2022 - Dec 2022',
    blurb: [
      'A cross-platform social sports app enhancing fan engagement.',
      'Built dynamic feed using FlatList and optimized images with FastImage.',
      'Integrated smooth transitions and gestures using React Native Reanimated.',
      'Added deep linking for seamless in-app navigation and content sharing.',
      'Deployed to iOS and Android ensuring consistent performance.'
    ],
    tech: ['React Native','FastImage','Reanimated','React Navigation'],
    image: 'https://static.wixstatic.com/media/b21ab8_64cbbc78b17a49358ad495ee675c61ca~mv2.png/v1/crop/x_433,y_827,w_1127,h_367/fill/w_314,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b21ab8_64cbbc78b17a49358ad495ee675c61ca~mv2.png'
  }
];
