// src/app/data.service.ts 

export class DataService {

    getData()
    {
        return [
            {   id:1, 
                nom:"Article1",
                status : true,
                date : "01/01/2020"
            },
            {   id:2, 
                nom:"Article2",
                status : false,
                date : "01/01/2020"
            },
            {   id:3, 
                nom:"Article3",
                status : true,
                date : "01/10/2020"
            }
        ];
    }

}

