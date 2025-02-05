import HomeSection from "../common/HomeSection";
import Lead from "../common/Lead";
import { CoursesPaths } from "../../utils/const";

export default function BackendHome() {
    return (
        <>
            <Lead
                title="Welcome to Ognjen's Back-end Courses"
                paragraph1="Explore a variety of courses designed to help you master back-end development, API creation, and database management, with hands-on projects and expert guidance."
            />

            <HomeSection
                title=".NET API Basics"
                paragraph1="This course will guide you through the basics of .NET API development. Start with the setup and learn how to build robust APIs with the .NET framework."
                paragraph2="Understand the core concepts and best practices for building scalable APIs with .NET, and get hands-on experience creating your first API project."
                targetURL={CoursesPaths.NET_API_BASICS}
            />

            <HomeSection
                title=".NET API Advanced"
                paragraph1="Take your .NET API development skills to the next level with advanced techniques. This course dives deep into concepts like authentication, authorization, and API versioning."
                paragraph2="Learn how to implement security best practices, handle complex data models, and optimize API performance for production environments."
                targetURL={CoursesPaths.NET_API_ADVANCED}
            />
            
        </>
    );
}
