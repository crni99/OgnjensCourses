import HomeSection from "../../../common/HomeSection";
import Lead from "../../../common/Lead";
import { CoursesNames } from "../../../../utils/const";
import { PageRoutes } from "../../../../utils/consts/ConstDotNet";

export default function ReactBasicHome() {
    return (
        <>
            <Lead
                title="Mastering React Development"
                paragraph1="Your journey to building efficient, secure, and scalable .NET Web APIs
                    starts here."
                paragraph2="In this guide, we'll take you step-by-step through the key concepts and best practices needed to
                    build robust APIs with .NET. From setting up the project environment to securing your endpoints,
                    you'll learn how to create powerful APIs that are easy to maintain and scale."
            />

            <br></br>

            <HomeSection
                title="Getting Started: Setting Up a .NET Project for API Development"
                paragraph1="Begin your journey by setting up the development environment and creating the initial project
                        template. Learn how to use the .NET CLI to start a new Web API project and organize your file
                        structure for easy scalability."
                paragraph2="Set up the .NET environment, create a new Web API project, and
                        run your API locally to test the basic setup."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.GETTING_STARTED_DOTNET_API}`}
            />

        </>
    );
}