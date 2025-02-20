import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta property="og:title" content="Template Monster Admin Template">
    <meta property="og:description" content="brevis, barbatus clabulares aliquando convertam de dexter, peritus capio. devatio clemens habitio est.">
    <meta property="og:image" content="http://digipunk.netii.net/images/radar.gif">
    <meta property="og:url" content="http://digipunk.netii.net">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="components/base/base.css">
    <script src="components/base/core.js"></script>
    <script src="components/base/script.js"></script>
  </head>
  <body>
    <div class="preloader">
      <div class="cssload-container">
        <div class="cssload-loader"></div>
      </div>
    </div>
    <div class="page">
      <!--RD Navbar-->
      <header class="section rd-navbar-wrap">
        <nav class="rd-navbar">
          <div class="navbar-container">
            <div class="navbar-cell">
              <div class="navbar-panel">
                <button class="navbar-switch int-hamburger novi-icon" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","isolate":"[data-multi-switch]"}'></button>
                <div class="navbar-logo"><a class="navbar-logo-link" href="#home"><img class="navbar-logo-default" src="images/logo-default-253x50.svg" alt="Bonobomb Zoo" width="253" height="50"/></a></div>
              </div>
            </div>
            <div class="navbar-cell navbar-sidebar">
              <ul class="navbar-navigation rd-navbar-nav fullpage-navigation">
                <li class="navbar-navigation-root-item active" data-menuanchor="home-2"><a class="navbar-navigation-root-link" href="#home-2">Home</a>
                </li>
      
                <li class="navbar-navigation-root-item" data-menuanchor="contacts"><a class="navbar-navigation-root-link" href="#contacts">Contacts</a>
                </li>
                <li class="navbar-navigation-root-item active" data-menuanchor="home"><a class="navbar-navigation-root-link" href="#home">Home</a>
                </li>
              </ul>
              <!-- Copyright-->
              <p class="rights navbar-rights py-3 d-block d-xl-none"><span>&copy; 2020&nbsp;</span><span>Bonobomb Zoo</span><span>. All rights reserved</span></p>
            </div>
            <div class="navbar-cell">
              <div class="navbar-subpanel">
                <div class="navbar-subpanel-item">
                  <button class="navbar-button navbar-info-button mdi-dots-vertical" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-info-active","isolate":"[data-multi-switch]"}'></button>
                  <div class="navbar-info"><a class="navbar-info-link" href="tel:#"><span class="navbar-info-icon mdi-phone"></span><span class="navbar-info-text"> +1 800 559 35 48</span></a><a class="navbar-info-link" href="mailto:#"><span class="navbar-info-icon mdi-email-outline"></span><span class="navbar-info-text"> info@demolink.org</span></a><a class="btn btn-round btn-primary btn-anis navbar-action-button" href="#">Donate</a></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="fullpage">
        <!-- Section Iguana-->
        <section class="section section-1 position-relative overflow-hidden" style="background-color: #72B805">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-1" width="1487" height="1032" viewBox="0 0 1487 1032" fill="none">
                      <path class="layer-item-1" d="M581 0H1281L701 929H0L581 0Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M685.929 648H975L735.484 1032H446L685.929 648Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M1364.5 0L949.5 668.5H1075L1487 0H1364.5Z" fill="#FFD600"></path>
                      <path class="layer-item-4" d="M720.763 386L432 852H519.325L806 386H720.763Z" fill="#FFD600"></path>
                      <path class="layer-item-5" d="M1184.5 124L1071 308H1105.32L1218 124H1184.5Z" fill="#FFD600"></path>
                      <path class="layer-item-6" d="M713.826 552.669L715.524 553.726L604.023 732.859L602.325 731.802L713.826 552.669Z" fill="white"></path>
                      <path class="layer-item-7" d="M883.826 552.669L885.524 553.726L621.304 978.212L619.607 977.155C722.791 811.383 780.642 718.441 883.826 552.669Z" fill="white"></path>
                      <path class="layer-item-8" opacity="0.4" d="M923.826 502.669L925.524 503.726C822.34 669.498 764.488 762.44 661.304 928.212L659.607 927.155L923.826 502.669Z" fill="white"></path>
                      <path class="layer-item-9" opacity="0.4" d="M933.826 502.669L935.524 503.726C832.34 669.498 774.488 762.44 671.304 928.212L669.607 927.155L933.826 502.669Z" fill="white"></path>
                      <path class="layer-item-10" d="M1413.83 132.669L1415.52 133.726L1304.02 312.859L1302.33 311.802C1345.87 241.846 1370.28 202.625 1413.83 132.669Z" fill="white"></path>
                      <path class="layer-item-11" d="M1423.83 132.669L1425.52 133.726C1381.98 203.682 1357.57 242.903 1314.02 312.859L1312.33 311.802L1423.83 132.669Z" fill="white"></path>
                      <path class="layer-item-12" d="M1233.83 69.6693L1235.52 70.7261L1076.99 325.418L1075.29 324.361C1137.2 224.898 1171.92 169.132 1233.83 69.6693Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container-wide">
            <div class="row row-30 section-row">
              <div class="col-xs-8 col-sm-7 col-md-6" data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                <div class="section-content">
                  <h1>Discover The Beautiful World of Wild Nature</h1>
                  <p class="lead">Welcome to Bonobomb Zoo, home to a wide range of exotic animals, insects, birds, and a lot of other animal groups. Buy a ticket to our zoo and discover the variety of nature today!</p>
                  <div class="offset-md group-20 group-md-30"><a class="btn btn-round btn-lg btn-primary btn-anis" href="#">Buy Ticket</a><a class="btn btn-outline btn-round btn-lg btn-anis" href="#">Learn More</a></div>
                </div>
              </div>
              <div class="col-xs-4 col-sm-5 col-md-6 position-static d-flex align-items-center px-0 section-figure"><img class="section-image" src="images/image-1-1049x897.png" alt="" width="1049" height="897" data-animate='{"in":{"class":"slideInRight","delay":".8s","duration":".7s"},"out":{"class":"slideOutRight","delay":"0s","duration":".4s"}}'/>
              </div>
            </div>
          </div>
        </section>
        <!-- Section Giraffe-->
        <section class="section section-2 position-relative overflow-hidden" style="background-color: #FFC700">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-2" width="1721" height="1080" viewBox="0 0 1721 1080" fill="none">
                      <path class="layer-item-1" d="M575 0H1275L695 929H-6L575 0Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M709.929 695H999L759.484 1079H470L709.929 695Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M486.5 412L71.5 1080.5H197L609 412H486.5Z" fill="#854424"></path>
                      <path class="layer-item-4" d="M808.079 611L517 1080H605.025L894 611H808.079Z" fill="#854424"></path>
                      <path class="layer-item-5" d="M229.512 360L133 515H162.186L258 360H229.512Z" fill="#854424"></path>
                      <path class="layer-item-6" d="M426.826 722.669L428.524 723.726C384.98 793.682 360.567 832.903 317.023 902.859L315.325 901.802L426.826 722.669Z" fill="white"></path>
                      <path class="layer-item-7" d="M166.826 592.669L168.524 593.726L-95.6953 1018.21L-97.3932 1017.16C5.79077 851.383 63.6419 758.441 166.826 592.669Z" fill="white"></path>
                      <path class="layer-item-8" opacity="0.4" d="M206.826 542.669L208.524 543.726L-55.6953 968.212L-57.3932 967.155C45.7908 801.383 103.642 708.441 206.826 542.669Z" fill="white"></path>
                      <path class="layer-item-9" opacity="0.4" d="M216.826 542.669L218.524 543.726C115.34 709.498 57.4887 802.44 -45.6953 968.212L-47.3932 967.155L216.826 542.669Z" fill="white"></path>
                      <path class="layer-item-10" d="M746.826 192.669L748.524 193.726L637.023 372.859L635.325 371.802C678.869 301.846 703.282 262.625 746.826 192.669Z" fill="white"></path>
                      <path class="layer-item-11" d="M756.826 192.669L758.524 193.726L647.023 372.859L645.325 371.802C688.869 301.846 713.282 262.625 756.826 192.669Z" fill="white"></path>
                      <path class="layer-item-12" d="M271.826 310.669L273.524 311.726L114.992 566.418L113.294 565.361C175.205 465.898 209.916 410.132 271.826 310.669Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container-wide">
            <div class="row row-30 section-row">
              <div class="col-xs-8 col-sm-7 col-md-6" data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                <div class="section-content">
                  <h1>Huge Territory with over 3,000 Animals</h1>
                  <p class="lead">Our zoo occupies almost 750 acres and is home to more than 3,000 animals representing over 500 different species. Of this population, more than 40 species are classified as endangered.</p>
                  <div class="offset-md group-20 group-md-30"><a class="btn btn-round btn-lg btn-primary btn-anis" href="#">Buy Ticket</a><a class="btn btn-outline btn-round btn-lg btn-anis" href="#">Learn More</a></div>
                </div>
              </div>
              <div class="col-xs-4 col-sm-5 col-md-6 position-static d-flex justify-content-center px-0 section-figure"><img class="section-image" src="images/image-2-719x981.png" alt="" width="719" height="981" data-animate='{"in":{"class":"slideInUp","delay":".8s","duration":".7s"},"out":{"class":"slideOutDown","delay":"0s","duration":".4s"}}'/>
              </div>
            </div>
          </div>
        </section>
        <!-- Section Iguana-->
        <section class="section section-3 position-relative overflow-hidden" style="background-color: #00BCB1">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-1" width="1487" height="1032" viewBox="0 0 1487 1032" fill="none">
                      <path class="layer-item-1" d="M581 0H1281L701 929H0L581 0Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M685.929 648H975L735.484 1032H446L685.929 648Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M1364.5 0L949.5 668.5H1075L1487 0H1364.5Z" fill="#FFD600"></path>
                      <path class="layer-item-4" d="M720.763 386L432 852H519.325L806 386H720.763Z" fill="#FFD600"></path>
                      <path class="layer-item-5" d="M1184.5 124L1071 308H1105.32L1218 124H1184.5Z" fill="#FFD600"></path>
                      <path class="layer-item-6" d="M713.826 552.669L715.524 553.726L604.023 732.859L602.325 731.802L713.826 552.669Z" fill="white"></path>
                      <path class="layer-item-7" d="M883.826 552.669L885.524 553.726L621.304 978.212L619.607 977.155C722.791 811.383 780.642 718.441 883.826 552.669Z" fill="white"></path>
                      <path class="layer-item-8" opacity="0.4" d="M923.826 502.669L925.524 503.726C822.34 669.498 764.488 762.44 661.304 928.212L659.607 927.155L923.826 502.669Z" fill="white"></path>
                      <path class="layer-item-9" opacity="0.4" d="M933.826 502.669L935.524 503.726C832.34 669.498 774.488 762.44 671.304 928.212L669.607 927.155L933.826 502.669Z" fill="white"></path>
                      <path class="layer-item-10" d="M1413.83 132.669L1415.52 133.726L1304.02 312.859L1302.33 311.802C1345.87 241.846 1370.28 202.625 1413.83 132.669Z" fill="white"></path>
                      <path class="layer-item-11" d="M1423.83 132.669L1425.52 133.726C1381.98 203.682 1357.57 242.903 1314.02 312.859L1312.33 311.802L1423.83 132.669Z" fill="white"></path>
                      <path class="layer-item-12" d="M1233.83 69.6693L1235.52 70.7261L1076.99 325.418L1075.29 324.361C1137.2 224.898 1171.92 169.132 1233.83 69.6693Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container-wide">
            <div class="row row-30 section-row">
              <div class="col-xs-8 col-sm-7 col-md-6" data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                <div class="section-content">
                  <h1>An Unforgettable Experience</h1>
                  <p class="lead">Besides exploring our botanical garden and discovering animals at our zoo, we also have plenty of places to eat and drink, play, and shop to make your day extra special!</p>
                  <div class="offset-md group-20 group-md-30"><a class="btn btn-round btn-lg btn-primary btn-anis" href="#">Buy Ticket</a><a class="btn btn-outline btn-round btn-lg btn-anis" href="#">Learn More</a></div>
                </div>
              </div>
              <div class="col-xs-4 col-sm-5 col-md-6 position-static d-flex align-items-center justify-content-center px-0 section-figure"><img class="section-image" src="images/image-3-938x827.png" alt="" width="938" height="827" data-animate='{"in":{"class":"slideInRight","delay":".8s","duration":".7s"},"out":{"class":"slideOutRight","delay":"0s","duration":".4s"}}'/>
              </div>
            </div>
          </div>
        </section>
        <!-- About-->
        <section class="section section-4 position-relative overflow-hidden" style="background-color: #00ABE1">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-4" width="1596" height="1080" viewBox="0 0 1596 1080" fill="none">
                      <path class="layer-item-1" d="M581 0H1281L701 929H0L581 0Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M685.929 647H975L735.484 1031H446L685.929 647Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M1398.57 -1L729 1079H931.484L1596.21 -1H1398.57Z" fill="#FFD600"></path>
                      <path class="layer-item-4" d="M725.219 381L438 844.817H524.858L810 381H725.219Z" fill="#FFD600"></path>
                      <path class="layer-item-5" d="M1042.69 207L940 372.552H971.054L1073 207H1042.69Z" fill="#FFD600"></path>
                      <path class="layer-item-6" d="M663.826 631.669L665.524 632.726L554.023 811.859L552.325 810.802L663.826 631.669Z" fill="white"></path>
                      <path class="layer-item-7" d="M883.826 551.669L885.524 552.726L621.304 977.212L619.607 976.155L883.826 551.669Z" fill="white"></path>
                      <path class="layer-item-8" opacity="0.4" d="M923.826 501.669L925.524 502.726L661.304 927.212L659.607 926.155L923.826 501.669Z" fill="white"></path>
                      <path class="layer-item-9" opacity="0.4" d="M933.826 501.669L935.524 502.726L671.304 927.212L669.607 926.155L933.826 501.669Z" fill="white"></path>
                      <path class="layer-item-10" d="M1574.83 59.6692L1576.52 60.7261L942.398 1079.49L940.7 1078.44L1574.83 59.6692Z" fill="white" fill-opacity="0.4"></path>
                      <path class="layer-item-11" d="M1584.83 59.6692L1586.52 60.7261L952.398 1079.49L950.7 1078.44L1584.83 59.6692Z" fill="white" fill-opacity="0.4"></path>
                      <path class="layer-item-12" d="M1103.83 128.669L1105.52 129.726L946.992 384.418L945.294 383.361L1103.83 128.669Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container">
            <div class="row row-30 row-md-50 align-items-center justify-content-center">
              <div class="col-xs-8 col-lg-6 section-content-2" data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                <h2>A Few Words About Bonobomb Zoo</h2>
                <p>Our zoo is the largest and oldest zoological garden established in 1920. The animals located at Bonobomb Zoo are grouped according to their geographic territories, with species that live together peacefully in the wild placed in exhibits together here at the zoo.</p>
                <div class="row row-15 row-sm-20 row-md-40 row-xl-50">
                  <div class="col-6 col-md-4">
                            <!-- Blurb-->
                            <article class="blurb">
                              <div class="media media-xs align-items-center">
                                <div class="media-left">
                                  <div class="blurb-embed"><span class="blurb-icon linearicons-paw"></span></div>
                                </div>
                                <div class="media-body">
                                  <div class="blurb-title h6">Exotic Animals</div>
                                </div>
                              </div>
                            </article>
                  </div>
                  <div class="col-6 col-md-4">
                            <!-- Blurb-->
                            <article class="blurb">
                              <div class="media media-xs align-items-center">
                                <div class="media-left">
                                  <div class="blurb-embed"><span class="blurb-icon linearicons-shield-check"></span></div>
                                </div>
                                <div class="media-body">
                                  <div class="blurb-title h6">Animal Safety</div>
                                </div>
                              </div>
                            </article>
                  </div>
                  <div class="col-6 col-md-4">
                            <!-- Blurb-->
                            <article class="blurb">
                              <div class="media media-xs align-items-center">
                                <div class="media-left">
                                  <div class="blurb-embed"><span class="blurb-icon linearicons-tree"></span></div>
                                </div>
                                <div class="media-body">
                                  <div class="blurb-title h6">Zoological Garden</div>
                                </div>
                              </div>
                            </article>
                  </div>
                  <div class="col-6 col-md-12"><a class="btn btn-round btn-lg btn-primary btn-anis" href="#">Learn more</a></div>
                </div>
              </div>
              <div class="col-xs-4 col-lg-6 col-xl-5 col-xxl-6 section-content-2" data-animate='{"in":{"class":"fadeIn","delay":".8s","duration":".7s"},"out":{"class":"fadeOut","delay":"0s","duration":".4s"}}'>
                <div class="ms-xxl-4">
                  <article class="video-play ratio ratio-16x9">
                    <video class="video" src="videos/video.mp4" controls poster="videos/video.jpg" data-btn=".video-btn-1"></video>
                    <button class="video-btn video-btn-1 play"></button>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Plan your visit-->
        <section class="section section-5 position-relative overflow-hidden" style="background-color: #774CBE">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-5" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
                      <path class="layer-item-1" d="M1115 1H1815L1235 930H534L1115 1Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M271.929 357H561L321.484 741H32L271.929 357Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M691.614 412L277 1081H402.383L814 412H691.614Z" fill="#FFD600"></path>
                      <path class="layer-item-4" d="M333.219 563L46 1025.93H132.858L418 563H333.219Z" fill="#FFD600"></path>
                      <path class="layer-item-5" d="M586.688 207L484 373.033H515.054L617 207H586.688Z" fill="#FFD600"></path>
                      <path class="layer-item-6" d="M637.826 654.669L639.524 655.726L375.304 1080.21L373.607 1079.16L637.826 654.669Z" fill="white"></path>
                      <path class="layer-item-7" opacity="0.4" d="M317.826 654.669L319.524 655.726L55.3047 1080.21L53.6068 1079.16L317.826 654.669Z" fill="white"></path>
                      <path class="layer-item-8" opacity="0.4" d="M327.826 654.669L329.524 655.726L65.3047 1080.21L63.6068 1079.16L327.826 654.669Z" fill="white"></path>
                      <path class="layer-item-9" d="M357.826 372.669L359.524 373.726L248.023 552.859L246.325 551.802L357.826 372.669Z" fill="white"></path>
                      <path class="layer-item-10" d="M367.826 372.669L369.524 373.726L258.023 552.859L256.325 551.802L367.826 372.669Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container">
            <div class="row row-30 section-row">
              <div class="col-xs-8 col-md-6 section-content-2" data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                <h2>Plan Your Visit</h2>
                <div class="owl-carousel owl-style-2" data-owl="{&quot;items&quot;:1,&quot;margin&quot;:30,&quot;dots&quot;:true,&quot;loop&quot;:false,&quot;mouseDrag&quot;:false,&quot;autoplay&quot;:false,&quot;responsive&quot;:{&quot;1200&quot;:{&quot;items&quot;:2}}}">
                  <div class="row row-30 row-xxl-50">
                    <div class="col-6 col-xl-12">
                              <!-- Blurb-->
                              <article class="blurb blurb-morphing">
                                <div class="blurb-embed"><span class="blurb-icon linearicons-paw"></span>
                                          <svg class="blob-morphing blurb-svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                            <path d="M37.0096 23.0069C21.3087 29.8865 0.000244141 36.7659 0.000244141 60.8441C0.000244141 84.9223 41.4956 110.147 65.047 107.854C88.5985 105.561 112.15 79.1894 115.514 59.6976C118.879 40.2057 104.299 27.5932 86.3555 18.4206C68.4115 9.24789 52.7106 16.1274 37.0096 23.0069Z" fill="#FFD600"></path>
                                          </svg>
                                </div>
                                <div class="blurb-title h6">Opening Hours</div>
                                <div class="blurb-text">We are open until 5:30pm. Last entry is 1 hour before closing.</div>
                              </article>
                    </div>
                    <div class="col-6 col-xl-12">
                              <!-- Blurb-->
                              <article class="blurb blurb-morphing">
                                <div class="blurb-embed"><span class="blurb-icon linearicons-bubbles"></span>
                                          <svg class="blob-morphing blurb-svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                            <path d="M37.0096 23.0069C21.3087 29.8865 0.000244141 36.7659 0.000244141 60.8441C0.000244141 84.9223 41.4956 110.147 65.047 107.854C88.5985 105.561 112.15 79.1894 115.514 59.6976C118.879 40.2057 104.299 27.5932 86.3555 18.4206C68.4115 9.24789 52.7106 16.1274 37.0096 23.0069Z" fill="#FFD600"></path>
                                          </svg>
                                </div>
                                <div class="blurb-title h6">Animal Talks</div>
                                <div class="blurb-text">Our team helps you to discover great things about our animals.</div>
                              </article>
                    </div>
                  </div>
                  <div class="row row-30 row-xxl-50">
                    <div class="col-6 col-xl-12">
                              <!-- Blurb-->
                              <article class="blurb blurb-morphing">
                                <div class="blurb-embed"><span class="blurb-icon linearicons-users"></span>
                                          <svg class="blob-morphing blurb-svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                            <path d="M37.0096 23.0069C21.3087 29.8865 0.000244141 36.7659 0.000244141 60.8441C0.000244141 84.9223 41.4956 110.147 65.047 107.854C88.5985 105.561 112.15 79.1894 115.514 59.6976C118.879 40.2057 104.299 27.5932 86.3555 18.4206C68.4115 9.24789 52.7106 16.1274 37.0096 23.0069Z" fill="#FFD600"></path>
                                          </svg>
                                </div>
                                <div class="blurb-title h6">Group Discounts</div>
                                <div class="blurb-text">Get discounts up to 50% off if you bring 10 or more visitors.</div>
                              </article>
                    </div>
                    <div class="col-6 col-xl-12">
                              <!-- Blurb-->
                              <article class="blurb blurb-morphing">
                                <div class="blurb-embed"><span class="blurb-icon linearicons-calendar-31"></span>
                                          <svg class="blob-morphing blurb-svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                            <path d="M37.0096 23.0069C21.3087 29.8865 0.000244141 36.7659 0.000244141 60.8441C0.000244141 84.9223 41.4956 110.147 65.047 107.854C88.5985 105.561 112.15 79.1894 115.514 59.6976C118.879 40.2057 104.299 27.5932 86.3555 18.4206C68.4115 9.24789 52.7106 16.1274 37.0096 23.0069Z" fill="#FFD600"></path>
                                          </svg>
                                </div>
                                <div class="blurb-title h6">Upcoming Events</div>
                                <div class="blurb-text">Each month we have something new to offer our visitors.</div>
                              </article>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-4 col-md-6 position-static d-flex justify-content-center px-0 section-figure"><img class="section-image" src="images/image-4-662x900.png" alt="" width="662" height="900" data-animate='{"in":{"class":"slideInUp","delay":".8s","duration":".7s"},"out":{"class":"slideOutDown","delay":"0s","duration":".4s"}}'/>
              </div>
            </div>
          </div>
        </section>
        <!-- Our animals-->
        <section class="section section-6 position-relative overflow-hidden" style="background-color: #DB5151">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-6" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
                      <path class="layer-item-1" d="M1579 -743H2279L1699 186H998L1579 -743Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M1695.93 114H1985L1745.48 498H1456L1695.93 114Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M1251.61 991L837 1660H962.383L1374 991H1251.61Z" fill="#FFD600"></path>
                      <path class="layer-item-4" d="M378.358 891L95 1348H180.69L462 891H378.358Z" fill="#FFD600"></path>
                      <path class="layer-item-5" d="M102.688 589L0 754H31.054L133 589H102.688Z" fill="#FFD600"></path>
                      <path class="layer-item-6" d="M1827.5 385L1829.2 386.057L1717.7 565.19L1716 564.133L1827.5 385Z" fill="white"></path>
                      <path class="layer-item-7" d="M986.219 83L987.917 84.0569L723.698 508.543L722 507.486C825.184 341.714 883.035 248.772 986.219 83Z" fill="white"></path>
                      <path class="layer-item-8" d="M830.219 -4L831.917 -2.94312L720.416 176.19L718.719 175.133L830.219 -4Z" fill="white"></path>
                      <path class="layer-item-9" d="M800.5 59L802.198 60.0569L690.698 239.19L689 238.133L800.5 59Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container-wide text-center" style="max-width: none" data-animate='{"in":{"class":"fadeInUp","delay":".7s","duration":".7s"},"out":{"class":"fadeOutUp","delay":"0s","duration":".4s"}}'>
            <h2>Our Animals</h2>
            <!-- Swiper slider-->
            <div class="swiper-container swiper-gallery" data-lightgallery data-swiper="{&quot;loop&quot;:false,&quot;slidesPerView&quot;:3,&quot;spaceBetween&quot;:20,&quot;centeredSlides&quot;:true,&quot;breakpoints&quot;:{&quot;480&quot;:{&quot;slidesPerView&quot;:6},&quot;768&quot;:{&quot;slidesPerView&quot;:4},&quot;992&quot;:{&quot;slidesPerView&quot;:6},&quot;1200&quot;:{&quot;slidesPerView&quot;:7}}}">
              <!-- Additional required wrapper-->
              <div class="swiper-wrapper">
                <!-- Slides-->
                <div class="swiper-slide">
                  <div class="swiper-gallery-item"><a class="swiper-gallery-figure lightgallery-item" href="images/image-5-1200x800.jpg"><img class="swiper-gallery-image" src="images/image-5-400x500.jpg" alt="" width="400" height="500"/></a></div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-gallery-item"><a class="swiper-gallery-figure lightgallery-item" href="images/image-6-1067x800.jpg"><img class="swiper-gallery-image" src="images/image-6-400x500.jpg" alt="" width="400" height="500"/></a></div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-gallery-item"><a class="swiper-gallery-figure lightgallery-item" href="images/image-7-1200x800.jpg"><img class="swiper-gallery-image" src="images/image-7-400x500.jpg" alt="" width="400" height="500"/></a></div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-gallery-item"><a class="swiper-gallery-figure lightgallery-item" href="images/image-8-1200x800.jpg"><img class="swiper-gallery-image" src="images/image-8-400x500.jpg" alt="" width="400" height="500"/></a></div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-gallery-item"><a class="swiper-gallery-figure lightgallery-item" href="images/image-9-1200x800.jpg"><img class="swiper-gallery-image" src="images/image-9-400x500.jpg" alt="" width="400" height="500"/></a></div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-gallery-item"><a class="swiper-gallery-figure lightgallery-item" href="images/image-10-1200x800.jpg"><img class="swiper-gallery-image" src="images/image-10-400x500.jpg" alt="" width="400" height="500"/></a></div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-gallery-item"><a class="swiper-gallery-figure lightgallery-item" href="images/image-11-533x800.jpg"><img class="swiper-gallery-image" src="images/image-11-400x500.jpg" alt="" width="400" height="500"/></a></div>
                </div>
              </div>
              <!-- Navigation nav-->
              <div class="swiper-nav">
                <div class="swiper-button-prev"></div>
                <div class="swiper-dot"></div>
                <div class="swiper-dot"></div>
                <svg class="swiper-progress" x="0px" y="0px" width="100" height="100" viewbox="0 0 100 100">
                  <circle class="swiper-progress-bg" cx="50" cy="50" r="50"></circle>
                  <circle class="swiper-progress-dot" cx="50" cy="50" r="14"></circle>
                  <circle class="clipped" cx="50" cy="50" r="48"></circle>
                </svg>
                <div class="swiper-dot"></div>
                <div class="swiper-dot"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </section>
        <!-- Ticket Prices-->
        <section class="section section-7 position-relative overflow-hidden" style="background-color: #415ADE">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-7" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
                      <path class="layer-item-1" d="M1114 1H1814L1234 930H533L1114 1Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M270.929 696H560L320.484 1080H31L270.929 696Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M283.358 623L0 1080H85.6902L367 623H283.358Z" fill="#FFD600"></path>
                      <path class="layer-item-4" d="M1183.69 729L1081 894H1112.05L1214 729H1183.69Z" fill="#FFD600"></path>
                      <path class="layer-item-5" d="M1772.61 412L1358 1081H1483.38L1895 412H1772.61Z" fill="#FFD600"></path>
                      <path class="layer-item-6" d="M636.826 654.669L638.524 655.726L374.304 1080.21L372.607 1079.16L636.826 654.669Z" fill="white"></path>
                      <path class="layer-item-7" opacity="0.4" d="M1413.83 654.669L1415.52 655.726L1151.3 1080.21L1149.61 1079.16L1413.83 654.669Z" fill="white"></path>
                      <path class="layer-item-8" opacity="0.4" d="M1423.83 654.669L1425.52 655.726L1161.3 1080.21L1159.61 1079.16L1423.83 654.669Z" fill="white"></path>
                      <path class="layer-item-9" d="M336.826 632.669L338.524 633.726L227.023 812.859L225.325 811.802C268.869 741.846 293.282 702.625 336.826 632.669Z" fill="white"></path>
                      <path class="layer-item-10" d="M346.826 632.669L348.524 633.726L237.023 812.859L235.325 811.802L346.826 632.669Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container-wide">
            <div class="row justify-content-center">
              <div class="col-xs-8 col-sm-7 col-md-9 col-lg-10 col-xl-9 col-xxl-7 offset-xxl-2 section-content-3" data-animate='{"in":{"class":"fadeInUpBig","delay":".7s","duration":".7s"},"out":{"class":"fadeOutUpBig","delay":"0s","duration":".4s"}}'>
                <h2 class="text-center d-mobile-landscape-none">Ticket Prices</h2>
                <div class="owl-carousel owl-style-1" data-owl="{&quot;items&quot;:1,&quot;margin&quot;:30,&quot;loop&quot;:false,&quot;mouseDrag&quot;:false,&quot;nav&quot;:true,&quot;autoplay&quot;:false,&quot;responsive&quot;:{&quot;768&quot;:{&quot;items&quot;:2},&quot;992&quot;:{&quot;items&quot;:3}}}">
                          <!-- Price-->
                          <article class="price">
                            <div class="price-title h3">Tickets</div>
                            <ul class="price-list">
                              <li class="price-list-item"><span>Children <br class="d-none d-md-block">(4 to 7 years old)</span><strong>$8/pers.</strong></li>
                              <li class="price-list-item"><span>Adults</span><strong>$15/pers.</strong></li>
                              <li class="price-list-item"><span>Students</span><strong>$12/pers.</strong></li>
                              <li class="price-list-item"><span>Seniors</span><strong>$10/pers.</strong></li>
                            </ul>
                            <hr class="divider divider-sm price-divider">
                            <div class="price-text"><strong>Free for:</strong> <br class="d-none d-md-block">Children up to 3 years</div><a class="btn btn-outline btn-block btn-round price-btn" href="#">Buy a Ticket</a>
                          </article>
                          <!-- Price-->
                          <article class="price">
                            <div class="price-title h3">Excursions</div>
                            <ul class="price-list">
                              <li class="price-list-item"><span>Group <br class="d-none d-md-block">(3-7 people)</span><strong>$10/pers.</strong></li>
                              <li class="price-list-item"><span>Individual <br class="d-none d-md-block">(1-2 people)</span><strong>$20/pers.</strong></li>
                              <li class="price-list-item"><span>Children</span><strong>$7/pers.</strong></li>
                            </ul>
                            <hr class="divider divider-sm price-divider">
                            <div class="price-text"><strong>Additionally:</strong> <br class="d-none d-md-block">Ticket purchase is required</div><a class="btn btn-outline btn-block btn-round price-btn" href="#">Buy a Ticket</a>
                          </article>
                          <!-- Price-->
                          <article class="price">
                            <div class="price-title h3">Audio Guides</div>
                            <ul class="price-list">
                              <li class="price-list-item"><span>Adult Program (1h)</span><strong>$8</strong></li>
                              <li class="price-list-item"><span>Teen Program (30m)</span><strong>$5</strong></li>
                              <li class="price-list-item"><span>Children’s Program</span><strong>12</strong></li>
                              <li class="price-list-item"><span>Encyclopedia</span><strong>$10</strong></li>
                            </ul>
                            <hr class="divider divider-sm price-divider">
                            <div class="price-text"><strong>Free for:</strong> <br class="d-none d-md-block">Children up to 3 years</div><a class="btn btn-outline btn-block btn-round price-btn" href="#">Buy a Ticket</a>
                          </article>
                </div>
              </div>
              <div class="col-xs-4 col-sm-3 col-md-2 position-static d-flex align-items-center px-0 section-figure"><img class="section-image" src="images/image-12-534x825.png" alt="" width="534" height="825" data-animate='{"in":{"class":"slideInRight","delay":".7s","duration":".7s"},"out":{"class":"slideOutRight","delay":"0s","duration":".4s"}}'/>
              </div>
            </div>
          </div>
        </section>
        <!-- Contacts-->
        <section class="section section-8 position-relative overflow-hidden" style="background-color: #44AA4E">
          <div class="section-layer">
                    <!-- Layer-->
                    <svg class="layer layer-8" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
                      <path class="layer-item-1" d="M1119 0H1819L1239 929H538L1119 0Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-2" d="M275.929 696H565L325.484 1080H36L275.929 696Z" fill="white" fill-opacity="0.1"></path>
                      <path class="layer-item-3" d="M1850.57 -1L1181 1079H1383.48L2048.21 -1H1850.57Z" fill="#FFD600"></path>
                      <path class="layer-item-4" d="M287.219 618L0 1080.93H86.8577L372 618H287.219Z" fill="#FFD600"></path>
                      <path class="layer-item-5" d="M1020.69 225L918 390H949.054L1051 225H1020.69Z" fill="#FFD600"></path>
                      <path class="layer-item-6" d="M1740.83 137.669L1742.52 138.726L1478.3 563.212L1476.61 562.155C1579.79 396.383 1637.64 303.441 1740.83 137.669Z" fill="white"></path>
                      <path class="layer-item-7" opacity="0.4" d="M1413.83 657.669L1415.52 658.726L1151.3 1083.21L1149.61 1082.16C1252.79 916.383 1310.64 823.441 1413.83 657.669Z" fill="white"></path>
                      <path class="layer-item-8" opacity="0.4" d="M1423.83 657.669L1425.52 658.726C1322.34 824.498 1264.49 917.44 1161.3 1083.21L1159.61 1082.16L1423.83 657.669Z" fill="white"></path>
                      <path class="layer-item-9" d="M1106.83 665.669L1108.52 666.726L997.023 845.859L995.325 844.802C1038.87 774.846 1063.28 735.625 1106.83 665.669Z" fill="white"></path>
                      <path class="layer-item-10" d="M1116.83 665.669L1118.52 666.726C1074.98 736.682 1050.57 775.903 1007.02 845.859L1005.33 844.802L1116.83 665.669Z" fill="white"></path>
                    </svg>
          </div>
          <div class="container">
            <div class="row row-30 align-items-center justify-content-center">
              <div class="col-xs-6 col-lg-5 col-xl-4 col-xxl-5 section-content-2" data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                <h2>Get In Touch</h2>
                <form class="rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="components/rd-mailform/rd-mailform.php">
                  <div class="form-group">
                    <div class="position-relative">
                      <input class="form-control" type="text" name="name" placeholder="Your name" data-constraints="@Required">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="position-relative">
                      <input class="form-control" type="email" name="email" placeholder="E-mail" data-constraints="@Email @Required">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="position-relative">
                      <input class="form-control" type="tel" name="tel" placeholder="Phone" data-constraints="@PhoneNumber @Required">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="position-relative">
                      <textarea class="form-control" name="question" placeholder="Message" data-constraints="@Required"></textarea>
                    </div>
                  </div>
                  <button class="btn btn-round btn-primary btn-anis" type="submit">Send Message</button>
                </form>
              </div>
              <div class="form-output snackbar snackbar-primary" id="form-output-global"></div>
              <div class="col-xs-6 col-lg-7 section-content-2" data-animate='{"in":{"class":"fadeInRightBig","delay":".8s","duration":".7s"},"out":{"class":"fadeOutRightBig","delay":"0s","duration":".4s"}}'>
                <div class="ml-lg-6">
                  <div class="google-map-container" id="map1" data-center="Columbus Park, Baxter Street, New York, United State" data-zoom="12" data-icon="images/gmap_marker.svg" data-icon-active="images/gmap_marker_active.svg" data-styles="[{&quot;featureType&quot;:&quot;landscape&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;hue&quot;:&quot;#FFBB00&quot;},{&quot;saturation&quot;:43.400000000000006},{&quot;lightness&quot;:37.599999999999994},{&quot;gamma&quot;:1}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;hue&quot;:&quot;#00FF6A&quot;},{&quot;saturation&quot;:-1.0989010989011234},{&quot;lightness&quot;:11.200000000000017},{&quot;gamma&quot;:1}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;hue&quot;:&quot;#FFC200&quot;},{&quot;saturation&quot;:-61.8},{&quot;lightness&quot;:45.599999999999994},{&quot;gamma&quot;:1}]},{&quot;featureType&quot;:&quot;road.arterial&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;hue&quot;:&quot;#FF0300&quot;},{&quot;saturation&quot;:-100},{&quot;lightness&quot;:51.19999999999999},{&quot;gamma&quot;:1}]},{&quot;featureType&quot;:&quot;road.local&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;hue&quot;:&quot;#FF0300&quot;},{&quot;saturation&quot;:-100},{&quot;lightness&quot;:52},{&quot;gamma&quot;:1}]},{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;hue&quot;:&quot;#0078FF&quot;},{&quot;saturation&quot;:-13.200000000000003},{&quot;lightness&quot;:2.4000000000000057},{&quot;gamma&quot;:1}]}]">
                    <div class="google-map"></div>
                    <ul class="google-map-markers">
                      <li data-location="Columbus Park, Baxter Street, New York, United State" data-description="Columbus Park, Baxter Street, New York, United State"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Footer default-->
      <section class="section fixed-bottom text-center py-3 d-none d-xl-block">
        <div class="container">
                <!-- Copyright-->
                <p class="rights"><span>&copy; 2020&nbsp;</span><span>Bonobomb Zoo</span><span>. All rights reserved</span></p>
        </div>
      </section>
    </div>
    <div class="to-top int-arrow-up"></div>
  </body>
