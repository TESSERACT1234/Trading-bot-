import React from 'react'
import './webpage.css'
import './card.css'

function Webpage() {
  return (
    <>

      <div className="doimage">
        <img src="./images/bullsandbears.png" className='dogreatimage' alt="" />
      </div>




      <div className="segment py-4 justify-content-center">
        <a href="https://www.investopedia.com/terms/e/equitymarket.asp">
        <div className="card mx-4">
          
          <img src="./images/equity.jpg" className="card-img" alt="..." />
          <div class="card-body">
            <p class="card-text">In Equity segment we prefer to trade or Invest the heavy volume Stocks from each sectors.</p>
            {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
          </div>
        </div>
        </a>

        <a href="https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/derivatives-market/">
        <div className="card mx-4">
          <img src="./images/derivatives.jpg" className="card-img" alt="..." />
          <div class="card-body">
            <p class="card-text">In Derivatives market we give priority to Index Derivatives as Nifty and BankNifty NFO.</p>
          </div>
        </div>
        </a>

        <a href="https://www.investopedia.com/terms/c/commodity-market.asp#:~:text=A%20commodity%20market%20involves%20buying,are%20livestock%20or%20agricultural%20goods.">
        <div className="card mx-4">
          <img src="./images/commodities.jpg" className="card-img" alt="..." />
          <div class="card-body">
            <p class="card-text">In commodities market we mostly trade in MCX the silver futures and gold futures.</p>
          </div>
        </div>
        </a>


      </div>

      <div className="segment2 py-2 justify-content-center">

        <a href="https://www.investopedia.com/terms/c/cryptocurrency.asp">
        <div className="card mx-4">
          <img src="./images/crypto.jpg" className="card-img" alt="..." />
          <div class="card-body">
            <p class="card-text">The crypto market fully follows the technical analysis patterns and the leverage is also far more than any market.</p>
          </div>
        </div>
        </a>

        <a href="https://www.investopedia.com/terms/forex/f/forex-market.asp">
        <div className="card mx-4">
          <img src="./images/forex.jpg" className="card-img" alt="..." />
          <div class="card-body">
            <p class="card-text">In forex market we mostly trade the exotic pairs such as Euro-USD and USD-JPY and many more.....</p>
          </div>
        </div>
        </a>

       <a href="https://www.cfainstitute.org/en/advocacy/issues/high-frequency-trading#:~:text=HFT%20is%20a%20type%20of,data%20and%20electronic%20trading%20tools.">
       <div className="card mx-4">
          <img src="./images/algo.jpg" className="card-img" alt="..." />
          <div class="card-body">
            <p class="card-text">HFT is a type of algorithmic trading characterized by high speeds,high turnover rates,and high order-to-trade .</p>
          </div>
        </div>
       </a>


       

      </div>

      {/* <div className="quote">
        <center>
        <img src="./images/money.png" alt=""  className='quoteimage px-5' />
        <img src="./images/stackofmoney.png" alt="" className='quoteimage  ' />
        </center>
       </div> */}

      
    </>
  )
}

export default Webpage
