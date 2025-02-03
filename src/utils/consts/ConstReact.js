import { CoursesNames } from '../const';
import GettingStartedReact from './../../components/pages/react/basic/GettingStartedReact';
import UnderstandingJSX from './../../components/pages/react/basic/UnderstandingJSX';
import ComponentsAndProps from './../../components/pages/react/basic/ComponentsAndProps';
import StateAndLifecycle from './../../components/pages/react/basic/StateAndLifecycle';
import HandlingEvents from './../../components/pages/react/basic/HandlingEvents';
import ConditionalRendering from './../../components/pages/react/basic/ConditionalRendering';
import ListsAndKeys from './../../components/pages/react/basic/ListsAndKeys';
import FormsAndControlledComponents from './../../components/pages/react/basic/FormsAndControlledComponents';
import LiftingStateUp from './../../components/pages/react/basic/LiftingStateUp';
import ContextApiStateManagement from './../../components/pages/react/basic/ContextApiStateManagement';
import ReactRouterNavigation from './../../components/pages/react/basic/ReactRouterNavigation';
import WorkingWithEffectsUseEffect from './../../components/pages/react/basic/WorkingWithEffectsUseEffect';
import FetchingDataApiCalls from './../../components/pages/react/basic/FetchingDataApiCalls';
import HandlingErrorsBoundaries from './../../components/pages/react/basic/HandlingErrorsBoundaries';
import IntroductionToHooks from './../../components/pages/react/basic/IntroductionToHooks';
import AdvancedHooksUseMemoUseCallback from './../../components/pages/react/basic/AdvancedHooksUseMemoUseCallback';
import TestingReactComponents from './../../components/pages/react/basic/TestingReactComponents';
import ReactBasicHome from './../../components/pages/react/basic/ReactBasicHome';

export const PageNames = {
    REACT_BASICS: 'Introduction to React',
    GETTING_STARTED_REACT: 'Getting Started React',
    UNDERSTANDING_JSX: 'Understanding JSX',
    COMPONENTS_AND_PROPS: 'Components and Props',
    STATE_AND_LIFECYCLE: 'State and Lifecycle',
    HANDLING_EVENTS: 'Handling Events',
    CONDITIONAL_RENDERING: 'Conditional Rendering',
    LISTS_AND_KEYS: 'Lists and Keys',
    FORMS_AND_CONTROLLED_COMPONENTS: 'Forms and Controlled Components',
    LIFTING_STATE_UP: 'Lifting State Up',
    CONTEXT_API_STATE_MANAGEMENT: 'Context API & State Management',
    REACT_ROUTER_NAVIGATION: 'React Router & Navigation',
    WORKING_WITH_EFFECTS_USEEFFECT: 'Working with Effects (useEffect)',
    FETCHING_DATA_API_CALLS: 'Fetching Data & API Calls',
    HANDLING_ERRORS_BOUNDARIES: 'Handling Errors & Error Boundaries',
    INTRODUCTION_TO_HOOKS: 'Introduction to Hooks',
    ADVANCED_HOOKS_USEMEMO_USECALLBACK: 'Advanced Hooks (useMemo & useCallback)',
    TESTING_REACT_COMPONENTS: 'Testing React Components',
};

export const PageRoutes = {
    REACT_BASICS: CoursesNames.REACT_BASICS,
    GETTING_STARTED_REACT: '/getting-started-react',
    UNDERSTANDING_JSX: '/understanding-jsx',
    COMPONENTS_AND_PROPS: '/components-and-props',
    STATE_AND_LIFECYCLE: '/state-and-lifecycle',
    HANDLING_EVENTS: '/handling-events',
    CONDITIONAL_RENDERING: '/conditional-rendering',
    LISTS_AND_KEYS: '/lists-and-keys',
    FORMS_AND_CONTROLLED_COMPONENTS: '/forms-and-controlled-components',
    LIFTING_STATE_UP: '/lifting-state-up',
    CONTEXT_API_STATE_MANAGEMENT: '/context-api-state-management',
    REACT_ROUTER_NAVIGATION: '/react-router-navigation',
    WORKING_WITH_EFFECTS_USEEFFECT: '/working-with-effects-useeffect',
    FETCHING_DATA_API_CALLS: '/fetching-data-api-calls',
    HANDLING_ERRORS_BOUNDARIES: '/handling-errors-boundaries',
    INTRODUCTION_TO_HOOKS: '/introduction-to-hooks',
    ADVANCED_HOOKS_USEMEMO_USECALLBACK: '/advanced-hooks-usememo-usecallback',
    TESTING_REACT_COMPONENTS: '/testing-react-components',
};