</html>       and to correct merge css html.fp-enabled, .fp-enabled body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    /*Avoid flicker on slides transitions for mobile phones #336 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.fp-section {
    position: relative;
    -webkit-box-sizing: border-box;
    /* Safari<=5 Android<=3 */
    -moz-box-sizing: border-box;
    /* <=28 */
    box-sizing: border-box;
}

.fp-slide {
    float: left;
}

.fp-slide, .fp-slidesContainer {
    height: 100%;
    display: block;
}

.fp-slides {
    z-index: 1;
    height: 100%;
    overflow: hidden;
    position: relative;
    -webkit-transition: all 0.3s ease-out;
    /* Safari<=6 Android<=4.3 */
    transition: all 0.3s ease-out;
}

.fp-section.fp-table, .fp-slide.fp-table {
    display: table;
    table-layout: fixed;
    width: 100%;
}

.fp-tableCell {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
}

.fp-slidesContainer {
    float: left;
    position: relative;
}

.fp-controlArrow {
    -webkit-user-select: none;
    /* webkit (safari, chrome) browsers */
    -moz-user-select: none;
    /* mozilla browsers */
    -khtml-user-select: none;
    /* webkit (konqueror) browsers */
    -ms-user-select: none;
    /* IE10+ */
    position: absolute;
    z-index: 4;
    top: 50%;
    cursor: pointer;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: -38px;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.fp-controlArrow.fp-prev {
    left: 15px;
    width: 0;
    border-width: 38.5px 34px 38.5px 0;
    border-color: transparent #fff transparent transparent;
}

.fp-controlArrow.fp-next {
    right: 15px;
    border-width: 38.5px 0 38.5px 34px;
    border-color: transparent transparent transparent #fff;
}

.fp-scrollable {
    overflow: hidden;
    position: relative;
}

.fp-scroller {
    overflow: hidden;
}

.iScrollIndicator {
    border: 0 !important;
}

.fp-notransition {
    -webkit-transition: none !important;
    transition: none !important;
}

#fp-nav {
    position: fixed;
    z-index: 10;
    margin-top: -32px;
    top: 50%;
    opacity: 0;
    transition: opacity .25s ease;
}

