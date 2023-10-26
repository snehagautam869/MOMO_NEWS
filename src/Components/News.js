import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  [
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": "Chloe Whelan",
        "title": "Aussie workers share in half a billion dollars",
        "description": "Australian workers have received a share of half a billion dollars as the Fair Work watchdog continues its pursuit of businesses with dodgy pay practices.",
        "url": "https://www.news.com.au/finance/money/fair-work-backpayments-australian-workers-share-in-half-a-billion-dollars/news-story/ac1142d17af5572138a8e7e77891b79a",
        "urlToImage": "https://content.api.news/v3/images/bin/58db22bcda13886f6f5d11ca7fc2075c",
        "publishedAt": "2023-10-24T10:37:00Z",
        "content": "Australian workers have received a share of half a billion dollars as the Fair Work watchdog continues its pursuit of businesses with dodgy pay practices. \r\nAustralia’s Fair Work Ombudsman (FWO) reco… [+1941 chars]"
    },
    {
        "source": {
            "id": "gruenderszene",
            "name": "Gruenderszene"
        },
        "author": null,
        "title": "Wie Startups und etablierte Unternehmen zusammen die Zukunft gestalten",
        "description": "Startup-Kollaborationen erzeugen positive Synergieeffekte und stärken den Business-Erfolg. So gelingt die Zusammenarbeit.",
        "url": "https://www.businessinsider.de/gruenderszene/sponsored-post/pwc-innovationsoekosysteme/startup-kollaborationen-staerken-den-business-erfolg-pwc-9674491513/",
        "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2023/08/pwc_artikelbild.jpg?ver=1694607365",
        "publishedAt": "2023-10-24T09:15:00+00:00",
        "content": "Arbeiten etablierte Firmen und Startups zusammen, ergeben sich positive Synergieeffekte. Wie beide voneinander lernen, Innovationen fördern und den Business-Erfolg stärken.Von der Globalisierung bis … [+4492 chars]"
    },
    {
        "source": {
            "id": "the-huffington-post",
            "name": "The Huffington Post"
        },
        "author": "AP",
        "title": "Prison Time For California Man Who Sent Vile Messages To Gun Massacre Victim's Dad",
        "description": "A California business owner will spend a year in federal prison for sending more than 200 vile online messages to a father whose daughter was killed in a Florida school massacre.",
        "url": "https://www.huffpost.com/entry/bc-us-school-shooting-florida-cyberstalker_n_653704d5e4b011a9cf7abf92",
        "urlToImage": "https://img.huffingtonpost.com/asset/653704d8230000870028871d.jpeg?ops=1200_630",
        "publishedAt": "2023-10-23T23:48:48Z",
        "content": "FORT LAUDERDALE, Fla. (AP) A California property manager was sentenced to a year in federal prison for sending more than 200 vile online messages to a father of a teenage girl who died in the 2018 ma… [+2022 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "",
        "title": "Autodesk moves to 'hybrid first' work policy to assist with employee engagement and productivity | CNN Business",
        "description": "Many tech companies now have a return-to-office mandate for employees. However, software company Autodesk is taking a different approach with their work from home policy.",
        "url": "https://www.cnn.com/videos/business/2023/10/20/autodesk-hybrid-work-flex-forward-me-orig.cnn",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231020101844-autodesk-hybrid-work-policy-risk-takers-1.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-10-23T11:01:48Z",
        "content": null
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": null,
        "title": "In insurtech, too, business models aren&#8217;t one-size-fits-all",
        "description": null,
        "url": "https://techcrunch.com/2023/10/21/insurtech-business-models-dtc/",
        "urlToImage": null,
        "publishedAt": "2023-10-21T17:22:21.4081781Z",
        "content": null
    },
    {
        "source": {
            "id": "financial-post",
            "name": "Financial Post"
        },
        "author": "Financial Post",
        "title": "Financial Post",
        "description": "Financial Times offers the latest news on finance and business. Keep on top of what's happening in Canada's financial market.",
        "url": "http://business.financialpost.com/category/financial-times/",
        "urlToImage": "https://dcs-static.gprod.postmedia.digital/14.5.3/websites/images/fp/ogimage-fp.png",
        "publishedAt": "2023-09-26T18:22:21.9387323Z",
        "content": null
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "Major business group blames Biden for UAW strike",
        "description": "The United Auto Workers announced a strike at three plants — one each at Ford, General Motors and Stellantis — overnight.",
        "url": "https://www.politico.com/news/2023/09/15/chamber-blames-biden-for-uaw-strike-00116216",
        "urlToImage": "https://static.politico.com/bd/2c/a23ba1894935970bfe33fc3a9cc4/https-delivery-gettyimages.com/downloads/1241221279",
        "publishedAt": "2023-09-15T11:38:22+00:00",
        "content": "The United Auto Workers announced a strike at three plants one each at Ford, General Motors and Stellantis overnight after failing to agree on a contract with the so-called Big Three auto companies. … [+2220 chars]"
    },
    {
        "source": {
            "id": "axios",
            "name": "Axios"
        },
        "author": "Alex Fitzpatrick, Kavya Beheraj",
        "title": "The country's new business hot spots, mapped",
        "description": "The Southeastern U.S. is a hotbed of new business activity.",
        "url": "https://www.axios.com/2023/07/13/new-business-hot-spots",
        "urlToImage": "https://images.axios.com/aDr8aF2q-EoHWlnE6VUNLPYxpRE=/0x0:1280x720/1366x768/2023/07/12/1689197791881.png",
        "publishedAt": "2023-07-13T09:30:06Z",
        "content": "The Southeastern U.S. is a hotbed of new business activity, home to nine of the top 10 major metro areas with the most new business applications per 1,000 residents last year.\r\nDriving the news: That… [+1716 chars]"
    },
    {
        "source": {
            "id": "financial-post",
            "name": "Financial Post"
        },
        "author": "Financial Post",
        "title": "Financial Post",
        "description": "Looking for advice on your career? The Financial Post's Work section offers tips from experts on business and work life.",
        "url": "http://business.financialpost.com/category/fp-work/",
        "urlToImage": "https://dcs-static.gprod.postmedia.digital/13.5.3/websites/images/fp/ogimage-fp.png",
        "publishedAt": "2023-05-17T20:37:35.1964584Z",
        "content": null
    },
    {
        "source": {
            "id": "financial-post",
            "name": "Financial Post"
        },
        "author": "Financial Post",
        "title": "Financial Post",
        "description": "Stay updated on the Canadian economy with the Financial Post's latest business stories on Canadian industries, trade, policy, jobs and more.",
        "url": "http://business.financialpost.com/category/news/economy/",
        "urlToImage": "https://dcs-static.gprod.postmedia.digital/13.5.3/websites/images/fp/ogimage-fp.png",
        "publishedAt": "2023-05-17T20:37:25.9932883Z",
        "content": null
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": null,
        "title": "‘Money is no object’: Ghislaine Maxwell trial shines light on class divide",
        "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
        "url": "https://www.ft.com/content/0b9d93da-1687-4eb1-bd53-0a84a1b40dff",
        "urlToImage": null,
        "publishedAt": "2021-12-14T06:22:29.1165883Z",
        "content": "Keep abreast of significant corporate, financial and political developments around the world.\r\nStay informed and spot emerging risks and opportunities with independent global reporting, expert\r\ncomme… [+32 chars]"
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": null,
        "title": "Need relief from the stress of screen time? There’s an app for that",
        "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
        "url": "https://www.ft.com/content/221cf7c4-56e7-4c7e-b6c0-cc3737da0330",
        "urlToImage": null,
        "publishedAt": "2021-12-14T06:22:27.4295096Z",
        "content": "Let our global subject matter experts broaden your perspective with timely insights and opinions you\r\ncant find anywhere else."
    }
]
  constructor()
  {
    super();
    console.log("this is constructor");
    this.state = {
      articles:"this.articles",
      loading:false
    }
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NewsMomo - Top Headlines</h2>
          <div className="row">
           {this.state.articles.map((element)=>{
                return <div className="col-md-4"key={element.url} >
                <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urlToImage} newsurl={element.url}/>
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
