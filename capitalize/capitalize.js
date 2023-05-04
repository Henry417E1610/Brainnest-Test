function capitalize(str){
    const output = str.charAt(0).toUpperCase() + str.slice(1);
    return output;
}

export {capitalize}