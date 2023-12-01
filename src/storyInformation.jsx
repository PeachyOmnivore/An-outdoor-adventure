const theStory = {
    selection: {},
    pages: [
        {
            id: 999,
            class: "regularPage",
            requiredSelections: [],
            page: "This part of the story is not complete yet.",
            question: "Go back?",
            selectionKey: "",
            options: [
                {
                    title: "No",
                    goTo: -1,
                },
                {
                    title: "No!",
                    goTo: -1,
                },
            ]
        },
        {
            id: 1,
            class: "regularPage",
            requiredSelections: ["name"],
            page: "Good morning {name}, you awake in your bed in a small sleepy town called Revermere. This small town sits in a lovely wooded glen right next to the ocean and tall peaks over 1000 meters. A perfect location for any avid outdoor enthusiast. You get out of bed, get dressed and make your way to your kitchen to grab a beverage. ",
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
            class: "regularPage",
            requiredSelections: ["drink"],
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
                    goTo: 15,
                },
            ]
        },
        {
            id: 3,
            class: "regularPage",
            requiredSelections: [],
            page: "You decide that because of todays weather and also how early you've gotten up, that a trip into the mountains seems like the best course of action. No day in the mountains is a good idea alone. You remember you have some friends that might love a day in the mountains.",
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
            class: "regularPage",
            requiredSelections: ["name", "friend"],
            page: "You give your friend {friend} a call and to see what they are up to and they answer. 'Hey {name}! How are you doing? Beautiful day no?' You reply with a simple yet kind answer.",
            question: "What do you say?",
            selectionKey: "mountainActivity",
            options: [
                {
                    title: "Great day for a hike! What do you say?",
                    goTo: 5,
                },
                {
                    title: "Two wheels and some dirt paths?",
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
            class: "regularPage",
            requiredSelections: ["friend"],
            page: "{friend} responds with a simple 'The day is looking great. Lets do it. Lets go for a hike! Where are you feeling?'",
            question: "Where would you like to hike?",
            selectionKey: "hikeLocation",
            options: [
                {
                    title: "A Forest",
                    goTo: 6,
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
            class: "regularPage",
            requiredSelections: ["friend"],
            page: "'Nice one' {friend} says. You tell {friend} to get packing with all the essentials and to be ready for a pick up in 20 minutes. You grab essentials like a map, compass, rucksack, extra layers and prepare to leave. Before you leave you grab your favourite adventure snack.",
            question: "Whats your favourite snack?",
            selectionKey: "snack",
            options: [
                {
                    title: "Trail mix",
                    goTo: 7,
                },
                {
                    title: "Dried Fruit",
                    goTo: 7,
                },
                {
                    title: "Werthers Originals",
                    goTo: 7,
                },
                {
                    title: "Chocolates",
                    goTo: 7,
                },
            ]
        },
        {
            id: 7,
            class: "regularPage",
            requiredSelections: ["snack", "friend"],
            page: "After grabbing your [snack], you grab the rest of your things and you head out to pick up {friend}. The weather is still looking good and you enjoy the drive over to {friend}'s",
            question: "",
            selectionKey: "",
            options: [
                {
                    title: "Continue",
                    goTo: 8,
                },
            ]
        },
        {
            id: 8,
            class: "regularPage",
            requiredSelections: ["friend", "hikeLocation"],
            page: "You've arrived at {friend}'s and honk your cars horn. You yell out the window 'The days not getting any longer!' {friend} comes out from thier front door all packed and ready to go. They hop in the passenger seat and you make your way to the mountains with [hikeLocation] in mind.",
            question: "You say to your friend:",
            selectionKey: "friendSaying",
            options: [
                {
                    title: "You look really pumped up for this!",
                    goTo: 10,
                },
                {
                    title: "Im going to beat you to the end of the trail.",
                    goTo: 9,
                },
                {
                    title: "You better not slow me down today.",
                    goTo: 9,
                },
                {
                    title: "I think we are going to have a splendid day!",
                    goTo: 10,
                },
            ]
        },
        {
            id: 9,
            class: "regularPage",
            requiredSelections: ["friend", "hikeLocation", "name"],
            page: "{friend} looks at you with a bit of a puzzled face and replies 'Yah right {name}, you know Im the champ in this car!' You then proceed to drive down the road towards you destination. You and {friend} drive for about fourty minutes before arriving at [hikeLocation].",
            question: "",
            selectionKey: "rivalResponse",
            options: [
                {
                    title: "Continue",
                    goTo: 11,
                },
            ]
        },
        {
            id: 10,
            class: "regularPage",
            requiredSelections: ["friend", "hikeLocation"],
            page: "{friend} replies 'I think today is going to amazing!' You then proceed to drive down the road towards your destination. You and {friend} drive for about fourty minutes before arriving at [hikeLocation].",
            question: "",
            selectionKey: "niceResponse",
            options: [
                {
                    title: "Continue",
                    goTo: 11,
                },
                
            ]
        },
        {
            id: 11,
            class: "regularPage",
            requiredSelections: ["friend"],
            page: "'Ah what a nice smell. The forest always brings me joy' says {friend}. 'Lets look at a map' You ask. Given for the amount of time you have, you should be able to fit in a moderate hike",
            question: "Point towards:",
            selectionKey: "hikeLength",
            options: [
                {
                    title: "A medium path (2hrs)",
                    goTo: 12,
                },
                {
                    title: "A long path (6hrs)",
                    goTo: 13,
                },
                {
                    title: "A short path (30mins)",
                    goTo: 12,
                },
                {
                    title: "A unmarked area (Unknown)",
                    goTo: 14,
                },
            ]
        },
        {
            id: 12,
            class: "regularPage",
            requiredSelections: [],
            page: "You decide on a brisk loop you noticed on the map. It will take you past a small lake and hopefully you will spot some wildlife. You think maybe we should double check the weather before leaving the parking lot.",
            question: "Do you?",
            selectionKey: "weatherCheck",
            options: [
                {
                    title: "No. The weather seems good now.",
                    goTo: 13,
                },
                {
                    title: "Yes. Better be safe.",
                    goTo: 999,
                },
            ]
        },
        {
            id: 13,
            class: "regularPage",
            requiredSelections: ["friend"],
            page: "After looking at the map and grabbing your gear you and {friend} head out on your walk. The wind whistles in the trees and you hear cracking branches in the distance. Almost like there are little forest creatures playing around. The air smells fresh and with a scent of pine. The trail is well marked and fairly smooth and flat. You think to yourself this will be a nice walk.",
            question: "",
            selectionKey: "walkStart",
            options: [
                {
                    title: "Continue",
                    goTo: 14,
                },
            ]
        },
        {
            id: 14,
            class: "regularPage",
            requiredSelections: ["friend"],
            page: "As yourself and {friend} continue you notice some wild deer prancing in the woods. They seem to be moving fast and {friend} says 'Wow, look at them go! They are heading in the opposite direction from you. You head deeper and deeper into this trail and eventually find yourself at the lake that was waymarked on the map. You and {friend} take a break and have a seat on some rocks next to the lake",
            question: "Do you?",
            selectionKey: "lakeBreak",
            options: [
                {
                    title: "Have your snack",
                    goTo: 999,
                },
                {
                    title: "Dont have your snack",
                    goTo: 999,
                },
            ]
        },
        {
            id: 15,
            class: "regularPage",
            requiredSelections: [],
            page: "You decide, as much as the weather looks great, that today you really want to catch up on things and take a load off. 'Heck' you say. 'I'm going to have an indoor day!'",
            question: "What do you do first?",
            selectionKey: "indoorDoFirst",
            options: [
                {
                    title: "Sit on the couch",
                    goTo: 16,
                },
                {
                    title: "Go wash dishes",
                    goTo: 999,
                },
                {
                    title: "Hop on your computer",
                    goTo: 999,
                },
                {
                    title: "Do some exercising",
                    goTo: 999,
                },
            ]
        },
        {
            id: 16,
            class: "regularPage",
            requiredSelections: ["drink"],
            page: "You take your cup with what remaining [drink] is left and sit on the couch. You grab your television remote and turn on the TV. 'hmm' you ponder.  ",
            question: "What should you watch?",
            selectionKey: "TVShow",
            options: [
                {
                    title: "A Reality Show",
                    goTo: 17,
                },
                {
                    title: "A Loch Ness Monster Documentary",
                    goTo: 17,
                },
                {
                    title: "A Football Game",
                    goTo: 17,
                },
                {
                    title: "A Cartoon",
                    goTo: 17,
                },
            ]
        },
        {
            id: 17,
            class: "regularPage",
            requiredSelections: ["TVShow", "drink"],
            page: "You turn the channel to [TVShow] and get comfortable. Sipping on your [drink]",
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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
            id: 0,
            class: "regularPage",
            requiredSelections: [],
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



export { theStory }
