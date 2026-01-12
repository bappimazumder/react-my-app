import React from 'react';

function Title(){

    console.log('redering title...');
    return <h2> useCallback Hook Tutorial </h2>;
}

export default React.memo(Title);