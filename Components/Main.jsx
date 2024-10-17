import React from 'react'

function Main() {
  return (
   <>
    <div className='container-fluid main'>
      <h5 className='text-light p-5'>NEWS PAANE KA DESI ANDAAZ</h5>
      <h1 className='text-light p-3'>INDIA'S #1 HYPERLOCAL SHORT NEWS APP</h1>
      <div className='main-img'>
        <img src="https://www.way2news.com/images/app-store.png" alt=""/>
        <img src="https://www.way2news.com/images/play-store.png" alt=""/>
        </div>

        <div className="container">
            <div id="languages"></div>
            <div className="mobile-sec">
                <div className="col-lg-3 col-sm-3 ">
                    <div className="mobile shadow"><img src="https://www.way2news.com/images/hindi.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="mobile shadow"><img src="https://www.way2news.com/images/bangla.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="mobile shadow mb-telugu"><img src="https://www.way2news.com/images/telugu.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="mobile shadow"><img src="https://www.way2news.com/images/tamil.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <p className="text-center roboto-c">One App - Eight languages. <br/>Read news in your preferred language.</p>

                <div className="col-lg-3 col-sm-3">
                    <div className="mobile shadow"><img src="https://www.way2news.com/images/kannada.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="mobile mb-telugu shadow"><img src="https://www.way2news.com/images/malayalam.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="mobile"><img src="https://www.way2news.com/images/gujarathi.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="mobile"><img src="https://www.way2news.com/images/tamil.png" alt=""/>
                        <div className="mb-line"></div>
                    </div>
                </div>
                <div className="clearfix"></div>   

                <div className='counter-section container-fluid'>
                <div className="hyper">
                <div className="container">
                    <p>Way2News, India's largest hyperlocal news app covers news from 400 districts and
                        generating more than 4 billion screen views every month - that's 3 times the entire Indian
                        population. </p>
                </div>
                </div>
                </div>          

            </div>
            


        </div>
       
    </div>
    
   </>
    
  )
}

export default Main
