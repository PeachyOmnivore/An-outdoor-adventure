const textRenderer = (string, selection, requiredSelections) => {

    let updatedString = string

    requiredSelections.forEach(toChange => updatedString = updatedString.replaceAll(`[${toChange}]`, selection[toChange].toLowerCase()))
    requiredSelections.forEach(toChange => updatedString = updatedString.replaceAll(`{${toChange}}`, selection[toChange]))
    requiredSelections.forEach(toChange => updatedString = updatedString.replaceAll(`|${toChange}|`, selection[toChange].toUpperCase()))
    return updatedString
}
export { textRenderer }