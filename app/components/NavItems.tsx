import Link from 'next/link';
import React from 'react'

const navItemsData=[
   
    {
        name:"Home",
        url:"/"
    },
    {
        name:"Courses",
        url:"/courses"
    },
    {
        name:"About",
        url:"/about"
    },
    {
        name:"Policy",
        url:"/policy"
    },
    {
        name:"FAQ",
        url:"faq"
    }
]
type Props = {
    activeItem:number;
    isMobile:boolean;
}

const NavItems:React.FC<Props> = ({activeItem,isMobile}) => {
  return (
   <>
     <div className="hidden 800px:flex">
      {
        navItemsData && navItemsData.map((i,index)=>(
            <Link  href={`${i.url}`} key={index} passHref>
                <span
                 className={`${activeItem===index ?"dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"} text-[18px] px-6 front-Poppins font-[400]`}
                >
                 {i.name}
                </span>
            </Link>
        ))
      }
     </div>
     {
        isMobile && (
            <div className="800px:hidden mt-7">
                <div className='w-full text-center py-5'>
             
                     {/* <Link href={'/'} className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                       <span className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}> Udemy</span> 
                     </Link> */}
                
                    {
                        navItemsData && navItemsData.map((i,index)=>(
                            <Link  href={`${i.url}`} key={index} passHref>
                                <span
                                 className={`${activeItem===index?"dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"} text-[18px] px-6  front-Poppins font-[400] py-5 font-[400] block`}
                                >
                                 {i.name}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
     }
   </>
  )
}

export default NavItems