import RoadmapHeader from "./RoadmapHeader";
import RoadmapMain from "./RoadmapMain";
import RoadmapMobileNavbar from "./RoadmapMobileNavbar";

function RoadMapPage({ sharedProps }) {
    return ( 
        <div className="roadmap">
            <RoadmapHeader />

            {
                sharedProps.isSmallerThan700px &&
                
                <RoadmapMobileNavbar />
            }

            <RoadmapMain isMobileScreen={ sharedProps.isMobileScreen } />
        </div>
    );
}

export default RoadMapPage;