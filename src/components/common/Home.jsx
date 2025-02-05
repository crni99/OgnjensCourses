import HomeSection from "../common/HomeSection";
import Lead from "../common/Lead";
import { CourseCategories } from "../../utils/const";

export default function Home() {
    return (
        <>
            <Lead
                title="Welcome to Ognjen's Courses"
                paragraph1="Explore a variety of courses designed to help you master database management, back-end development, front-end design, and deployment."
            />

            <HomeSection
                title="Learn Back-end Development"
                paragraph1="This course will guide you through the basics of .NET API development. Start with the setup and learn how to build robust APIs with the .NET framework."
                paragraph2="Understand the core concepts and best practices for building scalable APIs with .NET, and get hands-on experience creating your first API project."
                targetURL={CourseCategories.BACKEND}
            />

            <HomeSection
                title="Learn Front-end Development"
                paragraph1="Master the fundamentals of React, a powerful JavaScript library for building user interfaces. This course covers everything from components to state management."
                paragraph2="Build dynamic and responsive web applications with React by learning the core concepts such as JSX, hooks, and component structure."
                targetURL={CourseCategories.FRONTEND}
            />

            <HomeSection
                title="Learn Database Management"
                paragraph1="In this course, you'll learn the fundamentals of SQL, the standard language for managing and manipulating databases. Start with basic queries and progressively learn how to manage data effectively."
                paragraph2="Master advanced techniques such as database design, optimization, and complex SQL queries. Gain hands-on experience with real-world projects to build a solid understanding of databases."
                targetURL={CourseCategories.DATABASE}
            />
        </>
    );
}
