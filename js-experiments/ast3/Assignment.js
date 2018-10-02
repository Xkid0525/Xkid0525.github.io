

var people = 
    [
        {
            id: 1,
            name: "Aegon Targaryen",
            children: 
            [
                {
                    id: 2,
                    name: "Jaehaerys Targaryen",
                    children: 
                    [
                        {
                            id: 4,
                            name: "Daenerys Targaryen"
                        }
                        ,
                        {
                            id: 5,
                            name: "Rhaegar Targaryen",
                            children: 
                            [
                                {
                                    id: 6,
                                    name: "Aegon Targaryen"
                                }
                            ]
                        }
                    ] 
                }
                ,
                {
                    id: 3,
                    name: "Rhaelle Targaryen"
                }
            ]
        }mdmcm
    ];



var output = {

  1: {

    id: 1,

    name: "Aegon Targaryen",

    children: [2, 3]

  },

  2: {

    id: 2,

    name: "Jaehaerys Targaryen",

    children: [4, 5]

  },

  3: {

    id: 3,

    name: "Rhaelle Targaryen",

    children: []

  },

  4: {

    id: 4,

    name: "Daenerys Targaryen",

    children: []

  },

  5: {

    id: 5,

    name: "Rhaegar Targaryen",

    children: [6]

  },

  6: {

    id: 6,

    name: "Aegon Targaryen",

    children: []

  }

}