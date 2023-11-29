
const textRenderer = (string, selection) => {
    let updatedString = string
    updatedString = updatedString.replaceAll("[name]", selection.name)
    updatedString = updatedString.replaceAll("[drink]", selection.drink)
    return updatedString
}


const theStory = {
    selection: {},
    pages: [
        {
            id: 1,
            page: `Good morning [name], you awake in your bed in a small sleepy town called Kindmere. This small town sits in a lovely wooded glen right next to the ocean and tall over 1000 meter peaks. A perfect location for any avid outdoor enthusiast. You get out of bed, get dressed and make your way to your kitchen to grab a beverage. `,
            question: "You get yourself a cup of:",
            selectionKey: "drink",
            options: [
                {
                    title: "Coffee",
                    goTo: 2,
                },
                {
                    title: "Tea",
                    goTo: 2,
                },
                {
                    title: "Milk",
                    goTo: 2,
                },
                {
                    title: "Orange Juice",
                    goTo: 2,
                },
            ]
        },
        {
            id: 2,
            page: `You enjoy your [drink] and start thinking about the day ahead of you. you woke up early with the plan to go on an adventure. But what will this adventure be?`,
            question: " Where would you like to go?",
            selectionKey: "place",
            options: [
                {
                    title: "The Mountains",
                    goTo: -1,
                },
                {
                    title: "The Ocean",
                    goTo: -1,
                },
                {
                    title: "The Town",
                    goTo: -1,
                },
                {
                    title: "Dont go out. Stay in",
                    goTo: -1,
                },
            ]
        },

    ]
};



export { theStory, textRenderer }
