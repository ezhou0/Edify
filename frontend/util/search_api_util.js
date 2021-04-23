export const search = (searchTerm) => {
    return $.ajax({
        url: `/api/searches/${searchTerm}`,
        method: 'GET'
    });
}

export const searchAll = () => {
    return $.ajax({
        url: 'api/searches_all',
        method: 'GET'
    })
}
