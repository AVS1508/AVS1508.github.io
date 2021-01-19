import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import EducationCard from "../components/EducationCard";
import CourseworkCard from "../components/CourseworkCard";
import TitleBar from "../components/TitleBar";

import UMassLogo from "../assets/umass-logo.jpg";
import DPSRKPLogo from "../assets/dpsrkp-logo.jpg";

class Education extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <TitleBar title="Education & Coursework" />
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <EducationCard
                image={UMassLogo}
                title="University of Massachusetts"
                address="Amherst, MA, USA"
                degree="Bachelor in Science (Honors)"
                major="Computer Science and Mathematics"
                class="Class of 2023"
                duration="August 2019 - May 2023"
                grade="4.00 GPA"
                details={
                  <>
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
                  </>
                }
              />
              <EducationCard
                image={DPSRKPLogo}
                title="Delhi Public School"
                address="R. K. Puram, New Delhi, India"
                degree="High School Diploma"
                major="Science with Computer Science"
                class="Class of 2019"
                duration="July 2012 - May 2019"
                grade={
                  <>
                    96.0% (Grade 12) <br /> 10.0 CGPA (Grade 10)
                  </>
                }
                details={
                  <>
                    • President, Student Council (Apr 2018 - Apr 2019)
                    <br />
                    • Lead Designer, TEDxYouth@DPSRKPuram (Nov 2018 - Apr 2019)
                    <br />
                    • Designer, TEDxYouth@DPSRKPuram (May 2018 - Nov 2018)
                    <br />
                    • Honorary Advisor, Aerospace Society (May 2018 - Apr 2019)
                    <br />• Structural Engineer, Aerospace Society (May 2016 - Apr 2018)
                  </>
                }
              />
            </Row>
          </Container>
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <CourseworkCard
                title="Introduction to Algorithms"
                shortcode="COMPSCI 311"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Artificial Intelligence"
                shortcode="COMPSCI 383"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Statistics I"
                shortcode="STAT 515"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Advanced Multivariate Calculus"
                shortcode="MATH 425"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Computer Systems Principles"
                shortcode="COMPSCI 230"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Study of principles behind high-performance scalable systems, using C language, such as features of
                    modern architectures, assembly languages, and operating system services such as I/O and
                    synchronization.
                  </>
                }
              />
              <CourseworkCard
                title="Reasoning Under Uncertainty"
                shortcode="COMPSCI 240"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Study of mathematical uncertainties, using laws of counting and probability, statistical bounds,
                    random variables, Central Limit Theorem, Game Theory, Markov Chains, and Bayesian Networks.
                  </>
                }
              />
              <CourseworkCard
                title="Ordinary Differential Equations"
                shortcode="MATH 331"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Introduction to ordinary differential equations, with 1st and 2nd order linear differential
                    equations, systems of linear differential equations, Laplace transforms, numerical methods, and
                    applications.
                  </>
                }
              />
              <CourseworkCard
                title="Introduction to Computation"
                shortcode="COMPSCI 250"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Study of discrete mathematics involving logic, elementary number theory, mathematical induction,
                    tree recursion, search algorithms, regular expressions, finite state machines, and computability.
                  </>
                }
              />
              <CourseworkCard
                title="Programming Methodology"
                shortcode="COMPSCI 220"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Study of modern programming methodologies emphasizing on good software engineering skills, including
                    programming abstractions, testing, debugging, and design patterns.
                  </>
                }
              />
              <CourseworkCard
                title="Introduction to Linear Algebra"
                shortcode="MATH 235"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Introductory linear algebra with matrices, determinants, systems of linear equations, vector spaces,
                    linear transformations, and eigenvalues.
                  </>
                }
              />
              <CourseworkCard
                title="Introduction to Data Analysis in R"
                shortcode="CICS 197R"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Study of data analysis involving data wrangling, summary statistics, modeling, and visualization
                    using R with Tidyverse packages.
                  </>
                }
              />
              <CourseworkCard
                title="Programming with Data Structures"
                shortcode="COMPSCI 187"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Introduction to building and encapsulating data objects and their associated operations through
                    linked structures, recursive structures, trees, heaps, graphs, hash tables, and search-sort
                    algorithms.
                  </>
                }
              />
              <CourseworkCard
                title="Multivariate Calculus"
                shortcode="MATH 233"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                details={
                  <>
                    Extension of single-variable calculus to functions of several variables, covering vectors in two-
                    and three-dimensional space, partial derivatives, double and triple integrals, line integrals,
                    surface integrals, Green’s theorem, Stokes’s theorem, and Divergence theorem.
                  </>
                }
              />
              <CourseworkCard
                title="Physics II"
                shortcode="AP Physics C: Electricity & Magnetism"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Physics I"
                shortcode="AP Physics C: Mechanics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Introductory Computer Science"
                shortcode="AP Computer Science A"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Introduction to Statistics"
                shortcode="AP Statistics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<>WORK-IN-PROGRESS</>}
              />
              <CourseworkCard
                title="Calculus I & II"
                shortcode="AP Calculus BC"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<>WORK-IN-PROGRESS</>}
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Education;
