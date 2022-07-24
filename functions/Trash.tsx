import { trashArr } from '../screens/delivery/globalDelivery';

export class Trash 
{
    AddTrash(id:any) 
    {
        //Основной метод
        var idBool = false
        var quantity = 0
        
        for (let index = 0; index < trashArr.length; index++) 
        {
            if (trashArr[index][0] == id)
            {
                idBool = true
                quantity = ++trashArr[index][1]
                break
            }
        }
        if (!idBool)
        {
            trashArr.push([id, 1])
            quantity = 1
        }
        //Конец Метода

        console.log(" ")
        console.log("------------------------")
        console.log (trashArr)
        console.log("------------------------")
        console.log(" ")

        return quantity
    }
}
   

