
const textRenderer = (string, selection) => {
    let updatedString = string
    updatedString = updatedString.replaceAll("[name]", selection.name)
    updatedString = updatedString.replaceAll("[drink]", selection.drink)
    updatedString = updatedString.replaceAll("[place]", selection.place)
    return updatedString
}


const theStory = {
    selection: {},
    pages: [
        {
            id: 1,
            page: "Good morning [name], you awake in your bed in a small sleepy town called Revermere. This small town sits in a lovely wooded glen right next to the ocean and tall, over 1000 meter peaks. A perfect location for any avid outdoor enthusiast. You get out of bed, get dressed and make your way to your kitchen to grab a beverage. ",
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
            page: "You enjoy your [drink] and start thinking about the day ahead of you. You woke up early with the plan to go on an adventure. But what will this adventure be?",
            question: " Where would you like to go and explore?",
            selectionKey: "place",
            options: [
                {
                    title: "The Mountains",
                    goTo: 4,
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
        {
            id: 4,
            page: "You decide that because of todays weather and also how earlier you've gotten up, that a trip into the mountains seems like the best course of action. No day in the mountains is a good idea alone. You remember you have some friends that might love a day in the mountains.",
            question: "Which friend would you like to ask to join you? ",
            selectionKey: "friend",
            options: [
                {
                    title: "Timothy",
                    goTo: -1,
                },
                {
                    title: "Jane",
                    goTo: -1,
                },
                {
                    title: "Xavier",
                    goTo: -1,
                },
                {
                    title: "Heather",
                    goTo: -1,
                },
            ]
        },
        {
            id: 5,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },
        {
            id: 6,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },
        {
            id: 7,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },
        {
            id: 8,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },
        {
            id: 9,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },
        {
            id: 10,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },
        {
            id: 11,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },
        {
            id: 12,
            page: "",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
                {
                    title: "",
                    goTo: -1,
                },
            ]
        },

    ]
};



export { theStory, textRenderer }