.components-ready #fp-nav {
    opacity: 1;
    transition-delay: .5s;
}

#fp-nav.right {
    right: 1.3%;
}

#fp-nav.left {
    left: 1.3%;
}

.fp-slidesNav {
    position: absolute;
    z-index: 4;
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0 !important;
    right: 0;
    margin: 0 auto !important;
}

.fp-slidesNav.bottom {
    bottom: 17px;
}

.fp-slidesNav.top {
    top: 17px;
}

#fp-nav ul, .fp-slidesNav ul {
    margin: 0;
    padding: 0;
}

#fp-nav ul li, .fp-slidesNav ul li {
    display: block;
    width: 12px;
    height: 12px;
    margin: 20px 0;
}

.fp-slidesNav ul li {
    display: inline-block;
}

#fp-nav ul li a, .fp-slidesNav ul li a {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
}

#fp-nav ul li a.active span, .fp-slidesNav ul li a.active span, #fp-nav ul li:hover a.active span, .fp-slidesNav ul li:hover a.active span {
    background: #FF7A00;
    border-color: #FF7A00;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

#fp-nav ul li a span, .fp-slidesNav ul li a span {
    display: block;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    border: 3px solid #fff;
    background: transparent;
    transition: .2s ease;
}

#fp-nav ul li:hover a span, .fp-slidesNav ul li:hover a span {
    background: #FF7A00;
    border-color: #FF7A00;
}

#fp-nav ul li .fp-tooltip {
    position: absolute;
    top: -2px;
    color: #fff;
    font-size: 14px;
    font-family: arial, helvetica, sans-serif;
    white-space: nowrap;
    max-width: 220px;
    overflow: hidden;
    display: block;
    opacity: 0;
    width: 0;
    cursor: pointer;
}

#fp-nav ul li:hover .fp-tooltip, #fp-nav.fp-show-active a.active + .fp-tooltip {
    -webkit-transition: opacity 0.2s ease-in;
    transition: opacity 0.2s ease-in;
    width: auto;
    opacity: 1;
}

#fp-nav ul li .fp-tooltip.right {
    right: 20px;
}

#fp-nav ul li .fp-tooltip.left {
    left: 20px;
}

.fp-auto-height.fp-section, .fp-auto-height .fp-slide, .fp-auto-height .fp-tableCell {
    height: auto !important;
}

.fp-responsive .fp-auto-height-responsive.fp-section, .fp-responsive .fp-auto-height-responsive .fp-slide, .fp-responsive .fp-auto-height-responsive .fp-tableCell {
    height: auto !important;
}

.fullpage-navigation {
    align-items: center;
}

.fullpage-navigation [data-menuanchor*='home-'] {
    display: none;
}

.fullpage-navigation [data-menuanchor*='home-'].active {
    display: block;
}

.fullpage-navigation [data-menuanchor*='home-'].active ~ [data-menuanchor='home'] {
    display: none;
}

[data-menuanchor='home'] {
    order: -1;
}
                 /** @section Swiper */
@font-face {
    font-family: 'swiper-icons';
    src: url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA");
    font-weight: 400;
    font-style: normal;
}

:root {
    --swiper-theme-color: #fff;
}

.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
}

.swiper-vertical > .swiper-wrapper {
    flex-direction: column;
}

.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}

.swiper-android .swiper-slide, .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
}

.swiper-pointer-events {
    touch-action: pan-y;
}

.swiper-pointer-events.swiper-vertical {
    touch-action: pan-x;
}

.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
}

.swiper-slide-invisible-blank {
    visibility: hidden;
}

/* Auto Height */
.swiper-autoheight, .swiper-autoheight .swiper-slide {
    height: auto;
}

.swiper-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
}

.swiper-backface-hidden .swiper-slide {
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

/* 3D Effects */
.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective: 1200px;
}

.swiper-3d .swiper-wrapper, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-cube-shadow {
    transform-style: preserve-3d;
}

.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
}

.swiper-3d .swiper-slide-shadow {
    background: rgba(0, 0, 0, 0.15);
}

.swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
}

.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
}

.swiper-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
}

.swiper-horizontal.swiper-css-mode > .swiper-wrapper {
    scroll-snap-type: x mandatory;
}

.swiper-vertical.swiper-css-mode > .swiper-wrapper {
    scroll-snap-type: y mandatory;
}

.swiper-centered > .swiper-wrapper::before {
    content: '';
    flex-shrink: 0;
    order: 9999;
}

.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
    margin-inline-start: var(--swiper-centered-offset-before); }

.swiper-centered.swiper-horizontal > .swiper-wrapper: :before {
    height: 100%;
    min-height: 1px;
    width: var(--swiper-centered-offset-after);
}

.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
    margin-block-start: var(--swiper-centered-offset-before); }

.swiper-centered.swiper-vertical > .swiper-wrapper: :before {
    width: 100%;
    min-width: 1px;
    height: var(--swiper-centered-offset-after);
}

.swiper-centered > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: center center;
    scroll-snap-stop: always; }

.swiper-virtual .swiper-slide {
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
}

.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
}

.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
    height: 1px;
    width: var(--swiper-virtual-size);
}

.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
    width: 1px;
    height: var(--swiper-virtual-size);
}

:root {
    --swiper-navigation-size: 21px;
    /*
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}

.swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 21 * 31);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
}

.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
}

.swiper-button-prev.swiper-button-hidden, .swiper-button-next.swiper-button-hidden {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}

.swiper-navigation-disabled .swiper-button-prev, .swiper-navigation-disabled .swiper-button-next {
    display: none !important;
}

.swiper-button-prev:after, .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
}

.swiper-button-prev, .swiper-rtl .swiper-button-next {
    left: 10px;
    right: auto;
}

.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    content: 'prev';
}

.swiper-button-next, .swiper-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
}

.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    content: 'next';
}

.swiper-button-lock {
    display: none;
}

:root {
    /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}

.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
}

.swiper-pagination-disabled > .swiper-pagination, .swiper-pagination.swiper-pagination-disabled {
    display: none !important;
}

/* Common Styles */
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 10px;
    left: 0;
    width: 100%;
}

/* Bullets */
.swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transform: scale(0.33);
    position: relative;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
}

.swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    display: inline-block;
    border-radius: 50%;
    background: var(--swiper-pagination-bullet-inactive-color, #000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}

button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
}

.swiper-pagination-bullet:only-child {
    display: none !important;
}

.swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
}

.swiper-vertical > .swiper-pagination-bullets, .swiper-pagination-vertical.swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
}

.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
    display: block;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    display: inline-block;
    transition: 200ms transform, 200ms top;
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: 200ms transform, 200ms left;
}

.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: 200ms transform, 200ms right;
}

/* Progress */
.swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
}

.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    transform-origin: right top;
}

.swiper-horizontal > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
}

.swiper-vertical > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-vertical, .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
}

.swiper-pagination-lock {
    display: none;
}

/* Scrollbar */
.swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0, 0, 0, 0.1);
}

.swiper-scrollbar-disabled > .swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-disabled {
    display: none !important;
}

.swiper-horizontal > .swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%;
}

.swiper-vertical > .swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-vertical {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%;
}

.swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    left: 0;
    top: 0;
}

.swiper-scrollbar-cursor-drag {
    cursor: move;
}

.swiper-scrollbar-lock {
    display: none;
}

.swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.swiper-zoom-container > img, .swiper-zoom-container > svg, .swiper-zoom-container > canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.swiper-slide-zoomed {
    cursor: move;
}

/* Preloader */
:root {
    /*
  --swiper-preloader-color: var(--swiper-theme-color);
  */
}

.swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    box-sizing: border-box;
    border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
    border-radius: 50%;
    border-top-color: transparent;
}

.swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader, .swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
    animation: swiper-preloader-spin 1s infinite linear;
}

.swiper-lazy-preloader-white {
    --swiper-preloader-color: #fff;
}

.swiper-lazy-preloader-black {
    --swiper-preloader-color: #000;
}

@keyframes swiper-preloader-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* a11y */
.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}

.swiper-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
}

.swiper-grid > .swiper-wrapper {
    flex-wrap: wrap;
}

.swiper-grid-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
}

.swiper-fade.swiper-free-mode .swiper-slide {
    transition-timing-function: ease-out;
}

.swiper-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity;
}

.swiper-fade .swiper-slide .swiper-slide {
    pointer-events: none;
}

.swiper-fade .swiper-slide-active, .swiper-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}

.swiper-cube {
    overflow: visible;
}

.swiper-cube .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    transform-origin: 0 0;
    width: 100%;
    height: 100%;
}

.swiper-cube .swiper-slide .swiper-slide {
    pointer-events: none;
}

.swiper-cube.swiper-rtl .swiper-slide {
    transform-origin: 100% 0;
}

.swiper-cube .swiper-slide-active, .swiper-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}

.swiper-cube .swiper-slide-active, .swiper-cube .swiper-slide-next, .swiper-cube .swiper-slide-prev, .swiper-cube .swiper-slide-next + .swiper-slide {
    pointer-events: auto;
    visibility: visible;
}

.swiper-cube .swiper-slide-shadow-top, .swiper-cube .swiper-slide-shadow-bottom, .swiper-cube .swiper-slide-shadow-left, .swiper-cube .swiper-slide-shadow-right {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.swiper-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 0;
}

.swiper-cube .swiper-cube-shadow:before {
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    filter: blur(50px);
}

.swiper-flip {
    overflow: visible;
}

.swiper-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
}

.swiper-flip .swiper-slide .swiper-slide {
    pointer-events: none;
}

.swiper-flip .swiper-slide-active, .swiper-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}

.swiper-flip .swiper-slide-shadow-top, .swiper-flip .swiper-slide-shadow-bottom, .swiper-flip .swiper-slide-shadow-left, .swiper-flip .swiper-slide-shadow-right {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.swiper-creative .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    transition-property: transform, opacity, height;
}

.swiper-cards {
    overflow: visible;
}

.swiper-cards .swiper-slide {
    transform-origin: center bottom;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
}

.swiper-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
}

.swiper-button-prev, .swiper-button-next {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    margin-top: 0;
    padding: 5px;
}

.swiper-progress {
    width: 25px;
    height: 25px;
    margin: 0 8px;
    stroke-width: 4px;
    stroke: #fff;
    fill: transparent;
}

.swiper-progress-bg {
    stroke: none;
    fill: rgba(255, 255, 255, 0.25);
}

.swiper-progress-dot {
    fill: #fff;
}

.swiper-dot {
    width: 7px;
    height: 7px;
    margin: 0 8px;
    border-radius: 50%;
    background: #fff;
}

.swiper-gallery {
    padding-bottom: 30px;
}

.swiper-gallery .swiper-wrapper {
    width: auto;
    padding: calc( 1.5% + 15px) 10px;
    margin: 0 -10px;
}

.swiper-gallery .swiper-slide {
    display: block;
}

.swiper-gallery .swiper-slide-active {
    z-index: 1;
}

.swiper-gallery-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 93.75% 0;
}

.swiper-gallery-figure {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #000;
    transition: .3s;
    pointer-events: none;
}

.swiper-gallery-image {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
    object-position: 50%;
    opacity: .8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    transition: .3s;
}

.swiper-slide-active .swiper-gallery-figure {
    width: 167%;
    height: 111%;
    transition: 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: auto;
}

.swiper-slide-active .swiper-gallery-figure:hover .swiper-gallery-image {
    opacity: .8;
}

.swiper-slide-active .swiper-gallery-image {
    opacity: 1;
}

* + .swiper-container {
    margin-top: 30px;
}

html * + .swiper-gallery {
    margin-top: 0.625rem;
}

@media (min-width: 768px) {
    * + .swiper-container {
        margin-top: 2.5rem;
    }

    html * + .swiper-gallery {
        margin-top: 1.25rem;
    }
}

@media (min-width: 992px) {
    * + .swiper-container {
        margin-top: 3.125rem;
    }

    .swiper-gallery .swiper-wrapper {
        padding: calc( 1.5% + 30px) 10px;
    }

    .swiper-slide-active .swiper-gallery-figure {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    }
}

@media screen and (device-aspect-ratio: 812 / 375) {
    .swiper-gallery-item {
        padding: 50% 0;
    }
}
                :root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-black: #000;
    --bs-white: #fff;
    --bs-gray: #5d5d66;
    --bs-gray-dark: #23232f;
    --bs-gray-100: #fafafa;
    --bs-gray-200: #f7f7f7;
    --bs-gray-300: #e8e8e9;
    --bs-gray-400: #aeaeb2;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #5d5d66;
    --bs-gray-700: #393944;
    --bs-gray-800: #23232f;
    --bs-gray-900: #171724;
    --bs-primary: #FF7A00;
    --bs-secondary: #FFD600;
    --bs-success: #77ba21;
    --bs-info: #138ce4;
    --bs-warning: #f19711;
    --bs-danger: #e72660;
    --bs-light: #f7f7f7;
    --bs-dark: #171724;
    --bs-primary-rgb: 255, 122, 0;
    --bs-secondary-rgb: 255, 214, 0;
    --bs-success-rgb: 119, 186, 33;
    --bs-info-rgb: 19, 140, 228;
    --bs-warning-rgb: 241, 151, 17;
    --bs-danger-rgb: 231, 38, 96;
    --bs-light-rgb: 247, 247, 247;
    --bs-dark-rgb: 23, 23, 36;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 255, 255, 255;
    --bs-body-bg-rgb: 114, 184, 5;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --bs-body-font-family: Open Sans, sans-serif;
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.375;
    --bs-body-color: #fff;
    --bs-body-bg: #72B805;
    --bs-border-width: 1px;
    --bs-border-style: solid;
    --bs-border-color: #fff;
    --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
    --bs-border-radius: 0.3125rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.875rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-2xl: 2rem;
    --bs-border-radius-pill: 50rem;
    --bs-link-color: #FFD600;
    --bs-link-hover-color: #ccab00;
    --bs-code-color: #d63384;
    --bs-highlight-bg: #FFD600;
}

*, *::before, *::after {
    box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
    :root {
        scroll-behavior: smooth;
    }
}

body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
    margin: 0 0;
    color: inherit;
    border: 0;
    border-top: 2px solid rgba(255, 255, 255, 0.4);
    opacity: 0.25;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
}

h1, .h1 {
    font-size: calc(1.625rem + 4.5vw);
}

@media (min-width: 1200px) {
    h1, .h1 {
        font-size: 5rem;
    }
}

h2, .h2 {
    font-size: calc(1.425rem + 2.1vw);
}

@media (min-width: 1200px) {
    h2, .h2 {
        font-size: 3rem;
    }
}

h3, .h3 {
    font-size: calc(1.35rem + 1.2vw);
}

@media (min-width: 1200px) {
    h3, .h3 {
        font-size: 2.25rem;
    }
}

h4, .h4 {
    font-size: calc(1.3125rem + 0.75vw);
}

@media (min-width: 1200px) {
    h4, .h4 {
        font-size: 1.875rem;
    }
}

h5, .h5 {
    font-size: calc(1.275rem + 0.3vw);
}

@media (min-width: 1200px) {
    h5, .h5 {
        font-size: 1.5rem;
    }
}

h6, .h6 {
    font-size: 1.125rem;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

abbr[title] {
    text-decoration: underline dotted;
    cursor: help;
    text-decoration-skip-ink: none;
}

address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
}

ol, ul {
    padding-left: 2rem;
}

ol, ul, dl {
    margin-top: 0;
    margin-bottom: 1rem;
}

ol ol, ul ul, ol ul, ul ol {
    margin-bottom: 0;
}

dt {
    font-weight: 700;
}

dd {
    margin-bottom: .5rem;
    margin-left: 0;
}

blockquote {
    margin: 0 0 1rem;
}

b, strong {
    font-weight: bolder;
}

small, .small {
    font-size: 81%;
}

mark, .mark {
    padding: 0 0.1em;
    background-color: var(--bs-highlight-bg);
}

sub, sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
}

sub {
    bottom: -.25em;
}

sup {
    top: -.5em;
}

a {
    color: var(--bs-link-color);
    text-decoration: none;
}

a:hover {
    color: var(--bs-link-hover-color);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
}

pre, code, kbd, samp {
    font-family: var(--bs-font-monospace);
    font-size: 1em;
}

pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 81%;
}

pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
}

code {
    font-size: 81%;
    color: var(--bs-code-color);
    word-wrap: break-word;
}

a > code {
    color: inherit;
}

kbd {
    padding: 0.1875rem 0.375rem;
    font-size: 81%;
    color: var(--bs-body-bg);
    background-color: var(--bs-body-color);
    border-radius: 0.25rem;
}

kbd kbd {
    padding: 0;
    font-size: 1em;
}

figure {
    margin: 0 0 1rem;
}

img, svg {
    vertical-align: middle;
}

table {
    caption-side: bottom;
    border-collapse: collapse;
}

caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #5d5d66;
    text-align: left;
}

th {
    text-align: inherit;
    text-align: -webkit-match-parent;
}

thead, tbody, tfoot, tr, td, th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
}

label {
    display: inline-block;
}

button {
    border-radius: 0;
}

button:focus:not(:focus-visible) {
    outline: 0;
}

input, button, select, optgroup, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button, select {
    text-transform: none;
}

[role="button"] {
    cursor: pointer;
}

select {
    word-wrap: normal;
}

select:disabled {
    opacity: 1;
}

[list]:not([type="date"]):not([type="datetime-local"]):not([type="month"]):not([type="week"]):not([type="time"])::-webkit-calendar-picker-indicator {
    display: none !important;
}

button, [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
}

button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
    cursor: pointer;
}

::-moz-focus-inner {
    padding: 0;
    border-style: none;
}

textarea {
    resize: vertical;
}

fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
}

@media (min-width: 1200px) {
    legend {
        font-size: 1.5rem;
    }
}

legend + * {
    clear: left;
}

::-webkit-datetime-edit-fields-wrapper, ::-webkit-datetime-edit-text, ::-webkit-datetime-edit-minute, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-year-field {
    padding: 0;
}

::-webkit-inner-spin-button {
    height: auto;
}

[type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
    padding: 0;
}

::file-selector-button {
    font: inherit;
    -webkit-appearance: button;
}

output {
    display: inline-block;
}

iframe {
    border: 0;
}

summary {
    display: list-item;
    cursor: pointer;
}

progress {
    vertical-align: baseline;
}

[hidden] {
    display: none !important;
}

.lead {
    font-size: 1.125rem;
    font-weight: 400;
}

.display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-1 {
        font-size: 5rem;
    }
}

.display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-2 {
        font-size: 4.5rem;
    }
}

.display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-3 {
        font-size: 4rem;
    }
}