export const RoutePath = {
    REACT_BASICS: CoursesNames.REACT_BASICS,
    GETTING_STARTED_REACT: CoursesNames.REACT_BASICS + PageRoutes.GETTING_STARTED_REACT,
    UNDERSTANDING_JSX: CoursesNames.REACT_BASICS + PageRoutes.UNDERSTANDING_JSX,
    COMPONENTS_AND_PROPS: CoursesNames.REACT_BASICS + PageRoutes.COMPONENTS_AND_PROPS,
    STATE_AND_LIFECYCLE: CoursesNames.REACT_BASICS + PageRoutes.STATE_AND_LIFECYCLE,
    HANDLING_EVENTS: CoursesNames.REACT_BASICS + PageRoutes.HANDLING_EVENTS,
    CONDITIONAL_RENDERING: CoursesNames.REACT_BASICS + PageRoutes.CONDITIONAL_RENDERING,
    LISTS_AND_KEYS: CoursesNames.REACT_BASICS + PageRoutes.LISTS_AND_KEYS,
    FORMS_AND_CONTROLLED_COMPONENTS: CoursesNames.REACT_BASICS + PageRoutes.FORMS_AND_CONTROLLED_COMPONENTS,
    LIFTING_STATE_UP: CoursesNames.REACT_BASICS + PageRoutes.LIFTING_STATE_UP,
    CONTEXT_API_STATE_MANAGEMENT: CoursesNames.REACT_BASICS + PageRoutes.CONTEXT_API_STATE_MANAGEMENT,
    REACT_ROUTER_NAVIGATION: CoursesNames.REACT_BASICS + PageRoutes.REACT_ROUTER_NAVIGATION,
    WORKING_WITH_EFFECTS_USEEFFECT: CoursesNames.REACT_BASICS + PageRoutes.WORKING_WITH_EFFECTS_USEEFFECT,
    FETCHING_DATA_API_CALLS: CoursesNames.REACT_BASICS + PageRoutes.FETCHING_DATA_API_CALLS,
    HANDLING_ERRORS_BOUNDARIES: CoursesNames.REACT_BASICS + PageRoutes.HANDLING_ERRORS_BOUNDARIES,
    INTRODUCTION_TO_HOOKS: CoursesNames.REACT_BASICS + PageRoutes.INTRODUCTION_TO_HOOKS,
    ADVANCED_HOOKS_USEMEMO_USECALLBACK: CoursesNames.REACT_BASICS + PageRoutes.ADVANCED_HOOKS_USEMEMO_USECALLBACK,
    TESTING_REACT_COMPONENTS: CoursesNames.REACT_BASICS + PageRoutes.TESTING_REACT_COMPONENTS,
};

export const RouteList = [
    { path: RoutePath.REACT_BASICS, component: <ReactBasicHome /> },
    { path: RoutePath.GETTING_STARTED_REACT, component: <GettingStartedReact /> },
    { path: RoutePath.UNDERSTANDING_JSX, component: <UnderstandingJSX /> },
    { path: RoutePath.COMPONENTS_AND_PROPS, component: <ComponentsAndProps /> },
    { path: RoutePath.STATE_AND_LIFECYCLE, component: <StateAndLifecycle /> },
    { path: RoutePath.HANDLING_EVENTS, component: <HandlingEvents /> },
    { path: RoutePath.CONDITIONAL_RENDERING, component: <ConditionalRendering /> },
    { path: RoutePath.LISTS_AND_KEYS, component: <ListsAndKeys /> },
    { path: RoutePath.FORMS_AND_CONTROLLED_COMPONENTS, component: <FormsAndControlledComponents /> },
    { path: RoutePath.LIFTING_STATE_UP, component: <LiftingStateUp /> },
    { path: RoutePath.CONTEXT_API_STATE_MANAGEMENT, component: <ContextApiStateManagement /> },
    { path: RoutePath.REACT_ROUTER_NAVIGATION, component: <ReactRouterNavigation /> },
    { path: RoutePath.WORKING_WITH_EFFECTS_USEEFFECT, component: <WorkingWithEffectsUseEffect /> },
    { path: RoutePath.FETCHING_DATA_API_CALLS, component: <FetchingDataApiCalls /> },
    { path: RoutePath.HANDLING_ERRORS_BOUNDARIES, component: <HandlingErrorsBoundaries /> },
    { path: RoutePath.INTRODUCTION_TO_HOOKS, component: <IntroductionToHooks /> },
    { path: RoutePath.ADVANCED_HOOKS_USEMEMO_USECALLBACK, component: <AdvancedHooksUseMemoUseCallback /> },
    { path: RoutePath.TESTING_REACT_COMPONENTS, component: <TestingReactComponents /> },
];