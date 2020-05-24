const updateObject = (oldObject, propertiesToUpdate) => {
    return {
        ...oldObject,
        ...propertiesToUpdate
    }
}


export default updateObject;