.display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-4 {
        font-size: 3.5rem;
    }
}

.display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-5 {
        font-size: 3rem;
    }
}

.display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-6 {
        font-size: 2.5rem;
    }
}

.list-unstyled {
    padding-left: 0;
    list-style: none;
}

.list-inline {
    padding-left: 0;
    list-style: none;
}

.list-inline-item {
    display: inline-block;
}

.list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
}

.initialism {
    font-size: 81%;
    text-transform: uppercase;
}

.blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.blockquote > :last-child {
    margin-bottom: 0;
}

.blockquote-footer {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: 81%;
    color: #5d5d66;
}

.blockquote-footer::before {
    content: "\2014\00A0";
}

.fade {
    transition: opacity 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
    .fade {
        transition: none;
    }
}

.fade:not(.show) {
    opacity: 0;
}

.collapse:not(.show) {
    display: none;
}

.collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
    .collapsing {
        transition: none;
    }
}

.collapsing.collapse-horizontal {
    width: 0;
    height: auto;
    transition: width 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
    .collapsing.collapse-horizontal {
        transition: none;
    }
}

.clearfix::after {
    display: block;
    clear: both;
    content: "";
}

.ratio {
    position: relative;
    width: 100%;
}

.ratio::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: "";
}

.ratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.ratio-1x1 {
    --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
    --bs-aspect-ratio: calc(3 / 4 * 100%);
}

.ratio-16x9 {
    --bs-aspect-ratio: calc(9 / 16 * 100%);
}

.ratio-21x9 {
    --bs-aspect-ratio: calc(9 / 21 * 100%);
}

.fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 14;
}

.fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 14;
}

.sticky-top {
    position: sticky;
    top: 0;
    z-index: 11;
}

.sticky-bottom {
    position: sticky;
    bottom: 0;
    z-index: 11;
}

@media (min-width: 480px) {
    .sticky-xs-top {
        position: sticky;
        top: 0;
        z-index: 11;
    }

    .sticky-xs-bottom {
        position: sticky;
        bottom: 0;
        z-index: 11;
    }
}

@media (min-width: 576px) {
    .sticky-sm-top {
        position: sticky;
        top: 0;
        z-index: 11;
    }

    .sticky-sm-bottom {
        position: sticky;
        bottom: 0;
        z-index: 11;
    }
}

@media (min-width: 768px) {
    .sticky-md-top {
        position: sticky;
        top: 0;
        z-index: 11;
    }

    .sticky-md-bottom {
        position: sticky;
        bottom: 0;
        z-index: 11;
    }
}

@media (min-width: 992px) {
    .sticky-lg-top {
        position: sticky;
        top: 0;
        z-index: 11;
    }

    .sticky-lg-bottom {
        position: sticky;
        bottom: 0;
        z-index: 11;
    }
}

@media (min-width: 1200px) {
    .sticky-xl-top {
        position: sticky;
        top: 0;
        z-index: 11;
    }

    .sticky-xl-bottom {
        position: sticky;
        bottom: 0;
        z-index: 11;
    }
}

@media (min-width: 1600px) {
    .sticky-xxl-top {
        position: sticky;
        top: 0;
        z-index: 11;
    }

    .sticky-xxl-bottom {
        position: sticky;
        bottom: 0;
        z-index: 11;
    }
}

.align-baseline {
    vertical-align: baseline !important;
}

.align-top {
    vertical-align: top !important;
}

.align-middle {
    vertical-align: middle !important;
}

.align-bottom {
    vertical-align: bottom !important;
}

.align-text-bottom {
    vertical-align: text-bottom !important;
}

.align-text-top {
    vertical-align: text-top !important;
}

.float-start {
    float: left !important;
}

.float-end {
    float: right !important;
}

.float-none {
    float: none !important;
}

.opacity-0 {
    opacity: 0 !important;
}

.opacity-25 {
    opacity: 0.25 !important;
}

.opacity-50 {
    opacity: 0.5 !important;
}

.opacity-75 {
    opacity: 0.75 !important;
}

.opacity-100 {
    opacity: 1 !important;
}

.overflow-auto {
    overflow: auto !important;
}

.overflow-hidden {
    overflow: hidden !important;
}

.overflow-visible {
    overflow: visible !important;
}

.overflow-scroll {
    overflow: scroll !important;
}

.d-inline {
    display: inline !important;
}

.d-inline-block {
    display: inline-block !important;
}

.d-block {
    display: block !important;
}

.d-grid {
    display: grid !important;
}

.d-table {
    display: table !important;
}

.d-table-row {
    display: table-row !important;
}

.d-table-cell {
    display: table-cell !important;
}

.d-flex {
    display: flex !important;
}

.d-inline-flex {
    display: inline-flex !important;
}

.d-none {
    display: none !important;
}

.shadow {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25) !important;
}

.shadow-sm {
    box-shadow: 5px 8px 28px rgba(23, 23, 36, 0.1) !important;
}

.shadow-lg {
    box-shadow: 5px 18px 48px rgba(23, 23, 36, 0.1) !important;
}

.shadow-none {
    box-shadow: none !important;
}

.position-static {
    position: static !important;
}

.position-relative {
    position: relative !important;
}

.position-absolute {
    position: absolute !important;
}

.position-fixed {
    position: fixed !important;
}

.position-sticky {
    position: sticky !important;
}

.top-0 {
    top: 0 !important;
}

.top-50 {
    top: 50% !important;
}

.top-100 {
    top: 100% !important;
}

.bottom-0 {
    bottom: 0 !important;
}

.bottom-50 {
    bottom: 50% !important;
}

.bottom-100 {
    bottom: 100% !important;
}

.start-0 {
    left: 0 !important;
}

.start-50 {
    left: 50% !important;
}

.start-100 {
    left: 100% !important;
}

.end-0 {
    right: 0 !important;
}

.end-50 {
    right: 50% !important;
}

.end-100 {
    right: 100% !important;
}

.translate-middle {
    transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
    transform: translateX(-50%) !important;
}

.translate-middle-y {
    transform: translateY(-50%) !important;
}

.border {
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-0 {
    border: 0 !important;
}

.border-top {
    border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-top-0 {
    border-top: 0 !important;
}

.border-end {
    border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-end-0 {
    border-right: 0 !important;
}

.border-bottom {
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-bottom-0 {
    border-bottom: 0 !important;
}

.border-start {
    border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-start-0 {
    border-left: 0 !important;
}

.border-primary {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
}

.border-secondary {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
}

.border-success {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}

.border-info {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
}

.border-warning {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
}

.border-danger {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
}

.border-light {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
}

.border-dark {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
}

.border-white {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
}

.border-1 {
    --bs-border-width: 1px;
}

.border-2 {
    --bs-border-width: 2px;
}

.border-3 {
    --bs-border-width: 3px;
}

.border-4 {
    --bs-border-width: 4px;
}

.border-5 {
    --bs-border-width: 5px;
}

.border-opacity-10 {
    --bs-border-opacity: 0.1;
}

.border-opacity-25 {
    --bs-border-opacity: 0.25;
}

.border-opacity-50 {
    --bs-border-opacity: 0.5;
}

.border-opacity-75 {
    --bs-border-opacity: 0.75;
}

.border-opacity-100 {
    --bs-border-opacity: 1;
}

.w-25 {
    width: 25% !important;
}

.w-50 {
    width: 50% !important;
}

.w-75 {
    width: 75% !important;
}

.w-100 {
    width: 100% !important;
}

.w-auto {
    width: auto !important;
}

.mw-100 {
    max-width: 100% !important;
}

.vw-100 {
    width: 100vw !important;
}

.min-vw-100 {
    min-width: 100vw !important;
}

.h-25 {
    height: 25% !important;
}

.h-50 {
    height: 50% !important;
}

.h-75 {
    height: 75% !important;
}

.h-100 {
    height: 100% !important;
}

.h-auto {
    height: auto !important;
}

.mh-100 {
    max-height: 100% !important;
}

.vh-100 {
    height: 100vh !important;
}

.min-vh-100 {
    min-height: 100vh !important;
}

.flex-fill {
    flex: 1 1 auto !important;
}

.flex-row {
    flex-direction: row !important;
}

.flex-column {
    flex-direction: column !important;
}

.flex-row-reverse {
    flex-direction: row-reverse !important;
}

.flex-column-reverse {
    flex-direction: column-reverse !important;
}

.flex-grow-0 {
    flex-grow: 0 !important;
}

.flex-grow-1 {
    flex-grow: 1 !important;
}

.flex-shrink-0 {
    flex-shrink: 0 !important;
}

.flex-shrink-1 {
    flex-shrink: 1 !important;
}

.flex-wrap {
    flex-wrap: wrap !important;
}

.flex-nowrap {
    flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
}

.justify-content-start {
    justify-content: flex-start !important;
}

.justify-content-end {
    justify-content: flex-end !important;
}

.justify-content-center {
    justify-content: center !important;
}

.justify-content-between {
    justify-content: space-between !important;
}

.justify-content-around {
    justify-content: space-around !important;
}

.justify-content-evenly {
    justify-content: space-evenly !important;
}

.align-items-start {
    align-items: flex-start !important;
}

.align-items-end {
    align-items: flex-end !important;
}

.align-items-center {
    align-items: center !important;
}

.align-items-baseline {
    align-items: baseline !important;
}

.align-items-stretch {
    align-items: stretch !important;
}

.align-content-start {
    align-content: flex-start !important;
}

.align-content-end {
    align-content: flex-end !important;
}

.align-content-center {
    align-content: center !important;
}

.align-content-between {
    align-content: space-between !important;
}

.align-content-around {
    align-content: space-around !important;
}

.align-content-stretch {
    align-content: stretch !important;
}

.align-self-auto {
    align-self: auto !important;
}

.align-self-start {
    align-self: flex-start !important;
}

.align-self-end {
    align-self: flex-end !important;
}

.align-self-center {
    align-self: center !important;
}

.align-self-baseline {
    align-self: baseline !important;
}

.align-self-stretch {
    align-self: stretch !important;
}

.order-first {
    order: -1 !important;
}

.order-0 {
    order: 0 !important;
}

.order-1 {
    order: 1 !important;
}

.order-2 {
    order: 2 !important;
}

.order-3 {
    order: 3 !important;
}

.order-4 {
    order: 4 !important;
}

.order-5 {
    order: 5 !important;
}

.order-last {
    order: 6 !important;
}

.m-0 {
    margin: 0 !important;
}

.m-1 {
    margin: 0.25rem !important;
}

.m-2 {
    margin: 0.5rem !important;
}

.m-3 {
    margin: 1rem !important;
}

.m-4 {
    margin: 1.5rem !important;
}

.m-5 {
    margin: 3rem !important;
}

.m-auto {
    margin: auto !important;
}

.mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
}

.mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
}

.mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
}

.mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
}

.mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
}

.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
}

.my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

.my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
}

.my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
}

.my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
}

.my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
}

.my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
}

.my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
}

.mt-0 {
    margin-top: 0 !important;
}

.mt-1 {
    margin-top: 0.25rem !important;
}

.mt-2 {
    margin-top: 0.5rem !important;
}

.mt-3 {
    margin-top: 1rem !important;
}

.mt-4 {
    margin-top: 1.5rem !important;
}

.mt-5 {
    margin-top: 3rem !important;
}

.mt-auto {
    margin-top: auto !important;
}

.me-0 {
    margin-right: 0 !important;
}

.me-1 {
    margin-right: 0.25rem !important;
}

.me-2 {
    margin-right: 0.5rem !important;
}

.me-3 {
    margin-right: 1rem !important;
}

.me-4 {
    margin-right: 1.5rem !important;
}

.me-5 {
    margin-right: 3rem !important;
}

.me-auto {
    margin-right: auto !important;
}

.mb-0 {
    margin-bottom: 0 !important;
}

.mb-1 {
    margin-bottom: 0.25rem !important;
}

.mb-2 {
    margin-bottom: 0.5rem !important;
}

.mb-3 {
    margin-bottom: 1rem !important;
}

.mb-4 {
    margin-bottom: 1.5rem !important;
}

.mb-5 {
    margin-bottom: 3rem !important;
}

.mb-auto {
    margin-bottom: auto !important;
}

.ms-0 {
    margin-left: 0 !important;
}

.ms-1 {
    margin-left: 0.25rem !important;
}

.ms-2 {
    margin-left: 0.5rem !important;
}

.ms-3 {
    margin-left: 1rem !important;
}

.ms-4 {
    margin-left: 1.5rem !important;
}

.ms-5 {
    margin-left: 3rem !important;
}

.ms-auto {
    margin-left: auto !important;
}

.p-0 {
    padding: 0 !important;
}

.p-1 {
    padding: 0.25rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

.p-3 {
    padding: 1rem !important;
}

.p-4 {
    padding: 1.5rem !important;
}

.p-5 {
    padding: 3rem !important;
}

.px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
}

.px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
}

.px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
}

.px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
}

.px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
}

.px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
}

.py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

.py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
}

.py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
}

.py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
}

.py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
}

.py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
}

.pt-0 {
    padding-top: 0 !important;
}

.pt-1 {
    padding-top: 0.25rem !important;
}

.pt-2 {
    padding-top: 0.5rem !important;
}

.pt-3 {
    padding-top: 1rem !important;
}

.pt-4 {
    padding-top: 1.5rem !important;
}

.pt-5 {
    padding-top: 3rem !important;
}

.pe-0 {
    padding-right: 0 !important;
}

.pe-1 {
    padding-right: 0.25rem !important;
}

.pe-2 {
    padding-right: 0.5rem !important;
}

.pe-3 {
    padding-right: 1rem !important;
}

.pe-4 {
    padding-right: 1.5rem !important;
}

.pe-5 {
    padding-right: 3rem !important;
}

.pb-0 {
    padding-bottom: 0 !important;
}

.pb-1 {
    padding-bottom: 0.25rem !important;
}

.pb-2 {
    padding-bottom: 0.5rem !important;
}

.pb-3 {
    padding-bottom: 1rem !important;
}

.pb-4 {
    padding-bottom: 1.5rem !important;
}

.pb-5 {
    padding-bottom: 3rem !important;
}

.ps-0 {
    padding-left: 0 !important;
}

.ps-1 {
    padding-left: 0.25rem !important;
}

.ps-2 {
    padding-left: 0.5rem !important;
}

.ps-3 {
    padding-left: 1rem !important;
}

.ps-4 {
    padding-left: 1.5rem !important;
}

.ps-5 {
    padding-left: 3rem !important;
}

.gap-0 {
    gap: 0 !important;
}

.gap-1 {
    gap: 0.25rem !important;
}

.gap-2 {
    gap: 0.5rem !important;
}

.gap-3 {
    gap: 1rem !important;
}

.gap-4 {
    gap: 1.5rem !important;
}

.gap-5 {
    gap: 3rem !important;
}

.font-monospace {
    font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
    font-size: calc(1.625rem + 4.5vw) !important;
}

.fs-2 {
    font-size: calc(1.425rem + 2.1vw) !important;
}

.fs-3 {
    font-size: calc(1.35rem + 1.2vw) !important;
}

.fs-4 {
    font-size: calc(1.3125rem + 0.75vw) !important;
}

.fs-5 {
    font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-6 {
    font-size: 1.125rem !important;
}

.fst-italic {
    font-style: italic !important;
}

.fst-normal {
    font-style: normal !important;
}

.fw-light {
    font-weight: 300 !important;
}

.fw-lighter {
    font-weight: lighter !important;
}

.fw-normal {
    font-weight: 400 !important;
}

.fw-bold {
    font-weight: 700 !important;
}

.fw-semibold {
    font-weight: 600 !important;
}

.fw-bolder {
    font-weight: bolder !important;
}

.lh-1 {
    line-height: 1 !important;
}

.lh-sm {
    line-height: 1.5 !important;
}

.lh-base {
    line-height: 1.375 !important;
}

.lh-lg {
    line-height: 1.389 !important;
}

.text-start {
    text-align: left !important;
}

.text-end {
    text-align: right !important;
}

.text-center {
    text-align: center !important;
}

.text-decoration-none {
    text-decoration: none !important;
}

.text-decoration-underline {
    text-decoration: underline !important;
}

.text-decoration-line-through {
    text-decoration: line-through !important;
}

.text-lowercase {
    text-transform: lowercase !important;
}

.text-uppercase {
    text-transform: uppercase !important;
}

.text-capitalize {
    text-transform: capitalize !important;
}

.text-wrap {
    white-space: normal !important;
}

.text-nowrap {
    white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}

.text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}

.text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}

.text-warning {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}

