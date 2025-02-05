import HomeSection from "../../../common/HomeSection";
import Lead from "../../../common/Lead";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function ReactBasicHome() {
    return (
        <>
            <Lead
                title="Mastering React Development"
                paragraph1="Your journey to building dynamic, interactive web applications with React starts here."
                paragraph2="In this guide, we'll walk you through the core concepts and best practices that will make you proficient in React. From understanding JSX to managing state and handling side effects, you'll get hands-on experience building a scalable React application."
            />

            <></>

            <HomeSection
                title="Getting Started: Setting Up a React Project"
                paragraph1="Start by setting up the development environment and initializing your first React app using Create React App. Learn how to structure your files and get the development server running."
                paragraph2="Set up your React project, understand the folder structure, and run your app locally to see the basics in action."
                targetURL={RoutePath.GETTING_STARTED_REACT}
            />

            <HomeSection
                title="Understanding JSX: The Syntax of React"
                paragraph1="Learn what JSX is, how it differs from HTML, and how to use it to create React components. Explore the basics of writing JSX code and how React transforms it into DOM elements."
                paragraph2="Get familiar with JSX syntax and how it allows you to write HTML-like code inside JavaScript."
                targetURL={RoutePath.UNDERSTANDING_JSX}
            />

            <HomeSection
                title="Components and Props: Building Reusable Components"
                paragraph1="Dive into the world of React components and props. Learn how to create functional components, pass data using props, and manage reusable UI elements."
                paragraph2="Create components, pass dynamic data through props, and build modular React applications."
                targetURL={RoutePath.COMPONENTS_AND_PROPS}
            />

            <HomeSection
                title="State and Lifecycle: Managing Component State"
                paragraph1="Learn how to manage the state of your components and handle lifecycle events. You'll discover how to update UI elements based on user interactions and component life stages."
                paragraph2="Understand state management and component lifecycle, including how React re-renders components when state changes."
                targetURL={RoutePath.STATE_AND_LIFECYCLE}
            />

            <HomeSection
                title="Handling Events: Making Your App Interactive"
                paragraph1="Master event handling in React. Learn how to capture user interactions, trigger state changes, and keep your app interactive using React's event system."
                paragraph2="Implement event handlers, manage user inputs, and update state based on user interactions."
                targetURL={RoutePath.HANDLING_EVENTS}
            />

            <HomeSection
                title="Conditional Rendering: Displaying Elements Based on State"
                paragraph1="Learn how to render components conditionally in React based on state or props. Create dynamic views that change depending on the conditions you define."
                paragraph2="Write conditional logic for displaying components, UI elements, or content based on application state."
                targetURL={RoutePath.CONDITIONAL_RENDERING}
            />

            <HomeSection
                title="Lists and Keys: Working with Lists of Data"
                paragraph1="Handle dynamic data in your React app by rendering lists of items. Understand how to efficiently update the DOM with keys and avoid unnecessary re-renders."
                paragraph2="Work with arrays of data, use the `map()` method to display lists, and apply keys for efficient rendering."
                targetURL={RoutePath.LISTS_AND_KEYS}
            />

            <HomeSection
                title="Forms and Controlled Components: Managing User Input"
                paragraph1="Learn how to handle forms in React with controlled components. Manage user input, form submission, and validation in a smooth and efficient manner."
                paragraph2="Create forms, bind inputs to state, and handle form submission in a controlled way."
                targetURL={RoutePath.FORMS_AND_CONTROLLED_COMPONENTS}
            />

            <HomeSection
                title="Lifting State Up: Sharing State Between Components"
                paragraph1="Learn how to lift state up to a common ancestor component in order to share data between sibling components."
                paragraph2="Understand the concept of 'lifting state up' and how to pass data and events between components."
                targetURL={RoutePath.LIFTING_STATE_UP}
            />

            <HomeSection
                title="Introduction to Hooks: Managing State and Effects in Functional Components"
                paragraph1="Get started with React hooks and learn how to manage component state and side effects using `useState` and `useEffect`."
                paragraph2="Dive into the world of functional components and the hooks that make them powerful."
                targetURL={RoutePath.INTRODUCTION_TO_HOOKS}
            />

            <HomeSection
                title="Working with Effects (useEffect): Handling Side Effects"
                paragraph1="Understand how to manage side effects in React using the `useEffect` hook. This is essential for handling things like API calls, subscriptions, and other asynchronous tasks."
                paragraph2="Write effectful code using `useEffect` to interact with external APIs or handle component lifecycle events."
                targetURL={RoutePath.WORKING_WITH_EFFECTS_USEEFFECT}
            />

            <HomeSection
                title="Advanced Hooks (useMemo & useCallback): Optimizing Performance"
                paragraph1="Learn how to use `useMemo` and `useCallback` to optimize performance and prevent unnecessary re-renders in React."
                paragraph2="Explore advanced hook usage to keep your app fast and efficient by memoizing values and callbacks."
                targetURL={RoutePath.ADVANCED_HOOKS_USEMEMO_USECALLBACK}
            />

            <HomeSection
                title="Context API & State Management: Global State in React"
                paragraph1="Explore the React Context API for managing global state. Learn how to avoid prop drilling and create shared state across the component tree."
                paragraph2="Implement the Context API to manage global data like user authentication status or theme preferences."
                targetURL={RoutePath.CONTEXT_API_STATE_MANAGEMENT}
            />

            <HomeSection
                title="React Router & Navigation: Adding Routing to Your App"
                paragraph1="Learn how to add React Router to your project, handle dynamic routes, and create a navigable single-page application."
                paragraph2="Implement client-side routing, nested routes, and navigate between pages in your React app."
                targetURL={RoutePath.REACT_ROUTER_NAVIGATION}
            />

            <HomeSection
                title="Fetching Data & API Calls: Working with External Data"
                paragraph1="Learn how to fetch data from an external API and display it in your React components using `useEffect` and `fetch`."
                paragraph2="Integrate APIs and handle asynchronous data fetching inside your React components."
                targetURL={RoutePath.FETCHING_DATA_API_CALLS}
            />

            <HomeSection
                title="Handling Errors & Error Boundaries: Managing Failures Gracefully"
                paragraph1="Learn how to catch JavaScript errors in your components and display fallback UI using Error Boundaries."
                paragraph2="Handle errors in a clean way and ensure that your app remains stable even when things go wrong."
                targetURL={RoutePath.HANDLING_ERRORS_BOUNDARIES}
            />





            <HomeSection
                title="Testing React Components: Ensuring Quality with Unit Tests"
                paragraph1="Learn how to write unit tests for your React components using testing liaries like Jest and React Testing Liary."
                paragraph2="Ensure the reliability of your React components through thorough testing."
                targetURL={RoutePath.TESTING_REACT_COMPONENTS}
            />
        </>
    );
}
