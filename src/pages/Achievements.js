import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import AchievementsCard from "../components/AchievementsCard";

class Achievements extends React.Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="center inner-structure" style={{ flexDirection: "column" }}>
                    <TitleBar title="Achievements & Awards" />
                    <Container fluid>
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <AchievementsCard
                                title="Dean's List"
                                institution="University of Massachusetts Amherst"
                                date="February 2020 - January 2021"
                                details={
                                    <React.Fragment>
                                        Received 3 Dean's List Honors nominations for outstanding academic performance in all semesters from Fall 2019 to Fall 2020 term, having
                                        attained a minimum of 3.5 GPA for each semester.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Intern of the Month"
                                institution="VirtuBox Infotech Pvt. Ltd."
                                date="August 2020"
                                details={
                                    <React.Fragment>
                                        Deemed the Intern of the Month for exemplary work performance and initiative taken personally in the capacity of a business development
                                        associate, during the month of August.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="AP Scholar with Distinction"
                                institution="The College Board"
                                date="July 2019"
                                details={
                                    <React.Fragment>
                                        Awarded the AP Scholar with Distinction Award for achieving an average score of at least 3.5 on all AP Exams taken, and scores of 3 or
                                        higher on five or more exams.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Chancellor's Award"
                                institution="University of Massachusetts Amherst"
                                date="March 2019"
                                details={
                                    <React.Fragment>
                                        Awarded the Chancellor's Award annual merit scholarship of $14,000, reserved specifically for international students, on admission to the
                                        University of Massachusetts Amherst.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Academic Gold Medal"
                                institution="Delhi Public School, R. K. Puram"
                                date="August 2018"
                                details={
                                    <React.Fragment>
                                        Awarded a Gold Medal for 7 consecutive years of academic excellence from 5th grade to 11th grade, obtaining 80% aggregate or more each year
                                        with 75%+ attendance.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Extracurricular Gold Medal"
                                institution="Delhi Public School, R. K. Puram"
                                date="August 2018"
                                details={
                                    <React.Fragment>
                                        Awarded a Gold Medal for excelling in the field of aerospace, through participation and achievements in Space Settlement Design Competitions
                                        and other aerospace/aviation challenges.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Winner"
                                institution="ISSDC 2018"
                                date="July 2018"
                                details={
                                    <React.Fragment>
                                        Won the 25th Annual International Space Settlement Design Competition (ISSDC), hosted at Kennedy Space Center, as a member of Team Oberth in
                                        Grumbo Aerospace company.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Alternate Finalist"
                                institution="Conrad Challenge 2018"
                                date="February 2018"
                                details={
                                    <React.Fragment>
                                        Received the spot of Alternate Finalist (one of top 7 teams globally) for proposing our product Ares in the Aerospace and Aviation category
                                        of the 2018 edition of the Conrad Spirit of Innovation Challenge.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Runners-Up"
                                institution="ARSSDC 2018"
                                date="January 2018"
                                details={
                                    <React.Fragment>
                                        Came runners-up in the 14th Annual Asian Regional Space Settlement Design Competition (ARSSDC), hosted at Om Shanti Retreat Center, Manesar,
                                        as a member of Team Coriolis in Vereinigten Flugfahrten company.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="First Prize"
                                institution="NASA Ames SSDC 2017"
                                date="May 2017"
                                details={
                                    <React.Fragment>
                                        Won the first prize in the 2017 edition of the NASA Ames Space Settlement Design Contest, as the structural developer and 3D-modeler of
                                        Project Avanoa, in a team of 5 members.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Runners-Up"
                                institution="ARSSDC 2017"
                                date="February 2017"
                                details={
                                    <React.Fragment>
                                        Came runners-up in the 13th Annual Asian Regional Space Settlement Design Competition (ARSSDC), hosted at Om Shanti Retreat Center, Manesar,
                                        as a member of Team Alexiares in Dougeldyne Astrosystems & Flechtel Constructors company.
                                    </React.Fragment>
                                }
                            />
                            <AchievementsCard
                                title="Second Prize"
                                institution="NASA Ames SSDC 2016"
                                date="May 2016"
                                details={
                                    <React.Fragment>
                                        Won the second prize in the 2016 edition of the NASA Ames Space Settlement Design Contest, as the structural design engineer of Project
                                        Novigo, in a team of 5 members.
                                    </React.Fragment>
                                }
                            />
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Achievements;
