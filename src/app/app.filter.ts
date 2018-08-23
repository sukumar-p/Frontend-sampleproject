import{ Pipe, PipeTransform} from '@angular/core';



@Pipe({
    name:"filter"
})

export class FilterPipe implements PipeTransform{
    newVal : any=[]
filterdata=[];
    transform(value:any, search){
        // console.log(value)
        if(search===undefined){
            return value;
        }
        else{
            this.filterdata=[];
            for(let k of value){
                // console.log(k)
                if(k.city.toLowerCase().indexOf(search)==search.indexOf(search)){
                    // console.log(search)
                    this.filterdata.push(k);

                }
            }
        }return this.filterdata;
        
    }
}