export const findPeopleCardsListItemPlayer = (wrapper) => {
    return wrapper.find(`[data-test-id~="people-cards-list-item-player"]`).hostNodes()
}

export const findPeopleCardsListItemHeight = (wrapper) => {
    return wrapper.find(`[data-test-id~="people-cards-list-item-height"]`).hostNodes()
}

export const findPeopleCardsListItemName = (wrapper) => {
    return wrapper.find(`[data-test-id~="people-cards-list-item-name"]`).hostNodes()
}

export const findPeopleCardsListItemYearOfBirth = (wrapper) => {
    return wrapper.find(`[data-test-id~="people-cards-list-item-year-of-birth"]`).hostNodes()
}

export const findPeopleCardsListItemMass = (wrapper) => {
    return wrapper.find(`[data-test-id~="people-cards-list-item-mass"]`).hostNodes()
}

export const findStarshipsCardsListItemPlayer = (wrapper) => {
    return wrapper.find(`[data-test-id~="starships-cards-list-item-player"]`).hostNodes()
}

export const findStarshipsCardsListItemHyperdriveRating = (wrapper) => {
    return wrapper.find(`[data-test-id~="starships-cards-list-item-hyperdrive-rating"]`).hostNodes()
}

export const findStarshipsCardsListItemName = (wrapper) => {
    return wrapper.find(`[data-test-id~="starships-cards-list-item-name"]`).hostNodes()
}

export const findStarshipsCardsListItemLength = (wrapper) => {
    return wrapper.find(`[data-test-id~="starships-cards-list-item-length"]`).hostNodes()
}

export const findStarshipsCardsListItemCost = (wrapper) => {
    return wrapper.find(`[data-test-id~="starships-cards-list-item-cost"]`).hostNodes()
}