.text-danger {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-black {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-body {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
    --bs-text-opacity: 1;
    color: #5d5d66 !important;
}

.text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
}

.text-opacity-25 {
    --bs-text-opacity: 0.25;
}

.text-opacity-50 {
    --bs-text-opacity: 0.5;
}

.text-opacity-75 {
    --bs-text-opacity: 0.75;
}

.text-opacity-100 {
    --bs-text-opacity: 1;
}

.bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-success {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-black {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}

.bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important;
}

.bg-opacity-10 {
    --bs-bg-opacity: 0.1;
}

.bg-opacity-25 {
    --bs-bg-opacity: 0.25;
}

.bg-opacity-50 {
    --bs-bg-opacity: 0.5;
}

.bg-opacity-75 {
    --bs-bg-opacity: 0.75;
}

.bg-opacity-100 {
    --bs-bg-opacity: 1;
}

.bg-gradient {
    background-image: var(--bs-gradient) !important;
}

.user-select-all {
    user-select: all !important;
}

.user-select-auto {
    user-select: auto !important;
}

.user-select-none {
    user-select: none !important;
}

.pe-none {
    pointer-events: none !important;
}

.pe-auto {
    pointer-events: auto !important;
}

.rounded {
    border-radius: var(--bs-border-radius) !important;
}

.rounded-0 {
    border-radius: 0 !important;
}

.rounded-1 {
    border-radius: var(--bs-border-radius-sm) !important;
}

.rounded-2 {
    border-radius: var(--bs-border-radius) !important;
}

.rounded-3 {
    border-radius: var(--bs-border-radius-lg) !important;
}

.rounded-4 {
    border-radius: var(--bs-border-radius-xl) !important;
}

.rounded-5 {
    border-radius: var(--bs-border-radius-2xl) !important;
}

.rounded-circle {
    border-radius: 50% !important;
}

.rounded-pill {
    border-radius: var(--bs-border-radius-pill) !important;
}

.rounded-top {
    border-top-left-radius: var(--bs-border-radius) !important;
    border-top-right-radius: var(--bs-border-radius) !important;
}

.rounded-end {
    border-top-right-radius: var(--bs-border-radius) !important;
    border-bottom-right-radius: var(--bs-border-radius) !important;
}

.rounded-bottom {
    border-bottom-right-radius: var(--bs-border-radius) !important;
    border-bottom-left-radius: var(--bs-border-radius) !important;
}

.rounded-start {
    border-bottom-left-radius: var(--bs-border-radius) !important;
    border-top-left-radius: var(--bs-border-radius) !important;
}

.visible {
    visibility: visible !important;
}

.invisible {
    visibility: hidden !important;
}

@media (min-width: 480px) {
    .float-xs-start {
        float: left !important;
    }

    .float-xs-end {
        float: right !important;
    }

    .float-xs-none {
        float: none !important;
    }

    .d-xs-inline {
        display: inline !important;
    }

    .d-xs-inline-block {
        display: inline-block !important;
    }

    .d-xs-block {
        display: block !important;
    }

    .d-xs-grid {
        display: grid !important;
    }

    .d-xs-table {
        display: table !important;
    }

    .d-xs-table-row {
        display: table-row !important;
    }

    .d-xs-table-cell {
        display: table-cell !important;
    }

    .d-xs-flex {
        display: flex !important;
    }

    .d-xs-inline-flex {
        display: inline-flex !important;
    }

    .d-xs-none {
        display: none !important;
    }

    .flex-xs-fill {
        flex: 1 1 auto !important;
    }

    .flex-xs-row {
        flex-direction: row !important;
    }

    .flex-xs-column {
        flex-direction: column !important;
    }

    .flex-xs-row-reverse {
        flex-direction: row-reverse !important;
    }

    .flex-xs-column-reverse {
        flex-direction: column-reverse !important;
    }

    .flex-xs-grow-0 {
        flex-grow: 0 !important;
    }

    .flex-xs-grow-1 {
        flex-grow: 1 !important;
    }

    .flex-xs-shrink-0 {
        flex-shrink: 0 !important;
    }

    .flex-xs-shrink-1 {
        flex-shrink: 1 !important;
    }

    .flex-xs-wrap {
        flex-wrap: wrap !important;
    }

    .flex-xs-nowrap {
        flex-wrap: nowrap !important;
    }

    .flex-xs-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }

    .justify-content-xs-start {
        justify-content: flex-start !important;
    }

    .justify-content-xs-end {
        justify-content: flex-end !important;
    }

    .justify-content-xs-center {
        justify-content: center !important;
    }

    .justify-content-xs-between {
        justify-content: space-between !important;
    }

    .justify-content-xs-around {
        justify-content: space-around !important;
    }

    .justify-content-xs-evenly {
        justify-content: space-evenly !important;
    }

    .align-items-xs-start {
        align-items: flex-start !important;
    }

    .align-items-xs-end {
        align-items: flex-end !important;
    }

    .align-items-xs-center {
        align-items: center !important;
    }

    .align-items-xs-baseline {
        align-items: baseline !important;
    }

    .align-items-xs-stretch {
        align-items: stretch !important;
    }

    .align-content-xs-start {
        align-content: flex-start !important;
    }

    .align-content-xs-end {
        align-content: flex-end !important;
    }

    .align-content-xs-center {
        align-content: center !important;
    }

    .align-content-xs-between {
        align-content: space-between !important;
    }

    .align-content-xs-around {
        align-content: space-around !important;
    }

    .align-content-xs-stretch {
        align-content: stretch !important;
    }

    .align-self-xs-auto {
        align-self: auto !important;
    }

    .align-self-xs-start {
        align-self: flex-start !important;
    }

    .align-self-xs-end {
        align-self: flex-end !important;
    }

    .align-self-xs-center {
        align-self: center !important;
    }

    .align-self-xs-baseline {
        align-self: baseline !important;
    }

    .align-self-xs-stretch {
        align-self: stretch !important;
    }

    .order-xs-first {
        order: -1 !important;
    }

    .order-xs-0 {
        order: 0 !important;
    }

    .order-xs-1 {
        order: 1 !important;
    }

    .order-xs-2 {
        order: 2 !important;
    }

    .order-xs-3 {
        order: 3 !important;
    }

    .order-xs-4 {
        order: 4 !important;
    }

    .order-xs-5 {
        order: 5 !important;
    }

    .order-xs-last {
        order: 6 !important;
    }

    .m-xs-0 {
        margin: 0 !important;
    }

    .m-xs-1 {
        margin: 0.25rem !important;
    }

    .m-xs-2 {
        margin: 0.5rem !important;
    }

    .m-xs-3 {
        margin: 1rem !important;
    }

    .m-xs-4 {
        margin: 1.5rem !important;
    }

    .m-xs-5 {
        margin: 3rem !important;
    }

    .m-xs-auto {
        margin: auto !important;
    }

    .mx-xs-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-xs-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-xs-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-xs-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-xs-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-xs-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-xs-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-xs-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-xs-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-xs-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-xs-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-xs-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-xs-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-xs-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-xs-0 {
        margin-top: 0 !important;
    }

    .mt-xs-1 {
        margin-top: 0.25rem !important;
    }

    .mt-xs-2 {
        margin-top: 0.5rem !important;
    }

    .mt-xs-3 {
        margin-top: 1rem !important;
    }

    .mt-xs-4 {
        margin-top: 1.5rem !important;
    }

    .mt-xs-5 {
        margin-top: 3rem !important;
    }

    .mt-xs-auto {
        margin-top: auto !important;
    }

    .me-xs-0 {
        margin-right: 0 !important;
    }

    .me-xs-1 {
        margin-right: 0.25rem !important;
    }

    .me-xs-2 {
        margin-right: 0.5rem !important;
    }

    .me-xs-3 {
        margin-right: 1rem !important;
    }

    .me-xs-4 {
        margin-right: 1.5rem !important;
    }

    .me-xs-5 {
        margin-right: 3rem !important;
    }

    .me-xs-auto {
        margin-right: auto !important;
    }

    .mb-xs-0 {
        margin-bottom: 0 !important;
    }

    .mb-xs-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-xs-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-xs-3 {
        margin-bottom: 1rem !important;
    }

    .mb-xs-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-xs-5 {
        margin-bottom: 3rem !important;
    }

    .mb-xs-auto {
        margin-bottom: auto !important;
    }

    .ms-xs-0 {
        margin-left: 0 !important;
    }

    .ms-xs-1 {
        margin-left: 0.25rem !important;
    }

    .ms-xs-2 {
        margin-left: 0.5rem !important;
    }

    .ms-xs-3 {
        margin-left: 1rem !important;
    }

    .ms-xs-4 {
        margin-left: 1.5rem !important;
    }

    .ms-xs-5 {
        margin-left: 3rem !important;
    }

    .ms-xs-auto {
        margin-left: auto !important;
    }

    .p-xs-0 {
        padding: 0 !important;
    }

    .p-xs-1 {
        padding: 0.25rem !important;
    }

    .p-xs-2 {
        padding: 0.5rem !important;
    }

    .p-xs-3 {
        padding: 1rem !important;
    }

    .p-xs-4 {
        padding: 1.5rem !important;
    }

    .p-xs-5 {
        padding: 3rem !important;
    }

    .px-xs-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-xs-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-xs-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-xs-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-xs-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
    }

    .px-xs-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-xs-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-xs-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-xs-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-xs-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-xs-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-xs-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-xs-0 {
        padding-top: 0 !important;
    }

    .pt-xs-1 {
        padding-top: 0.25rem !important;
    }

    .pt-xs-2 {
        padding-top: 0.5rem !important;
    }

    .pt-xs-3 {
        padding-top: 1rem !important;
    }

    .pt-xs-4 {
        padding-top: 1.5rem !important;
    }

    .pt-xs-5 {
        padding-top: 3rem !important;
    }

    .pe-xs-0 {
        padding-right: 0 !important;
    }

    .pe-xs-1 {
        padding-right: 0.25rem !important;
    }

    .pe-xs-2 {
        padding-right: 0.5rem !important;
    }

    .pe-xs-3 {
        padding-right: 1rem !important;
    }

    .pe-xs-4 {
        padding-right: 1.5rem !important;
    }

    .pe-xs-5 {
        padding-right: 3rem !important;
    }

    .pb-xs-0 {
        padding-bottom: 0 !important;
    }

    .pb-xs-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-xs-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-xs-3 {
        padding-bottom: 1rem !important;
    }

    .pb-xs-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-xs-5 {
        padding-bottom: 3rem !important;
    }

    .ps-xs-0 {
        padding-left: 0 !important;
    }

    .ps-xs-1 {
        padding-left: 0.25rem !important;
    }

    .ps-xs-2 {
        padding-left: 0.5rem !important;
    }

    .ps-xs-3 {
        padding-left: 1rem !important;
    }

    .ps-xs-4 {
        padding-left: 1.5rem !important;
    }

    .ps-xs-5 {
        padding-left: 3rem !important;
    }

    .gap-xs-0 {
        gap: 0 !important;
    }

    .gap-xs-1 {
        gap: 0.25rem !important;
    }

    .gap-xs-2 {
        gap: 0.5rem !important;
    }

    .gap-xs-3 {
        gap: 1rem !important;
    }

    .gap-xs-4 {
        gap: 1.5rem !important;
    }

    .gap-xs-5 {
        gap: 3rem !important;
    }

    .text-xs-start {
        text-align: left !important;
    }

    .text-xs-end {
        text-align: right !important;
    }

    .text-xs-center {
        text-align: center !important;
    }
}

@media (min-width: 576px) {
    .float-sm-start {
        float: left !important;
    }

    .float-sm-end {
        float: right !important;
    }

    .float-sm-none {
        float: none !important;
    }

    .d-sm-inline {
        display: inline !important;
    }

    .d-sm-inline-block {
        display: inline-block !important;
    }

    .d-sm-block {
        display: block !important;
    }

    .d-sm-grid {
        display: grid !important;
    }

    .d-sm-table {
        display: table !important;
    }

    .d-sm-table-row {
        display: table-row !important;
    }

    .d-sm-table-cell {
        display: table-cell !important;
    }

    .d-sm-flex {
        display: flex !important;
    }

    .d-sm-inline-flex {
        display: inline-flex !important;
    }

    .d-sm-none {
        display: none !important;
    }

    .flex-sm-fill {
        flex: 1 1 auto !important;
    }

    .flex-sm-row {
        flex-direction: row !important;
    }

    .flex-sm-column {
        flex-direction: column !important;
    }

    .flex-sm-row-reverse {
        flex-direction: row-reverse !important;
    }

    .flex-sm-column-reverse {
        flex-direction: column-reverse !important;
    }

    .flex-sm-grow-0 {
        flex-grow: 0 !important;
    }

    .flex-sm-grow-1 {
        flex-grow: 1 !important;
    }

    .flex-sm-shrink-0 {
        flex-shrink: 0 !important;
    }

    .flex-sm-shrink-1 {
        flex-shrink: 1 !important;
    }

    .flex-sm-wrap {
        flex-wrap: wrap !important;
    }

    .flex-sm-nowrap {
        flex-wrap: nowrap !important;
    }

    .flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }

    .justify-content-sm-start {
        justify-content: flex-start !important;
    }

    .justify-content-sm-end {
        justify-content: flex-end !important;
    }

    .justify-content-sm-center {
        justify-content: center !important;
    }

    .justify-content-sm-between {
        justify-content: space-between !important;
    }

    .justify-content-sm-around {
        justify-content: space-around !important;
    }

    .justify-content-sm-evenly {
        justify-content: space-evenly !important;
    }

    .align-items-sm-start {
        align-items: flex-start !important;
    }

    .align-items-sm-end {
        align-items: flex-end !important;
    }

    .align-items-sm-center {
        align-items: center !important;
    }

    .align-items-sm-baseline {
        align-items: baseline !important;
    }

    .align-items-sm-stretch {
        align-items: stretch !important;
    }

    .align-content-sm-start {
        align-content: flex-start !important;
    }

    .align-content-sm-end {
        align-content: flex-end !important;
    }

    .align-content-sm-center {
        align-content: center !important;
    }

    .align-content-sm-between {
        align-content: space-between !important;
    }

    .align-content-sm-around {
        align-content: space-around !important;
    }

    .align-content-sm-stretch {
        align-content: stretch !important;
    }

    .align-self-sm-auto {
        align-self: auto !important;
    }

    .align-self-sm-start {
        align-self: flex-start !important;
    }

    .align-self-sm-end {
        align-self: flex-end !important;
    }

    .align-self-sm-center {
        align-self: center !important;
    }

    .align-self-sm-baseline {
        align-self: baseline !important;
    }

    .align-self-sm-stretch {
        align-self: stretch !important;
    }

    .order-sm-first {
        order: -1 !important;
    }

    .order-sm-0 {
        order: 0 !important;
    }

    .order-sm-1 {
        order: 1 !important;
    }

    .order-sm-2 {
        order: 2 !important;
    }

    .order-sm-3 {
        order: 3 !important;
    }

    .order-sm-4 {
        order: 4 !important;
    }

    .order-sm-5 {
        order: 5 !important;
    }

    .order-sm-last {
        order: 6 !important;
    }

    .m-sm-0 {
        margin: 0 !important;
    }

    .m-sm-1 {
        margin: 0.25rem !important;
    }

    .m-sm-2 {
        margin: 0.5rem !important;
    }

    .m-sm-3 {
        margin: 1rem !important;
    }

    .m-sm-4 {
        margin: 1.5rem !important;
    }

    .m-sm-5 {
        margin: 3rem !important;
    }

    .m-sm-auto {
        margin: auto !important;
    }

    .mx-sm-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-sm-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-sm-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-sm-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-sm-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-sm-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-sm-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-sm-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-sm-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-sm-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-sm-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-sm-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-sm-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-sm-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-sm-0 {
        margin-top: 0 !important;
    }

    .mt-sm-1 {
        margin-top: 0.25rem !important;
    }

    .mt-sm-2 {
        margin-top: 0.5rem !important;
    }

    .mt-sm-3 {
        margin-top: 1rem !important;
    }

    .mt-sm-4 {
        margin-top: 1.5rem !important;
    }

    .mt-sm-5 {
        margin-top: 3rem !important;
    }

    .mt-sm-auto {
        margin-top: auto !important;
    }

    .me-sm-0 {
        margin-right: 0 !important;
    }

    .me-sm-1 {
        margin-right: 0.25rem !important;
    }

    .me-sm-2 {
        margin-right: 0.5rem !important;
    }

    .me-sm-3 {
        margin-right: 1rem !important;
    }

    .me-sm-4 {
        margin-right: 1.5rem !important;
    }

    .me-sm-5 {
        margin-right: 3rem !important;
    }

    .me-sm-auto {
        margin-right: auto !important;
    }

    .mb-sm-0 {
        margin-bottom: 0 !important;
    }

    .mb-sm-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-sm-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-sm-3 {
        margin-bottom: 1rem !important;
    }

    .mb-sm-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-sm-5 {
        margin-bottom: 3rem !important;
    }

    .mb-sm-auto {
        margin-bottom: auto !important;
    }

    .ms-sm-0 {
        margin-left: 0 !important;
    }

    .ms-sm-1 {
        margin-left: 0.25rem !important;
    }

    .ms-sm-2 {
        margin-left: 0.5rem !important;
    }

    .ms-sm-3 {
        margin-left: 1rem !important;
    }

    .ms-sm-4 {
        margin-left: 1.5rem !important;
    }

    .ms-sm-5 {
        margin-left: 3rem !important;
    }

    .ms-sm-auto {
        margin-left: auto !important;
    }

    .p-sm-0 {
        padding: 0 !important;
    }

    .p-sm-1 {
        padding: 0.25rem !important;
    }

    .p-sm-2 {
        padding: 0.5rem !important;
    }

    .p-sm-3 {
        padding: 1rem !important;
    }

    .p-sm-4 {
        padding: 1.5rem !important;
    }

    .p-sm-5 {
        padding: 3rem !important;
    }

    .px-sm-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-sm-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-sm-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-sm-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-sm-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
    }

    .px-sm-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-sm-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-sm-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-sm-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-sm-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-sm-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-sm-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-sm-0 {
        padding-top: 0 !important;
    }

    .pt-sm-1 {
        padding-top: 0.25rem !important;
    }

    .pt-sm-2 {
        padding-top: 0.5rem !important;
    }

    .pt-sm-3 {
        padding-top: 1rem !important;
    }

    .pt-sm-4 {
        padding-top: 1.5rem !important;
    }

    .pt-sm-5 {
        padding-top: 3rem !important;
    }

    .pe-sm-0 {
        padding-right: 0 !important;
    }

    .pe-sm-1 {
        padding-right: 0.25rem !important;
    }

    .pe-sm-2 {
        padding-right: 0.5rem !important;
    }

    .pe-sm-3 {
        padding-right: 1rem !important;
    }

    .pe-sm-4 {
        padding-right: 1.5rem !important;
    }

    .pe-sm-5 {
        padding-right: 3rem !important;
    }

    .pb-sm-0 {
        padding-bottom: 0 !important;
    }

    .pb-sm-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-sm-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-sm-3 {
        padding-bottom: 1rem !important;
    }

    .pb-sm-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-sm-5 {
        padding-bottom: 3rem !important;
    }

    .ps-sm-0 {
        padding-left: 0 !important;
    }

    .ps-sm-1 {
        padding-left: 0.25rem !important;
    }

    .ps-sm-2 {
        padding-left: 0.5rem !important;
    }

    .ps-sm-3 {
        padding-left: 1rem !important;
    }

    .ps-sm-4 {
        padding-left: 1.5rem !important;
    }

    .ps-sm-5 {
        padding-left: 3rem !important;
    }

    .gap-sm-0 {
        gap: 0 !important;
    }

    .gap-sm-1 {
        gap: 0.25rem !important;
    }

    .gap-sm-2 {
        gap: 0.5rem !important;
    }

    .gap-sm-3 {
        gap: 1rem !important;
    }

    .gap-sm-4 {
        gap: 1.5rem !important;
    }

    .gap-sm-5 {
        gap: 3rem !important;
    }

    .text-sm-start {
        text-align: left !important;
    }

    .text-sm-end {
        text-align: right !important;
    }

    .text-sm-center {
        text-align: center !important;
    }
}

