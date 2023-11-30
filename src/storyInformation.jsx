
const textRenderer = (string, selection) => {
    let updatedString = string

    updatedString = updatedString.replaceAll("[name]", selection.name)
    updatedString = selection.drink? updatedString.replaceAll("[drink]", selection.drink.toLowerCase()): updatedString = updatedString.replaceAll("[drink]", selection.drink)
    updatedString = selection.place? updatedString.replaceAll("[place]", selection.place.toLowerCase()): updatedString = updatedString.replaceAll("[place]", selection.place)
    
    return updatedString
}


const theStory = {
    selection: {},
    pages: [
        {
            id: 999,
            page: "This part of the story is not complete yet.",
            question: "Go back?",
            selectionKey: "",
            options: [
                {
                    title: "Yes",
                    goTo: "previous",
                },
                {
                    title: "No, start over",
                    goTo: "restart",
                },
            ]
        },
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
                    goTo: 3,
                },
                {
                    title: "The Ocean",
                    goTo: 999,
                },
                {
                    title: "The Town",
                    goTo: 999,
                },
                {
                    title: "Dont go out. Stay in",
                    goTo: 999,
                },
            ]
        },
        {
            id: 3,
            page: "You decide that because of todays weather and also how earlier you've gotten up, that a trip into the mountains seems like the best course of action. No day in the mountains is a good idea alone. You remember you have some friends that might love a day in the mountains.",
            question: "Which friend would you like to ask to join you? ",
            selectionKey: "friend",
            options: [
                {
                    title: "Timothy",
                    goTo: 4,
                },
                {
                    title: "Jane",
                    goTo: 4,
                },
                {
                    title: "Xavier",
                    goTo: 4,
                },
                {
                    title: "Heather",
                    goTo: 4,
                },
            ]
        },
        {
            id: 4,
            page: "You give your friend [friend] a call and to see what they are up to and they answer. 'Hey! [name], how are you doing? Beautiful day no?` You reply with a simple yet kind answer.",
            question: "What do you say?",
            selectionKey: "mountainActivity",
            options: [
                {
                    title: "Great day for a hike! What do you say?",
                    goTo: 5,
                },
                {
                    title: "Im thinking 2 wheels and some dirt paths, eeeeh?",
                    goTo: 999,
                },
                {
                    title: "The rocks are calling our names",
                    goTo: 999,
                },
                {
                    title: "I see some snow in the gullies! You in!?",
                    goTo: 999,
                },
            ]
        },
        {
            id: 5,
            page: "[friend] responds with a simple. 'The day is looking great. Lets do it. Lets go for a hike! What location?'",
            question: "Where would you like to hike?",
            selectionKey: "hikeLocation",
            options: [
                {
                    title: "Lower woodland",
                    goTo: 999,
                },
                {
                    title: "A long Glen",
                    goTo: 999,
                },
                {
                    title: "A Summit",
                    goTo: 999,
                },
                {
                    title: "A River",
                    goTo: 999,
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
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
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
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
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
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
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
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
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
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
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
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
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
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
                {
                    title: "",
                    goTo: 999,
                },
            ]
        },

    ]
};



export { theStory, textRenderer }
