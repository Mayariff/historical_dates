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
        category: 'спорт',
        events:[
            {   eventId: '1ez4',
                eventDate: 1997,
                eventDescription: '1 августа  — В Афинах (Греция) открылся VI Чемпионат мира по лёгкой атлетике.'
            },
            {   eventId: '1ez5',
                eventDate: 1998,
                eventDescription: 'Июнь - На III Конгрессе IBU произошло окончательное отделение от Международного союза по современному пятиборью и биатлону.'
            },
            {   eventId: '1ez6',
                eventDate: 1998,
                eventDescription: 'Август — Международный Олимпийский Комитет признал Международный союз биатлонистов как независимую международную федерацию олимпийского вида спорта.'
            },
            {   eventId: '1ez7',
                eventDate: 1999,
                eventDescription: '20 августа — В Севилье (Испания) открылся VII Чемпионат мира по лёгкой атлетике.'
            },
            {   eventId: '1ez8',
                eventDate: 1999,
                eventDescription: '10 октября — В Сиэтле состоялся первый в истории разрешенный официально поединок на боксерском ринге между мужчиной и женщиной. Бой закончился победой представительницы "слабого" пола.'
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
                eventDescription: 'Стартуют две самые исполинские кинофраншизы нулевых,  — «Властелин колец» и «Гарри Поттер».'
            },
            {   eventId: '2z5',
                eventDate: 2002,
                eventDescription: 'Роман Поланский  получает свой первый режиссерский «Оскар» за драму о Варшавском гетто «Пианист».'
            },
            {   eventId: '2z6',
                eventDate: 2004,
                eventDescription: 'Впервые за десятилетия выходит религиозный блокбастер: скандальный фильм Мела Гибсона «Страсти Христовы».'
            },
            {   eventId: '2rz5',
                eventDate: 2004,
                eventDescription: 'Майкл Мур незадолго до президентских выборов в США он выпускает «Фаренгейт 9/11» про то, как плох президент Буш.'
            },
            {   eventId: '2z7',
                eventDate: 2006,
                eventDescription: 'Выходит страшная и потрясающе красивая сказка «Лабиринт Фавна»'
            },
            {   eventId: '2rz4',
                eventDate: 2006,
                eventDescription: 'Дэниел Крейг- новый агент 007. Происходят самые радикальные перемены в образе шпиона, отныне он более сложный и уязвимый.'
            },

        ]
    },
     {  periodId:'id3',
        startPeriod: 2006,
        endPeriod: 2010,
        category: 'наука',
        events:[
            {   eventId: '1er4',
                eventDate: 2006,
                eventDescription: 'Получение стволовых клеток мыши. Это стало основой для прорывов в терапии рака, регенеративной медицине, а также в клонировании.'
            },
            {   eventId: '1er5',
                eventDate: 2010,
                eventDescription: 'В 2010 году ученые из Института Крейга Вентера создали первую полностью синтетическую хромосому с геномом.'
            }
        ]
    }
]

export  const DataContex = React.createContext<periodsInfoType[]>(data)