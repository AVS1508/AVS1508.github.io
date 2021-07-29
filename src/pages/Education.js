import React from "react";
import { Container, Row } from "react-bootstrap";

import EducationCard from "../components/EducationCard";
import CourseworkButton from "../components/CourseworkButton";
import TitleBar from "../components/TitleBar";

import UMassLogo from "../assets/webp/umass-logo.webp";
import UMassFallbackLogo from "../assets/jpg/umass-logo.jpg";
import DPSRKPLogo from "../assets/webp/dpsrkp-logo.webp";
import DPSRKPFallbackLogo from "../assets/jpg/dpsrkp-logo.jpg";

class Education extends React.Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="inner-structure center" style={{ flexDirection: "column" }}>
                    <TitleBar title="Education" />
                    <Container fluid style={{ textAlign: "center" }}>
                        <Row style={{ display: "inline-flex" }}>
                            <EducationCard
                                image={UMassLogo}
                                fallback_image={UMassFallbackLogo}
                                title="University of Massachusetts"
                                address="Amherst, MA, USA"
                                degree="Bachelor in Science (Honors)"
                                major="Computer Science and Mathematics"
                                class="Class of 2023"
                                duration="August 2019 - December 2022"
                                grade="4.00 GPA"
                                details={
                                    <React.Fragment>
                                        • Major: Computer Science & Mathematics (Statistics & Data Science)
                                        <br />
                                        • Dean's List (all semesters)
                                        <br />
                                        • Member, Commonwealth Honors College (Jun 2020 - Present)
                                        <br />
                                        • Software Developer, BUILD UMass (Sep 2020 - Present)
                                        <br />
                                        • Member, UMass ACM (Sep 2019 - Present) <br />
                                        • Designer, HackUMass Organizing Team (Mar 2020 - Present)
                                    </React.Fragment>
                                }
                            />
                            <EducationCard
                                image={DPSRKPLogo}
                                fallback_image={DPSRKPFallbackLogo}
                                title="Delhi Public School"
                                address="R. K. Puram, New Delhi, India"
                                degree="High School Diploma"
                                major="Science with Computer Science"
                                class="Class of 2019"
                                duration="July 2012 - May 2019"
                                grade={
                                    <React.Fragment>
                                        96.0% (Grade 12) <br /> 10.0 CGPA (Grade 10)
                                    </React.Fragment>
                                }
                                details={
                                    <React.Fragment>
                                        • President, Student Council (Apr 2018 - Apr 2019)
                                        <br />
                                        • Lead Designer, TEDxYouth@DPSRKPuram (Nov 2018 - Apr 2019)
                                        <br />
                                        • Designer, TEDxYouth@DPSRKPuram (May 2018 - Nov 2018)
                                        <br />
                                        • Honorary Advisor, Aerospace Society (May 2018 - Apr 2019)
                                        <br />• Structural Engineer, Aerospace Society (May 2016 - Apr 2018)
                                    </React.Fragment>
                                }
                            />
                        </Row>
                    </Container>
                    <TitleBar title="Computer Science Coursework" />
                    <Container fluid style={{ maxWidth: "95vw", textAlign: "center" }}>
                        <Row style={{ alignItems: "center", display: "inline-flex", justifyContent: "center" }}>
                            <CourseworkButton
                                title="Search Engines"
                                shortcode="COMPSCI 446"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Software Engineering"
                                shortcode="COMPSCI 320"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Data Management Practices"
                                shortcode="COMPSCI 345"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Algorithms"
                                shortcode="COMPSCI 311"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Artificial Intelligence"
                                shortcode="COMPSCI 383"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Computer Systems Principles"
                                shortcode="COMPSCI 230"
                                term="Fall 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Reasoning Under Uncertainty"
                                shortcode="COMPSCI 240"
                                term="Fall 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Computation"
                                shortcode="COMPSCI 250"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Programming Methodology"
                                shortcode="COMPSCI 220"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Data Analysis in R"
                                shortcode="CICS 197R"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Programming with Data Structures"
                                shortcode="COMPSCI 187"
                                term="Fall 2019"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-19-course-descriptions"
                            />
                            {/* <CourseworkButton
                title="Physics II"
                shortcode="AP Physics C: Electricity & Magnetism"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Physics I"
                shortcode="AP Physics C: Mechanics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Introductory Computer Science"
                shortcode="AP Computer Science A"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Introduction to Statistics"
                shortcode="AP Statistics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Calculus I & II"
                shortcode="AP Calculus BC"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              /> */}
                        </Row>
                    </Container>
                    <TitleBar title="Mathematics & Statistics Coursework" />
                    <Container fluid style={{ maxWidth: "95vw", textAlign: "center" }}>
                        <Row style={{ alignItems: "center", display: "inline-flex", justifyContent: "center" }}>
                            <CourseworkButton
                                title="Statistics II"
                                shortcode="STATISTC 516"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Statistics I"
                                shortcode="STATISTC 515"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Advanced Multivariate Calculus"
                                shortcode="MATH 425"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Ordinary Differential Equations"
                                shortcode="MATH 331"
                                term="Fall 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Linear Algebra"
                                shortcode="MATH 235"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Multivariate Calculus"
                                shortcode="MATH 233"
                                term="Fall 2019"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-19-course-descriptions"
                            />
                        </Row>
                    </Container>
                    {/* <Container fluid style={{ textAlign: "center" }}>
            <h1>Coursework</h1>
            <Row style={{ display: "inline-flex" }}>
              <CourseworkCard
                title="Introduction to Algorithms"
                shortcode="COMPSCI 311"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to algorithms for graph and network problems, scheduling, searching, sorting, greedy
                    paradigm, divide-and-conquer, dynamic programming, and network flows, combined with study of
                    efficiency, NP-completeness, intractability, approximations and randomized algorithms.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Artificial Intelligence"
                shortcode="COMPSCI 383"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of core concepts and algorithms in AI, involving search, knowledge representation, machine
                    learning, and formal logic, with topics like Graph, Local and Adversarial Search, CSPs, MDPs,
                    Reinforcement Learning, Unsupervised Learning, Naive Bayes, Perceptrons, and Artificial Neural
                    Networks.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Statistics I"
                shortcode="STAT 515"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to calculus-based probability, involving basic axioms of probability, counting,
                    conditional probability, independence, random variables, discrete and continuous distributions,
                    expectation, variance, covariance and correlation, central limit theorem, and Poisson approximation.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Advanced Multivariate Calculus"
                shortcode="MATH 425"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of advanced differential and integral calculus in many variables, including directional and
                    partial derivatives, gradient, extrema, Lagrange-multipliers, Hessian, vector fields, divergence,
                    curl and exterior derivatives, line and surface-integrals, and the fundamental theorems of calculus.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Computer Systems Principles"
                shortcode="COMPSCI 230"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of principles behind high-performance scalable systems, using C language, such as features of
                    modern architectures, assembly languages, and operating system services such as I/O and
                    synchronization.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Reasoning Under Uncertainty"
                shortcode="COMPSCI 240"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of mathematical uncertainties, using laws of counting and probability, statistical bounds,
                    random variables, Central Limit Theorem, Game Theory, Markov Chains, and Bayesian Networks.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Ordinary Differential Equations"
                shortcode="MATH 331"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to ordinary differential equations, with 1st and 2nd order linear differential
                    equations, systems of linear differential equations, Laplace transforms, numerical methods, and
                    applications.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Introduction to Computation"
                shortcode="COMPSCI 250"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of discrete mathematics involving logic, elementary number theory, mathematical induction,
                    tree recursion, search algorithms, regular expressions, finite state machines, and computability.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Programming Methodology"
                shortcode="COMPSCI 220"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of modern programming methodologies emphasizing on good software engineering skills, including
                    programming abstractions, testing, debugging, and design patterns.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Introduction to Linear Algebra"
                shortcode="MATH 235"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introductory linear algebra with matrices, determinants, systems of linear equations, vector spaces,
                    linear transformations, and eigenvalues.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Introduction to Data Analysis in R"
                shortcode="CICS 197R"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of data analysis involving data wrangling, summary statistics, modeling, and visualization
                    using R with Tidyverse packages.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Programming with Data Structures"
                shortcode="COMPSCI 187"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to building and encapsulating data objects and their associated operations through
                    linked structures, recursive structures, trees, heaps, graphs, hash tables, and search-sort
                    algorithms.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Multivariate Calculus"
                shortcode="MATH 233"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Extension of single-variable calculus to functions of several variables, covering vectors in two-
                    and three-dimensional space, partial derivatives, double and triple integrals, line integrals,
                    surface integrals, Green’s theorem, Stokes’s theorem, and Divergence theorem.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Physics II"
                shortcode="AP Physics C: Electricity & Magnetism"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Physics I"
                shortcode="AP Physics C: Mechanics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Introductory Computer Science"
                shortcode="AP Computer Science A"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Introduction to Statistics"
                shortcode="AP Statistics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Calculus I & II"
                shortcode="AP Calculus BC"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
            </Row>
          </Container> */}
                </div>
            </div>
        );
    }
}

export default Education;
