import React from 'react'
import './resource.css'
function Resource() {
  return (
    <>
      <div className="youtube">
        <center>
          <div className="heading1">
            <h1>The Perfect Mentors On Youtube </h1>
          </div>
        </center>
        <div className="youtube1">
          <div className="segment py-4 justify-content-center">
            <a href="https://www.youtube.com/c/rachanaphadke">
              <div className="card mx-4">

                <img src="./images/carachana.jpg" className="card-img" alt="..." />
                <div class="card-body">
                  <p class="card-text"> CA Rachana Ranade.</p>
                  {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/BoomingBulls">
              <div className="card mx-4">
                <img src="./images/booming bulls.jpg" className="card-img" alt="..." />
                <div class="card-body">
                  <p class="card-text"> Booming Bulls.</p>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/POWEROFSTOCKSBySubasish">
              <div className="card mx-4">
                <img src="./images/powerofstocks.png" className="card-img" alt="..." />
                <div class="card-body">
                  <p class="card-text"> Power Of Stocks.</p>
                </div>
              </div>
            </a>


          </div>
        </div>
        <div className="youtube2">
          <div className="segment py-4 justify-content-center">
            <a href="https://www.youtube.com/c/BaapofChart">
              <div className="card mx-4">

                <img src="./images/boc.png" className="card-img" alt="..." />
                <div class="card-body">
                  <p class="card-text"> Baap Of Chart.</p>
                  {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/PRSundar64">
              <div className="card mx-4">
                <img src="./images/prsundar.jpg" className="card-img" alt="..." />
                <div class="card-body">
                  <p class="card-text"> P.R Sundar Sir.</p>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/Elearnmarkets">
              <div className="card mx-4">
                <img src="./images/elm.png" className="card-img" alt="..." />
                <div class="card-body">
                  <p class="card-text"> E-learn Markets.</p>
                </div>
              </div>
            </a>


          </div>
        </div>
      </div>

      <center>
        <div className="brokers">
          <h1>The Recomonded Brokers To Trade in India.</h1>
          <center>
            <div className="b1">
              <div className="b1">
                <a href="https://zerodha.com/">
                  <img src="./images/zerodha.png" alt="" className='brimg' />
                </a>
                <a href="https://www.angelone.in/">
                  <img src="./images/angle.png" alt="" className='brimg' />
                </a>
              </div>
              <div className="b2">
                <a href="https://www.smctradeonline.com/">
                  <img src="./images/smc.png" alt="" className='brimg' />
                </a>
                <a href="https://www.kotaksecurities.com/">
                  <img src="./images/kotack.png" alt="" className='brimg' />
                </a>
              </div>
            </div>
          </center>

        </div>
      </center>


      <div className="books">
        <center>

          <h1>Some Recommended Books </h1>
        </center>


      </div>
    </>
  )
}

export default Resource

