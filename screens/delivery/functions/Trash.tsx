import { trashArr } from '../globalDelivery';

export class Trash 
{
    AddTrash(id:any) 
    {
        //Основной метод
        var idBool = false
        
        for (let index = 0; index < trashArr.length; index++) 
        {
            if (trashArr[index][0] == id)
            {
                idBool = true
                trashArr[index][1]++
                break
            }
        }
        if (!idBool)
        {
            trashArr.push([id, 1])
        }
        //Конец Метода

        console.log(" ")
        console.log("------------------------")
        console.log (trashArr)
        console.log("------------------------")
        console.log(" ")
    }
}
   

