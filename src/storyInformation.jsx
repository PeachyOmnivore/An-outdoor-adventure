const theStory = [

    {
        id: 1,
        page: `Good morning , you awake in your bed in a small sleepy town called Kindmere. This small town sits in a lovely wooded glen right next to the ocean and tall over 1000 meter peaks. A perfect location for any avid outdoor enthusiast. You get out of bed, get dressed and make your way to your kitchen to get yourself a cup of: `,
        optionOne: "Coffee",
        optionTwo: "Tea",
        optionThree: "Milk",
        optionFour: "Orange Juice",
    },
    {
        id: 2,
        page: `You enjoy your  and start thinking about the day ahead of you. you woke up early with the plan to go on an adventure. But what will this adventure be? Where would you like to?`,
        options: [
            {
                title: "The Mountains",
                goTo: 1,
            },
            {
                title: "The Ocean",
                goTo: 1,
            },
            {
                title: "The Town",
                goTo: 1,
            },
            {
                title: "Dont go out. Stay in",
                goTo: 1,
            },
        ]
    },

];



export { theStory }
