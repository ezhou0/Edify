export const getSearchResults = (search) => {
    return $.ajax({
        url: "/api/searches",
        method: "GET",
        data: { search },
    });
};
