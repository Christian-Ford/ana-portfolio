import React from 'react';

import '../../css/fitStudy.css';

import FitStudy from '../../assets/fitStudy.png';
import DesignCycle from '../../assets/designCycle.png';
import RealCycle from '../../assets/realCycle.png';
import Target from '../../assets/target.png';

const FitnessStudy = () => {
    return (
        <div className="fitStudyWrapper">
            <div className="fitCTA">
                <img src={FitStudy} style={{width: "100%"}} />
            </div>

            <div className="sectionOne">
                <div className="overview">
                    <h3> Overview </h3>
                    <p>
                    Fitness instructors have a lot to work on, not just classes but, 
                    working with people, with their goals, not only changing their body 
                    but their minds.
                    </p>
                    <p>
                        Fitness instructors have a lot to work on, not just classes but, 
                        working with people, with their goals, not only changing their 
                        body but their minds. This is hard to do when you have to write 
                        everything on paper or don’t have enough time to work with them 
                        personally, or remind them all about their classes or their goals.
                    </p>
                    <p>
                        Trainers are looking for something that it can be with them 
                        all the time, always up to date with what’s going on with their
                        clients, and removing that layer of awkwardness to go and ask
                        for the payments.
                    </p>

                    
                </div>

                <div className="roles">
                    <h3> My Role </h3>
                    <p> UX Designer </p>

                    <h3> Duration </h3>
                    <p> Five Weeks </p>

                    <h3> Tools </h3>
                    <p> Sketch </p>
                    <p> Whimsical </p>
                    <p> InVision </p>
                    <p> Paper And Pencil </p>
                    


                </div>
            </div>

            <div className="whiteBoxWrapper">
                <div className="whiteBox">
                    <p>
                        Challenge
                        <br />
                        How can we build an engaging app that lets trainers and trainees
                        manage their workouts and payments.
                    </p>

                    <p>
                        Solution
                        <br />
                        An app that will be up to date with what’s 
                        going on with their clients and send reminders to trainees about payments.

                    </p>
                </div>
            </div>

            <div className="designCycle">
                <img src={DesignCycle} />
                <img style={{marginTop: "100px", width: "50%"}} src={RealCycle} />
            </div>

            <div className="firstData">
                <h2> First, Data </h2>
                <h4> <i> Don't assume you know the answer </i> </h4>

                <p style={{width: "80%"}}>
                When I accepted this project <b>I thought I knew </b> what the 
                application would look like at the end, or what the product 
                was and its needs because I’m a fitness instructor, <b> I was wrong </b>.
                How did I gather information? Great question! I did the following

                </p>

                <ul>
                    <li>
                    I analize what types of question and what
                    audience I’ll be interviewing.
                    </li>
                    <li>
                    Interview with coaches, fitness instructor and
                    people who exercise regularly and not regularly.
                    </li>
                    <li>
                    Shadow a couple of colleagues

                    </li>


                </ul>
            </div>

            <div className="trainers">
                <div className="trainerBox">
                    <h2> Trainers </h2>
                    <p>
                    “It’s hard to keep up with all the trainees progress”
                    </p>
                    <p>
                    “If someone hasn’t pay I don’t like to remind them personally.”
                    </p>
                    <p>
                    “I have more than one certification and people don’t know them”

                    </p>
                </div>
                
                <div className="trainerBox">
                <h2> Trainees </h2>
                    <p>
                    “The apps that they have used are not engaging.”
                    </p>
                    <p>
                    “It’s hard for me to finished the programs I start.”
                    </p>
                    <p>
                    “I don’t want to pay for something that I don’t know if it’s going to work.”
                    </p>
                </div>
            </div>

            <div className="targetSection">
                <img src={Target} />

                <div className="targetReady">
                    <h2> We're Ready To Target!</h2>
                    <h3> <i> From a huge amount of data to target ideas. </i> </h3>
                    
                    <p>
                        After analyzing the data gathered from surveys, interviews, 
                        shadowings, I started building the personas and creating the
                        user journey map.
                    </p>
                    <p>
                        By doing the previous I got a more define idea of the 
                        main targets, it also helped me to always keep in mind the 
                        user’s needs and goals. Whenever I got stuck in the user 
                        flow I always went back and re-read it. 
                    </p>
                    <p>
                        In the creationf of the user flow the main differences 
                        between trainer and trainees was their authority.
                    </p>
                </div>
            </div>

            <div className="workshop">
                
            </div>
            
        </div>
    )
}

export default FitnessStudy;
