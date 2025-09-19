import React,{useRef}from 'react'
import './TESTIMONIALS.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function TESTIMONIALS() {
    const slider = useRef ();
    let tx =0;

    const slideforward = () =>{
     if (tx>-50){
        tx-=25;
     }
     slider.current.style.transform = `translateX(${tx}%)`
    }
    const slidebackward = () =>{
     if (tx<0){
        tx+=25;
     }
     slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='TESTIMONIALS'>
            <img src={next_icon} className='next-btn'onClick={slideforward}/>
            <img src={back_icon} className='back-btn' onClick={slidebackward}/>
            <div className ='slider'>
                 <ul ref ={slider}>
                    <li>
                        <div className='slide'>
                            <div className ='user-info'>
                                <img src ={user_1}/>
                                  <div>
                                    <h3>William Jackson</h3>
                                    <span>StudyNest, USA</span>
                                  </div>
                            </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                            the best decisions I've ever made. The supportive community ,state-of-the-art facilities , and commitment 
                            to academic excellence have truly exceeded my 
                            expectations.
                        </p>
                        </div>
                    </li>
                    {/*2*/}
                     <li>
                        <div className='slide'>
                            <div className ='user-info'>
                                <img src ={user_2}/>
                                  <div>
                                    <h3>David Chen</h3>
                                    <span>StudyNest, Canada</span>
                                  </div>
                            </div>
                        <p>StudyNest's focus on practical experience and career services was a game-changer for me.
                        The internship programs and networking events opened doors I never thought possible.
                        A truly transformative and valuable experience!
                        </p>
                        </div>
                    </li>
                    {/*3 */}
                     <li>
                        <div className='slide'>
                            <div className ='user-info'>
                                <img src ={user_3}/>
                                  <div>
                                    <h3>Priya Sharma</h3>
                                    <span>StudyNest, India</span>
                                  </div>
                            </div>
                        <p>The dedicated professors and hands-on curriculum at StudyNest provided me with the skills and confidence
                        I needed to succeed in my career.
                        I'm incredibly grateful for the personalized attention and mentorship I received throughout my studies.
                        </p>
                        </div>
                    </li>
                    {/*4 */}
                  <li>
                        <div className='slide'>
                            <div className ='user-info'>
                                <img src ={user_4}/>
                                  <div>
                                    <h3>Olivia</h3>
                                    <span>StudyNest, UK</span>
                                  </div>
                            </div>
                        <p>The vibrant and diverse campus life at StudyNest made my learning journey unforgettable.
                            I collaborated with students from all over the world, which broadened my perspective and enriched my education immensely. 
                            I highly recommend it
                        </p>
                        </div>
                    </li>
                 </ul>
            </div>   
        </div>
    )
}
export default TESTIMONIALS;