@media (min-width: 768px) {
    .float-md-start {
        float: left !important;
    }

    .float-md-end {
        float: right !important;
    }

    .float-md-none {
        float: none !important;
    }

    .d-md-inline {
        display: inline !important;
    }

    .d-md-inline-block {
        display: inline-block !important;
    }

    .d-md-block {
        display: block !important;
    }

    .d-md-grid {
        display: grid !important;
    }

    .d-md-table {
        display: table !important;
    }

    .d-md-table-row {
        display: table-row !important;
    }

    .d-md-table-cell {
        display: table-cell !important;
    }

    .d-md-flex {
        display: flex !important;
    }

    .d-md-inline-flex {
        display: inline-flex !important;
    }

    .d-md-none {
        display: none !important;
    }

    .flex-md-fill {
        flex: 1 1 auto !important;
    }

    .flex-md-row {
        flex-direction: row !important;
    }

    .flex-md-column {
        flex-direction: column !important;
    }

    .flex-md-row-reverse {
        flex-direction: row-reverse !important;
    }

    .flex-md-column-reverse {
        flex-direction: column-reverse !important;
    }

    .flex-md-grow-0 {
        flex-grow: 0 !important;
    }

    .flex-md-grow-1 {
        flex-grow: 1 !important;
    }

    .flex-md-shrink-0 {
        flex-shrink: 0 !important;
    }

    .flex-md-shrink-1 {
        flex-shrink: 1 !important;
    }

    .flex-md-wrap {
        flex-wrap: wrap !important;
    }

    .flex-md-nowrap {
        flex-wrap: nowrap !important;
    }

    .flex-md-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }

    .justify-content-md-start {
        justify-content: flex-start !important;
    }

    .justify-content-md-end {
        justify-content: flex-end !important;
    }

    .justify-content-md-center {
        justify-content: center !important;
    }

    .justify-content-md-between {
        justify-content: space-between !important;
    }

    .justify-content-md-around {
        justify-content: space-around !important;
    }

    .justify-content-md-evenly {
        justify-content: space-evenly !important;
    }

    .align-items-md-start {
        align-items: flex-start !important;
    }

    .align-items-md-end {
        align-items: flex-end !important;
    }

    .align-items-md-center {
        align-items: center !important;
    }

    .align-items-md-baseline {
        align-items: baseline !important;
    }

    .align-items-md-stretch {
        align-items: stretch !important;
    }

    .align-content-md-start {
        align-content: flex-start !important;
    }

    .align-content-md-end {
        align-content: flex-end !important;
    }

    .align-content-md-center {
        align-content: center !important;
    }

    .align-content-md-between {
        align-content: space-between !important;
    }

    .align-content-md-around {
        align-content: space-around !important;
    }

    .align-content-md-stretch {
        align-content: stretch !important;
    }

    .align-self-md-auto {
        align-self: auto !important;
    }

    .align-self-md-start {
        align-self: flex-start !important;
    }

    .align-self-md-end {
        align-self: flex-end !important;
    }

    .align-self-md-center {
        align-self: center !important;
    }

    .align-self-md-baseline {
        align-self: baseline !important;
    }

    .align-self-md-stretch {
        align-self: stretch !important;
    }

    .order-md-first {
        order: -1 !important;
    }

    .order-md-0 {
        order: 0 !important;
    }

    .order-md-1 {
        order: 1 !important;
    }

    .order-md-2 {
        order: 2 !important;
    }

    .order-md-3 {
        order: 3 !important;
    }

    .order-md-4 {
        order: 4 !important;
    }

    .order-md-5 {
        order: 5 !important;
    }

    .order-md-last {
        order: 6 !important;
    }

    .m-md-0 {
        margin: 0 !important;
    }

    .m-md-1 {
        margin: 0.25rem !important;
    }

    .m-md-2 {
        margin: 0.5rem !important;
    }

    .m-md-3 {
        margin: 1rem !important;
    }

    .m-md-4 {
        margin: 1.5rem !important;
    }

    .m-md-5 {
        margin: 3rem !important;
    }

    .m-md-auto {
        margin: auto !important;
    }

    .mx-md-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-md-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-md-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-md-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-md-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-md-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-md-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-md-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-md-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-md-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-md-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-md-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-md-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-md-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-md-0 {
        margin-top: 0 !important;
    }

    .mt-md-1 {
        margin-top: 0.25rem !important;
    }

    .mt-md-2 {
        margin-top: 0.5rem !important;
    }

    .mt-md-3 {
        margin-top: 1rem !important;
    }

    .mt-md-4 {
        margin-top: 1.5rem !important;
    }

    .mt-md-5 {
        margin-top: 3rem !important;
    }

    .mt-md-auto {
        margin-top: auto !important;
    }

    .me-md-0 {
        margin-right: 0 !important;
    }

    .me-md-1 {
        margin-right: 0.25rem !important;
    }

    .me-md-2 {
        margin-right: 0.5rem !important;
    }

    .me-md-3 {
        margin-right: 1rem !important;
    }

    .me-md-4 {
        margin-right: 1.5rem !important;
    }

    .me-md-5 {
        margin-right: 3rem !important;
    }

    .me-md-auto {
        margin-right: auto !important;
    }

    .mb-md-0 {
        margin-bottom: 0 !important;
    }

    .mb-md-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-md-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-md-3 {
        margin-bottom: 1rem !important;
    }

    .mb-md-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-md-5 {
        margin-bottom: 3rem !important;
    }

    .mb-md-auto {
        margin-bottom: auto !important;
    }

    .ms-md-0 {
        margin-left: 0 !important;
    }

    .ms-md-1 {
        margin-left: 0.25rem !important;
    }

    .ms-md-2 {
        margin-left: 0.5rem !important;
    }

    .ms-md-3 {
        margin-left: 1rem !important;
    }

    .ms-md-4 {
        margin-left: 1.5rem !important;
    }

    .ms-md-5 {
        margin-left: 3rem !important;
    }

    .ms-md-auto {
        margin-left: auto !important;
    }

    .p-md-0 {
        padding: 0 !important;
    }

    .p-md-1 {
        padding: 0.25rem !important;
    }

    .p-md-2 {
        padding: 0.5rem !important;
    }

    .p-md-3 {
        padding: 1rem !important;
    }

    .p-md-4 {
        padding: 1.5rem !important;
    }

    .p-md-5 {
        padding: 3rem !important;
    }

    .px-md-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-md-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-md-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-md-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-md-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
    }

    .px-md-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-md-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-md-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-md-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-md-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-md-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-md-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-md-0 {
        padding-top: 0 !important;
    }

    .pt-md-1 {
        padding-top: 0.25rem !important;
    }

    .pt-md-2 {
        padding-top: 0.5rem !important;
    }

    .pt-md-3 {
        padding-top: 1rem !important;
    }

    .pt-md-4 {
        padding-top: 1.5rem !important;
    }

    .pt-md-5 {
        padding-top: 3rem !important;
    }

    .pe-md-0 {
        padding-right: 0 !important;
    }

    .pe-md-1 {
        padding-right: 0.25rem !important;
    }

    .pe-md-2 {
        padding-right: 0.5rem !important;
    }

    .pe-md-3 {
        padding-right: 1rem !important;
    }

    .pe-md-4 {
        padding-right: 1.5rem !important;
    }

    .pe-md-5 {
        padding-right: 3rem !important;
    }

    .pb-md-0 {
        padding-bottom: 0 !important;
    }

    .pb-md-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-md-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-md-3 {
        padding-bottom: 1rem !important;
    }

    .pb-md-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-md-5 {
        padding-bottom: 3rem !important;
    }

    .ps-md-0 {
        padding-left: 0 !important;
    }

    .ps-md-1 {
        padding-left: 0.25rem !important;
    }

    .ps-md-2 {
        padding-left: 0.5rem !important;
    }

    .ps-md-3 {
        padding-left: 1rem !important;
    }

    .ps-md-4 {
        padding-left: 1.5rem !important;
    }

    .ps-md-5 {
        padding-left: 3rem !important;
    }

    .gap-md-0 {
        gap: 0 !important;
    }

    .gap-md-1 {
        gap: 0.25rem !important;
    }

    .gap-md-2 {
        gap: 0.5rem !important;
    }

    .gap-md-3 {
        gap: 1rem !important;
    }

    .gap-md-4 {
        gap: 1.5rem !important;
    }

    .gap-md-5 {
        gap: 3rem !important;
    }

    .text-md-start {
        text-align: left !important;
    }

    .text-md-end {
        text-align: right !important;
    }

    .text-md-center {
        text-align: center !important;
    }
}

@media (min-width: 992px) {
    .float-lg-start {
        float: left !important;
    }

    .float-lg-end {
        float: right !important;
    }

    .float-lg-none {
        float: none !important;
    }

    .d-lg-inline {
        display: inline !important;
    }

    .d-lg-inline-block {
        display: inline-block !important;
    }

    .d-lg-block {
        display: block !important;
    }

    .d-lg-grid {
        display: grid !important;
    }

    .d-lg-table {
        display: table !important;
    }

    .d-lg-table-row {
        display: table-row !important;
    }

    .d-lg-table-cell {
        display: table-cell !important;
    }

    .d-lg-flex {
        display: flex !important;
    }

    .d-lg-inline-flex {
        display: inline-flex !important;
    }

    .d-lg-none {
        display: none !important;
    }

    .flex-lg-fill {
        flex: 1 1 auto !important;
    }

    .flex-lg-row {
        flex-direction: row !important;
    }

    .flex-lg-column {
        flex-direction: column !important;
    }

    .flex-lg-row-reverse {
        flex-direction: row-reverse !important;
    }

    .flex-lg-column-reverse {
        flex-direction: column-reverse !important;
    }

    .flex-lg-grow-0 {
        flex-grow: 0 !important;
    }

    .flex-lg-grow-1 {
        flex-grow: 1 !important;
    }

    .flex-lg-shrink-0 {
        flex-shrink: 0 !important;
    }

    .flex-lg-shrink-1 {
        flex-shrink: 1 !important;
    }

    .flex-lg-wrap {
        flex-wrap: wrap !important;
    }

    .flex-lg-nowrap {
        flex-wrap: nowrap !important;
    }

    .flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }

    .justify-content-lg-start {
        justify-content: flex-start !important;
    }

    .justify-content-lg-end {
        justify-content: flex-end !important;
    }

    .justify-content-lg-center {
        justify-content: center !important;
    }

    .justify-content-lg-between {
        justify-content: space-between !important;
    }

    .justify-content-lg-around {
        justify-content: space-around !important;
    }

    .justify-content-lg-evenly {
        justify-content: space-evenly !important;
    }

    .align-items-lg-start {
        align-items: flex-start !important;
    }

    .align-items-lg-end {
        align-items: flex-end !important;
    }

    .align-items-lg-center {
        align-items: center !important;
    }

    .align-items-lg-baseline {
        align-items: baseline !important;
    }

    .align-items-lg-stretch {
        align-items: stretch !important;
    }

    .align-content-lg-start {
        align-content: flex-start !important;
    }

    .align-content-lg-end {
        align-content: flex-end !important;
    }

    .align-content-lg-center {
        align-content: center !important;
    }

    .align-content-lg-between {
        align-content: space-between !important;
    }

    .align-content-lg-around {
        align-content: space-around !important;
    }

    .align-content-lg-stretch {
        align-content: stretch !important;
    }

    .align-self-lg-auto {
        align-self: auto !important;
    }

    .align-self-lg-start {
        align-self: flex-start !important;
    }

    .align-self-lg-end {
        align-self: flex-end !important;
    }

    .align-self-lg-center {
        align-self: center !important;
    }

    .align-self-lg-baseline {
        align-self: baseline !important;
    }

    .align-self-lg-stretch {
        align-self: stretch !important;
    }

    .order-lg-first {
        order: -1 !important;
    }

    .order-lg-0 {
        order: 0 !important;
    }

    .order-lg-1 {
        order: 1 !important;
    }

    .order-lg-2 {
        order: 2 !important;
    }

    .order-lg-3 {
        order: 3 !important;
    }

    .order-lg-4 {
        order: 4 !important;
    }

    .order-lg-5 {
        order: 5 !important;
    }

    .order-lg-last {
        order: 6 !important;
    }

    .m-lg-0 {
        margin: 0 !important;
    }

    .m-lg-1 {
        margin: 0.25rem !important;
    }

    .m-lg-2 {
        margin: 0.5rem !important;
    }

    .m-lg-3 {
        margin: 1rem !important;
    }

    .m-lg-4 {
        margin: 1.5rem !important;
    }

    .m-lg-5 {
        margin: 3rem !important;
    }

    .m-lg-auto {
        margin: auto !important;
    }

    .mx-lg-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-lg-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-lg-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-lg-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-lg-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-lg-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-lg-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-lg-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-lg-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-lg-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-lg-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-lg-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-lg-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-lg-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-lg-0 {
        margin-top: 0 !important;
    }

    .mt-lg-1 {
        margin-top: 0.25rem !important;
    }

    .mt-lg-2 {
        margin-top: 0.5rem !important;
    }

    .mt-lg-3 {
        margin-top: 1rem !important;
    }

    .mt-lg-4 {
        margin-top: 1.5rem !important;
    }

    .mt-lg-5 {
        margin-top: 3rem !important;
    }

    .mt-lg-auto {
        margin-top: auto !important;
    }

    .me-lg-0 {
        margin-right: 0 !important;
    }

    .me-lg-1 {
        margin-right: 0.25rem !important;
    }

    .me-lg-2 {
        margin-right: 0.5rem !important;
    }

    .me-lg-3 {
        margin-right: 1rem !important;
    }

    .me-lg-4 {
        margin-right: 1.5rem !important;
    }

    .me-lg-5 {
        margin-right: 3rem !important;
    }

    .me-lg-auto {
        margin-right: auto !important;
    }

    .mb-lg-0 {
        margin-bottom: 0 !important;
    }

    .mb-lg-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-lg-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-lg-3 {
        margin-bottom: 1rem !important;
    }

    .mb-lg-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-lg-5 {
        margin-bottom: 3rem !important;
    }

    .mb-lg-auto {
        margin-bottom: auto !important;
    }

    .ms-lg-0 {
        margin-left: 0 !important;
    }

    .ms-lg-1 {
        margin-left: 0.25rem !important;
    }

    .ms-lg-2 {
        margin-left: 0.5rem !important;
    }

    .ms-lg-3 {
        margin-left: 1rem !important;
    }

    .ms-lg-4 {
        margin-left: 1.5rem !important;
    }

    .ms-lg-5 {
        margin-left: 3rem !important;
    }

    .ms-lg-auto {
        margin-left: auto !important;
    }

    .p-lg-0 {
        padding: 0 !important;
    }

    .p-lg-1 {
        padding: 0.25rem !important;
    }

    .p-lg-2 {
        padding: 0.5rem !important;
    }

    .p-lg-3 {
        padding: 1rem !important;
    }

    .p-lg-4 {
        padding: 1.5rem !important;
    }

    .p-lg-5 {
        padding: 3rem !important;
    }

    .px-lg-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-lg-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-lg-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-lg-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-lg-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
    }

    .px-lg-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-lg-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-lg-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-lg-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-lg-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-lg-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-lg-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-lg-0 {
        padding-top: 0 !important;
    }

    .pt-lg-1 {
        padding-top: 0.25rem !important;
    }

    .pt-lg-2 {
        padding-top: 0.5rem !important;
    }

    .pt-lg-3 {
        padding-top: 1rem !important;
    }

    .pt-lg-4 {
        padding-top: 1.5rem !important;
    }

    .pt-lg-5 {
        padding-top: 3rem !important;
    }

    .pe-lg-0 {
        padding-right: 0 !important;
    }

    .pe-lg-1 {
        padding-right: 0.25rem !important;
    }

    .pe-lg-2 {
        padding-right: 0.5rem !important;
    }

    .pe-lg-3 {
        padding-right: 1rem !important;
    }

    .pe-lg-4 {
        padding-right: 1.5rem !important;
    }

    .pe-lg-5 {
        padding-right: 3rem !important;
    }

    .pb-lg-0 {
        padding-bottom: 0 !important;
    }

    .pb-lg-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-lg-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-lg-3 {
        padding-bottom: 1rem !important;
    }

    .pb-lg-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-lg-5 {
        padding-bottom: 3rem !important;
    }

    .ps-lg-0 {
        padding-left: 0 !important;
    }

    .ps-lg-1 {
        padding-left: 0.25rem !important;
    }

    .ps-lg-2 {
        padding-left: 0.5rem !important;
    }

    .ps-lg-3 {
        padding-left: 1rem !important;
    }

    .ps-lg-4 {
        padding-left: 1.5rem !important;
    }

    .ps-lg-5 {
        padding-left: 3rem !important;
    }

    .gap-lg-0 {
        gap: 0 !important;
    }

    .gap-lg-1 {
        gap: 0.25rem !important;
    }

    .gap-lg-2 {
        gap: 0.5rem !important;
    }

    .gap-lg-3 {
        gap: 1rem !important;
    }

    .gap-lg-4 {
        gap: 1.5rem !important;
    }

    .gap-lg-5 {
        gap: 3rem !important;
    }

    .text-lg-start {
        text-align: left !important;
    }

    .text-lg-end {
        text-align: right !important;
    }

    .text-lg-center {
        text-align: center !important;
    }
}

@media (min-width: 1200px) {
    .float-xl-start {
        float: left !important;
    }

    .float-xl-end {
        float: right !important;
    }

    .float-xl-none {
        float: none !important;
    }

    .d-xl-inline {
        display: inline !important;
    }

    .d-xl-inline-block {
        display: inline-block !important;
    }

    .d-xl-block {
        display: block !important;
    }

    .d-xl-grid {
        display: grid !important;
    }

    .d-xl-table {
        display: table !important;
    }

    .d-xl-table-row {
        display: table-row !important;
    }

    .d-xl-table-cell {
        display: table-cell !important;
    }

    .d-xl-flex {
        display: flex !important;
    }

    .d-xl-inline-flex {
        display: inline-flex !important;
    }

    .d-xl-none {
        display: none !important;
    }

    .flex-xl-fill {
        flex: 1 1 auto !important;
    }

    .flex-xl-row {
        flex-direction: row !important;
    }

    .flex-xl-column {
        flex-direction: column !important;
    }

    .flex-xl-row-reverse {
        flex-direction: row-reverse !important;
    }

    .flex-xl-column-reverse {
        flex-direction: column-reverse !important;
    }

    .flex-xl-grow-0 {
        flex-grow: 0 !important;
    }

    .flex-xl-grow-1 {
        flex-grow: 1 !important;
    }

    .flex-xl-shrink-0 {
        flex-shrink: 0 !important;
    }

    .flex-xl-shrink-1 {
        flex-shrink: 1 !important;
    }

    .flex-xl-wrap {
        flex-wrap: wrap !important;
    }

    .flex-xl-nowrap {
        flex-wrap: nowrap !important;
    }

    .flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }

    .justify-content-xl-start {
        justify-content: flex-start !important;
    }

    .justify-content-xl-end {
        justify-content: flex-end !important;
    }

    .justify-content-xl-center {
        justify-content: center !important;
    }

    .justify-content-xl-between {
        justify-content: space-between !important;
    }

    .justify-content-xl-around {
        justify-content: space-around !important;
    }

    .justify-content-xl-evenly {
        justify-content: space-evenly !important;
    }

    .align-items-xl-start {
        align-items: flex-start !important;
    }

    .align-items-xl-end {
        align-items: flex-end !important;
    }

    .align-items-xl-center {
        align-items: center !important;
    }

    .align-items-xl-baseline {
        align-items: baseline !important;
    }

    .align-items-xl-stretch {
        align-items: stretch !important;
    }

    .align-content-xl-start {
        align-content: flex-start !important;
    }

    .align-content-xl-end {
        align-content: flex-end !important;
    }

    .align-content-xl-center {
        align-content: center !important;
    }

    .align-content-xl-between {
        align-content: space-between !important;
    }

    .align-content-xl-around {
        align-content: space-around !important;
    }

    .align-content-xl-stretch {
        align-content: stretch !important;
    }

    .align-self-xl-auto {
        align-self: auto !important;
    }

    .align-self-xl-start {
        align-self: flex-start !important;
    }

    .align-self-xl-end {
        align-self: flex-end !important;
    }

    .align-self-xl-center {
        align-self: center !important;
    }

    .align-self-xl-baseline {
        align-self: baseline !important;
    }

    .align-self-xl-stretch {
        align-self: stretch !important;
    }

    .order-xl-first {
        order: -1 !important;
    }

    .order-xl-0 {
        order: 0 !important;
    }

    .order-xl-1 {
        order: 1 !important;
    }

    .order-xl-2 {
        order: 2 !important;
    }

    .order-xl-3 {
        order: 3 !important;
    }

    .order-xl-4 {
        order: 4 !important;
    }

    .order-xl-5 {
        order: 5 !important;
    }

    .order-xl-last {
        order: 6 !important;
    }

    .m-xl-0 {
        margin: 0 !important;
    }

    .m-xl-1 {
        margin: 0.25rem !important;
    }

    .m-xl-2 {
        margin: 0.5rem !important;
    }

    .m-xl-3 {
        margin: 1rem !important;
    }

    .m-xl-4 {
        margin: 1.5rem !important;
    }

    .m-xl-5 {
        margin: 3rem !important;
    }

    .m-xl-auto {
        margin: auto !important;
    }

    .mx-xl-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-xl-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-xl-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-xl-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-xl-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-xl-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-xl-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-xl-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-xl-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-xl-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-xl-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-xl-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-xl-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-xl-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-xl-0 {
        margin-top: 0 !important;
    }

    .mt-xl-1 {
        margin-top: 0.25rem !important;
    }

    .mt-xl-2 {
        margin-top: 0.5rem !important;
    }

    .mt-xl-3 {
        margin-top: 1rem !important;
    }

    .mt-xl-4 {
        margin-top: 1.5rem !important;
    }

    .mt-xl-5 {
        margin-top: 3rem !important;
    }

    .mt-xl-auto {
        margin-top: auto !important;
    }

    .me-xl-0 {
        margin-right: 0 !important;
    }

    .me-xl-1 {
        margin-right: 0.25rem !important;
    }

    .me-xl-2 {
        margin-right: 0.5rem !important;
    }

    .me-xl-3 {
        margin-right: 1rem !important;
    }

    .me-xl-4 {
        margin-right: 1.5rem !important;
    }

    .me-xl-5 {
        margin-right: 3rem !important;
    }

    .me-xl-auto {
        margin-right: auto !important;
    }

    .mb-xl-0 {
        margin-bottom: 0 !important;
    }

    .mb-xl-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-xl-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-xl-3 {
        margin-bottom: 1rem !important;
    }

    .mb-xl-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-xl-5 {
        margin-bottom: 3rem !important;
    }

    .mb-xl-auto {
        margin-bottom: auto !important;
    }

    .ms-xl-0 {
        margin-left: 0 !important;
    }

    .ms-xl-1 {
        margin-left: 0.25rem !important;
    }

    .ms-xl-2 {
        margin-left: 0.5rem !important;
    }

    .ms-xl-3 {
        margin-left: 1rem !important;
    }

    .ms-xl-4 {
        margin-left: 1.5rem !important;
    }

    .ms-xl-5 {
        margin-left: 3rem !important;
    }

    .ms-xl-auto {
        margin-left: auto !important;
    }

    .p-xl-0 {
        padding: 0 !important;
    }

    .p-xl-1 {
        padding: 0.25rem !important;
    }

    .p-xl-2 {
        padding: 0.5rem !important;
    }

    .p-xl-3 {
        padding: 1rem !important;
    }

    .p-xl-4 {
        padding: 1.5rem !important;
    }

    .p-xl-5 {
        padding: 3rem !important;
    }

    .px-xl-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-xl-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-xl-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-xl-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-xl-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
    }

    .px-xl-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-xl-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-xl-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-xl-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-xl-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-xl-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-xl-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-xl-0 {
        padding-top: 0 !important;
    }

    .pt-xl-1 {
        padding-top: 0.25rem !important;
    }

    .pt-xl-2 {
        padding-top: 0.5rem !important;
    }

    .pt-xl-3 {
        padding-top: 1rem !important;
    }

    .pt-xl-4 {
        padding-top: 1.5rem !important;
    }

    .pt-xl-5 {
        padding-top: 3rem !important;
    }

    .pe-xl-0 {
        padding-right: 0 !important;
    }

    .pe-xl-1 {
        padding-right: 0.25rem !important;
    }

    .pe-xl-2 {
        padding-right: 0.5rem !important;
    }

    .pe-xl-3 {
        padding-right: 1rem !important;
    }

    .pe-xl-4 {
        padding-right: 1.5rem !important;
    }

    .pe-xl-5 {
        padding-right: 3rem !important;
    }

    .pb-xl-0 {
        padding-bottom: 0 !important;
    }

    .pb-xl-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-xl-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-xl-3 {
        padding-bottom: 1rem !important;
    }

    .pb-xl-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-xl-5 {
        padding-bottom: 3rem !important;
    }

    .ps-xl-0 {
        padding-left: 0 !important;
    }

    .ps-xl-1 {
        padding-left: 0.25rem !important;
    }

    .ps-xl-2 {
        padding-left: 0.5rem !important;
    }

    .ps-xl-3 {
        padding-left: 1rem !important;
    }

    .ps-xl-4 {
        padding-left: 1.5rem !important;
    }

    .ps-xl-5 {
        padding-left: 3rem !important;
    }

    .gap-xl-0 {
        gap: 0 !important;
    }

    .gap-xl-1 {
        gap: 0.25rem !important;
    }

    .gap-xl-2 {
        gap: 0.5rem !important;
    }

    .gap-xl-3 {
        gap: 1rem !important;
    }

    .gap-xl-4 {
        gap: 1.5rem !important;
    }

    .gap-xl-5 {
        gap: 3rem !important;
    }

    .text-xl-start {
        text-align: left !important;
    }

    .text-xl-end {
        text-align: right !important;
    }

    .text-xl-center {
        text-align: center !important;
    }
}

