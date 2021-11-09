import { useState } from "react"



export default function Index() {


  return (

    <div className= "bg-white  bg-no-repeat h-screen w-full bg-contain bg-center " style={{backgroundImage:"url(/images/doggy.png)"}}> 
      <div className="flex flex-col justify-center items-center h-full  font-bold text-indigo-900 "> 
      <div className=" text-3xl lg:text-6xl uppercase"> We are coming soon </div>
      <div className=" text-3xl lg:text-6xl uppercase"> #SAFU </div>
      <div className="flex mt-10">
      <a
        href="https://uniswap.exchange/swap/0xdb94b2f01b9208d3979be5d6eb4e159a7b4da4ba&use=V2 "
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
      >
       Uniswap
      </a>
      <a
        href="https://www.dextools.io/app/ether/pair-explorer/0xa47b665abbeeb31234cd08d02629afda172cc024 " target="_blank" rel="noopener"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
       Dextools
      </a>
      </div>
      <div className="mt-4 text-white"> 10% tax </div>
      <div className="text-white"> 50% supply is burned </div>
      <div className="flex items-center mt-3 space-x-2">
      <a href="https://twitter.com/ENSINU" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" ><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
      </a>
      <a href="https://t.me/ENSINU" target="_blank" rel="noopener">
        <img src="/images/telegram_icon_131945.svg"  className="w-[40px] h-[40px]" />
      </a>
      </div>
      </div>
    </div>

  )
}