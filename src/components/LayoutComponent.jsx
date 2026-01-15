
import useWindowWidth from "./hooks/useWindowWidth";

export default function LayoutComponent(){

       const onSmallScreen = useWindowWidth(600);
    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
}