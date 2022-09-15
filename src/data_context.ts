import React from "react";

export type eventType= {
    eventId: string,
    eventDate: number,
    eventDescription: string,
}
export type periodsInfoType={
        periodId:string,
        startPeriod: number|string,
        endPeriod: number|string,
        category: string,
        events: eventType[]
    }



export const data:periodsInfoType[] =[
     {  periodId:'id1',
        startPeriod: 1996,
        endPeriod: 2000,
        category: 'sport',
        events:[
            {   eventId: '1ez4',
                eventDate: 1996,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {   eventId: '1ez5',
                eventDate: 1998,
                eventDescription: '1Анта'
            },
            {   eventId: '1ez6',
                eventDate: 2000,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {   eventId: '1ez7',
                eventDate: 1996,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
        ]
    },
     {    periodId:'id2',
        startPeriod: 2001,
        endPeriod: 2006,
        category: 'cinema',
        events:[
            {   eventId: '2z4',
                eventDate: 2001,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {   eventId: '2z5',
                eventDate: 2005,
                eventDescription: '1Анта'
            },
            {   eventId: '2z6',
                eventDate: 2004,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {   eventId: '2z7',
                eventDate: 2002,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {   eventId: '2rz4',
                eventDate: 2001,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {   eventId: '2rz5',
                eventDate: 2005,
                eventDescription: '1Анта'
            },
        ]
    },
     {  periodId:'id3',
        startPeriod: 2006,
        endPeriod: 2010,
        category: 'sport',
        events:[
            {   eventId: '1er4',
                eventDate: 2010,
                eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {   eventId: '1er5',
                eventDate: 2006,
                eventDescription: '1Анта'
            }
        ]
    }
]

export  const DataContex = React.createContext<periodsInfoType[]>(data)