@media (min-width: 1600px) {
    .float-xxl-start {
        float: left !important;
    }

    .float-xxl-end {
        float: right !important;
    }

    .float-xxl-none {
        float: none !important;
    }

    .d-xxl-inline {
        display: inline !important;
    }

    .d-xxl-inline-block {
        display: inline-block !important;
    }

    .d-xxl-block {
        display: block !important;
    }

    .d-xxl-grid {
        display: grid !important;
    }

    .d-xxl-table {
        display: table !important;
    }

    .d-xxl-table-row {
        display: table-row !important;
    }

    .d-xxl-table-cell {
        display: table-cell !important;
    }

    .d-xxl-flex {
        display: flex !important;
    }

    .d-xxl-inline-flex {
        display: inline-flex !important;
    }

    .d-xxl-none {
        display: none !important;
    }

    .flex-xxl-fill {
        flex: 1 1 auto !important;
    }

    .flex-xxl-row {
        flex-direction: row !important;
    }

    .flex-xxl-column {
        flex-direction: column !important;
    }

    .flex-xxl-row-reverse {
        flex-direction: row-reverse !important;
    }

    .flex-xxl-column-reverse {
        flex-direction: column-reverse !important;
    }

    .flex-xxl-grow-0 {
        flex-grow: 0 !important;
    }

    .flex-xxl-grow-1 {
        flex-grow: 1 !important;
    }

    .flex-xxl-shrink-0 {
        flex-shrink: 0 !important;
    }

    .flex-xxl-shrink-1 {
        flex-shrink: 1 !important;
    }

    .flex-xxl-wrap {
        flex-wrap: wrap !important;
    }

    .flex-xxl-nowrap {
        flex-wrap: nowrap !important;
    }

    .flex-xxl-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }

    .justify-content-xxl-start {
        justify-content: flex-start !important;
    }

    .justify-content-xxl-end {
        justify-content: flex-end !important;
    }

    .justify-content-xxl-center {
        justify-content: center !important;
    }

    .justify-content-xxl-between {
        justify-content: space-between !important;
    }

    .justify-content-xxl-around {
        justify-content: space-around !important;
    }

    .justify-content-xxl-evenly {
        justify-content: space-evenly !important;
    }

    .align-items-xxl-start {
        align-items: flex-start !important;
    }

    .align-items-xxl-end {
        align-items: flex-end !important;
    }

    .align-items-xxl-center {
        align-items: center !important;
    }

    .align-items-xxl-baseline {
        align-items: baseline !important;
    }

    .align-items-xxl-stretch {
        align-items: stretch !important;
    }

    .align-content-xxl-start {
        align-content: flex-start !important;
    }

    .align-content-xxl-end {
        align-content: flex-end !important;
    }

    .align-content-xxl-center {
        align-content: center !important;
    }

    .align-content-xxl-between {
        align-content: space-between !important;
    }

    .align-content-xxl-around {
        align-content: space-around !important;
    }

    .align-content-xxl-stretch {
        align-content: stretch !important;
    }

    .align-self-xxl-auto {
        align-self: auto !important;
    }

    .align-self-xxl-start {
        align-self: flex-start !important;
    }

    .align-self-xxl-end {
        align-self: flex-end !important;
    }

    .align-self-xxl-center {
        align-self: center !important;
    }

    .align-self-xxl-baseline {
        align-self: baseline !important;
    }

    .align-self-xxl-stretch {
        align-self: stretch !important;
    }

    .order-xxl-first {
        order: -1 !important;
    }

    .order-xxl-0 {
        order: 0 !important;
    }

    .order-xxl-1 {
        order: 1 !important;
    }

    .order-xxl-2 {
        order: 2 !important;
    }

    .order-xxl-3 {
        order: 3 !important;
    }

    .order-xxl-4 {
        order: 4 !important;
    }

    .order-xxl-5 {
        order: 5 !important;
    }

    .order-xxl-last {
        order: 6 !important;
    }

    .m-xxl-0 {
        margin: 0 !important;
    }

    .m-xxl-1 {
        margin: 0.25rem !important;
    }

    .m-xxl-2 {
        margin: 0.5rem !important;
    }

    .m-xxl-3 {
        margin: 1rem !important;
    }

    .m-xxl-4 {
        margin: 1.5rem !important;
    }

    .m-xxl-5 {
        margin: 3rem !important;
    }

    .m-xxl-auto {
        margin: auto !important;
    }

    .mx-xxl-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-xxl-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-xxl-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-xxl-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-xxl-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-xxl-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-xxl-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-xxl-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-xxl-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-xxl-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-xxl-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-xxl-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-xxl-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-xxl-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-xxl-0 {
        margin-top: 0 !important;
    }

    .mt-xxl-1 {
        margin-top: 0.25rem !important;
    }

    .mt-xxl-2 {
        margin-top: 0.5rem !important;
    }

    .mt-xxl-3 {
        margin-top: 1rem !important;
    }

    .mt-xxl-4 {
        margin-top: 1.5rem !important;
    }

    .mt-xxl-5 {
        margin-top: 3rem !important;
    }

    .mt-xxl-auto {
        margin-top: auto !important;
    }

    .me-xxl-0 {
        margin-right: 0 !important;
    }

    .me-xxl-1 {
        margin-right: 0.25rem !important;
    }

    .me-xxl-2 {
        margin-right: 0.5rem !important;
    }

    .me-xxl-3 {
        margin-right: 1rem !important;
    }

    .me-xxl-4 {
        margin-right: 1.5rem !important;
    }

    .me-xxl-5 {
        margin-right: 3rem !important;
    }

    .me-xxl-auto {
        margin-right: auto !important;
    }

    .mb-xxl-0 {
        margin-bottom: 0 !important;
    }

    .mb-xxl-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-xxl-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-xxl-3 {
        margin-bottom: 1rem !important;
    }

    .mb-xxl-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-xxl-5 {
        margin-bottom: 3rem !important;
    }

    .mb-xxl-auto {
        margin-bottom: auto !important;
    }

    .ms-xxl-0 {
        margin-left: 0 !important;
    }

    .ms-xxl-1 {
        margin-left: 0.25rem !important;
    }

    .ms-xxl-2 {
        margin-left: 0.5rem !important;
    }

    .ms-xxl-3 {
        margin-left: 1rem !important;
    }

    .ms-xxl-4 {
        margin-left: 1.5rem !important;
    }

    .ms-xxl-5 {
        margin-left: 3rem !important;
    }

    .ms-xxl-auto {
        margin-left: auto !important;
    }

    .p-xxl-0 {
        padding: 0 !important;
    }

    .p-xxl-1 {
        padding: 0.25rem !important;
    }

    .p-xxl-2 {
        padding: 0.5rem !important;
    }

    .p-xxl-3 {
        padding: 1rem !important;
    }

    .p-xxl-4 {
        padding: 1.5rem !important;
    }

    .p-xxl-5 {
        padding: 3rem !important;
    }

    .px-xxl-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-xxl-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-xxl-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-xxl-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-xxl-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
    }

    .px-xxl-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-xxl-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-xxl-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-xxl-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-xxl-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-xxl-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-xxl-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-xxl-0 {
        padding-top: 0 !important;
    }

    .pt-xxl-1 {
        padding-top: 0.25rem !important;
    }

    .pt-xxl-2 {
        padding-top: 0.5rem !important;
    }

    .pt-xxl-3 {
        padding-top: 1rem !important;
    }

    .pt-xxl-4 {
        padding-top: 1.5rem !important;
    }

    .pt-xxl-5 {
        padding-top: 3rem !important;
    }

    .pe-xxl-0 {
        padding-right: 0 !important;
    }

    .pe-xxl-1 {
        padding-right: 0.25rem !important;
    }

    .pe-xxl-2 {
        padding-right: 0.5rem !important;
    }

    .pe-xxl-3 {
        padding-right: 1rem !important;
    }

    .pe-xxl-4 {
        padding-right: 1.5rem !important;
    }

    .pe-xxl-5 {
        padding-right: 3rem !important;
    }

    .pb-xxl-0 {
        padding-bottom: 0 !important;
    }

    .pb-xxl-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-xxl-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-xxl-3 {
        padding-bottom: 1rem !important;
    }

    .pb-xxl-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-xxl-5 {
        padding-bottom: 3rem !important;
    }

    .ps-xxl-0 {
        padding-left: 0 !important;
    }

    .ps-xxl-1 {
        padding-left: 0.25rem !important;
    }

    .ps-xxl-2 {
        padding-left: 0.5rem !important;
    }

    .ps-xxl-3 {
        padding-left: 1rem !important;
    }

    .ps-xxl-4 {
        padding-left: 1.5rem !important;
    }

    .ps-xxl-5 {
        padding-left: 3rem !important;
    }

    .gap-xxl-0 {
        gap: 0 !important;
    }

    .gap-xxl-1 {
        gap: 0.25rem !important;
    }

    .gap-xxl-2 {
        gap: 0.5rem !important;
    }

    .gap-xxl-3 {
        gap: 1rem !important;
    }

    .gap-xxl-4 {
        gap: 1.5rem !important;
    }

    .gap-xxl-5 {
        gap: 3rem !important;
    }

    .text-xxl-start {
        text-align: left !important;
    }

    .text-xxl-end {
        text-align: right !important;
    }

    .text-xxl-center {
        text-align: center !important;
    }
}

@media (min-width: 1200px) {
    .fs-1 {
        font-size: 5rem !important;
    }

    .fs-2 {
        font-size: 3rem !important;
    }

    .fs-3 {
        font-size: 2.25rem !important;
    }

    .fs-4 {
        font-size: 1.875rem !important;
    }

    .fs-5 {
        font-size: 1.5rem !important;
    }
}

@media print {
    .d-print-inline {
        display: inline !important;
    }

    .d-print-inline-block {
        display: inline-block !important;
    }

    .d-print-block {
        display: block !important;
    }

    .d-print-grid {
        display: grid !important;
    }

    .d-print-table {
        display: table !important;
    }

    .d-print-table-row {
        display: table-row !important;
    }

    .d-print-table-cell {
        display: table-cell !important;
    }

    .d-print-flex {
        display: flex !important;
    }

    .d-print-inline-flex {
        display: inline-flex !important;
    }

    .d-print-none {
        display: none !important;
    }
}

.border-top {
    border-top: 1px solid #fff !important;
}

.border-left {
    border-left: 1px solid #fff !important;
}

.border-right {
    border-right: 1px solid #fff !important;
}

.border-bottom {
    border-bottom: 1px solid #fff !important;
}

@media (min-width: 480px) {
    .border-xs-top {
        border-top: 1px solid #fff !important;
    }

    .border-xs-left {
        border-left: 1px solid #fff !important;
    }

    .border-xs-right {
        border-right: 1px solid #fff !important;
    }

    .border-xs-bottom {
        border-bottom: 1px solid #fff !important;
    }
}

@media (min-width: 576px) {
    .border-sm-top {
        border-top: 1px solid #fff !important;
    }

    .border-sm-left {
        border-left: 1px solid #fff !important;
    }

    .border-sm-right {
        border-right: 1px solid #fff !important;
    }

    .border-sm-bottom {
        border-bottom: 1px solid #fff !important;
    }
}

@media (min-width: 768px) {
    .border-md-top {
        border-top: 1px solid #fff !important;
    }

    .border-md-left {
        border-left: 1px solid #fff !important;
    }

    .border-md-right {
        border-right: 1px solid #fff !important;
    }

    .border-md-bottom {
        border-bottom: 1px solid #fff !important;
    }
}

@media (min-width: 992px) {
    .border-lg-top {
        border-top: 1px solid #fff !important;
    }

    .border-lg-left {
        border-left: 1px solid #fff !important;
    }

    .border-lg-right {
        border-right: 1px solid #fff !important;
    }

    .border-lg-bottom {
        border-bottom: 1px solid #fff !important;
    }
}

@media (min-width: 1200px) {
    .border-xl-top {
        border-top: 1px solid #fff !important;
    }

    .border-xl-left {
        border-left: 1px solid #fff !important;
    }

    .border-xl-right {
        border-right: 1px solid #fff !important;
    }

    .border-xl-bottom {
        border-bottom: 1px solid #fff !important;
    }
}

@media (min-width: 1600px) {
    .border-xxl-top {
        border-top: 1px solid #fff !important;
    }

    .border-xxl-left {
        border-left: 1px solid #fff !important;
    }

    .border-xxl-right {
        border-right: 1px solid #fff !important;
    }

    .border-xxl-bottom {
        border-bottom: 1px solid #fff !important;
    }
}

.filter-shadow {
    filter: drop-shadow(40px 44px 44px rgba(23, 23, 36, 0.36));
}

.preloader {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #FFD600;
    transition: .3s all ease;
}

.components-ready .preloader {
    opacity: 0;
    visibility: hidden;
}

.cssload-container {
    display: block;
    width: 100px;
}

.cssload-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: #FF7A00;
    border-radius: 50%;
}

.cssload-loader:before {
    display: block;
    content: '';
    width: 0;
    height: 0;
    border: 20px solid #FFD600;
    border-radius: 50%;
    animation: cssload-loader 1.15s infinite;
}

@keyframes cssload-loader {
    70% {
        width: 100px;
        height: 100px;
    }

    100% {
        width: 100px;
        height: 100px;
        border-width: 0;
    }
}

