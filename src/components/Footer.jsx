import React from 'react'
import book from '../assets/images/book.png'

function Footer() {
  return (
    <footer className='bg-eerie-black'>
        <div className='text-white p-8 md:p-14 flex flex-col gap-8 md:flex-row md:justify-between'>
            <div>
                <div className='mb-3'>
                    <img src={book} alt="An opened book"/>
                    <p>LearnFlow</p>
                </div>
                <p>Top learning experiences that create more talent in the world.</p>
            </div>
            <div className='flex justify-between md:gap-12'>
                <div>
                    <h3>Links</h3>
                    <ul className='text-dark-gray'>
                        <li><a href="#" className='hover:text-safron-yellow duration-200'>About us</a></li>
                        <li><a href="#" className='hover:text-safron-yellow duration-200'>Programs</a></li>
                        <li><a href="#" className='hover:text-safron-yellow duration-200'>Contact</a></li>
                        <li><a href="#" className='hover:text-safron-yellow duration-200'>FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Socials</h3>
                    <ul className='text-dark-gray'>
                    <li><a href="#" className='hover:text-safron-yellow duration-200'>Twitter</a></li>
                    <li><a href="#" className='hover:text-safron-yellow duration-200'>LinkedIn</a></li>
                    <li><a href="#" className='hover:text-safron-yellow duration-200'>Facebook</a></li>
                </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul className='text-dark-gray'>
                    <li><a href="#" className='hover:text-safron-yellow duration-200'>Terms</a></li>
                    <li><a href="#" className='hover:text-safron-yellow duration-200'>Privacy</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className='border border-t-dark-gray text-dark-gray p-8 gap-4 flex flex-col md: px-14 md:gap-0 md:flex-row md:justify-between'>
            <p>© 2024 The Programmers University. All rights reserved.</p>
            <div className='flex gap-2'>
                <a href="#" aria-label='Twitter' className='hover:text-safron-yellow duration-200'>
                    <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg>
                </a>
                <a href="#" aria-label='LinkedIn' className='hover:text-safron-yellow duration-200'>
                    <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
                </a>
                <a href="#" aria-label='Facebook' className='hover:text-safron-yellow duration-200'>
                    <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
                </a>
                <a href="#" aria-label='GitHub' className='hover:text-safron-yellow duration-200'>
                    <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z"/></svg>
                </a>
                <a href="#" aria-label="dribbble" className='hover:text-safron-yellow duration-200'>
                    <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM484 186.4C513.5 222.4 531.4 268.4 531.8 318.4C524.8 316.9 454.8 302.7 384.3 311.6C378.5 297.6 373.1 285.2 365.7 270C444 238 479.5 192.5 484 186.5zM460.4 161.9C456.6 167.3 424.7 210.2 349.4 238.4C314.7 174.6 276.2 122.2 270.4 114.4C337.6 98.2 408.4 115.7 460.5 161.9zM229.9 128.6C235.5 136.3 273.3 188.7 308.4 251.1C209.3 277.4 122 277 112.6 276.9C126.3 211.2 170.6 156.5 229.9 128.6zM108.2 320.3C108.2 318.1 108.2 316 108.3 313.8C117.6 314 220.2 315.3 326 283.7C332.1 295.6 337.9 307.6 343.2 319.6C266.6 341.2 197 403.1 162.7 461.9C128.9 424.3 108.2 374.7 108.2 320.3zM190 487.4C212.1 442.2 272.2 383.8 357.6 354.6C387.3 431.9 399.6 496.7 402.8 515.2C334.7 544.2 252.8 536.3 190 487.3zM438.4 495.9C436.2 483 425 421 397.2 344.9C463.6 334.3 521.9 351.7 529.1 354C519.7 412.9 485.8 463.8 438.3 496z"/></svg>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer