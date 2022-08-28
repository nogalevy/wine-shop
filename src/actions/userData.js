export const saveAll = (obj) => {
    return {
        type: 'save',
        payload: obj
    }
};

export const deleteAll = () => {
    return {
        type: 'delete',
    }
}