*:focus, button:focus {
    outline: none;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p, button, dl, blockquote, figure, label {
    padding: 0;
    margin: 0;
}

ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

dd {
    margin-bottom: 0;
}

a:hover {
    text-decoration: none;
}

img {
    display: inline-block;
    max-width: 100%;
    height: auto;
}

blockquote {
    margin-bottom: 0;
}

blockquote q:before, blockquote q:after {
    content: none;
}

blockquote cite {
    font-style: normal;
}

pre {
    margin-bottom: 0;
}

address {
    margin-bottom: 0;
}

button {
    background-color: transparent;
    border: none;
}

html {
    font-size: 13px;
}

@media (min-width: 768px) {
    html {
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    html {
        font-size: 16px;
    }
}

@media (min-width: 1200px) and (orientation: landscape) and (max-height: 768px) {
    html {
        font-size: 14px;
    }
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin: 0;
}

h1 a, .h1 a, h2 a, .h2 a, h3 a, .h3 a, h4 a, .h4 a, h5 a, .h5 a, h6 a, .h6 a, .h1 a, .h2 a, .h3 a, .h4 a, .h5 a, .h6 a {
    color: inherit;
}

h1 a:hover, .h1 a:hover, h2 a:hover, .h2 a:hover, h3 a:hover, .h3 a:hover, h4 a:hover, .h4 a:hover, h5 a:hover, .h5 a:hover, h6 a:hover, .h6 a:hover, .h1 a:hover, .h2 a:hover, .h3 a:hover, .h4 a:hover, .h5 a:hover, .h6 a:hover {
    color: #FF7A00;
}

h1, .h1, .h1 {
    font-size: 26px;
    font-weight: 400;
    line-height: 1.1375;
    font-family: "Lilita One", cursive;
}

@media (min-width: 768px) {
    h1, .h1, .h1 {
        font-size: 2.25rem;
    }
}

@media (min-width: 992px) {
    h1, .h1, .h1 {
        font-size: 3rem;
    }
}

@media (min-width: 1600px) {
    h1, .h1, .h1 {
        font-size: 5rem;
    }
}

h2, .h2, .h2 {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.1458;
    font-family: "Lilita One", cursive;
}

@media (min-width: 768px) {
    h2, .h2, .h2 {
        font-size: 1.75rem;
    }
}

@media (min-width: 992px) {
    h2, .h2, .h2 {
        font-size: 2.25rem;
    }
}

@media (min-width: 1600px) {
    h2, .h2, .h2 {
        font-size: 3rem;
    }
}

h3, .h3, .h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.1389;
    font-family: "Lilita One", cursive;
}

@media (min-width: 768px) {
    h3, .h3, .h3 {
        font-size: 1.5rem;
    }
}

@media (min-width: 992px) {
    h3, .h3, .h3 {
        font-size: 1.875rem;
    }
}

@media (min-width: 1600px) {
    h3, .h3, .h3 {
        font-size: 2.25rem;
    }
}

h4, .h4, .h4 {
    font-size: 18px;
    line-height: 1.375;
}

@media (min-width: 768px) {
    h4, .h4, .h4 {
        font-size: 1.375rem;
    }
}

@media (min-width: 992px) {
    h4, .h4, .h4 {
        font-size: 1.625rem;
    }
}

@media (min-width: 1600px) {
    h4, .h4, .h4 {
        font-size: 1.875rem;
    }
}

h5, .h5, .h5 {
    font-size: 16px;
    line-height: 1.375;
}

@media (min-width: 992px) {
    h5, .h5, .h5 {
        font-size: 1.5rem;
    }
}

h6, .h6, .h6 {
    font-size: 14px;
    line-height: 1.375;
}

@media (min-width: 992px) {
    h6, .h6, .h6 {
        font-size: 1.125rem;
    }
}

@media (orientation: landscape) {
    .mobile .d-mobile-landscape-none {
        display: none;
    }

    .mobile .d-mobile-landscape-none + * {
        margin-top: 0;
    }
}

a {
    transition: color .2s;
}

.link-inherit {
    color: inherit;
}

.link-inherit:hover {
    color: #FFD600;
}

mark, .mark, .mark {
    color: #000;
}

u {
    text-decoration: none;
    border-bottom: 2px solid rgba(255, 214, 0, 0.4);
}

strong {
    font-weight: 700;
}

.context-dark a:not([class]) {
    color: #FF7A00;
}

.context-dark a:not([class]):hover {
    color: #cc6200;
}

.context-dark, .context-dark h1, .context-dark .h1, .context-dark h2, .context-dark .h2, .context-dark h3, .context-dark .h3, .context-dark h4, .context-dark .h4, .context-dark h5, .context-dark .h5, .context-dark h6, .context-dark .h6, .context-dark .h1, .context-dark .h2, .context-dark .h3, .context-dark .h4, .context-dark .h5, .context-dark .h6 {
    color: #fff;
}

* + p {
    margin-top: 1.25rem;
}

* + h1, * + .h1, * + h2, * + .h2, * + h3, * + .h3, * + h4, * + .h4, * + h5, * + .h5, * + h6, * + .h6 {
    margin-top: 1.25rem;
}

* + img, * + figure {
    margin-top: 1.875rem;
}

* + form {
    margin-top: 1.25rem;
}

h1 + p, .h1 + p {
    margin-top: 0.75rem;
}

h2 + p, .h2 + p {
    margin-top: 1.25rem;
}

h3 + p, .h3 + p {
    margin-top: 1.25rem;
}

h4 + p, .h4 + p {
    margin-top: 1.25rem;
}

h5 + p, .h5 + p {
    margin-top: 0.9375rem;
}

h6 + p, .h6 + p {
    margin-top: 0.9375rem;
}

h1 + h5, .h1 + h5, h1 + .h5, .h1 + .h5 {
    margin-top: 1.25rem;
}

h2 + h3, .h2 + h3, h2 + .h3, .h2 + .h3 {
    margin-top: 1.25rem;
}

h6 + h1, .h6 + h1, h6 + .h1, .h6 + .h1 {
    margin-top: 2.1875rem;
}

h6 + h2, .h6 + h2, h6 + .h2, .h6 + .h2 {
    margin-top: 0.9375rem;
}

h1 + img, .h1 + img {
    margin-top: 1.875rem;
}

h2 + img, .h2 + img {
    margin-top: 1.5625rem;
}

h4 + ul, .h4 + ul {
    margin-top: 20px;
}

label + * {
    margin-top: 2px;
}

img + p {
    margin-top: 31px;
}

dl + dl {
    margin-top: 8px;
}

* + address {
    margin-top: 16px;
}

.breadcrumb + h1, .breadcrumb + .h1 {
    margin-top: 1.875rem;
}

.breadcrumb + h4, .breadcrumb + .h4 {
    margin-top: 1.25rem;
}

.form-group + .btn-block {
    margin-top: 16px;
}

@media (min-width: 768px) {
    * + form {
        margin-top: 1.875rem;
    }

    h6 + h1, .h6 + h1, h6 + .h1, .h6 + .h1 {
        margin-top: 3.75rem;
    }

    h1 + img, .h1 + img {
        margin-top: 2.8125rem;
    }

    .breadcrumb + h1, .breadcrumb + .h1 {
        margin-top: 3.125rem;
    }
}

@media (min-width: 992px) {
    h4 + p, .h4 + p {
        margin-top: 2.5rem;
    }

    h5 + p, .h5 + p {
        margin-top: 1.875rem;
    }

    h6 + p, .h6 + p {
        margin-top: 1.875rem;
    }

    h1 + h5, .h1 + h5, h1 + .h5, .h1 + .h5 {
        margin-top: 2.1875rem;
    }

    h2 + h4, .h2 + h4, h2 + .h4, .h2 + .h4 {
        margin-top: 2.125rem;
    }

    h6 + h2, .h6 + h2, h6 + .h2, .h6 + .h2 {
        margin-top: 1.5625rem;
    }

    h1 + img, .h1 + img {
        margin-top: 3.75rem;
    }

    p + h1, p + .h1 {
        margin-top: 40px;
    }

    p + form {
        margin-top: 2.5rem;
    }

    p + .form-inline {
        margin-top: 3.75rem;
    }

    .breadcrumb + h4, .breadcrumb + .h4 {
        margin-top: 1.75rem;
    }

    .breadcrumb + h1, .breadcrumb + .h1 {
        margin-top: 4.375rem;
    }
}

@media (min-width: 1600px) {
    * + h1, * + .h1, * + h2, * + .h2 {
        margin-top: 30px;
    }

    * + h3, * + .h3 {
        margin-top: 25px;
    }

    h3 + p, .h3 + p {
        margin-top: 2.5rem;
    }

    h6 + h1, .h6 + h1, h6 + .h1, .h6 + .h1 {
        margin-top: 5.3125rem;
    }

    h1 + img, .h1 + img {
        margin-top: 4.6875rem;
    }

    p + h1, p + .h1 {
        margin-top: 60px;
    }

    h2 + form, .h2 + form {
        margin-top: 3.125rem;
    }

    label + * {
        margin-top: 6px;
    }

    .breadcrumb + h1, .breadcrumb + .h1 {
        margin-top: 5.375rem;
    }
}

* + .offset-xxs {
    margin-top: 1.25rem;
}

* + .offset-xs, * + .offset-sm, * + .offset-md, * + .offset-lg, * + .offset-xl, * + .offset-xxl {
    margin-top: 1.875rem;
}

@media (min-width: 768px) {
    * + .offset-sm, * + .offset-md, * + .offset-lg, * + .offset-xl, * + .offset-xxl {
        margin-top: 2.5rem;
    }
}

@media (min-width: 1200px) {
    * + .offset-md {
        margin-top: 3.125rem;
    }

    * + .offset-lg {
        margin-top: 3.75rem;
    }

    * + .offset-xl, * + .offset-xxl {
        margin-top: 4.375rem;
    }
}

@media (min-width: 1600px) {
    * + .offset-xxl {
        margin-top: 5rem;
    }
}

html .group-5 {
    margin-bottom: -0.3125rem;
    margin-left: -0.3125rem;
}

html .group-5:empty {
    margin-bottom: 0;
    margin-left: 0;
}

html .group-5 > * {
    margin-top: 0;
    margin-bottom: 0.3125rem;
    margin-left: 0.3125rem;
}

html .group-10 {
    margin-bottom: -0.625rem;
    margin-left: -0.625rem;
}

html .group-10:empty {
    margin-bottom: 0;
    margin-left: 0;
}

html .group-10 > * {
    margin-top: 0;
    margin-bottom: 0.625rem;
    margin-left: 0.625rem;
}

html .group-15 {
    margin-bottom: -0.9375rem;
    margin-left: -0.9375rem;
}

html .group-15:empty {
    margin-bottom: 0;
    margin-left: 0;
}

html .group-15 > * {
    margin-top: 0;
    margin-bottom: 0.9375rem;
    margin-left: 0.9375rem;
}

html .group-20 {
    margin-bottom: -1.25rem;
    margin-left: -1.25rem;
}

html .group-20:empty {
    margin-bottom: 0;
    margin-left: 0;
}

html .group-20 > * {
    margin-top: 0;
    margin-bottom: 1.25rem;
    margin-left: 1.25rem;
}

html .group-30 {
    margin-bottom: -1.875rem;
    margin-left: -1.875rem;
}

html .group-30:empty {
    margin-bottom: 0;
    margin-left: 0;
}

html .group-30 > * {
    margin-top: 0;
    margin-bottom: 1.875rem;
    margin-left: 1.875rem;
}

html .group-x-30 {
    margin-left: -1.875rem;
}

html .group-x-30 > * {
    margin-left: 1.875rem;
}

html .group-40 {
    margin-bottom: -2.5rem;
    margin-left: -2.5rem;
}

html .group-40:empty {
    margin-bottom: 0;
    margin-left: 0;
}

html .group-40 > * {
    margin-top: 0;
    margin-bottom: 2.5rem;
    margin-left: 2.5rem;
}

@media (min-width: 768px) {
    html .group-md-30 {
        margin-bottom: -1.875rem;
        margin-left: -1.875rem;
    }

    html .group-md-30 > * {
        margin-bottom: 1.875rem;
        margin-left: 1.875rem;
    }
}

@media (min-width: 992px) {
    .ml-lg-6 {
        margin-left: 4.375rem;
    }
}

body {
    overflow-x: hidden;
}

html:not(.components-ready) * {
    transition: 0s;
}

.page {
    position: relative;
    min-height: 100vh;
    opacity: 0;
}

.page.page-revealed {
    opacity: 1;
}

html .page {
    transition: opacity .25s;
}

html.components-ready .page {
    transition: opacity .25s, padding .2s ease-in-out;
}

.page-bg {
    position: relative;
    z-index: 0;
}

.page-image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
}

.page-image > * {
    opacity: .15;
    width: 100%;
}

.page-image::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(180deg, transparent 0%, #72B805 100%);
}

.bg-primary .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #FF7A00 100%);
}

.bg-secondary .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #FFD600 100%);
}

.bg-success .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #77ba21 100%);
}

.bg-info .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #138ce4 100%);
}

.bg-warning .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #f19711 100%);
}

.bg-danger .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #e72660 100%);
}

.bg-light .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #f7f7f7 100%);
}

.bg-dark .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #171724 100%);
}

.bg-100 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #fafafa 100%);
}

.bg-200 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #f7f7f7 100%);
}

.bg-300 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #e8e8e9 100%);
}

.bg-400 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #aeaeb2 100%);
}

.bg-500 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #adb5bd 100%);
}

.bg-600 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #5d5d66 100%);
}

.bg-700 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #393944 100%);
}

.bg-800 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #23232f 100%);
}

.bg-900 .page-image::after {
    background-image: linear-gradient(180deg, transparent 0%, #171724 100%);
}

.bg-primary-light {
    background: #fff2e6;
}

.bg-primary + .bg-primary {
    padding-top: 0;
}

.bg-secondary-light {
    background: #fffbe6;
}

.bg-secondary + .bg-secondary {
    padding-top: 0;
}

.bg-success-light {
    background: #e3ffc2;
}

.bg-success + .bg-success {
    padding-top: 0;
}

.bg-info-light {
    background: #def0ff;
}

.bg-info + .bg-info {
    padding-top: 0;
}

.bg-warning-light {
    background: #fff6e9;
}

.bg-warning + .bg-warning {
    padding-top: 0;
}

.bg-danger-light {
    background: #fff4f7;
}

.bg-danger + .bg-danger {
    padding-top: 0;
}

.bg-light-light {
    background: white;
}

.bg-light + .bg-light {
    padding-top: 0;
}

.bg-dark-light {
    background: #4f4dd4;
}

.bg-dark + .bg-dark {
    padding-top: 0;
}

.bg-100 {
    background-color: #fafafa;
}

a.bg-100:hover, a.bg-100:focus, button.bg-100:hover, button.bg-100:focus {
    background-color: #e1e1e1;
}

.bg-100 + .bg-100 {
    padding-top: 0;
}

.bg-200 {
    background-color: #f7f7f7;
}

a.bg-200:hover, a.bg-200:focus, button.bg-200:hover, button.bg-200:focus {
    background-color: #dedede;
}

.bg-200 + .bg-200 {
    padding-top: 0;
}

.bg-300 {
    background-color: #e8e8e9;
}

a.bg-300:hover, a.bg-300:focus, button.bg-300:hover, button.bg-300:focus {
    background-color: #ceced0;
}

.bg-300 + .bg-300 {
    padding-top: 0;
}

.bg-400 {
    background-color: #aeaeb2;
}

a.bg-400:hover, a.bg-400:focus, button.bg-400:hover, button.bg-400:focus {
    background-color: #949499;
}

.bg-400 + .bg-400 {
    padding-top: 0;
}

.bg-500 {
    background-color: #adb5bd;
}

a.bg-500:hover, a.bg-500:focus, button.bg-500:hover, button.bg-500:focus {
    background-color: #919ca6;
}

.bg-500 + .bg-500 {
    padding-top: 0;
}

.bg-600 {
    background-color: #5d5d66;
}

a.bg-600:hover, a.bg-600:focus, button.bg-600:hover, button.bg-600:focus {
    background-color: #45454b;
}

.bg-600 + .bg-600 {
    padding-top: 0;
}

.bg-700 {
    background-color: #393944;
}

a.bg-700:hover, a.bg-700:focus, button.bg-700:hover, button.bg-700:focus {
    background-color: #222228;
}

.bg-700 + .bg-700 {
    padding-top: 0;
}

.bg-800 {
    background-color: #23232f;
}

a.bg-800:hover, a.bg-800:focus, button.bg-800:hover, button.bg-800:focus {
    background-color: #0d0d12;
}

.bg-800 + .bg-800 {
    padding-top: 0;
}

.bg-900 {
    background-color: #171724;
}

a.bg-900:hover, a.bg-900:focus, button.bg-900:hover, button.bg-900:focus {
    background-color: #030305;
}

.bg-900 + .bg-900 {
    padding-top: 0;
}

.bg-transparent + .bg-transparent {
    padding-top: 0;
}

.bg-image {
    background-position: center center;
    background-size: cover;
}

[class*='overlay-primary'] {
    position: relative;
}

[class*='overlay-primary']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FF7A00;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-primary'] .container {
    position: relative;
}

.overlay-primary-02::before {
    opacity: .2;
}

.overlay-primary-03::before {
    opacity: .3;
}

.overlay-primary-06::before {
    opacity: .6;
}

.overlay-primary-07::before {
    opacity: .7;
}

.overlay-primary-08::before {
    opacity: .8;
}

[class*='overlay-secondary'] {
    position: relative;
}

[class*='overlay-secondary']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFD600;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-secondary'] .container {
    position: relative;
}

.overlay-secondary-02::before {
    opacity: .2;
}

.overlay-secondary-03::before {
    opacity: .3;
}

.overlay-secondary-06::before {
    opacity: .6;
}

.overlay-secondary-07::before {
    opacity: .7;
}

.overlay-secondary-08::before {
    opacity: .8;
}

[class*='overlay-success'] {
    position: relative;
}

[class*='overlay-success']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #77ba21;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-success'] .container {
    position: relative;
}

.overlay-success-02::before {
    opacity: .2;
}

.overlay-success-03::before {
    opacity: .3;
}

.overlay-success-06::before {
    opacity: .6;
}

.overlay-success-07::before {
    opacity: .7;
}

.overlay-success-08::before {
    opacity: .8;
}

[class*='overlay-info'] {
    position: relative;
}

[class*='overlay-info']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #138ce4;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-info'] .container {
    position: relative;
}

.overlay-info-02::before {
    opacity: .2;
}

.overlay-info-03::before {
    opacity: .3;
}

.overlay-info-06::before {
    opacity: .6;
}

.overlay-info-07::before {
    opacity: .7;
}

.overlay-info-08::before {
    opacity: .8;
}

[class*='overlay-warning'] {
    position: relative;
}

[class*='overlay-warning']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f19711;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-warning'] .container {
    position: relative;
}

.overlay-warning-02::before {
    opacity: .2;
}

.overlay-warning-03::before {
    opacity: .3;
}

.overlay-warning-06::before {
    opacity: .6;
}

.overlay-warning-07::before {
    opacity: .7;
}

.overlay-warning-08::before {
    opacity: .8;
}

[class*='overlay-danger'] {
    position: relative;
}

[class*='overlay-danger']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e72660;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-danger'] .container {
    position: relative;
}

.overlay-danger-02::before {
    opacity: .2;
}

.overlay-danger-03::before {
    opacity: .3;
}

.overlay-danger-06::before {
    opacity: .6;
}

.overlay-danger-07::before {
    opacity: .7;
}

.overlay-danger-08::before {
    opacity: .8;
}

[class*='overlay-light'] {
    position: relative;
}

[class*='overlay-light']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f7f7f7;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-light'] .container {
    position: relative;
}

.overlay-light-02::before {
    opacity: .2;
}

.overlay-light-03::before {
    opacity: .3;
}

.overlay-light-06::before {
    opacity: .6;
}

.overlay-light-07::before {
    opacity: .7;
}

.overlay-light-08::before {
    opacity: .8;
}

[class*='overlay-dark'] {
    position: relative;
}

[class*='overlay-dark']::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #171724;
    pointer-events: none;
    opacity: .5;
}

[class*='overlay-dark'] .container {
    position: relative;
}

.overlay-dark-02::before {
    opacity: .2;
}

.overlay-dark-03::before {
    opacity: .3;
}

.overlay-dark-06::before {
    opacity: .6;
}

.overlay-dark-07::before {
    opacity: .7;
}

.overlay-dark-08::before {
    opacity: .8;
}

.section-layer, .section-layer .container {
    position: relative;
}

.bg-layer {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.bg-gradient-animated {
    background-size: 400% auto;
    background-position: 100% 50%;
    background-image: linear-gradient(90deg, #b2edff 0%, #e9dbff 25%, #c1ffe1 50%, #b2edff 75%, #e9dbff 100%);
    animation: gradientMotion 20s infinite linear;
}

.bg-gradient-shamrock-blue {
    background-image: linear-gradient(45deg, #43DD93 0%, #28A8FF 100%);
}

.bg-gradient-blue-violet {
    background-image: linear-gradient(46.03deg, #28A8FF -1.86%, #7D2EFF 100%);
}

.bg-gradient-electric-violet {
    background-image: linear-gradient(225deg, #C728FF 0%, #7D2EFF 100%);
}

.bg-gradient-dark-violet {
    background-image: linear-gradient(-8.15deg, #FFD600 4.67%, #171724 49.99%);
}

@keyframes gradientMotion {
    0% {
        background-position-x: 100%;
    }

    100% {
        background-position-x: 0;
    }
}

.text-100 {
    color: #fafafa;
}

.text-200 {
    color: #f7f7f7;
}

.text-300 {
    color: #e8e8e9;
}

.text-400 {
    color: #aeaeb2;
}

.text-500 {
    color: #adb5bd;
}

.text-600 {
    color: #5d5d66;
}

.text-700 {
    color: #393944;
}

.text-800 {
    color: #23232f;
}

.text-900 {
    color: #171724;
}

.context-dark .text-contrast {
    color: #aeaeb2;
}
         this code to chnage to arun portfolio add navbar  resumedownload,projects, about,   home visible welcome to portfolio
