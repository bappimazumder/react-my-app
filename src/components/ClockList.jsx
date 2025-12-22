import Clock from "./Clock";

export default function ClockList({quantities = [] }){

    return(
        <>
            <div>
            {quantities.map((key,index) => (
                <Clock key={Math.random()} />
            ))}
            </div>
            <div>
            {quantities.map((key,index) => (
                <Clock key={key} />
            ))}
            </div>
       </>
       
    );

}

// Next 10 