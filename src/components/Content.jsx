import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from '../contexts/themeContext';

export default function content(){

    return(
            <div>
                <h1> This is a content </h1>
                <Counter>
                    {(counter,incrementCount) => (
                        <ThemeContext.Consumer>
                            {({theme,switchTheme}) => (
                                    <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                            )}
                        </ThemeContext.Consumer>
                    )}
                </Counter>            
            </div>
    );

}