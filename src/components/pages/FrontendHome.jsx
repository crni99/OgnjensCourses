import HomeSection from "../common/HomeSection";
import Lead from "../common/Lead";
import { CoursesPaths } from "../../utils/const";

export default function FrontendHome() {
    return (
        <>
            <Lead
                title="Welcome to Ognjen's Front-end Courses"
                paragraph1="Explore a variety of courses designed to help you master front-end development, focusing on React, UI/UX design, and creating dynamic web applications."
            />

            <HomeSection
                title="React Basics"
                paragraph1="This course will introduce you to the basics of React, a popular JavaScript liary for building user interfaces. Learn how to create components, handle state, and build simple applications."
                paragraph2="Understand key concepts like JSX, props, and state management, and get hands-on experience creating your first React app."
                targetURL={CoursesPaths.REACT_BASICS}
            />

            <HomeSection
                title="React Advanced"
                paragraph1="Take your React skills to the next level by mastering advanced concepts like hooks, context API, and performance optimization. Learn how to build complex, scalable React applications."
                paragraph2="Dive deeper into topics such as state management with Redux, routing with React Router, and integrating React with external APIs."
                targetURL={CoursesPaths.REACT_ADVANCED}
            />
            
        </>
    );
}
