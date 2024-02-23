import React from 'react'
// import Logo from './images/Zomato-Logo.png';
// const zomotologo = "/images/Zomato-Logo.png"

const Footer = () => {
    return (
        <div className='mt-5'>
            <div>
                <div className='container w-75 '>

                    <div>
                        {/* <img src='src/images/Zomato-Logo.png'></img>  */}
                        <div className=' d-flex justify-content-between align-items-center'>

                        
                        <div>
                            <img style={{ width: '8rem' }} src={'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'} />
                        </div>

                        <div className=' d-flex justify-content-between align-items-center'>
                            <button>india</button>
                            <button>language</button>


                        </div>

                    </div>
                    </div>

                    <div className='text mt-5 d-flex justify-content-between align-items-center'>
                        <div> <p>hello</p> <p>hello</p> <p>hello</p> </div>
                        <div> <p>hello</p> <p>hello</p> <p>hello</p> </div>
                        <div> <p>hello</p> <p>hello</p> <p>hello</p> </div>
                        <div> <p>hello</p> <p>hello</p> <p>hello</p> </div>
                        <div> <p>hello</p> <p>hello</p> <p>hello</p> </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
